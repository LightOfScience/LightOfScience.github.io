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

{%include page-banner.html title="News & Notifications" bg="news-banner-background"%}

<div class="content-wrapper">
    <div class="content">
        {%include news/news-list.html %}
    </div>
</div>
