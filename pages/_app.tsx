import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import React from "react";
import "../styles/main.css";
const AnimateCursor = dynamic(() => import("../components/Cursor"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimateCursor color="100,116,139" />
      <ThemeProvider defaultTheme="system" attribute="class">
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
