---
title: "Evaluating the Security of Logic Locking on Deep Neural Networks"
collection: publications
permalink: /publication/2024-06-23-logic-locking-on-DNN
excerpt: 'Demonstrated the vulnerability of HPNN-style logic locking schemes on deep neural networks by proposing a systematic I/O attack that combines algebraic and learning-based approaches to efficiently extract protected parameters.'
date: 2024-06-23
venue: '61st ACM/IEEE Design Automation Conference (DAC)'
citation: 'You Li, Guannan Zhao, Yunqi He, and Hai Zhou. 2024. Evaluating the Security of Logic Locking on Deep Neural Networks. In Proceedings of the 61st ACM/IEEE Design Automation Conference (DAC '24). Association for Computing Machinery, New York, NY, USA, Article 286, 1–6. doi.org/10.1145/3649329.3658248.'
---
Deep neural networks are susceptible to model piracy and adversarial attacks when malicious end-users have full access to the model parameters. Recently, a logic locking scheme called HPNN has been proposed. HPNN utilizes hardware root-of-trust to prevent end-users from accessing the model parameters. This paper investigates whether logic locking is secure on deep neural networks. Specifically, it presents a systematic I/O attack that combines algebraic and learning-based approaches. This attack incrementally extracts key values from the network to minimize sample complexity. Besides, it employs a rigorous procedure to ensure the correctness of the extracted key values. Our experiments demonstrate the accuracy and efficiency of this attack on large networks with complex architectures. Consequently, we conclude that HPNN-style logic locking and its variants we can foresee are insecure on deep neural networks.

[Download paper here](https://dl.acm.org/doi/pdf/10.1145/3649329.3658248)
