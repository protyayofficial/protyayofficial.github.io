---
title: "Connect Four Game"
excerpt: "Developed a Connect Four game with a React frontend and Flask backend. The project includes two gameplay modes: two-player and AI-based play. The AI logic is implemented in Python and interacts with the Flask server. The frontend uses Vite for fast development and Tailwind CSS for styling, offering an intuitive user interface."
collection: portfolio
---
<!--
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
- **Future Enhancements**: Potential improvements include implementing additional AI strategies, expanding to multiplayer support over a network, and enhancing the UI with more interactive elements. -->

---


## Vision Architectures Implementations

In this project, I dive into the fundamentals of computer vision by reconstructing widely used CNN models using PyTorch. This project aims to enhance my understanding of these architectures by developing them from scratch, allowing me to explore every layer and function in detail.

The implementation is designed with a strong emphasis on clarity, ensuring that the code is easy to read, follow, and modify. The modular design allows for flexibility, making it simple to integrate these models into other projects or customize them for specific needs. Comprehensive documentation accompanies the code, with detailed explanations and comments to guide others in their learning journey.

Additionally, the project includes tools to generate model summaries, offering valuable insights into the architecture's structure and layer outputs. This makes it an excellent resource for anyone interested in understanding how CNNs are built and how they function in real-world applications.

This project serves both as a learning platform for myself and a contribution to the open-source community, with plans to expand by adding more architectures and features over time, further broadening its application in computer vision tasks.

---

## Architectures Implemented:

- **AlexNet**: A pioneering deep learning model that introduced ReLU and dropout.
- **VGG16**: A deep and uniform architecture known for using small convolution filters.
- **More models**: Additional architectures will be added over time.

---

## Project Motivation

The primary motivation behind this project is to gain a deeper understanding of CNN architectures by building them from scratch. By coding each layer and function, I can better grasp the principles that drive these models and their real-world applications in image processing and computer vision.

---

## Key Features

- **Clean & Readable Code**: Each model is implemented with a focus on readability and understanding.
- **Comprehensive Documentation**: Code is well-documented with comments and explanations.
- **Model Summaries**: Easily generate model summaries for insight into layer configurations and output shapes.
- **Modularity**: The models are modular, making it easy to integrate them into other projects or modify them for custom needs.

---

## Technologies Used
- **PyTorch**: The primary framework used for building and training the models.
- **Python**: The programming language used for all implementations.
- **Torchsummary**: For model summary.
- **Git**: For version control.

---

## Future Plans
I plan to continue adding more CNN architectures, improving existing implementations, and possibly expanding into other areas of deep learning, such as generative models and object detection.

---

## Links & Resources
- **GitHub Repository**: [Visit the Repo](https://github.com/protyayofficial/Vision-Architectures/)
- **AlexNet Paper**: [Krizhevsky _et al._](https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf)
- **VGG16 Paper**: [Simonyan _et al._](https://arxiv.org/pdf/1409.1556)
