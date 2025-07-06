# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

vscode command

1. crt+k+z = zen mode
2. ctr+d to select sentence

## Deploying to GitHub Pages

1. Install gh-pages package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add the following script to your `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist --repo=https://github.com/<username>/<repo-name>.git"
   }
   ```
3. Replace `<username>` and `<repo-name>` with your GitHub username and repository name.
4. Run the deploy script:
   ```bash
   npm run deploy
   ```

IMPORTANT:

## manual deployment

```bash
npm run build
```

This will create a production build of your app in the `dist` folder. You can then deploy the contents of the `dist` folder to your web server or hosting service.

## Using gh-pages for deployment

```bash
npm install gh-pages --save-dev
```

Add the following script to your `package.json`:

```json
"scripts": {
  "deploy": "gh-pages -d dist --repo=https://github.com/<username>/<repo-name>.git"
}
```

Replace `<username>` and `<repo-name>` with your GitHub username and repository name.

1. git init // initialize a new git repository
2. git checkout -b gh-pages // create a new branch named gh-pages // and switch to it and create a new branch
3. git remote add origin https://github.com/ashutosh203/AshuTheCoder_portfolio.git // add the remote repository
4. git add .
5. git commit -m "Manual deploy"
6. git push -f origin gh-pages // force push to the gh-pages branch or yebhi use kar sakate hai git push -f origin gh-pages // force push to the gh-pages branch
7. git status // to check the status of branch
8. git branch // to check the current branch
9. git checkout main // to switch to the main branch

<!-- 10. git merge gh-pages // to merge the gh-pages branch into the main branch -->
