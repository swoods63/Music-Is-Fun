function ItunesController() {
    var itunesService = new ItunesService()
        //Do Not Modify the getMusic function
    this.getMusic = function getMusic(e) {
        e.preventDefault();
        var artist = e.target.artist.value;
        itunesService.getMusicByArtist(artist).then(drawSong); //after get music by artist returns what are you doing with the objects?
    };



    function drawSong(songList) {
        var template = ``
        console.log(songList);
        var songs = document.getElementById(songList);
        for (var i = 0; i < 50; i++) {
            var song = songList[i];
            template += `
          <div class="row temp">   
            <div class="col-sm-1 "><img src="${song.albumArt} " /></div>
            <div class="col-sm-2 "><p>Title: ${song.title}</p></div>
            <div class="col-sm-2 "><p>Artist: ${song.artist}</p></div>
            <div class="col-sm-2 "><p>Collection: ${song.collection}</p></div>
            <div class="col-sm-2 "><p>Price: ${song.price}</p></div>
            <div class="col-sm-3 "><audio controls>
            <source src="${songList[i].preview} " type="audio/ogg "></audio></div>
          </div> `

        }

        songList.innerHTML = template;

        document.getElementById("song-list").innerHTML = template;

        $(function() {
            $("audio").on("play", function() {
                $("audio").not(this).each(function(index, audio) {
                    audio.pause();
                });
            });
        });

    }
}

var itunesCtrl = new ItunesController()