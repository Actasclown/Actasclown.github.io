---
layout: home
permalink: /
title: ""
excerpt: "Yunqi He — physical-design methodology and machine learning for EDA."
redirect_from:
  - /about/
  - /about.html
---

<section class="hero">
  <p class="hero__eyebrow reveal">Ph.D. Candidate · Northwestern University</p>
  <h1 class="hero__title reveal">Yunqi He</h1>
  <p class="hero__lead reveal">Physical-design methodology &amp; ML-driven automation for SoC&nbsp;PPA.</p>
  <p class="hero__sub reveal">I build quality-preserving legalization, GPU-accelerated placement, and GNN- and agent-driven engines that drive the full floorplan-to-route flow — turning research primitives into reliable, production-grade design automation.</p>
  <div class="hero__cta reveal">
    <a class="btn-apple" href="/projects/">Explore research</a>
    <a class="btn-apple btn-apple--ghost" href="/files/CV-Yunqi-26.pdf">Download CV</a>
  </div>
  <div class="hero__links reveal">
    <a href="{{ site.author.googlescholar }}">Google Scholar</a>
    <a href="https://github.com/{{ site.author.github }}">GitHub</a>
    <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}">LinkedIn</a>
    <a href="mailto:{{ site.author.email }}">Email</a>
  </div>
</section>

<section class="home-section home-section--alt">
  <div class="home-wrap">
    <h2 class="home-h2 reveal">Research</h2>
    <p class="home-lead reveal">Improving SoC PPA across placement, legalization, timing, and routing — and composing reliable engines into an agentic design flow.</p>
    <div class="pillars">
      <div class="pillar reveal">
        <div class="pillar__icon"><i class="fas fa-microchip"></i></div>
        <h3>Physical Design &amp; Legalization</h3>
        <p>A TwinTree quality-preserving legalizer and GPU-accelerated placement that turn continuous placements into legal, high-quality layouts at industrial scale.</p>
        <a href="/projects/physical-design-legalization/">Learn more →</a>
      </div>
      <div class="pillar reveal">
        <div class="pillar__icon"><i class="fas fa-project-diagram"></i></div>
        <h3>ML for Physical Design</h3>
        <p>Graph neural networks for timing-driven placement initialization, routing-congestion prediction, and data-driven floorplanning.</p>
        <a href="/projects/ml-for-physical-design/">Learn more →</a>
      </div>
      <div class="pillar reveal">
        <div class="pillar__icon"><i class="fas fa-robot"></i></div>
        <h3>Agentic Design Automation</h3>
        <p>An LLM-driven agent that plans and executes the full floorplan-to-route flow under unified PPA objectives, staying on physically valid states.</p>
        <a href="/projects/agentic-eda/">Learn more →</a>
      </div>
    </div>
  </div>
</section>

<section class="home-section">
  <div class="home-wrap">
    <div class="stats reveal">
      <div class="stat"><span class="stat__num">10+</span><span class="stat__label">Publications</span></div>
      <div class="stat"><span class="stat__num">2×</span><span class="stat__label">Cadence R&amp;D Intern</span></div>
      <div class="stat"><span class="stat__num">ICCAD ’26</span><span class="stat__label">Latest — legalization</span></div>
      <div class="stat"><span class="stat__num">AAAI ’27</span><span class="stat__label">Program Committee</span></div>
    </div>
  </div>
</section>

<section class="home-section home-section--alt">
  <div class="home-wrap">
    <h2 class="home-h2 reveal">Recent news</h2>
    <div class="news-list-compact reveal">
    <ul>
    {% assign sorted_news = site.data.news | sort: 'date' | reverse %}
    {% assign recent_news = sorted_news | slice: 0, 6 %}
    {% for item in recent_news %}
      <li><strong>{{ item.display_date }}</strong>. {{ item.content }}</li>
    {% endfor %}
    </ul>
    </div>
    <p class="reveal" style="text-align:center;margin-top:1.5em;"><a class="home-more" href="/news/">All news &amp; updates →</a></p>
  </div>
</section>

<section class="home-section home-cta">
  <div class="home-wrap reveal">
    <h2>Let’s build better silicon.</h2>
    <p>I’m looking for full-time roles in physical design, design automation, and ML-for-EDA.</p>
    <div class="hero__cta">
      <a class="btn-apple" href="mailto:{{ site.author.email }}">Get in touch</a>
      <a class="btn-apple btn-apple--ghost" href="/cv/">View CV</a>
    </div>
  </div>
</section>
