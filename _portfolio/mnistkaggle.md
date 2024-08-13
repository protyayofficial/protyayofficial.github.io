---
title: "MNIST Digit Classification with CNN"
excerpt: "Developed a Convolutional Neural Network (CNN) for digit classification on the MNIST dataset using TensorFlow and Keras. The model incorporates Batch Normalization, Dropout, and data augmentation techniques to enhance accuracy and prevent overfitting. Achieved an impressive accuracy of 99.61% with data augmentation, compared to 99.31% without it. The architecture includes six Conv2D layers with varying filter sizes, followed by a Flatten layer, and a fully connected Dense layer with Softmax activation.<br/><img src='/images/mnistmodel.png'>"
collection: portfolio
---

In this project, I designed and implemented a Convolutional Neural Network (CNN) for digit classification using the MNIST dataset with TensorFlow and Keras. The goal was to build an effective model for recognizing handwritten digits with high accuracy.

## Model Architecture:

- **Conv2D Layers**: The model starts with three Conv2D layers, using 32 filters for the first two layers and 64 filters for the final three layers. Different kernel sizes (3x3 and 5x5) and strides are applied to capture various features in the images. Each Conv2D layer is followed by Batch Normalization to stabilize and speed up training.
- **Activation Function**: ReLU (Rectified Linear Unit) is used as the activation function to introduce non-linearity.
- **Dropout**: To mitigate overfitting, Dropout layers with a rate of 40% are added after specific Conv2D layers.
- **Flatten and Dense Layers**: The output from the convolutional layers is flattened into a 1D vector, which is then fed into a Dense layer with 128 units and ReLU activation. Another Batch Normalization and Dropout are applied here.
- **Output Layer**: A final Dense layer with 10 units and Softmax activation produces the probability distribution for each class.

<img src='/images/mnistmodel.png'>

## Training Details:

- **Data Augmentation**: Implemented techniques such as cropping, padding, and horizontal flipping to expand the dataset and improve model generalization. This led to an accuracy improvement from 99.31% (without augmentation) to 99.61% (with augmentation).
- **Batch Size**: A batch size of 64 was chosen based on experimentation, which yielded the best performance among sizes of 32, 48, 64, 80, and 128.
- **Optimizer**: Utilized the Adam optimizer with default hyperparameters, known for its efficiency in handling sparse gradients and noisy problems.
- **Learning Rate Scheduling**: Applied a LearningRateScheduler callback to adjust the learning rate dynamically during training.

## Results:

The model achieved a high accuracy of 99.61% on the MNIST dataset with data augmentation. This project demonstrates the effectiveness of combining advanced techniques such as Batch Normalization, Dropout, and data augmentation to enhance CNN performance.

## Technology Used

- Tensorflow
- Jupyter Notebook
- Kaggle
