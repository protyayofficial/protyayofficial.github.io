const publications = [
    {
      id: "1",
      title: "SCMI30-IITRPR - A Smartphone Camera Model Identification Dataset of Similar and Random Content Image Sets",
      venue: "Nature Scientific Data",
      authors: ["Kapil Rana", "Abhilasha S Jadhav", "Protyay Dey", "Vishwas Rathi", "Puneet Goyal", "Gaurav Sharma"],
      abstract: "We present SCMI30-IITRPR, a dataset for smartphone camera model identification (CMI) performance assessment comprising 9937 diverse scene images collected using 30 different camera models. Importantly, to allow assessment of CMI performance under different application settings where either similar or random content images may be available across the camera models, SCMI30-IITRPR provides images grouped in two sets: one set with similar image content and another with random image content. SCMI30-IITRPR therefore overcomes a key limitation of prior datasets that provided either images with random or similar content but not both. Additionally, SCMI30-IITRPR also allows researchers to test the robustness of CMI techniques under test conditions mismatched with the training and to explore alternative data selection approaches for more robust training. We present benchmarks of five CMI methods on the SCMI30-IITRPR dataset highlighting that significant performance variations can be encountered under a mismatch between training and testing scenarios and that training datasets that merge images with similar and random content offer the most robustness.",
      codeLink: "https://github.com/IPSA-Lab/scmi30-iitrpr",
      status: "Under Review",
      preprint: "https://www.techrxiv.org/doi/full/10.36227/techrxiv.170861968.80378739",
      imageUrl: "/similar_set.png",
      year: 2024
    },
    {
        id: "2",
        title: "HYPC-Net: A Hybrid Yoga Pose Classification Network",
        venue: "International Conference on Computer Vision and Image Processing (CVIP)",
        authors: ["Ajay Prajapat", "Amrutha Satheesan", "Himita Gangwani", "Debdyuti Dolui", "Protyay Dey"],
        abstract: "In this paper, we present HYPC-Net, a hybrid model that uses deep convolutional neural networks in combination with classical machine learning techniques to yield the highest performance only with RGB yoga pose images. HYPC-Net utilizes both convolutional features and classical classifiers that significantly increase the accuracy and robustness in yoga pose recognition. We conducted a variety of experiments with the Yoga-$82$ dataset to confirm that HYPC-Net is indeed effective. We present a comprehensive comparative analysis considering the existing literature and state-of-the-art CNN models. Specifically, the CatBoost version of HYPC-Net showed the highest accuracy and weighted F$1$ score of 96.7% for class-$6$. Moreover, the Random Forest variant of HYPC-Net had the best accuracy and weighted F$1$ scores of 95.4% and 93.6% for class-20 and class-82, respectively. Our results clearly indicate that combining deep learning with traditional machine learning techniques in a hybrid approach has paved a new way to explore yoga pose classification.",
        codeLink: "https://github.com/protyayofficial/hypc-net",
        status: "Accepted, In Press",
        imageUrl: "/hypcnet.png",
        year: 2024
    },
    {
        id: "3",
        title: "ConvSFNet: A Novel Architecture for Disaster Image Analysis",
        venue: "International Conference on Computer Vision and Image Processing (CVIP)",
        authors: ["Biplaw Debnath", "Komal Kumawat", "Protyay Dey"],
        abstract: "The proper classification of social media images in a timely manner is a very critical component of how effective response and recovery operations would be in a disaster ridden scenario. This paper enunciates ConvSFNet as a new architecture for disaster image classification, where ConvNeXt has been combined with the Squeeze-and-Excitation block and the Feature Pyramid Network structure. Using the MEDIC dataset, thorough experiments were conducted with models like DenseNet121, EfficientNet-B1, ResNet50, SqueezeNet, and VGG16 for performance comparison. All our results outperform the baseline models on accuracy, weighted precision, recall, and F1-score on all four classification tasks: Damage Severity, Disaster Type, Humanitarian, and Informative. ConvSFNet improved the average F1-score by 2.41%, excelling in the \"severe\" damage category, very relevant in scenarios of disaster management. This research points to the effectiveness of integrating SE blocks and FPN to improve feature extraction and classification in disaster image analysis. These results illustrate the great promise ConvSFNet holds for real-time disaster response and management by opening further paths for future research in this domain.",
        codeLink: "https://github.com/protyayofficial/convsfnet",
        status: "Accepted, In Press",
        imageUrl: "/convsfnet.png",
        year: 2024
    },
    {
        id: "4",
        title: "An Effective CNN-Based Approach for Synthetic Face Image Detection in Pre-social and Post-social Media Context",
        venue: "International Conference on Computer Vision and Image Processing (CVIP)",
        authors: ["Protyay Dey", "Abhilasha S Jadhav", "Kapil Rana"],
        abstract: "The proliferation of image manipulation techniques, including DeepFake technology, has posed significant threats to the authenticity and credibility of images. Accurately classifying real and fake images has become crucial in fields such as forensics, security, and media authentication. However, detecting fake images during downloading and uploading from social networks is even more challenging. In this paper, we present an approach based on the EfficientNet model to learn discriminative features for classifying real and synthetic face images shared on social networks. We conducted extensive experiments using the TrueFace dataset, which comprises real and synthetic facial images shared on three major social media platforms. We employed the EfficientNet-B2 model trained on a combination of pre-social and post-social images from the TrueFace dataset. The presented approach outperforms all other methods, achieving accuracies of 99.98%, 100%, and 100% for images shared on Facebook, Telegram, and Twitter. This approach demonstrates exceptional performance when evaluated on a distinct dataset of images shared on social media platforms, separate from the images used for training.",
        preprint: "https://doi.org/10.1007/978-3-031-58174-8_41",
        // imageUrl: "/similar_set.png",
        year: 2023
    },
  ];
  
export default publications;