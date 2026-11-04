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
  - title: "ICCAD 2026 Paper"
    text: "<a href='/files/iccad2026-paper39.pdf'>Paper (PDF)</a><br><a href='/files/iccad2026-paper39-slides.pdf'>Slides (PDF)</a><br><a href='https://doi.org/10.1145/3831252.3833939'>DOI</a>"
---

## Project Overview

This project develops **physical-design methodology** and production-oriented flows that improve SoC **PPA** (power, performance, area) across placement, legalization, and floorplanning. The central theme is turning the continuous solutions produced by analytical engines into **legal, physically valid layouts** without sacrificing wirelength, area, or timing — and doing so at industrial scale.

## Core Contribution: Quality-Preserving Legalization (ICCAD 2026)

**Quality-Preserving Legalization for Analytical Floorplanning**
Yunqi He, You Li, Ruofan Huang, Hai Zhou
*IEEE/ACM International Conference on Computer-Aided Design (ICCAD), San Jose, CA, November 2026*

[Paper (PDF)](/files/iccad2026-paper39.pdf){: .btn .btn--primary}
[Slides (PDF)](/files/iccad2026-paper39-slides.pdf){: .btn .btn--primary}
[ACM DL / DOI](https://doi.org/10.1145/3831252.3833939){: .btn .btn--inverse}
[Publication page](/publication/2026-11-01-floorplan-legalization){: .btn .btn--inverse}

Talk: Monday, November 9, 2026, 13:30–15:00, San Jose Ballroom, in the session *Scalable Optimization for Floorplanning, Partitioning, and Chiplet-Based Design*.

### The problem

Electrostatics-based analytical placers (ePlace, RePlAce, DREAMPlace) have become the state of the art in macro placement research, but their floorplans leave **overlapping macros** that a legalization step must resolve. An analytical floorplan carries two kinds of information: the macro **positions** and the **topology** — which macro sits left of, right of, above, or below which. Both determine post-route PPA, yet existing legalizers minimize displacement only and leave the topology to chance.

<figure>
  <img src="/images/qp-legalization-topology.png" alt="Five data-cache macros of ariane133 after RePlAce, Greedy legalization, LP legalization, and our legalization">
  <figcaption>Five data-cache macros of ariane133. Greedy legalization flips three relative orders and gives the worst post-route slack; LP keeps the orders but doubles the displacement and needs a 44% larger die; ours keeps every order with the smallest displacement.</figcaption>
</figure>

### The method

The legalizer never reorders macros. It fixes the topology once, then optimizes only the sizes of the empty space between macros.

<figure>
  <img src="/images/qp-legalization-pipeline.png" alt="Pipeline: preparation, mosaic construction, MFTB, then iterative TBMF forward, loss, autograd, Adam">
  <figcaption>Preprocess once (padding, uniform shrinking, mosaic construction, MFTB), then iterate a differentiable TBMF forward model with gradient descent on the filler sizes.</figcaption>
</figure>

- **Twin binary trees (TBT)** — a non-redundant representation of mosaic floorplans (Yao et al.) that captures the complete adjacency information. The trees are extracted once with MFTB and then held fixed, so the topology is invariant **by construction**.
- **Preparation and mosaic construction** — macro padding makes the analytical floorplan spacing-aware; uniform shrinking removes overlaps with the largest common scale factor; an incremental mosaic builder inserts filler blocks so that every internal boundary ends in a T-junction.
- **Differentiable TBMF** — reconstructing coordinates from the trees is a longest-path computation on constraint graphs, i.e. only additions and `max` operations. Coordinates are therefore piecewise linear in the block sizes, and autograd propagates gradients through each `max` like a ReLU. Filler widths and heights are the only variables; the loss is the squared displacement of macro centers from the analytical floorplan, minimized with Adam.
- **Guarantees** — for any non-negative sizes the reconstructed floorplan has no overlaps (Theorem 1) and the relative positions of all blocks are unchanged (Theorem 2). Every iterate is a legal, topology-preserving floorplan, with no die expansion.

### Results

- **Against other legalizers (OpenROAD, all 8 macro-containing Nangate45 designs):** on the identical RePlAce output, our legalizer gives the lowest mean displacement on 7 of 8 designs and consistent post-route timing, while Greedy flips orders and breaks the flow on black_parrot, and LP needs a larger die on 6 of 8 designs (up to +44%).
- **End to end in OpenROAD:** RePlAce + our legalization achieves best or tied-best WNS/TNS on 7 of 8 designs and the shortest routed wirelength on 6 of 8 against Hier-RTLMP and TritonMacroPlace, and is 63–74× faster than TritonMacroPlace on ariane133/136.
- **Commercial flow (Cadence Innovus, TILOS MacroPlacement ariane133 and bp_quad, Nangate45 and ASAP7):** PPA comparable to Cadence CMP and shorter wirelength than Circuit Training in all four configurations, in 1–12 minutes on one CPU versus hours on 80 CPUs (SA) or 8 GPUs + 576 CPUs (Circuit Training).

<figure>
  <img src="/images/qp-legalization-bpquad-layouts.jpg" alt="Post-route bp_quad layouts for ours, CMP, SA, Circuit Training, and the human expert">
  <figcaption>Post-route bp_quad layouts (Nangate45, 220 macros): ours, Cadence CMP, simulated annealing, Circuit Training, and the human expert floorplan.</figcaption>
</figure>

## GPU-Accelerated Placement (Industry)

During two R&D internships at **Cadence Design Systems**, this line of work moved analytical placement onto the GPU inside a commercial emulation flow.

- Integrated GPU-accelerated placement (**DREAMPlace**) into Palladium (Z3) design flows, achieving **6–12× speedup** over CPU baselines on multi-million-cell industrial designs while maintaining solution quality and convergence stability.
- Analyzed **CUDA kernel** performance and memory behavior for large-scale mixed-size placement workloads.
- Built interfaces bridging academic GPU-accelerated kernels with commercial flows, enabling heterogeneous CPU–GPU execution and rapid prototyping of ML-enhanced placement in production-like environments.

## Why It Matters

Legalization and placement acceleration are exactly the points where academic algorithms meet production reality. By preserving quality through legalization and delivering large speedups through GPU acceleration, this work provides reliable primitives that downstream engines — and an agentic design flow — can invoke with confidence.

## Related Publications

1. **Quality-Preserving Legalization for Analytical Floorplanning** — Yunqi He, You Li, Ruofan Huang, Hai Zhou. ICCAD 2026. [PDF](/files/iccad2026-paper39.pdf) · [Slides](/files/iccad2026-paper39-slides.pdf) · [DOI](https://doi.org/10.1145/3831252.3833939)

## Future Directions

- Layout optimization with a generative model or an RL agent on top of the same differentiable legalization model.
- Hierarchical legalization with super-blocks for very large macro counts; first-class fence and region constraints.
- Tighter coupling between GPU-accelerated placement and timing/congestion analysis.
- Legalization primitives exposed as reliable actions for an LLM-driven agentic design flow.
