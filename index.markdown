---
layout: page-home
title: Light Of Science - Science for Society | Science for Man | Science in Thinking
seo: 
    keywords: sadf,asdf
    description:
img: /data/df.img
---

{% include home/front-page-carousel.html %}
{% include home/front-page-news.html %} 

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
