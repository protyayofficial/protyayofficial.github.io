---
title: "Connect Four Game"
excerpt: "Developed a Connect Four game with a React frontend and Flask backend. The project includes two gameplay modes: two-player and AI-based play. The AI logic is implemented in Python and interacts with the Flask server. The frontend uses Vite for fast development and Tailwind CSS for styling, offering an intuitive user interface."
collection: portfolio
---

The Connect Four game project demonstrates a robust integration of frontend and backend technologies to deliver a seamless gaming experience. Built using React for the frontend and Flask for the backend, this project showcases both interactive UI design and effective AI implementation.

# Project Overview:

## The Connect Four game offers two distinct gameplay modes:

- **Two-Player Mode**: Allows two users to play against each other on the same device, taking turns to place their discs in the grid.
- **AI Mode** : Challenges players to compete against an AI opponent, which makes strategic moves based on the game’s state.

# Technical Details:

## Frontend Development:

- **React**: The user interface is crafted using React, providing a dynamic and responsive experience. React's component-based architecture allows for efficient updates and state management.
- **Vite**: Utilized for its fast development server and optimized build tools, Vite significantly enhances the development workflow.
- **Tailwind CSS**: Employed for styling the application, Tailwind CSS enables a modern, responsive design with utility-first classes.

## Backend Development:

- **Flask**: The backend is powered by Flask, a lightweight Python web framework that handles game logic and server-client interactions.
- **Python**: Implemented the AI logic using Python. The AI component is responsible for making strategic decisions and is exposed via an API endpoint (/get_ai_move) that the frontend queries during gameplay.

## AI Logic:

The AI in this project is designed to provide a challenging opponent. The logic is embedded within the Flask backend, which processes game states and determines the optimal move for the AI. This interaction is facilitated through a RESTful API, ensuring smooth communication between the frontend and backend.

## Key Features:

- **Interactive UI**: The frontend features an intuitive game board and user controls for starting, restarting, and exiting the game.
- **Gameplay Modes**: Offers a choice between human versus human play and human versus AI play.
- **Data Handling**: Efficiently manages game state and player moves, ensuring a responsive and enjoyable user experience.

## Development Insights:

- **Challenges**: Balancing game performance and AI difficulty required iterative testing and optimization. Ensuring seamless integration between the frontend and backend was crucial for a fluid gameplay experience.
- **Future Enhancements**: Potential improvements include implementing additional AI strategies, expanding to multiplayer support over a network, and enhancing the UI with more interactive elements.