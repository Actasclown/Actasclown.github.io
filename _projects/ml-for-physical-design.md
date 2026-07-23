---
title: "ML for Physical Design"
excerpt: "Graph neural networks that learn directly from netlist and layout features — timing-aware placement initialization, routing-congestion prediction, and data-driven floorplanning trained on real-world SoC layouts."
date: 2025-01-01
header:
  teaser: "/images/ml-eda-teaser.jpg"
sidebar:
  - title: "Project Duration"
    text: "2025 - Present"
  - title: "Collaboration"
    text: "NuLogiCS Research Group; Cadence Design Systems"
  - title: "Keywords"
    text: "Graph Neural Networks, Timing-Driven Placement, Congestion Prediction, Floorplanning"
---

## Project Overview

This project applies **graph neural networks** to core physical-design tasks, learning cell-, net-, and layout-level representations directly from the netlist rather than relying on hand-crafted heuristics. The goal is to move PPA where it matters — timing, routability, and convergence — by giving classical engines better starting points and better predictions.

## Timing-Driven Placement Initialization

**Graph Neural Network Based Initialization for Timing Driven Placement** (TODAES 2026) frames placement initialization as node-level prediction on the netlist graph.

- GNNs learn cell- and net-level embeddings that produce **timing-aware initial placements**.
- The learned seed **warm-starts** the analytical placer, cutting placement iterations and improving post-placement timing over conventional initialization.
- Improves downstream timing and convergence without changing the underlying placer.

## Routing-Congestion Prediction (Industry)

As a returning R&D intern at **Cadence Design Systems**, this work builds **GNN-based routing congestion prediction** for the Palladium (Z4) emulator — forecasting congestion from netlist and placement features to guide routing and improve routability on industrial designs, extending prior GPU placement-acceleration work into the routing stage.

## Data-Driven Floorplanning

The GNN line is being extended to floorplanning: a **data-driven, agile ML-based floorplanning tool** that learns from the **FloorSet** dataset of real-world SoC layouts to guide block placement. Paired with the TwinTree legalizer, it serves as the floorplanning engine within the dissertation's end-to-end agentic flow.

## Related Publications

1. **Graph Neural Network Based Initialization for Timing Driven Placement** — TODAES 2026

## Future Directions

- Unified GNN representations shared across placement, floorplanning, and routing stages.
- Congestion- and timing-aware learning integrated directly into GPU-accelerated engines.
- ML engines exposed as callable primitives for the agentic design-automation system.
