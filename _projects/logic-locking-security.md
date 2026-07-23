---
title: "Hardware Security & IP Protection"
excerpt: "Protecting hardware IP across the stack — physical-aware eFPGA redaction guided by GNNs, logic-locking schemes (ObfusLock, DE2), and extending circuit-protection techniques to secure AI accelerators (LLA)."
date: 2023-04-01
header:
  teaser: "/images/logic-locking-teaser.jpg"
sidebar:
  - title: "Project Duration"
    text: "2021 - 2025"
  - title: "Collaboration"
    text: "NuLogiCS Research Group, Northwestern University"
  - title: "Keywords"
    text: "Hardware Security, eFPGA Redaction, Logic Locking, IP Protection, ML for Security"
---

## Project Overview

This project protects intellectual property (IP) in integrated circuits — and increasingly, the AI systems that run on them. It spans **physical-aware eFPGA redaction**, foundational **logic-locking** schemes and attacks, and the transfer of circuit-protection techniques to secure machine-learning accelerators.

## Physical-Aware eFPGA Redaction (DATE 2026)

**Physical-Aware eFPGA Redaction for Secure and Efficient Hardware IP Protection** casts redaction as a **graph-partitioning** problem solved with machine learning:

- GNN models over gate-level netlists and placement features guide **constrained region selection** with embedding-driven clustering under area and timing budgets.
- A multi-stage ML–EDA flow interleaves GNN-guided decisions with **Yosys, OpenSTA, and OpenROAD**.
- The loop closes with **OpenFPGA**-based fabric generation, yielding an end-to-end pipeline for secure, verifiable design transformations that balances area, timing, and security.

This work shows how strongly EDA quality depends on **physical-awareness** in ML representations — the same theme that runs through my physical-design research.

## Logic Locking & Circuit Protection

Foundational schemes and attacks that motivated the redaction work:

- **ObfusLock** (DATE 2023): the first logic-locking method to simultaneously achieve locking security, obfuscation safety, and efficiency, with solid mathematical proofs and <5% average overhead.
- **DE2** (DATE 2025): a SAT-based sequential logic decryption algorithm that attacks locked circuits using only a high-level functional specification, with an automatic alignment mechanism and the LIM decryption core.
- **DNN Logic Locking** (DAC 2024): a systematic I/O attack demonstrating that HPNN-style logic locking is insecure on deep neural networks.

## Securing AI Accelerators

**LLA: Enhancing Security and Privacy for Generative Models with Logic-Locked Accelerators** (AAAI 2025) extends hardware logic-locking from circuit IP protection to the AI setting, key-locking accelerators so that only authorized users obtain correct generative-model behavior — a bidirectional synergy between EDA security and modern ML systems.

## Related Publications

1. **Physical-Aware eFPGA Redaction for Secure and Efficient Hardware IP Protection** — DATE 2026
2. **LLA: Enhancing Security and Privacy for Generative Models with Logic-Locked Accelerators** — AAAI 2025
3. **DE2: SAT-Based Sequential Logic Decryption with a Functional Description** — DATE 2025
4. **Evaluating the Security of Logic Locking on Deep Neural Networks** — DAC 2024
5. **ObfusLock: An Efficient Obfuscated Locking Framework for Circuit IP Protection** — DATE 2023

## Future Directions

- Physical-aware redaction integrated with placement/legalization for tighter PPA–security trade-offs.
- Security primitives exposed as constraints within an agentic design flow.
- Extending hardware-rooted protection to broader classes of AI accelerators.
