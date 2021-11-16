import { useEffect, useMemo, useState } from "react";

import { discordId, Presence } from "../types/Discord";
import FadeIn from "react-fade-in";
import { EventType, Operation, SocketEvent } from "../types/Event";

const Activity = ({
  setActive,
}: { setActive: (active: boolean) => void } & any) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [doing, setDoing] = useState<Presence>();
  const send = (op: Operation, d?: unknown): void => {
    if (socket !== null) socket.send(JSON.stringify({ op, d }));
  };

  useEffect(() => {
    if (socket === null) return () => {};

    socket.onmessage = function ({ data }: MessageEvent): void {
      const { op, t, d }: SocketEvent = JSON.parse(data);

      if (op === Operation.Hello) {
        setInterval(
          () => send(Operation.Heartbeat),
          (d as { heartbeat_interval: number }).heartbeat_interval
        );
        send(Operation.Initialize, {
          subscribe_to_id: discordId,
        });
      } else if (op === Operation.Event && t) {
        if ([EventType.INIT_STATE, EventType.PRESENCE_UPDATE].includes(t))
          setDoing(d as Presence);
      }
    };

    socket.onclose = () => {
      setSocket(null);
    };
  }, [socket]);
  useEffect(() => {
    if (!socket) setSocket(new WebSocket("wss://api.lanyard.rest/socket"));
  }, [socket]);

  const currentActivity = useMemo(
    () => doing?.activities.filter((activity) => activity.type === 0)[0],
    [doing]
  );

  useEffect(() => {
    setActive(currentActivity);
  }, [currentActivity]);

  if (!doing || !doing?.discord_status) return null;

  const name = currentActivity?.name?.replace("Code", "Visual Studio Code");
  const replaced =
    currentActivity?.state?.replace("📁 ", "")?.split(" | ")?.[0] ||
    "a file".replace(`${[0]}.tsx`, `${[0]}`);
  return (
    <>
      <div className="flex items-center sticky bottom-0 bg-gray-200 dark:bg-gray-900 bg-opacity-20 dark:bg-opacity-20 md:bg-transparent rounded-2xl p-4 w-80">
        <div className="grid items-center justify-center">
          {currentActivity ? (
            <>
              <FadeIn>
                <div className="flex items-center space-x-4 text-gray-700 rounded-md dark:text-gray-300">
                  {currentActivity?.name == "Fortnite" &&
                  currentActivity.assets ? (
                    <>
                      <img
                        src={`https://cdn.discordapp.com/app-assets/${currentActivity?.application_id}/858011444276494356.png`}
                        className="flex-shrink-0 w-16 h-16 rounded-2xl"
                      />
                    </>
                  ) : (
                    <img
                      src={`https://cdn.discordapp.com/app-assets/${currentActivity?.application_id}/${currentActivity?.assets?.large_image}.png`}
                      className="flex-shrink-0 w-16 h-16 rounded-2xl"
                    />
                  )}
                  <div className="text-sm leading-tight truncate">
                    {currentActivity ? (
                      <>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-black text-black dark:text-white">
                              {name}
                            </span>
                          </div>
                          {currentActivity.state ? (
                            <span className="text-black dark:text-white">
                              {replaced}
                            </span>
                          ) : null}
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </FadeIn>
            </>
          ) : (
            <>
              <FadeIn>
                <div className="flex -space-y-0.5 space-x-1">
                  <svg
                    className="animate-spin h-5 w-5 text-gray-900 dark:text-gray-100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span className="font-medium">Loading..</span>
                </div>
              </FadeIn>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Activity;
