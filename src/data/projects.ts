const projects = [
    {
        id: "1",
        title: "Vision Architecture Implementations",
        description: "This project aims to enhance my understanding of these architectures by developing them from scratch, allowing me to explore every layer and function in detail.",
        imageUrl: "/vision.svg",
        codeLink: "https://github.com/protyayofficial/Vision-Architectures/",
        technologies: ["Python", "PyTorch", "Torchsummary", "Git"]
    },
    {
        id: "2",
        title: "Image Colorization",
        description: "This project aims to colorize black-and-white images using a GAN-based approach inspired by the Pix2Pix model. The goal is to restore colors to grayscale images by training deep neural networks capable of predicting color information from luminance data.",
        // imageUrl: "/project-image.jpg",
        codeLink: "https://github.com/protyayofficial/ImageColorization",
        technologies: ["Python", "PyTorch", "Git", "Shell Scripting"]
    },
    {
        id: "3",
        title: "GAN Architectures Implementation",
        description: "In this project, I delve into the core principles of computer vision by reconstructing widely recognized Generative Adversarial Network (GAN) models from the ground up using PyTorch. This hands-on approach not only enhances my understanding of these complex architectures but also allows me to explore the intricacies of each layer and function in detail.",
        // imageUrl: "/project-image.jpg",
        codeLink: "https://github.com/protyayofficial/GAN_Implementations/",
        technologies: ["Python", "PyTorch", "Git", "Shell Scripting"]
    },
    {
        id: "4",
        title: "Connect Four Game",
        description: "Developed a Connect Four game with a React frontend and Flask backend. The project includes two gameplay modes: two-player and AI-based play. The AI logic is implemented in Python and interacts with the Flask server. The frontend uses Vite for fast development and Tailwind CSS for styling, offering an intuitive user interface.",
        imageUrl: "/connect4.png",
        codeLink: "https://protyayofficial.github.io/connect4game/",
        technologies: ["Python", "Flask", "React", "Vite", "Tailwind CSS"]
    },
    {
        id: "5",
        title: "Automated System for Weed Detection",
        description: "Developed an automated system for weed detection in agricultural fields using a Raspberry Pi and a camera module. The system captures images of the field, processes them using a pre-trained CNN model, and identifies the presence of weeds. The project aims to reduce manual labor and improve crop yield by automating the detection and removal of weeds. This project was created as part of the Agriculture Cyber Physical Systems course project, under the guidance of Dr. Neeraj Goel and Dr. Mukesh Saini, at the Indian Institute of Technology Ropar.",
        imageUrl: "/RobotImage.png",
        codeLink: "https://protyayofficial.github.io/Automated-Weed-Detection-System/",
        technologies: ["Python", "PyTorch", "Raspberry Pi", "OpenCV"]
    },
    {
        id: "6",
        title: "MNIST Digit Classification with CNN",
        description: "Developed a Convolutional Neural Network (CNN) for digit classification on the MNIST dataset using TensorFlow and Keras. The model incorporates Batch Normalization, Dropout, and data augmentation techniques to enhance accuracy and prevent overfitting. Achieved an impressive accuracy of 99.61% with data augmentation, compared to 99.31% without it. The architecture includes six Conv2D layers with varying filter sizes, followed by a Flatten layer, and a fully connected Dense layer with Softmax activation.",
        imageUrl: "/mnistmodel.png",
        codeLink: "https://www.kaggle.com/code/yaytorp/kaggle-mnist-v6",
        technologies: ["Python", "Tensorflow", "Jupyter Notebook"]
    },
  ];
  
export default projects;