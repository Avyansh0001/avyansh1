import {toWords} from 'number-to-words';
import React, {useState} from 'react';
import {Consts} from '../core/consts';
import day from 'dayjs';
import Link from 'next/link';
import {Layout} from '../layouts/Layout';
import {Activity} from '../components/activity';

import {FiMail, FiGithub} from 'react-icons/fi';
import {FaDiscord} from 'react-icons/fa';

const birthday = day('13 March 2008').toDate();
const age = Math.abs(new Date(Date.now() - birthday.getTime()).getUTCFullYear() - 1970);

export default function About() {
  return (
    <div className="bg-gray-900 bg-opacity-50 h-full">
      <Layout>
        <Link href="/">Back</Link>
        <div className="flex-1 flex h-full justify-center items-center">
          <div className="glass overflow-hidden p-5 w-96 space-y-2">
            <h1 className="text-3xl font-bold title">Avyansh Ralph</h1>
            <p>
              Hey, I'm a {toWords(age)} year old web developer, graphic designer & Owner of many companies!!! I love to code in my free time and listen to music... Coding is like a canvas to me where u write a piece of code which becomes into a loop... Life is a loop (Mr. Robot)
            </p>
            <div className="flex items-center">
              <img src="/me.png" alt="Me" className="h-20 rounded-md" />
              <div className="flex justify-between flex-col py-4 pl-6 space-y-1">
                <DiscordContactRow />
                <a href="mailto:dev@avyanshralph.xyz" className="flex items-center space-x-3">
                  <FiMail /> <span>dev@avyanshralph.xyz</span>
                </a>
                <a href="https://github.com/Avyansh0001" className="flex items-center space-x-3">
                  <FiGithub /> <span>Avyansh</span>
                </a>
              </div>
            </div>
            <Activity />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export const DiscordContactRow = () => {
  const [message, setMessage] = useState(Consts.DiscordUsername);

  const copy = async () => {
    await navigator.clipboard.writeText(Consts.DiscordUsername);
    setMessage('Copied ✔');
    await new Promise((r) => setTimeout(r, 1500));
    setMessage(Consts.DiscordUsername);
  };

  return (
    <a href="#" onClick={copy} className="flex items-center space-x-3">
      <FaDiscord /> <span>{message}</span>
    </a>
  );
};
