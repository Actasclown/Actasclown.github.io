---
title: "Physical Design Methodology & Legalization"
excerpt: "Building physical-design methodology and GPU-accelerated flows that turn continuous placements into legal, high-quality layouts — a TwinTree-based quality-preserving legalizer and DREAMPlace-based acceleration validated on industrial-scale designs."
date: 2024-06-01
header:
  teaser: "/images/ml-eda-teaser.jpg"
sidebar:
  - title: "Project Duration"
    text: "2024 - Present"
  - title: "Collaboration"
    text: "NuLogiCS Research Group; Cadence Design Systems"
  - title: "Keywords"
    text: "Physical Design, Legalization, Floorplanning, Placement, PPA, GPU Acceleration"
---

## Project Overview

This project develops **physical-design methodology** and production-oriented flows that improve SoC **PPA** (power, performance, area) across placement, legalization, and floorplanning. The central theme is turning the continuous solutions produced by analytical engines into **legal, physically valid layouts** without sacrificing wirelength, area, or timing — and doing so at industrial scale.

## Core Contribution: Quality-Preserving Legalization

**Quality-Preserving Legalization for Analytical Floorplanning** (ICCAD 2026) resolves the inter-macro overlaps left by electrostatic-based analytical floorplanning **without disrupting the layout's topology** — the main reason existing legalizers lose downstream quality.

- **Twin binary trees** capture the adjacency relations between blocks, giving the legalizer explicit topological guidance instead of pure displacement minimization.
- **Differentiable model**: block coordinates are optimized through a differentiable formulation that preserves the quality of the analytical floorplan.
- **Evaluation (TILOS MacroPlacement)**: paired with an analytical placer, the pipeline matches or surpasses commercial and open-source macro placers in post-route timing and wirelength.

## GPU-Accelerated Placement (Industry)

During two R&D internships at **Cadence Design Systems**, this line of work moved analytical placement onto the GPU inside a commercial emulation flow.

- Integrated GPU-accelerated placement (**DREAMPlace**) into Palladium (Z3) design flows, achieving **6–12× speedup** over CPU baselines on multi-million-cell industrial designs while maintaining solution quality and convergence stability.
- Analyzed **CUDA kernel** performance and memory behavior for large-scale mixed-size placement workloads.
- Built interfaces bridging academic GPU-accelerated kernels with commercial flows, enabling heterogeneous CPU–GPU execution and rapid prototyping of ML-enhanced placement in production-like environments.

## Why It Matters

Legalization and placement acceleration are exactly the points where academic algorithms meet production reality. By preserving quality through legalization and delivering large speedups through GPU acceleration, this work provides reliable primitives that downstream engines — and an agentic design flow — can invoke with confidence.

## Related Publications

1. **Quality-Preserving Legalization for Analytical Floorplanning** — ICCAD 2026 (to appear)

## Future Directions

- Extending quality-preserving legalization from floorplanning to detailed placement and routing.
- Tighter coupling between GPU-accelerated placement and timing/congestion analysis.
- Legalization primitives exposed as reliable actions for an LLM-driven agentic design flow.
