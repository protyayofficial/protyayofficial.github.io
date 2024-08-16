---
title: "ConvSFNet: A Novel Architecture for Disaster Image Analysis"
excerpt: "This project presents ConvSFNet, a novel architecture combining ConvNeXt, Squeeze-and-Excitation blocks, and Feature Pyramid Networks for improved disaster image classification. Using the MEDIC dataset, ConvSFNet outperformed traditional models like DenseNet121 and EfficientNet-B1 across various metrics, including accuracy and F1-score. It notably increased the average F1-score by 2.41%, excelling in identifying severe damage—critical for effective disaster response. This work underscores the potential of integrating SE blocks and FPN for advancing real-time disaster management.<br/><img src='/images/convsfnet.png'>"
collection: portfolio
---

## Abstract

The proper classification of social media images in a timely manner is a very critical component of how effective response and recovery operations would be in a disaster ridden scenario. This paper enunciates ConvSFNet as a new architecture for disaster image classification, where ConvNeXt has been combined with the Squeeze-and-Excitation block and the Feature Pyramid Network structure. Using the MEDIC dataset, thorough experiments were conducted with models like DenseNet121, EfficientNet-B1, ResNet50, SqueezeNet, and VGG16 for performance comparison. All our results outperform the baseline models on accuracy, weighted precision, recall, and F1-score on all four classification tasks: Damage Severity, Disaster Type, Humanitarian, and Informative. ConvSFNet improved the average F1-score by 2.41\%, excelling in the ``severe'' damage category, very relevant in scenarios of disaster management. This research points to the effectiveness of integrating SE blocks and FPN to improve feature extraction and classification in disaster image analysis. These results illustrate the great promise ConvSFNet holds for real-time disaster response and management by opening further paths for future research in this domain.

## Authors

- Biplaw Debnath
- Komal Kumawat
- Protyay Dey

## Technologies Used

- PyTorch
- Jupyter Notebook
- Python
- Git
- Shell Scripting

## Role: Lead Researcher

- Developed the ConvSFNet architecture, integrating ConvNeXt with Squeeze-and-Excitation blocks and Feature Pyramid Networks.
- Conducted comprehensive experiments and performance evaluations against baseline models.
- Led the implementation and maintenance of the project codebase on GitHub.

## Codebase

[https://github.com/protyayofficial/medic-cvip](protyayofficial/medic-cvip)
