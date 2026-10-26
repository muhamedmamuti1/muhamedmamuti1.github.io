# Muhamed Mamuti - Portfolio

Personal portfolio of Muhamed Mamuti, backend developer. Live at [muhamedmamuti1.github.io](https://muhamedmamuti1.github.io).

## Tech stack

- React 19 + Vite
- Framer Motion
- React Icons

## Getting started

Requires Node.js 20.19+ (or 22.12+).

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                                   |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the dev server                          |
| `npm run build`   | Build for production into `dist/`             |
| `npm run preview` | Preview the production build locally          |
| `npm run lint`    | Lint the project                              |
| `npm run deploy`  | Build and publish `dist/` to the `gh-pages` branch |

## Project structure

```
public/                  Static files (logo, profile picture, CV)
src/
├── components/          Header, Hero, Experience, Projects, Skills, Contact, Reveal
├── data/content.js      All site text: profile, experience, projects, skills, contact
├── hooks/               useTheme, useActiveSection
├── App.jsx              Page layout
├── App.css              Component styles
├── index.css            Design tokens and base styles
└── main.jsx             Entry point
```

## Updating content

- Text: edit `src/data/content.js`.
- Profile picture: replace `public/profile-picture.jpg`.
- CV: replace `public/Muhamed-Mamuti-CV.pdf` (keep the file name).

## Contact

- Email: muhamedmamuti1999@gmail.com
- GitHub: [@muhamedmamuti1](https://github.com/muhamedmamuti1)
- LinkedIn: [muhamed-mamuti](https://www.linkedin.com/in/muhamed-mamuti)
