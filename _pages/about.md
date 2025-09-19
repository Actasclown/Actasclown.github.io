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

- I am a research assistant in the [NuLogiCS Research Group](http://users.eecs.northwestern.edu/~haizhou/nulogics.html) of [Electrical and Computer Engineering Department](https://www.mccormick.northwestern.edu/electrical-computer/) advised by Dr. [Hai Zhou](http://users.eecs.northwestern.edu/~haizhou/) at Northwestern University.
- I received a Bachelor of Sicence in Computer Science in 2017 from [Peking University](https://english.pku.edu.cn/), Beijing, China.
- My research lies at the intersection of Machine Learning and Electronic Design Automation (EDA), with a focus on hardware security.
- I am actively looking for opportunities for academic cooperation and innovation and entrepreneurship.

Recent News
======
{% assign sorted_news = site.data.news | sort: 'date' | reverse %}
{% assign recent_news = sorted_news | slice: 0, 6 -%}
{%- for item in recent_news %}
- **{{ item.display_date }}**. {{ item.content }}
{%- endfor %}

[View all news & updates →](/news/)


