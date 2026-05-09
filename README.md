# Task Manager

A Task Manager built with React and Typescript featuring API fetching, task filtering, and localStorage persistence.

## Features:
- Add new tasks
- Delete tasks
- Toggle task completion
- Filter tasks (All / Active / Completed)
- Loading and error handling
- localStorage persistence
- Responsive design

## Tech stack:
- React
- TypeScript
- CSS
- Vite

## What I learned:

This project improved my understanding of component structure by organizing code into smaller, manageable blocks, it becomes easier to update, modify, or fix one part of the app without disrupting others

Working on state I learned how the App as the common parent should hold the state as the single source of truth and how the App component passes data to the child components as props and when user interacts with the UI, child components then calls the functions passed from the parent component to update the state. React re-renders the components with the new data when state updates.

In this project I learned how to fetch API. Not only that but also in handling loading and error state. By properly managing these states prevents application crashes, informs users when data is loading, showing a message when error occurs. Without managing these, leads to a negative user experience and potential issues.

Lastly, what I learned about is the state persistence. React's state resets on every page reload and getting a state from localStorage allows you to save that state so the data is still there when the user returns or reloads the app.

Overall, working on this simple project helped me understand the fundamentals of React and how using Typescript improves code reliability and the developer experience. Although Typescript requires more code to write and maintain, it allows you to catch errors early, write more predictable code, and navigate projects with ease
