/* NASA Daily Image API -START */
$.getJSON("https://api.nasa.gov/planetary/apod?api_key=9MMPtpLjuZpqBVofZOguKFtSaldUhloAfFacQIbh", function(data){

    var NASAimgURL = data.url;
    var NASAimgURLHD = data.hdurl;
    var NASAimgTitle = data.title;
    var NASAimgDescription = data.explanation;
    var NASAimgDate = data.Date;
    var NASAimgCopyright = "Image from NASA Ⓒ " + data.copyright;

    $('.NASAimg').attr('src',NASAimgURL);
    $('.NASAimgHD').attr('download',NASAimgTitle);
    $('.NASAimgHD').attr('href',NASAimgURLHD);
    $('.NASAimgTitle').append(NASAimgTitle);
    $('.NASAimgDescription').append(NASAimgDescription);
    $('.NASAimgDate').append(NASAimgDate);
    $('.NASAimgCopyright').append(NASAimgCopyright);
});
/* NASA Daily Image API -END */

/* GitHub API -START */
$.getJSON("https://api.github.com/repos/LightOfScience/LightOfScience.tk/releases", function(data){

    var websiteReleaseVersion = data[0].tag_name;
    var websiteReleaseComment = data[0].name;
    var websitePublishTime = data[0].published_at;

    $('.web-ver').append("Website Version: "+ websiteReleaseVersion + "|" + websiteReleaseComment + " | Published at: " + websitePublishTime);

});
/* GitHub API -END */