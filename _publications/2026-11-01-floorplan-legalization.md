---
title: "Quality-Preserving Legalization for Analytical Floorplanning"
collection: publications
permalink: /publication/2026-11-01-floorplan-legalization
excerpt: 'A new legalization workflow that preserves the quality of analytical floorplanning: twin binary trees capture the relation between adjacent blocks and a differentiable model optimizes their coordinates, matching or surpassing commercial and open-source macro placers on the TILOS MacroPlacement benchmarks in post-route timing and wirelength.'
date: 2026-11-01
venue: 'International Conference on Computer-Aided Design (ICCAD)'
project: 'physical-design-legalization'
authors: '<strong>Yunqi He</strong>, You Li, Ruofan Huang, Hai Zhou'
paperurl: '/files/iccad2026-paper39.pdf'
# The publications list links the title straight to the paper page, and the
# entry's own URL redirects there, so the rich page is the single source.
link: /papers/qp-legalization-iccad26/
redirect_to: /papers/qp-legalization-iccad26/
---

**Authors:** **<span style="color: #2563eb;">Yunqi He</span>**, You Li, Ruofan Huang, Hai Zhou

**Venue:** IEEE/ACM International Conference on Computer-Aided Design (ICCAD), San Jose, CA, November 2026

**Download:** [Paper (PDF)](/files/iccad2026-paper39.pdf) · [Slides (PDF)](/files/iccad2026-paper39-slides.pdf) · [ACM Digital Library](https://doi.org/10.1145/3831252.3833939)

**Paper page:** [figures, slides, and BibTeX](/papers/qp-legalization-iccad26/) · **Project:** [Physical Design Methodology & Legalization](/projects/physical-design-legalization/)

---

Floorplanning is a crucial step in VLSI physical design. Analytical floorplanning, which determines macro positions through electrostatic-based mixed-size placement, has become the most prevalent paradigm. However, the resulting floorplan contains inter-macro overlaps that must be resolved by a legalization step. Existing methods minimize displacement from the analytical floorplan without effective topological guidance, leading to inconsistent downstream quality. In this paper, we propose a new legalization workflow that preserves the high quality of analytical floorplanning. We leverage twin binary trees to capture the relation between adjacent blocks, and build a differentiable model to optimize their coordinates. Experiments on TILOS MacroPlacement benchmarks show that our method enables analytical floorplanning to match or surpass commercial and open-source macro placement tools in post-route timing and wirelength.
