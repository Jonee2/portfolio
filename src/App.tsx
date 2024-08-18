import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <section class="header">
          <h1 class="pmain">I'm Jhonne</h1>
          <p class="typing sub-title para-black"></p>
        </section>
        <section class="header">
          <p class="para-black sub-title">About Me</p>
          <b class="pmain">
            Hello, i'm a aspiring webdev and my focus is designing user-friendly
            web-applications
          </b>
        </section>
        <section class="header">
          <h1 class="sub-title-black">my skills</h1>
          <b class="pmain">UI/UX-Designing</b>
          <b class="pmain">Linux/Shell bash</b>
          <b class="pmain">Git/Github</b>
        </section>
        <section class="header-black-tilted">
          <h1 class="sub-title">Tech Stack</h1>
          <b>HTML/CSS</b>
          <b>Tailwind</b>
          <b>Javascript</b>
          <b>React</b>
          <b>Node/Express</b>
          <b>PostgreSQL</b>
          <b>Visual Studio Code</b>
        </section>
        <div class="header">
          <p class="main-title">Projetos</p>
        </div>
        <section class="main">
          <div class="card">
            <p class="sub-title para">Quiz app</p>
            <p class="sub-title">Quiz App built with Vue.js</p>
            <a href="https://jhonneg.github.io/vueQuiz/">
              <video
                loop
                type="video/mp4"
                autoplay
                muted
                width="500"
                height="300"
                name="pong"
                src="https://github.com/user-attachments/assets/d9e9aab6-84f3-4570-8453-752ac60fba68"
              ></video>
            </a>
          </div>
          <div class="card">
            <p class="sub-title para">Multiplayer Pong</p>
            <p class="sub-title">
              Multiplayer Pong game build with Node/Express and Socket.io
            </p>
            <a href="https://pongjs-production.up.railway.app/">
              <video
                loop
                type="video/mp4"
                autoplay
                muted
                width="500"
                height="300"
                name="pong"
                src="https://github.com/Jhonneg/PongJS/assets/94491571/733b62cc-e616-4380-9c98-c13c5e75b717"
              ></video>
            </a>
          </div>
          <div class="card">
            <p class="sub-title para">Rock Paper Scissor Game.</p>
            <p class="sub-title">Javascript Rock Paper Scissor Odin Project.</p>
            <a href="https://jhonneg.github.io/rock-paper-scissor/">
              <img
                alt="RPS"
                src="assets/Screencastfrom02-01-2024090133AM-ezgif.com-video-to-gif-converter.gif"
              />
            </a>
          </div>
          <div class="card">
            <p class="sub-title para">Discord weather bot</p>
            <p class="sub-title">Discord weather bot built with DiscordJS</p>
            <a href="https://github.com/Jhonneg/DiscordJS">
              <video
                loop
                type="video/mp4"
                autoplay
                muted
                width="500"
                height="300"
                name="pong"
                src="https://github.com/Jhonneg/DiscordJS/assets/94491571/91a18e41-b78a-43d1-a748-de81feccdc5a"
              ></video>
            </a>
          </div>
          <div class="card">
            <p class="sub-title para">Face Recognition App</p>
            <p class="sub-title">Build with React and TailwindCSS</p>
            <a href="https://smartbrian.netlify.app/">
              <img
                alt="faceappexample"
                src="https://github.com/Jhonneg/SmartbrainJSX/raw/main/assets/Screenshot%20from%202024-05-04%2008-08-01.png"
              />
            </a>
          </div>
          <div class="card">
            <p class="sub-title para">Crown Clothing</p>
            <p class="sub-title">
              E-Commerce shop built with React, Typescript, Styled-components,
              Redux and Firebase
            </p>
            <a href="https://crownfashion.netlify.app/">
              <img
                alt="react store"
                src="assets/Screenshot from 2024-07-13 23-32-34.png"
              />
            </a>
          </div>
        </section>
      </main>
      <footer class="footer">
        <div>
          <b>Build with</b>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/typescript.png"
            alt="typescript"
          />
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/sass-avatar.png"
            alt="sass-avatar"
          />
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/vite.png"
            alt="vite"
          />
        </div>
        <a href="https://github.com/jhonneg">
          <img
            width="50"
            height="50"
            src="assets/github-mark-white.svg"
            alt="github"
          />
        </a>
      </footer>
    </>
  );
}

export default App;
