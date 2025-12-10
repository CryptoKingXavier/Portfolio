# Portfolio

This is a personal portfolio React app that links to past and present projects and showcases skills, code snippets, and project details.

**Overview**
- **Stack**: `React` (v18), `react-router-dom`, `bootstrap` / `react-bootstrap`, `react-icons`.
- **Purpose**: Present projects, code samples, and personal information in a modular single-page app.

**Getting Started**
- **Prerequisites**: Node.js (recommended v14+ or v16+), `npm`.
- **Install**: `npm install`
- **Run (development)**: `npm start`
- **Build (production)**: `npm run build`

**Available Scripts**
- **start**: `npm start` — Runs the app in development mode via `react-scripts`.
- **build**: `npm run build` — Bundles the app for production.
- **test**: `npm test` — Runs tests using the React testing library config.
- **eject**: `npm run eject` — Ejects the create-react-app configuration (irreversible).
- **predeploy**: `npm run predeploy` — Runs the build prior to `deploy`.
- **deploy**: `npm run deploy` — Deploys the `build` directory using `gh-pages` (configured in `package.json`).

**Project Structure**
- **Root files**: `package.json`, `README.md`, `public/`
- **Source**: `src/`
  - **Top-level app**: `App.js`, `index.js`, `App.css`, `index.css`
  - **Assets**: `src/assets/` — fonts and images (`beatbank`, `habithack`, `library`, `ucth`)
  - **Components**: `src/components/` — organized by feature
    - `about/` — `About.js`, `AboutRouter.js`, `AboutNav.js`, `auxiliary/CodeShowcase.js`, `screens/` (e.g., `Education.js`, `MyStacks.js`, `PersonalInfo.js`)
    - `projects/` — `Projects.js`, `ProjectsNav.js`, `ProjectsRouter.js`, `auxiliary/projectsData.js`, `screens/` (e.g., `AllProjects.js`, `SingleProject.js`)
    - `home/` — `Home.js` and styling
    - `navigation/` — `Navigation.js` and styling
    - `footer/` — `Footer.js`
    - `codeSnippets/` — `CodeSnippets.js`
    - `CustomBtns/` — `FloatingBtn.js`
    - `scroll/` — `CustomScroll.js`
    - `svgs/` — `CustomSvg.js`
  - **Tests and tooling**: `setupTests.js`, `reportWebVitals.js`, `App.test.js`

**Components Summary**
- **About**: Multi-screen section with personal info, education, and stacks; includes a code showcase helper.
- **Projects**: Router-driven listing and single-project detail screens; data driven via `auxiliary/projectsData.js`.
- **Home**: Entry landing page.
- **Navigation / Footer**: App-level navigation and footer components.
- **Code Snippets**: Dedicated area for code examples.
- **Custom UI**: Custom floating button and SVG helpers.

**Assets**
- **Images**: `src/assets/images/` contains project images grouped by project (e.g., `beatbank`, `habithack`, `library`, `ucth`).
- **Fonts**: `src/assets/fonts/` for custom typography.

**Deployment**
- **GitHub Pages**: The repo is set up with `gh-pages` (see `deploy` script). Ensure the `homepage` field in `package.json` is correct for your target GitHub Pages URL before running `npm run deploy`.

**Notes & Next Steps**
- **Customization**: Update `src/components/auxiliary/projectsData.js` to add or edit project entries and screenshots.
- **Styling**: Component-specific CSS files are in each component's `css/` folder (e.g., `src/components/home/css/home.css`).
- **Testing**: Add tests in `src/` alongside components and run with `npm test`.

