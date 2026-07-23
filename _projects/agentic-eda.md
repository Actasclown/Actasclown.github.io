---
title: "Agentic Design Automation"
excerpt: "An LLM-driven agent that plans and executes the full physical-design flow — floorplanning, placement, legalization, and routing — invoking ML engines and commercial EDA tools under unified PPA objectives while staying on physically valid states."
date: 2025-06-01
header:
  teaser: "/images/ml-eda-teaser.jpg"
sidebar:
  - title: "Project Duration"
    text: "2025 - Present (Ph.D. dissertation)"
  - title: "Collaboration"
    text: "NuLogiCS Research Group, Northwestern University"
  - title: "Keywords"
    text: "LLM Agents, Agentic EDA, Physical Design, PPA, Design Flow Automation"
---

## Project Overview

This is the umbrella of my Ph.D. dissertation, **An Agentic System for End-to-End VLSI Physical Design**. The central idea: an **LLM-driven agent** that plans and executes the full physical-design flow — floorplanning, placement, legalization, and routing — by invoking ML-driven engines and commercial tools under unified **PPA** objectives.

## Key Ideas

### Agent Over a Real Design Flow
The agent orchestrates the floorplan-to-route flow, deciding which engine or tool to invoke at each stage and how to trade off power, performance, and area, rather than following a fixed script.

### Grounded in Reliable Primitives
The agent is grounded in core contributions it invokes as dependable building blocks:
- a **TwinTree-based quality-preserving legalizer** (ICCAD 2026), and
- **GNN-guided** design engines for timing-driven placement and floorplanning.

### Staying on Physically Valid States
Agent actions are kept on **physically valid states** through built-in topological invariants (from the TwinTree representation) and solver-based checking of constraint violations — so autonomous exploration never drifts into illegal layouts.

## Why It Matters

Modern design flows stitch together many specialized engines and commercial tools, each with its own knobs. An agent that reasons over the whole flow — while being constrained to physically valid states and unified PPA objectives — points toward more automated, adaptive, and reliable design closure.

## Building Blocks

- **Legalization**: [Physical Design Methodology & Legalization](/projects/physical-design-legalization/)
- **ML engines**: [ML for Physical Design](/projects/ml-for-physical-design/)

## Future Directions

- Broader tool coverage across the floorplan-to-route flow.
- Learned policies for engine/tool selection under PPA budgets.
- Verifiable guarantees on agent actions via invariants and solver-based checking.
