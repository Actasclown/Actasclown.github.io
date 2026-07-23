---
title: "Physical-Aware eFPGA Redaction for Secure and Efficient Hardware IP Protection"
collection: publications
permalink: /publication/2026-03-01-efpga-redaction
excerpt: 'A physical-aware eFPGA redaction flow that uses GNN-guided region selection and OpenFPGA-based fabric generation to protect hardware IP while balancing area, timing, and security under explicit budgets.'
date: 2026-03-01
venue: 'Design, Automation & Test in Europe Conference & Exhibition (DATE)'
project: 'logic-locking-security'
authors: '<strong>Yunqi He</strong>, You Li, Ruofan Huang, Guannan Zhao, Hai Zhou'
---

**Authors:** **<span style="color: #2563eb;">Yunqi He</span>**, You Li, Ruofan Huang, Guannan Zhao, Hai Zhou

**Venue:** Design, Automation & Test in Europe Conference & Exhibition (DATE), IEEE, 2026

---

eFPGA redaction protects hardware IP by mapping selected logic onto a reconfigurable fabric, but the choice of what to redact must respect physical-design constraints to remain efficient. This work presents a **physical-aware eFPGA redaction** flow that treats region selection as a graph-partitioning problem: GNN models over gate-level netlists and placement features guide constrained region selection with embedding-driven clustering under area and timing budgets. A multi-stage ML–EDA flow interleaves GNN-guided decisions with Yosys, OpenSTA, and OpenROAD, and closes the loop with OpenFPGA-based fabric generation, yielding an end-to-end pipeline for secure, verifiable design transformations that balances area, timing, and security under explicit budgets.
