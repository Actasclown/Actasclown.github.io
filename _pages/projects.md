---
layout: archive
title: "Research Projects"
permalink: /projects/
author_profile: true
---

My research builds **physical-design methodology** and **ML-driven automation** to improve SoC **PPA** (power, performance, area) across placement, legalization, timing, and routing. I emphasize robust, reliable design flows — and apply data science and machine learning where it moves power, performance, and area — culminating in an **agentic system** that drives the full physical-design flow.

<div class="projects-grid">

<div class="project-card">
  <span class="project-card__eyebrow"><i class="fas fa-microchip"></i> Physical Design Methodology &amp; Legalization</span>
  <h3>Quality-Preserving Legalization &amp; GPU-Accelerated Placement</h3>
  <p><strong>Core focus:</strong> turning continuous analytical placements into legal, physically valid layouts without sacrificing wirelength, area, or timing — at industrial scale.</p>
  <ul>
    <li><strong>TwinTree legalizer:</strong> quality-preserving legalization with built-in topological invariants and a TAG graph abstraction <span class="pub-tag">ICCAD 2026</span></li>
    <li><strong>GPU-accelerated placement:</strong> DREAMPlace in the Cadence Palladium flow — 6–12× speedup on multi-million-cell designs</li>
    <li><strong>Production-ready primitives</strong> validated on industrial-scale benchmarks</li>
  </ul>
  <p class="project-card__cta"><a href="/projects/physical-design-legalization/">Explore →</a></p>
</div>

<div class="project-card">
  <span class="project-card__eyebrow"><i class="fas fa-project-diagram"></i> ML for Physical Design</span>
  <h3>Graph Neural Networks for Placement, Congestion &amp; Floorplanning</h3>
  <p><strong>Core focus:</strong> learning cell-, net-, and layout-level representations directly from the netlist to guide classical engines.</p>
  <ul>
    <li><strong>Timing-driven placement:</strong> GNN-based initialization that warm-starts the analytical placer <span class="pub-tag">TODAES 2026</span></li>
    <li><strong>Routing congestion prediction</strong> for the Cadence Palladium (Z4) emulator</li>
    <li><strong>Data-driven floorplanning</strong> trained on the FloorSet dataset of real-world SoC layouts</li>
  </ul>
  <p class="project-card__cta"><a href="/projects/ml-for-physical-design/">Explore →</a></p>
</div>

<div class="project-card">
  <span class="project-card__eyebrow"><i class="fas fa-robot"></i> Agentic Design Automation</span>
  <h3>An Agentic System for End-to-End VLSI Physical Design</h3>
  <p><strong>Core focus:</strong> an LLM-driven agent that plans and executes the full floorplan-to-route flow under unified PPA objectives <em>(Ph.D. dissertation)</em>.</p>
  <ul>
    <li><strong>Agent over a real flow:</strong> orchestrates ML engines and commercial EDA tools across floorplanning, placement, legalization, routing</li>
    <li><strong>Grounded in reliable primitives:</strong> invokes the TwinTree legalizer and GNN-guided engines</li>
    <li><strong>Physically valid states:</strong> topological invariants and solver-based checking keep every action legal</li>
  </ul>
  <p class="project-card__cta"><a href="/projects/agentic-eda/">Explore →</a></p>
</div>

<div class="project-card">
  <span class="project-card__eyebrow"><i class="fas fa-shield-alt"></i> Hardware Security &amp; IP Protection</span>
  <h3>Physical-Aware Redaction, Logic Locking &amp; Secure Accelerators</h3>
  <p><strong>Core focus:</strong> protecting hardware IP across the stack, and extending circuit-protection techniques to secure AI systems.</p>
  <ul>
    <li><strong>eFPGA redaction:</strong> GNN-guided, physical-aware redaction as graph partitioning <span class="pub-tag">DATE 2026</span></li>
    <li><strong>Logic locking:</strong> ObfusLock, DE2, and DNN logic-locking analysis</li>
    <li><strong>Secure AI accelerators:</strong> LLA — logic-locked accelerators for generative models <span class="pub-tag">AAAI 2025</span></li>
  </ul>
  <p class="project-card__cta"><a href="/projects/logic-locking-security/">View details →</a></p>
</div>

<div class="project-card">
  <span class="project-card__eyebrow"><i class="fas fa-check-double"></i> Formal Verification &amp; Equivalence Checking</span>
  <h3>Rigorous Verification for Design Transformations</h3>
  <p><strong>Core focus:</strong> automated equivalence checking for sequential, non-cycle-accurate transformations, plus formal reasoning about learned models.</p>
  <ul>
    <li><strong>SE3:</strong> sequential equivalence checking with no cycle-accuracy or latch-mapping assumptions <span class="pub-tag">DAC 2023</span></li>
    <li><strong>RE3:</strong> automatic discovery of refinement relations, applied to LLM-generated RTL <span class="pub-tag">DAC 2025</span></li>
    <li><strong>Global robustness:</strong> certifying robustness of deep neural networks</li>
  </ul>
  <p class="project-card__cta"><a href="/projects/formal-verification-security/">View details →</a></p>
</div>

<div class="project-card">
  <span class="project-card__eyebrow"><i class="fas fa-heartbeat"></i> Cross-Domain: AI for Healthcare</span>
  <h3>Transferable ML Beyond Hardware</h3>
  <p><strong>Core focus:</strong> applying ML expertise to real-world problems beyond hardware.</p>
  <ul>
    <li><strong>Multimodal medical diagnosis:</strong> Bayesian networks + deep learning for skin-disease detection</li>
    <li><strong>19.3% accuracy improvement</strong> over pure deep learning <span class="pub-tag">ISBI 2023 · BIBM 2024</span></li>
  </ul>
  <p class="project-card__cta"><a href="/projects/ai-medical-diagnosis/">View details →</a></p>
</div>

</div>

---

## Research Vision

I believe **physical design and machine learning are mutually empowering**. ML gives classical engines better starting points and predictions; a legalizer with strong invariants gives ML a safe, physically valid space to explore. My goal is to unify these into an **agentic design flow** — one that drives floorplanning to routing under unified PPA objectives, invoking reliable primitives and commercial tools while staying provably legal.

**Key insights:**
- **PPA-driven:** every technique is judged by whether it moves power, performance, and area
- **Physical-awareness matters:** EDA quality depends heavily on physical-awareness in ML representations
- **From primitives to agents:** reliable engines (legalization, GNN placement) compose into an autonomous flow

---

*This research is conducted at the [NuLogiCS Research Group](http://users.eecs.northwestern.edu/~haizhou/nulogics.html), Northwestern University, in collaboration with Cadence Design Systems and industry partners.*
