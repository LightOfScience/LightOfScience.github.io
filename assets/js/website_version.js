$.getJSON("https://api.github.com/repos/LightOfScience/LightOfScience.tk/releases", function(data){
    var websiteReleaseVersion = data[0].tag_name;
    var websiteReleaseComment = data[0].name;
    var websitePublishTime = data[0].published_at;
    document.getElementById("last-update-date").innerHTML = websitePublishTime;
    document.getElementById("website-version").innerHTML = websiteReleaseVersion;
    document.getElementById("upload-comment").innerHTML = websiteReleaseComment;
});
/* GitHub API -END */