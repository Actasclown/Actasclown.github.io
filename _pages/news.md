---
title: "News & Updates"
permalink: /news/
author_profile: true
---

Here's a comprehensive list of my recent activities, publications, and academic service.

<div class="news-list-compact">
<ul>
{% assign sorted_news = site.data.news | sort: 'date' | reverse %}
{% for item in sorted_news %}
<li><strong>{{ item.display_date }}</strong>. {{ item.content }}</li>
{% endfor %}
</ul>
</div>

---

*For recent highlights, visit the [homepage](/) or explore my [research projects](/projects/) and [publications](/publications/).*