---
layout: page-publication
title: Light Of Science - Science for Society | Science for Man | Science in Thinking
seo: 
    keywords: sadf,asdf
    description:
img: /data/df.img
permalink: /publications/
---
<div>

    {%for publication in site.publications%}
    {{publication.image}}
    <a href="{{publication.url}}">link</a>
    
{%endfor%}
</div>

<div>

    {%for publication in site.prakriti%}
    {{publication.image}}
    <a href="{{publication.url}}">link</a>
    
{%endfor%}
</div>