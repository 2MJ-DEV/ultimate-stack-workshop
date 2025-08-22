#!/usr/bin/env node

import inquirer from "inquirer";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import process from "process";

async function run() {
  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Comment souhaitez-vous nommer votre projet ?",
      validate: (input) =>
        input.trim() !== "" || "Le nom du projet est requis.",
    },
  ]);

  try {
    console.log(`\n🚀 Création du projet ${projectName} avec React + Vite...`);
    execSync(`npm create vite@latest ${projectName} -- --template react`, {
      stdio: "inherit",
    });

    const projectPath = path.resolve(process.cwd(), projectName);

    if (fs.existsSync(projectPath)) {
      process.chdir(projectPath);
    } else {
      throw new Error(`Le dossier ${projectPath} n'existe pas.`);
    }

    console.log("\n📦 Installation des dépendances...");
    execSync("npm install", { stdio: "inherit" });

    console.log("\n🌟 Installation de Tailwind CSS v4...");
    execSync("npm install tailwindcss@latest @tailwindcss/vite", {
      stdio: "inherit",
    });

    // Écrase vite.config.js avec la config Tailwind
    const viteConfigContent = `
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
`.trim();

    fs.writeFileSync("vite.config.js", viteConfigContent);


    // Overwrite index.css
    const indexCssPath = path.join(projectPath, "src/index.css");
    const tailwindImports = `@import "tailwindcss";`;
    fs.writeFileSync(indexCssPath, tailwindImports);

    // Overwrite App.jsx with Tailwind example
    const appJsxPath = path.join(projectPath, "src/App.jsx");
    const appContent = `
    export default function App() {
  return (
    <section className="w-full h-full bg-white flex flex-col items-center py-8 px-[20px] md:px-[50px] xl:px-[200px] font-comfortaa">
      <div className="flex flex-col items-center mt-18">
        <h1 className=" text-[2rem] md:text-[2rem] text-center font-urbanist">
          <span>Welcome to my React.js, Vite.js + Tailwind CSS starter</span>
        </h1>
        <p className="text-lg mt-4 w-[70%] md:w-[50%] lg:w-[70%] text-center font-light">
          This starter was designed for developers who want to save time. <span className="underline decoration-2 decoration-pink-500">Vite.js</span> for ultra-fast builds, <span className="underline decoration-2 decoration-sky-500">React.js</span> for a high-performance interface and <span className="underline decoration-2 decoration-sky-500">Tailwind CSS</span> for a flexible and modern design.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <div className="flex flex-col p-4 rounded-xl border-5 border-[#EFEFEF] max-w-[500px] md:w-[300px] lg:w-[400px]">
          <h2 className="text-xl font-urbanist">React.js</h2>
          <p className="mt-2 font-light">
            React.js, the essential JavaScript library for building dynamic and responsive user interfaces.
          </p>
          <a
            href="https://react.dev/learn/installation"
            target="_blank"
            className="mt-4 text-primary font-semibold text-sky-500"
          >
            Follow the course
          </a>
        </div>

        <div className="flex flex-col p-4 rounded-xl border-5 border-[#EFEFEF] max-w-[500px] md:w-[300px] lg:w-[400px]">
          <h2 className="text-xl font-urbanist">Vite.js</h2>
          <p className="mt-2 font-light">
            Vite.js offers instant startup and ultra-fast hot reloading. Perfect for modern development.
          </p>
          <a
            href="https://vite.dev/guide/"
            target="_blank"
            className="mt-4 text-primary font-semibold text-sky-500"
          >
            Read the documentation
          </a>
        </div>

        <div className="flex flex-col p-4 rounded-xl border-5 border-[#EFEFEF] max-w-[500px] md:w-[300px] lg:w-[400px]">
          <h2 className="text-xl font-urbanist">Tailwind CSS v4</h2>
          <p className="mt-2 font-light">
            Tailwind CSS offers a utilitarian approach to quickly creating elegant and responsive designs.
          </p>
          <a
            href="https://tailwindcss.com/docs/installation/tailwind-cli"
            target="_blank"
            className="mt-4 text-primary font-semibold text-sky-500"
          >
            Read the documentation
          </a>
        </div>

        <div className="flex flex-col p-4 rounded-xl border-5 border-[#EFEFEF] max-w-[500px] md:w-[300px] lg:w-[400px]">
          <h2 className="text-xl font-urbanist">Créateur</h2>
          <p className="mt-2 font-light">
            This starter was created by <a href="https://julesmukadi.me/" target="_blank" className="underline decoration-2 decoration-sky-500">Jules MUKADI</a>. Find the full source code and contribute on my GitHub.
          </p>
          <a
            href="https://github.com/2MJ-DEV/ultimate-stack-workshop/tree/main/Node/create-react-vtw"
            target="_blank"
            className="mt-4 text-primary font-semibold  text-sky-500"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
`.trim();
    fs.writeFileSync(appJsxPath, appContent);

    console.log("\n✅ Projet prêt !");
    console.log(`\n➡️ cd ${projectName}`);
    console.log(`\n➡️ npm run dev`);
  } catch (err) {
    console.error("\n❌ Une erreur est survenue :", err.message);
  }
}

run();