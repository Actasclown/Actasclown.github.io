---
layout: home
permalink: /papers/qp-legalization-iccad26/
title: "Quality-Preserving Legalization for Analytical Floorplanning (ICCAD 2026)"
excerpt: "Paper page: Quality-Preserving Legalization for Analytical Floorplanning, ICCAD 2026. PDF, slides, figures, and a short explanation of the method."
author_profile: false
---

<style>
.paper { max-width: 980px; margin: 0 auto; padding: 1.2em 22px 4em; color: var(--ink); }
.paper a { color: var(--brand); }
.paper__crumbs { display: flex; flex-wrap: wrap; gap: 0.4em 1.2em; margin: 0.6em 0 1.8em; font-size: 0.9em; color: var(--muted); }
.paper__crumbs a { text-decoration: none; font-weight: 600; }
.paper__venue { display: inline-block; margin-bottom: 0.9em; padding: 0.25em 0.8em; border-radius: 999px; background: var(--brand-tint); color: var(--brand); font-size: 0.8em; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; }
.paper h1 { font-size: clamp(1.7em, 3.6vw, 2.5em); line-height: 1.15; margin: 0 0 0.5em; letter-spacing: -0.01em; }
.paper__authors { font-size: 1.1em; margin: 0 0 0.25em; }
.paper__authors strong { color: var(--ink); }
.paper__affil { color: var(--muted); margin: 0 0 1.4em; }
.paper__links { display: flex; flex-wrap: wrap; gap: 0.6em; margin: 0 0 2.2em; }
.paper__links a { display: inline-flex; align-items: center; gap: 0.5em; padding: 0.6em 1.1em; border-radius: 999px; border: 1px solid var(--line); background: var(--surface); color: var(--ink); font-weight: 600; text-decoration: none; box-shadow: var(--shadow-sm); transition: transform 0.2s ease, border-color 0.2s ease; }
.paper__links a:hover { transform: translateY(-2px); border-color: var(--brand); }
.paper__links a.is-primary { background: var(--brand); border-color: var(--brand); color: #fff; }
.paper__stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 1em; margin: 0 0 2.4em; }
.paper__stat { padding: 1.1em 1.2em; border: 1px solid var(--line); border-radius: 16px; background: var(--surface); box-shadow: var(--shadow-sm); }
.paper__stat b { display: block; font-size: 1.9em; line-height: 1.1; color: var(--brand); margin-bottom: 0.25em; }
.paper__stat span { color: var(--ink-soft); font-size: 0.93em; }
.paper h2 { font-size: 1.45em; margin: 2em 0 0.7em; padding-top: 0.6em; border-top: 1px solid var(--line); }
.paper p, .paper li { color: var(--ink-soft); line-height: 1.65; }
.paper li { margin-bottom: 0.45em; }
.paper li strong, .paper p strong { color: var(--ink); }
.paper figure { margin: 1.4em 0 1.8em; }
.paper figure img { width: 100%; height: auto; border-radius: 12px; border: 1px solid var(--line); background: #fff; }
.paper figcaption { margin-top: 0.6em; font-size: 0.88em; color: var(--muted); line-height: 1.5; }
.paper__two { display: grid; grid-template-columns: 1fr 1fr; gap: 1.4em; align-items: start; }
@media (max-width: 720px) { .paper__two { grid-template-columns: 1fr; } }
.paper__talk { padding: 1.2em 1.4em; border-radius: 16px; background: var(--bg-alt); border: 1px solid var(--line); }
.paper__talk p { margin: 0.3em 0; }
.paper pre { background: var(--bg-alt); border: 1px solid var(--line); border-radius: 12px; padding: 1em 1.2em; font-size: 0.85em; overflow-x: auto; color: var(--ink); }
.paper__back { margin-top: 3em; padding-top: 1.2em; border-top: 1px solid var(--line); display: flex; flex-wrap: wrap; gap: 0.5em 1.5em; font-size: 0.95em; }
.paper__back a { font-weight: 600; text-decoration: none; }
</style>

<div class="paper" markdown="0">

<div class="paper__crumbs">
  <a href="/">← Yunqi He</a>
  <a href="/projects/physical-design-legalization/">Project: Physical Design Methodology &amp; Legalization</a>
  <a href="/publications/">All publications</a>
</div>

<span class="paper__venue">IEEE/ACM ICCAD 2026 · San Jose, CA</span>

<h1>Quality-Preserving Legalization for Analytical Floorplanning</h1>

<p class="paper__authors"><strong>Yunqi He</strong>, You Li, Ruofan Huang, Hai Zhou</p>
<p class="paper__affil">Northwestern University · NuLogiCS Research Group</p>

<div class="paper__links">
  <a class="is-primary" href="/files/iccad2026-paper39.pdf"><i class="fas fa-file-pdf"></i> Paper (PDF)</a>
  <a class="is-primary" href="/files/iccad2026-paper39-slides.pdf"><i class="fas fa-chalkboard"></i> Slides (PDF)</a>
  <a href="https://doi.org/10.1145/3831252.3833939"><i class="fas fa-link"></i> ACM Digital Library</a>
  <a href="#cite"><i class="fas fa-quote-right"></i> BibTeX</a>
</div>

<div class="paper__stats">
  <div class="paper__stat"><b>7 / 8</b><span>OpenROAD designs with best or tied-best post-route WNS and TNS vs. Hier-RTLMP and TritonMacroPlace</span></div>
  <div class="paper__stat"><b>63–74×</b><span>faster end to end than TritonMacroPlace on ariane133 / ariane136</span></div>
  <div class="paper__stat"><b>1–12 min</b><span>on one CPU in the Cadence flow, vs. hours on 80 CPUs (SA) or 8 GPUs + 576 CPUs (Circuit Training)</span></div>
  <div class="paper__stat"><b>0 overlaps</b><span>at every iteration: legal and topology-preserving by construction (Theorems 1 and 2)</span></div>
</div>

<h2>Abstract</h2>

<p>Floorplanning is a crucial step in VLSI physical design. Analytical floorplanning, which determines macro positions through electrostatic-based mixed-size placement, has become the most prevalent paradigm. However, the resulting floorplan contains inter-macro overlaps that must be resolved by a legalization step. Existing methods minimize displacement from the analytical floorplan without effective topological guidance, leading to inconsistent downstream quality. In this paper, we propose a new legalization workflow that preserves the high quality of analytical floorplanning. We leverage twin binary trees to capture the relation between adjacent blocks, and build a differentiable model to optimize their coordinates. Experiments on TILOS MacroPlacement benchmarks show that our method enables analytical floorplanning to match or surpass commercial and open-source macro placement tools in post-route timing and wirelength.</p>

<h2>Why topology matters</h2>

<p>Electrostatics-based analytical placers such as ePlace, RePlAce, and DREAMPlace produce high-quality floorplans, but the macros overlap and a legalizer has to resolve that. An analytical floorplan carries two kinds of information: the macro <strong>positions</strong>, and the <strong>topology</strong>, i.e. which macro sits left of, right of, above, or below which. Both determine post-route PPA. Existing legalizers minimize displacement only and leave the topology to chance.</p>

<figure>
  <img src="/images/qp-legalization-topology.png" alt="Five data-cache macros of ariane133 after RePlAce, Greedy legalization, LP legalization, and our legalization">
  <figcaption>Five data-cache macros (A–E) of ariane133. Greedy legalization (b) flips three relative orders and gives the worst post-route slack. LP (c) keeps every order but doubles the displacement and needs a 44% larger die to be feasible. Ours (d) keeps every order with the smallest displacement.</figcaption>
</figure>

<h2>Method</h2>

<p>The legalizer never reorders macros. It fixes the topology once with twin binary trees, then runs gradient descent on the only free variables left, the sizes of the filler blocks between macros.</p>

<figure>
  <img src="/images/qp-legalization-pipeline.png" alt="Pipeline: preparation, mosaic construction, MFTB, then iterative TBMF forward, loss, autograd, Adam">
  <figcaption>Pipeline on bp_fe_top. Preprocessing runs once: padding and uniform shrinking, incremental mosaic construction, and MFTB to extract the twin binary trees. Then each iteration runs the TBMF forward model, measures the squared displacement of macro centers, back-propagates through autograd, and takes an Adam step on the filler sizes.</figcaption>
</figure>

<ul>
  <li><strong>Twin binary trees.</strong> Mosaic floorplans correspond one-to-one with pairs of binary trees (Yao et al.). Unlike sequence pairs or B*-trees the representation is non-redundant and captures the complete adjacency information. The trees are extracted once with MFTB and held fixed, so the topology is invariant by construction.</li>
  <li><strong>Preparation and mosaic construction.</strong> Macro padding (an AutoDMP-style halo in the LEF) makes the analytical floorplan spacing-aware; uniform shrinking removes all overlaps with the largest common scale factor; an incremental mosaic builder inserts filler blocks so that every internal boundary ends in a T-junction, never a cross.</li>
  <li><strong>TBMF as a differentiable forward model.</strong> Reconstructing coordinates from the trees is a longest-path computation on horizontal and vertical constraint graphs, i.e. only additions and <code>max</code> operations. Coordinates are therefore piecewise linear in the block sizes, and each <code>max</code> routes the gradient to its current longest predecessor, like a ReLU. Macros keep their real sizes; filler widths and heights are the only variables; the loss is the squared displacement of macro centers from the analytical floorplan, minimized with Adam.</li>
  <li><strong>Guarantees.</strong> For any non-negative sizes the reconstructed floorplan has no overlaps (Theorem 1) and the relative positions of all blocks are unchanged (Theorem 2). Every iterate is a legal, topology-preserving floorplan, with no die expansion.</li>
</ul>

<div class="paper__two">
  <figure>
    <img src="/images/qp-legalization-tbt.png" alt="A six-block mosaic floorplan and its twin binary trees">
    <figcaption>A six-block mosaic floorplan (a) and its twin binary trees τ⁺ and τ⁻ (b).</figcaption>
  </figure>
  <figure>
    <img src="/images/qp-legalization-tbmf.png" alt="Augmented twin trees and the horizontal and vertical constraint graphs">
    <figcaption>Augmented trees with virtual leaves, and the constraint graphs G<sub>H</sub> and G<sub>V</sub> whose longest paths give the block coordinates.</figcaption>
  </figure>
</div>

<h2>Results</h2>

<ul>
  <li><strong>Against other legalizers</strong> (OpenROAD, all 8 macro-containing Nangate45 designs, identical RePlAce input): the lowest mean displacement on 7 of 8 designs with consistent post-route timing. Greedy legalization flips orders and breaks the downstream flow on black_parrot; LP keeps orders but needs a larger die on 6 of 8 designs, up to +44%.</li>
  <li><strong>End to end in OpenROAD:</strong> RePlAce + our legalization reaches best or tied-best WNS and TNS on 7 of 8 designs and the shortest routed wirelength on 6 of 8 against Hier-RTLMP and TritonMacroPlace, 63–74× faster than TritonMacroPlace on ariane133 and ariane136.</li>
  <li><strong>Commercial flow</strong> (Cadence Genus + Innovus, TILOS MacroPlacement ariane133 and bp_quad on Nangate45 and ASAP7): PPA comparable to Cadence CMP and shorter wirelength than Circuit Training in all four configurations, in 1–12 minutes on one CPU.</li>
  <li><strong>Ablation:</strong> macro padding plus the incremental mosaic builder cut mean displacement on ariane133 from 78.6 µm to 12.7 µm and the maximum from 311.9 µm to 80.9 µm. One Adam setting (learning rate 1.0, gradient clipping at 100, early stop at 0.1%) converges in a few hundred iterations on all ten benchmarks.</li>
</ul>

<figure>
  <img src="/images/qp-legalization-bpquad-layouts.jpg" alt="Post-route bp_quad layouts for ours, CMP, SA, Circuit Training, and the human expert">
  <figcaption>Post-route bp_quad layouts (Nangate45, 220 macros, 1.3 ns clock): ours, Cadence CMP, simulated annealing, Circuit Training, and the human expert floorplan. Our wirelength is within 5% of CMP and the human expert; SA and Circuit Training need about 25% more.</figcaption>
</figure>

<h2>Talk at ICCAD 2026</h2>

<div class="paper__talk">
  <p><strong>Session:</strong> Scalable Optimization for Floorplanning, Partitioning, and Chiplet-Based Design</p>
  <p><strong>When:</strong> Monday, November 9, 2026, 13:30–15:00</p>
  <p><strong>Where:</strong> San Jose Ballroom, San Jose, CA</p>
  <p><a href="/files/iccad2026-paper39-slides.pdf">Download the slides (PDF)</a></p>
</div>

<h2 id="cite">Citation</h2>

<pre>@inproceedings{he2026qplegalization,
  title     = {Quality-Preserving Legalization for Analytical Floorplanning},
  author    = {He, Yunqi and Li, You and Huang, Ruofan and Zhou, Hai},
  booktitle = {Proceedings of the IEEE/ACM International Conference on Computer-Aided Design (ICCAD)},
  year      = {2026},
  doi       = {10.1145/3831252.3833939}
}</pre>

<p>Contact: <a href="mailto:yunqi.he@u.northwestern.edu">yunqi.he@u.northwestern.edu</a></p>

<div class="paper__back">
  <a href="/">← Back to Yunqi He's home page</a>
  <a href="/projects/physical-design-legalization/">Project page</a>
  <a href="/publications/">All publications</a>
</div>

</div>
