// Youtube
CMS.registerEditorComponent({
// Internal id of the component
    id: "youtube",
    // Visible label
    label: "Youtube",
    // Fields the user need to fill out when adding an instance of the component
    fields: [
        {name: 'id', label: 'Youtube Video/Playlist ID', widget: 'string'},
        {name: 'type', label: 'Video/Playlist', widget: 'select', options: [{label: 'Video', value: 'video'},{label: 'Playlist', value: 'playlist'}], multiple: false, default: ['video'], }
        ],
    // Pattern to identify a block as being an instance of this component
    pattern: /^\{\%\sinclude\syt-embed\.html\sid=\"(\S+)\"\stype\=\"(video|playlist)\"\s\%\}$/,
    // Function to extract data elements from the regexp match
    fromBlock: function(match) {return {id: match[1], type: match[2]};},
    // Function to create a text block from an instance of this component
    toBlock: function(obj) {return '{% include yt-embed.html id="' + obj.id + '" type="' + obj.type + '" %}';},
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function(obj) {return ('<img src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" alt="Youtube Video"/>');}
});

