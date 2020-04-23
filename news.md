---
layout: page-news
title: News & Notifications
seo: 
    keywords: Light Of Science, News, Notifications
    description: New Notices and Notificatios from Light Of Science
img: /data/df.img
permalink: /news/
#paginate: 
#    collection: news
#    per_page: 10
#    permalink: '/page:num/'
---
<!-- News page style-->
<link rel="stylesheet" href="/assets/css/page-news.css">

<div class="page-banner-wrapper">
    <div class="page-banner-container">
        <div class="page-img-wrapper">
            <img class="page-banner-img" src="{{site.data.page-banner-background.news-banner-background}}" alt="">
        </div>
    </div>
    <h5 class="page-banner-header">News & Notifications</h5>
</div>

<div class="news-content-wrapper">
    <div class="news-content">
        {%include news/news-list.html %}
    </div>
</div>
