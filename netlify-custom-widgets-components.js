// Youtube
youtubeEmbed = {
    id: "youtube",
    label: "Youtube",
    fields: [
        {name: 'id', label: 'Youtube Video/Playlist ID', widget: 'string'},
        {name: 'type', label: 'Video/Playlist', widget: 'select', options: [{label: 'Video', value: 'video'},{label: 'Playlist', value: 'playlist'}], multiple: false, default: ['video'], }
        ],
    pattern: /^\{\%\sinclude\syt-embed\.html\sid=\"(\S+)\"\stype\=\"(video|playlist)\"\s\%\}$/,
    fromBlock: function(match) {return {id: match[1], type: match[2]};},
    toBlock: function(obj) {return '{% include yt-embed.html id="' + obj.id + '" type="' + obj.type + '" %}';},
    toPreview: function(obj) {return ('<img src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" alt="Youtube Video"/>');}
}

// Flickr
flickrEmbed = {
    id: "flickr",
    label: "Flickr Album",
    fields: 
        [
            {name: 'album_title', label: 'Album Title', widget: 'string'},
            {name: 'album_link', label: 'Album Link', widget: 'string'},
            {name: 'album_image', label: 'First Image Link', widget: 'string'}
        ],
    pattern: /^\{\%include\sflickr-embed.html\salbum\-title\=\"(.+)\"\salbum-link\=\"(.+)\" first-image\=\"(.+)\"\%\}$/,
    fromBlock: function(match) {return {album_title: match[1], album_link: match[2], album_image: match[3]}},
    toBlock: function(obj) {return '{%include flickr-embed.html album-title="'+obj.album_title+'" album-link="'+obj.album_link+'" first-image="'+obj.album_image+'"%}';},
    toPreview: function(obj) {return ('<img src="'+ obj.album_image + '" alt="Youtube Video"/>');}
}

// Register Editor Component
CMS.registerEditorComponent(youtubeEmbed);