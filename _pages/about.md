---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

This is Yunqi He's home on the web!

About Me
======

- I am a Ph.D. candidate in the [NuLogiCS Research Group](http://users.eecs.northwestern.edu/~haizhou/nulogics.html) of the [Electrical and Computer Engineering Department](https://www.mccormick.northwestern.edu/electrical-computer/) at Northwestern University, advised by Dr. [Hai Zhou](http://users.eecs.northwestern.edu/~haizhou/) (expected graduation Dec. 2026).
- My research builds **physical-design methodology** and **ML-driven automation** to improve SoC **PPA** (power, performance, area) across placement, legalization, timing, and routing — emphasizing robust, reliable design flows.
- Selected directions: a **TwinTree-based quality-preserving legalizer** and GPU-accelerated analytical placement; **GNNs** for timing-driven placement and routing-congestion prediction; and an **LLM-driven agent** that orchestrates ML engines and commercial EDA tools across the floorplan-to-route flow.
- I have interned twice at **Cadence Design Systems** (R&D), integrating GPU-accelerated placement into the Palladium flow and building GNN-based congestion prediction for routing.
- I received a B.S. in Computer Science in 2017 from [Peking University](https://english.pku.edu.cn/), Beijing, China, and an M.S. in Computer Engineering from Northwestern in 2021.
- I am actively looking for full-time opportunities in physical design, design automation, and ML-for-EDA.

Recent News
======
{% assign sorted_news = site.data.news | sort: 'date' | reverse %}
{% assign recent_news = sorted_news | slice: 0, 6 -%}
{%- for item in recent_news %}
- **{{ item.display_date }}**. {{ item.content }}
{%- endfor %}

[View all news & updates →](/news/)


