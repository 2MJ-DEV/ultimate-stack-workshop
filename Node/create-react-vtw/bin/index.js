#!/usr/bin/env node

import inquirer from 'inquirer';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

async function run() {
  const { projectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Comment souhaitez-vous nommer votre projet ?',
      validate: input => input.trim() !== '' || 'Le nom du projet est requis.'
    }
  ]);

  try {
    console.log(`\n🚀 Création du projet ${projectName} avec React + Vite...`);
    execSync(`npm create vite@latest ${projectName} -- --template react`, { stdio: 'inherit' });

    const projectPath = path.resolve(process.cwd(), projectName);
    process.chdir(projectPath);

    console.log('\n📦 Installation des dépendances...');
    execSync('npm install', { stdio: 'inherit' });

    console.log('\n🌟 Installation de Tailwind CSS v4...');
    execSync('npm install tailwindcss@latest @tailwindcss/vite', { stdio: 'inherit' });

    // Convert vite.config.js to vite.config.ts if needed
    if (fs.existsSync('vite.config.js')) {
      fs.renameSync('vite.config.js', 'vite.config.ts');
    }

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
    fs.writeFileSync('vite.config.ts', viteConfigContent);

    // Overwrite index.css
    const indexCssPath = path.join(projectPath, 'src/index.css');
    const tailwindImports = `@import "tailwindcss";`;
    fs.writeFileSync(indexCssPath, tailwindImports);

    // Overwrite App.jsx with Tailwind example
    const appJsxPath = path.join(projectPath, 'src/App.jsx');
    const appContent = `
    export default function App() {
  return (
    <section className="w-full h-full bg-white flex flex-col items-center py-8 px-[20px] md:px-[50px] xl:px-[200px] font-comfortaa">
      <header className="flex justify-end items-center w-full">
        <div className="flex items-center">

        </div>
      </header>

      <div className="flex flex-col items-center mt-18">
        <h1 className=" text-[2rem] md:text-[2rem] text-center font-urbanist">
          <span>Bienvenue sur mon starter React.js, Vite.js + Tailwind CSS</span>
        </h1>
        <p className="text-lg mt-4 w-[70%] md:w-[50%] lg:w-[70%] text-center font-light">
          Ce starter a été conçu pour les développeurs qui veulent gagner du temps. <span className="underline decoration-2 decoration-pink-500">Vite.js</span> pour des builds ultra rapides, <span className="underline decoration-2 decoration-sky-500">React.js</span> pour une interface performante et <span className="underline decoration-2 decoration-sky-500">Tailwind CSS</span> pour un design flexible et moderne.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <div className="flex flex-col p-4 rounded-xl border-5 border-[#EFEFEF] max-w-[500px] md:w-[300px] lg:w-[400px]">
          <h2 className="text-xl font-urbanist">React.js</h2>
          <p className="mt-2 font-light">
            React.js, la bibliothèque JavaScript incontournable pour construire des interfaces utilisateur dynamiques et réactives.
          </p>
          <a
            href="https://react.dev/learn/installation"
            target="_blank"
            className="mt-4 text-primary font-semibold text-sky-500"
          >
            Suivre le cours
          </a>
        </div>

        <div className="flex flex-col p-4 rounded-xl border-5 border-[#EFEFEF] max-w-[500px] md:w-[300px] lg:w-[400px]">
          <h2 className="text-xl font-urbanist">Vite.js</h2>
          <p className="mt-2 font-light">
            Vite.js permet des démarrages instantanés et un hot reload ultra rapide. Parfait pour le développement moderne.
          </p>
          <a
            href="https://vite.dev/guide/"
            target="_blank"
            className="mt-4 text-primary font-semibold text-sky-500"
          >
            Lire la documentation
          </a>
        </div>

        <div className="flex flex-col p-4 rounded-xl border-5 border-[#EFEFEF] max-w-[500px] md:w-[300px] lg:w-[400px]">
          <h2 className="text-xl font-urbanist">Tailwind CSS v4</h2>
          <p className="mt-2 font-light">
            Tailwind CSS offre une approche utilitaire pour créer rapidement des designs élégants et responsive.
          </p>
          <a
            href="https://tailwindcss.com/docs/installation/tailwind-cli"
            target="_blank"
            className="mt-4 text-primary font-semibold text-sky-500"
          >
            Lire la documentation
          </a>
        </div>

        <div className="flex flex-col p-4 rounded-xl border-5 border-[#EFEFEF] max-w-[500px] md:w-[300px] lg:w-[400px]">
          <h2 className="text-xl font-urbanist">Créateur</h2>
          <p className="mt-2 font-light">
            Ce starter a été créé par <a href="https://julesmukadi.me/" target="_blank" className="underline decoration-2 decoration-sky-500">Jules MUKADI</a>. Retrouvez le code source complet et contribuez sur mon GitHub.
          </p>
          <a
            href="https://github.com/2MJ-DEV/ultimate-stack-workshop/tree/main/Node/create-react-vtw"
            target="_blank"
            className="mt-4 text-primary font-semibold  text-sky-500"
          >
            Voir
          </a>
        </div>
      </div>
    </section>
  );
};
`.trim();
    fs.writeFileSync(appJsxPath, appContent);

    console.log('\n✅ Projet prêt !');
    console.log(`\n➡️ cd ${projectName}`);
    console.log(`\n➡️ npm run dev`);
  } catch (err) {
    console.error('\n❌ Une erreur est survenue :', err.message);
  }
}

run();
