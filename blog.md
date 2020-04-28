---
layout: page-blog
title: Blog
seo: 
    keywords: Light Of Science, News, Notifications
    description: New Notices and Notificatios from Light Of Science
img: /data/df.img
permalink: /blog/
#paginate: 
#    collection: news
#    per_page: 10
#    permalink: '/page:num/'
---
<!-- News page style-->
<link rel="stylesheet" href="/assets/css/page-blog.css">

{%include page-banner.html title="Blog" bg="blog-banner-background"%}

<div class="blog-content-wrapper">
    <div class="blog-content">
        {%include blog/blog-list.html %}
    </div>
</div>
