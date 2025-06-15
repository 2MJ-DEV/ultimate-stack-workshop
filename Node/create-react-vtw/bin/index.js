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
      message: 'Quel nom donner au projet ?',
      validate: input => input.trim() !== '' || 'Le nom du projet est requis.'
    }
  ]);

  try {
    console.log(`\n🚀 Création du projet ${projectName} avec Vite + React...`);
    execSync(`npm create vite@latest ${projectName} -- --template react`, { stdio: 'inherit' });

    const projectPath = path.resolve(process.cwd(), projectName);
    process.chdir(projectPath);

    console.log('\n📦 Installation des dépendances...');
    execSync('npm install', { stdio: 'inherit' });

    console.log('\n🌟 Installation de Tailwind CSS v4.1...');
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
    <h1 className="text-3xl font-bold underline">
      Hello Tailwind v4.1 + React!
    </h1>
  );
}
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
