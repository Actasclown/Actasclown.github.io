---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<p><a class="cv-download-btn" href="{{ base_path }}/files/CV-Yunqi-26.pdf" target="_blank"><i class="fas fa-fw fa-download"></i> Download full CV (PDF)</a></p>

Education
======
* Ph.D. Candidate in Computer Engineering, Northwestern University, Jan. 2022 -- Dec. 2026 (expected)
  * Advised by Prof. Hai Zhou, NuLogiCS Research Group
* M.S. in Computer Engineering, Northwestern University, Sept. 2019 -- Dec. 2021
* B.S. in Computer Science, Peking University, Sept. 2013 -- Jun. 2017

Research Summary
======
I build **physical-design methodology** and ML-driven automation to improve SoC **PPA** across placement, legalization, timing, and routing, emphasizing robust, reliable design flows and applying data science / machine learning where it moves power, performance, and area. Selected directions:

* **Placement & legalization** — a TwinTree-based quality-preserving legalizer and GPU-accelerated analytical placement that turn continuous placements into legal layouts while preserving wirelength, area, and timing.
* **ML for physical design** — GNNs for timing-driven placement initialization and for routing-congestion prediction, learning directly from netlist and layout features.
* **Agentic design automation** — an LLM-driven agent that orchestrates ML-driven engines and commercial EDA tools across the floorplan-to-route flow under unified PPA objectives.

Work Experience
======
* **Cadence Design Systems** — Research & Development Intern, Jun. 2026 -- Dec. 2026
  * Building GNN-based routing congestion prediction for the Palladium (Z4) emulator, forecasting congestion from netlist and placement features to guide routing and improve routability on industrial designs.
  * Returning intern extending prior GPU placement-acceleration work into the routing stage of the design flow.
* **Cadence Design Systems** — Research & Development Intern, Jun. 2024 -- Sept. 2024
  * Integrated GPU-accelerated placement (DREAMPlace) into Palladium (Z3) design flows, achieving 6--12× speedup over CPU-based baselines on multi-million-cell industrial designs while maintaining solution quality and convergence stability.
  * Analyzed CUDA kernel performance and memory behavior to identify optimization opportunities for large-scale mixed-size placement workloads.
  * Developed interfaces bridging academic GPU-accelerated kernels with commercial flows, enabling heterogeneous CPU–GPU execution and rapid prototyping of ML-enhanced placement in production-like environments.

Selected Research Projects
======
* **Ph.D. Dissertation: An Agentic System for End-to-End VLSI Physical Design** (expected Dec. 2026) — an LLM-driven agent that plans and executes the full physical-design flow (floorplanning, placement, legalization, routing), invoking ML-driven engines and commercial tools under unified PPA objectives, and staying on physically valid states via built-in topological invariants and solver-based checking.
* **Quality-Preserving Legalization for Analytical Floorplanning** (ICCAD 2026) — a TwinTree representation of floorplan topology with a TAG graph abstraction, plus a quality-preserving legalization procedure that resolves overlaps and boundary violations while preserving wirelength and area, validated on industrial-scale benchmarks.
* **GNN-Guided Physical Design: Timing-Driven Placement & Floorplanning** (TODAES 2026) — GNNs that learn cell- and net-level embeddings to produce timing-aware initial placements, extended toward a data-driven, agile ML-based floorplanning tool trained on the FloorSet dataset.
* **ML-Guided Hardware Automation & Secure Redaction Pipelines** — GNN-guided constrained region selection cast as graph partitioning, in a multi-stage ML–EDA flow with Yosys, OpenSTA, OpenROAD, and OpenFPGA fabric generation.
* **Automated Verification for Hardware Design Transformations** — equivalence-checking flows for sequential, non-cycle-accurate transformations around commercial tools (Synopsys Hector, Cadence Jasper, Mentor SLEC) using refinement mapping.

Technical Skills
======
* **Scripting & Programming**: Python, Tcl, C/C++, Verilog/SystemVerilog/VHDL
* **Physical Design & PPA**: physical-design & production flows, placement & routing (Cadence Innovus, OpenROAD, DREAMPlace), cell legalization, static timing analysis (OpenSTA), congestion analysis, logic synthesis (Cadence Genus, Synopsys DC, Yosys)
* **Data Science & ML**: PyTorch, graph neural networks (GNNs), LLM-based agents applied to PD/PPA; CUDA, GPU acceleration
* **Verification**: equivalence checking & formal methods (Cadence Jasper, Synopsys Hector, Mentor SLEC)
* **Systems**: Linux, Git, Docker; multithreading, GPU clusters

Awards
======
* Northwestern University Terminal Year Fellowship (2026)
* Northwestern University Ph.D. Fellowship (2022)
* "Excellent Graduation Design" (top 5%) of EECS Dept., Peking University (2017)
* 3rd Prize, ACM Programming Contest of Peking University (2015)

Teaching & Service
======
* **Graduate Teaching Assistant** — Design Automation in VLSI, Advanced Digital Design, Computer System Software, Introduction to Computer Engineering (see [Service & Teaching](/service/) for details).
* **Conference Reviewer** — AAAI 2027 (Program Committee), ICCAD 2026, ASP-DAC 2026, AAAI 2026, HOST 2024/2025.

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
