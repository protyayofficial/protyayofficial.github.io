---
title: "Vision Architecture Implementations"
excerpt: "In this project I build and explore popular deep learning models using PyTorch from scratch following the original literature. This initiative deepens my understanding of CNNs by constructing them from the ground up, with a focus on clean code, comprehensive documentation, and modular design.<br/>"
collection: portfolio
---


In this project, I dive into the fundamentals of computer vision by reconstructing widely used CNN models using PyTorch. This project aims to enhance my understanding of these architectures by developing them from scratch, allowing me to explore every layer and function in detail.

The implementation is designed with a strong emphasis on clarity, ensuring that the code is easy to read, follow, and modify. The modular design allows for flexibility, making it simple to integrate these models into other projects or customize them for specific needs. Comprehensive documentation accompanies the code, with detailed explanations and comments to guide others in their learning journey.

Additionally, the project includes tools to generate model summaries, offering valuable insights into the architecture's structure and layer outputs. This makes it an excellent resource for anyone interested in understanding how CNNs are built and how they function in real-world applications.

This project serves both as a learning platform for myself and a contribution to the open-source community, with plans to expand by adding more architectures and features over time, further broadening its application in computer vision tasks.

---

## Architectures Implemented:

- **AlexNet [2012]**: The model that revolutionized computer vision by introducing ReLU activation and dropout layers, leading to a dramatic improvement in performance on the ImageNet challenge. It was one of the first deep convolutional neural networks to demonstrate the power of GPUs in training large models.
- **VGG16 and VGG19 [2014]**: These models are known for their deep and uniform architecture, consisting of 16 and 19 layers respectively. They employ small (3x3) convolution filters, which stack to create deep networks, leading to better feature extraction. VGG networks are widely recognized for their simplicity and effectiveness, despite their relatively large parameter count.
- **GoogLeNet [2014]**: This architecture introduced the Inception module, which combines filters of different sizes in parallel, allowing the network to capture different levels of detail. It is also known for being computationally efficient, using fewer parameters than similar models, and introducing auxiliary classifiers to help with training.
- **ResNet [2015]**:  A deep convolutional neural network architecture, probably the most influential architecture of recent times. It introduces the concept of residual learning, which allows the network to learn residual functions with reference to the input layers. By using skip connections, ResNets effectively mitigates the vanishing gradient problem, enabling the training of very deep networks. This architecture is widely used for its efficiency and accuracy in various computer vision applications.
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
- **VGG Paper**: [Simonyan _et al._](https://arxiv.org/pdf/1409.1556)
- **GoogLeNet Paper**: [Szegedy *et al.*](https://arxiv.org/pdf/1409.4842)
- **ResNet Paper**: [He _et al._](https://arxiv.org/pdf/1512.03385)
