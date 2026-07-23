---
title: "Formal Verification & Equivalence Checking"
excerpt: "Rigorous, automated equivalence checking for sequential, non-cycle-accurate design transformations — SE3 and RE3 — plus formal reasoning about the robustness of learned models."
date: 2023-07-01
header:
  teaser: "/images/ml-eda-teaser.jpg"
sidebar:
  - title: "Project Duration"
    text: "2022 - 2024"
  - title: "Collaboration"
    text: "NuLogiCS Research Group, Northwestern University"
  - title: "Keywords"
    text: "Formal Verification, Sequential Equivalence Checking, Refinement Relations, Robustness"
---

## Project Overview

Modern design flows apply aggressive transformations that change a circuit's timing and cycle behavior for better performance–resource trade-offs. Checking that such transformations preserve functionality is critical and challenging, because most equivalence checkers assume cycle-accurate, latch-mapped circuits. This project builds **rigorous, automated equivalence-checking** methods that drop those assumptions, and extends formal reasoning to the reliability of learned models.

## Key Contributions

### SE3 — Sequential Equivalence Checking (DAC 2023)
An efficient sequential equivalence checker with **no assumption** on cycle-accuracy, latch mapping, or I/O interface. It proves equivalence by computing an equivalence relation between the states of two circuits and uses syntax abstraction to accelerate the process, running significantly faster than state-of-the-art sequential equivalence checkers.

### RE3 — Finding Refinement Relations (DAC 2025)
A rigorous and efficient algorithm that **automatically discovers** concise, human-comprehensible refinement relations between two non-cycle-accurate designs — helping engineers understand the essence of a transformation. Applications include regression verification, behavioral model synthesis, and detecting and correcting errors in **LLM-generated RTL** designs.

### Certifying Global Robustness for Deep Neural Networks (arXiv 2024)
Bringing formal-methods reasoning to machine learning, this work certifies **global robustness** of deep neural networks — guarantees that hold across the input space rather than only around individual samples.

## Tools & Methodology

- Built around commercial verification tools (Synopsys Hector, Cadence Jasper, Mentor SLEC) using refinement mapping.
- Benchmark suites and experimental harnesses to evaluate correctness, soundness, and scalability across sequential and non-cycle-accurate transformations.

## Related Publications

1. **SE3: Sequential Equivalence Checking for Non-Cycle-Accurate Design Transformations** — DAC 2023
2. **RE3: Finding Refinement Relations with Relational Mapping Abstraction** — DAC 2025
3. **Certifying Global Robustness for Deep Neural Networks** — arXiv 2024
4. **Property Guided Secure Configuration Space Search** — ISC 2024

## Future Directions

- Equivalence checking as a verification primitive within an agentic design flow.
- Combining formal methods with ML for scalable analysis of large transformations.
- Verifiable guarantees for autonomously transformed and LLM-generated designs.
