---
title: "SCMI30-IITRPR - A Smartphone Camera Model Identification Dataset of Similar and Random Content Image Sets"
excerpt: "SCMI30-IITRPR introduces a dataset designed to assess smartphone camera model identification (CMI) performance. It includes 9,937 images collected from 30 different camera models, categorized into two sets: one with similar content and another with random content. This dual-set approach addresses the limitation of previous datasets that only provided one type of content. SCMI30-IITRPR enables evaluation of CMI techniques under varying conditions, including mismatched training and testing scenarios. Our benchmarks of five CMI methods on this dataset reveal significant performance variations based on content similarity, underscoring the advantage of combining both content types for more robust model training.<br/><img src='/images/similar_set.png'>"
collection: portfolio
---

## Abstract

We present SCMI30-IITRPR, a dataset for smartphone camera model identification (CMI) performance assessment comprising 9937 diverse scene images collected using 30 different camera models. Importantly, to allow assessment of CMI performance under different application settings where either similar or random content images may be available across the camera models, SCMI30-IITRPR provides images grouped in two sets: one set with similar image content and another with random image content. SCMI30-IITRPR therefore overcomes a key limitation of prior datasets that provided either images with random or similar content but not both. Additionally, SCMI30-IITRPR also allows researchers to test the robustness of CMI techniques under test conditions mismatched with the training and to explore alternative data selection approaches for more robust training. We present benchmarks of five CMI methods on the SCMI30-IITRPR dataset highlighting that significant performance variations can be encountered under a mismatch between training and testing scenarios and that training datasets that merge images with similar and random content offer the most robustness.

## Authors

- Dr. Kapil Rana
- Abhilasha S Jadhav
- Protyay Dey
- Dr. Vishwas Rathi
- Dr. Puneet Goyal
- Prof. Gaurav Sharma

## Technologies Used

- PyTorch
- Jupyter Notebook
- Python
- Git

## Role: Co-Researcher and Contributor

- Compiled the dataset and conducted benchmarking experiments.
- Drafted the manuscript with revisions and guidance from senior researchers.
- Collaborated with team members on data organization and metadata.

## Codebase

[https://github.com/IPSA-Lab/scmi30-iitrpr](IPSA-Lab/scmi30-iitrpr)

## Dataset

[https://doi.org/10.34740/kaggle/dsv/7589186](doi.org/10.34740/kaggle/dsv/7589186)

## Usage Notes

The SCMI30-IITRPR dataset must be used for research and education purposes only. The dataset is designed primarily to facilitate research on camera model identification (CMI) but could also be beneficial for other tasks such as individual camera device forensics, image classification, and object recognition. Researchers that make use of the dataset should cite this article and the \href{https://doi.org/10.34740/kaggle/dsv/7589186}(doi.org/10.34740/kaggle/dsv/7589186)

## Licenses

The code is available under the GNU General Public License v3, and the dataset is provided under the Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) license.
