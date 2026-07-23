---
title: "Quality-Preserving Legalization for Analytical Floorplanning"
collection: publications
permalink: /publication/2026-11-01-floorplan-legalization
excerpt: 'A TwinTree-based quality-preserving legalizer that resolves overlaps and boundary violations from analytical floorplanning while staying close to the placer''s solution, preserving wirelength and area on industrial-scale benchmarks.'
date: 2026-11-01
venue: 'International Conference on Computer-Aided Design (ICCAD)'
project: 'physical-design-legalization'
authors: '<strong>Yunqi He</strong>, You Li, Ruofan Huang, Hai Zhou'
---

**Authors:** **<span style="color: #2563eb;">Yunqi He</span>**, You Li, Ruofan Huang, Hai Zhou

**Venue:** International Conference on Computer-Aided Design (ICCAD), IEEE/ACM, 2026 — *To appear*

---

Analytical floorplanning produces high-quality continuous solutions, but those solutions typically contain overlaps and boundary violations that must be removed before they are physically usable. This work presents a quality-preserving legalization approach that turns an analytical floorplan into a legal layout while staying close to the placer's original solution. It is built on a **TwinTree** representation of floorplan topology that supplies built-in topological invariants, with a **TAG** graph abstraction layered on TwinTree to capture adjacency and geometric relationships among modules. The legalization procedure resolves overlaps and boundary violations while preserving wirelength and area, and it integrates with analytical floorplanning and GPU-accelerated backends to provide a physical-aware legalization primitive validated on industrial-scale benchmarks.
