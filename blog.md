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

<div class="page-banner-wrapper">
    <div class="page-banner-container">
        <div class="page-img-wrapper">
            <img class="page-banner-img" src="/media/blog.jpg" alt="">
        </div>
    </div>
    <h5 class="page-banner-header">Blog</h5>
</div>

<div class="blog-content-wrapper">
    <div class="blog-content">
        {%include blog/blog-list.html %}
    </div>
</div>
