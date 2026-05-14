# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## About the app

This is a silly little fun app to get back into react/node concepts.

### How it works:

Frontend architecture

It’s a React app using functional components and hooks. The quiz flow is managed through local state — tracking current question index and accumulated trait scores.

Data-driven design

Questions are stored as a data array with answers mapped to trait weights, so the UI is fully data-driven rather than hardcoded logic.

Scoring system

Each answer contributes weighted values to traits like chaos, ambition, and practicality, and at the end a simple rule-based classifier determines the final archetype.

Notes:

- simple frontend approach
- modular design
- quiz questions are in a separate file
- answers map to weighted personality traits
- scoring logic is isolated in its own utility layer
- UI is component based React - hooks for state management

- app tracks current qwuestion index, accumulates scores for traits
- at the end, a rule-based classifier determines the final persona and renders results

- github, deployed on vercel

### Future improvements include:

### 1. Move the scoring logic to backend

Right now scoring is client-side, but I’d move it to a backend service so results could be persisted and analysed.

### 2. Add a backend

### 3. Add persistence/analytics

I’d store anonymous response data to understand trait distributions over time.

### 4. Improve the UX flow

The UI is functional but basic.

### 5. Stronger state management

If it grew, I’d probably introduce a reducer or state machine instead of raw useState to manage quiz flow more cleanly.

### 6. Testing

I’d add unit tests around the scoring logic since that’s the core business rule of the app.

### 7. Authentication

Add some user accounts so you can login, share your score with friends etc. Maybe add some additional fun quizzes.

### 8. Animations and UI improvements

### 9. More quiz types
