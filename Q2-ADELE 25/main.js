// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://api.lyrics.ovh/v1/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}

// WRITE YOUR CODE ////////////////////////

// show the songList with the bootsrap 4.3
for (i = 0; i < album.tracks.length; i++) {
  songList.innerHTML = songList.innerHTML + `
    <li class='nav-item'>
      <a class="nav-link" href="#" role="tab" data-toggle="pill">${album.tracks[i]}</a>
    </li>`
}

// when press the button, show the lyrics.
songList.addEventListener('click', function (event) {
  console.log(event.target.innerHTML)
  axios
    .get(`${BASE_URL}${album.artist}/${event.target.innerHTML}`)
    .then(response => {
      let lyric = response.data.lyrics
      lyricsPanel.innerHTML = "<h1>" + event.target.innerHTML + "</h1>"
      lyricsPanel.innerHTML = lyricsPanel.innerHTML + "<pre>" + lyric + "</pre>"
    })
})