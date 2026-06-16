
const songs = [
    {
        title: "Aaya Sher",
        artist: "Anirudh Ravichander",
        src: "music/aaya-sher.m4a",
        image: "https://i.scdn.co/image/ab67616d00001e0248be563b0c9f1d7985a7c608",
        duration: "3:15",
        durationSeconds: 195,
        genre: "Energetic",
        plays: "1.2M"
    },
    {
        title: "A way Back",
        artist: "GV.prakash kumar",
        src: "music/Asuran-way back.mp3",
        image: "https://a10.gaanacdn.com/gn_img/albums/qaLKY623pO/aLKYxYN2bp/size_m_1774622935.jpg",
        duration: "1:41",
        durationSeconds: 101,
        genre: "Sad",
        plays: "2M"
    },
    {
        title: "Ava Enna",
        artist: "Harris Jayaraj",
        src: "music/Ava Enna.mp3",
        image: "https://c.saavncdn.com/029/Vaaranam-Aayiram-2008-500x500.jpg",
        duration: "5:18",
        durationSeconds: 318,
        genre: "Melody",
        plays: "25M"
    },
    {
        title: "Dheera Dheera",
        artist: "Ravi Basrur",
        src: "music/Dheera Dheera.mp3",
        image: "https://pendujatt.com.se/uploads/album/kgf-chapter-1-malayalam-ravi-basrur.webp",
        duration: "3:52",
        durationSeconds: 232,
        genre: "Epic",
        plays: "150M"
    },
    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        src: "music/Shape of You.mp3",
        image: "https://wallpapercave.com/wp/wp3537465.jpg",
        duration: "3:53",
        durationSeconds: 233,
        genre: "Pop",
        plays: "3.4B"
    },
    {
        title: "X-COOL(SLOWED)!",
        artist: "tienanh109, HDN, MC K3",
        src: "music/X-COOL! (SLOWED).mp3",
        image: "https://www.mustangspecs.com/wp-content/uploads/2020/09/LfF7hO.jpg",
        duration: "1:56",
        durationSeconds: 116,
        genre: "Phonk",
        plays: "15M"
    },
    {
        title: "Yamma Yamma",
        artist: "Harris Jayaraj && SPB",
        src: "music/yamma yamma.mp3",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/7aum_Arivu_(soundtrack).jpg/250px-7aum_Arivu_(soundtrack).jpg",
        duration: "5:20",
        durationSeconds: 320,
        genre: "Break-up",
        play: "224M"
    },
    {
        title: "Adiye",
        artist: "G.V.Prakash Kumar",
        src: "music/Adiye.mp3",
        image: "https://i.pinimg.com/originals/c7/90/d2/c790d23f8b239b04cf82c25b84e10328.jpg",
        duration: "4:37",
        durationSeconds: 277,
        genre: "Romantic Melody",
        play: "5M"
    },
    {
        title: "Kannalanae",
        artist: "K.S. Chithra",
        src: "music/Kannalanae.mp3",
        image: "https://indianfilmhistory.com/admin_panel_new_dev/media1/files_i/1605864977263e44cbjuqmo.jpeg",
        duration: "6:01",
        durationSeconds: 361,
        genre: "Romantic Melody",
        plays: "4M"
    },
    {
        title: "Poongatrile",
        artist: "Unni Menon and Swarnalatha",
        src: "music/Poongatrile.mp3",
        image: "https://a10.gaanacdn.com/gn_img/albums/lJvKa56KDV/vKa198rnKD/size_m.webp",
        duration: "5:37",
        durationSeconds: 337,
        genre: "Sad Love Ballad",
        play: "55M"
    },
    {
        title: "Munbe Vaa",
        artist: "Shreya Ghoshal and Naresh Iyer",
        src: "music/Sillunu Oru kadhal.mp3",
        image: "https://i.pinimg.com/videos/thumbnails/originals/22/22/5a/22225a8335c4aaabf7e0ef329fc35d3b.0000000.jpg",
        duration: "5:55",
        durationSeconds: 355,
        genre: "Soft Love Ballad",
        play: "1.5M"
    },
    {
        title: "Pathikichu",
        artist: "Anirudh Ravichander, Yogi Sekar, Amogh Balaji",
        src: "music/Pathikichu.mp3",
        image: "https://img.youtube.com/vi/Wtq3RRORVx4/0.jpg",
        duration: "3:32",
        durationSeconds: 212,
        genre: "Motivation",
        play: "10M"
    },
    {
        title: "Aathangarai Marame",
        artist: "Mano and Sujatha Mohan",
        src: "music/Aathangarai Marame.mp3",
        image: "https://c.saavncdn.com/471/Kizhakku-Cheemayile-Tamil-1993-20250224193420-500x500.jpg",
        duration: "4:38",
        durationSeconds: 278,
        genre: "Melody",
        play: "5M"
    },
    {
        title: "Annul Maelae",
        artist: "Sudha Raghunathan",
        src: "music/Annul Maelae.mp3",
        image: "https://c.saavncdn.com/635/Vaaranam-Aayiram-Tamil-2008-20190629141128-500x500.jpg",
        duration: "5:11",
        durationSeconds: 311,
        genre: "Romantic Melody",
        play: "1M"
    },
    {
        title: "Anthimaalai neram",
        artist: "Sis Sriram",
        src: "music/Anthimaalai Neram.mp3",
        image: "https://pendujatt.com.se/uploads/album/monster-justin-prabhakaran.webp",
        duration: "3:31",
        durationSeconds: 211,
        genre: "Romantic Melody",
        play: "2M"
    },
    {
        title: "Elangaathu Veesudhey",
        artist: "Ilaiyaraaja && Sriram Parthasarathy",
        src: "music/Elangaathu Veesudhey.mp3",
        image: "https://c.saavncdn.com/790/Pithamagan-Tamil-2003-20250908204442-500x500.jpg",
        duration: "6:10",
        durationSeconds: 370,
        genre: "Folk Melody",
        play: "30M"
    },
    {
        title: "Enkeyoo Partha",
        artist: "Yuvan Shankar Raja , Udit Narayan and Shreya Ghoshal",
        src: "music/Enkeyoo Partha.mp3",
        image: "https://i.ytimg.com/vi/JLWQ_mMGXI0/mqdefault.jpg",
        duration: "5:03",
        durationSeconds: 303,
        genre: "Romantic Melody",
        play: "50M"
    },
    {
        title: "Mundhinam",
        artist: "Harris Jayaraj ",
        src: "music/Mundhinam.mp3",
        image: "https://c.saavncdn.com/635/Vaaranam-Aayiram-Tamil-2008-20190629141128-500x500.jpg",
        duration: "5:09",
        durationSeconds: 309,
        genre: "Romantic Melody",
        play: "2M"
    },
    {
        title: "Nenjangootil Neeye",
        artist: "Vijay Antony , Jayadev and Rajalakshmy",
        src: "music/Nenjangootil Neeye.mp3",
        image: "https://c.saavncdn.com/791/Dishyum-Tamil-2006-20171219-500x500.jpg",
        duration: "4:38",
        durationSeconds: 278,
        genre: "Romantic Melody",
        play: "5M"
    },
    {
        title: "oru Naalil",
        artist: "Yuvan Shankar Raja",
        src: "music/Oru Naalil.mp3",
        image: "https://c.saavncdn.com/771/Pudhupettai-Tamil-2005-20230720205106-500x500.jpg",
        duration: "6:33",
        durationSeconds: 393,
        genre: "Philosophical Melody",
        play: "28M"
    },
    {
        title: "Pachamala Poovu",
        artist: "Illaiyaraja",
        src: "music/Pachamala Poovu.mp3",
        image: "https://c.saavncdn.com/043/Kizhakku-Vaasal-Tamil-1990-20230407022420-500x500.jpg",
        duration: "4:13",
        durationSeconds: 253,
        genre: "Folk Melody",
        play: "10M"
    },
    {
        title: "Pottu Vaitha oru vatta nila",
        artist: "Illaiyaraja",
        src: "music/Pottu Vaithavatta Nila.mp3",
        image: "https://cdn.filmistreet.com/wp-content/uploads/2015/02/Idhayam.gif",
        duration: "4:28",
        durationSeconds: 268,
        genre: "Classic Romantic",
        play: "21M"
    },
    {
        title: "Rasathi Unna",
        artist: "Illaiyaraja",
        src: "music/Rasathi Unna.mp3",
        image: "https://lyricsila.com/wp-content/uploads/Rasathi-Unna-Kanatha-Nenju-Lyrics-Vaidehi-Kathirunthal-300x171.jpg",
        duration: "4:24",
        durationSeconds: 264,
        genre: "Emotional",
        play: "11M"
    },
    {
        title: "Sara sara saara Kaathu",
        artist: "Ghibran",
        src: "music/Sara Sara Saara Kathu.mp3",
        image: "https://c.saavncdn.com/847/Vaagai-Sooda-Vaa-Original-Motion-Picture-Soundtrack-Tamil-2011-20250910162237-500x500.jpg",
        duration: "5:09",
        durationSeconds: 309,
        genre: "Folk Melody",
        play: "2M"
    },
    {
        title: "Un Paarvaiyil",
        artist: "Karthik and Sumangali",
        src: "music/Un Paarvaiyil.mp3",
        image: "https://i.ytimg.com/vi/EmEpTg_cbBQ/maxresdefault.jpg",
        duration: "6:13",
        durationSeconds: 373,
        genre: "Romantic Melody",
        play: "15M"
    },
    {
        title: "Unna Vida",
        artist: "Kamal Haasan, Shreya Ghoshal",
        src: "music/Unna Vida.mp3",
        image: "https://c.saavncdn.com/004/Virumandi-Tamil-2004-20201104150110-500x500.jpg",
        duration: "6:12",
        durationSeconds: 372,
        genre: "Romantic Melody",
        play: "1M"
    },
    {
        title: "Kanpesum Varthaigal",
        artist: "Yuvan Shankar Raja",
        src: "music/Kanpesum Varthaigal.mp3",
        image: "https://c.saavncdn.com/398/7-G-Rainbow-Colony-Tamil-2004-20250214131553-500x500.jpg",
        duration: "4:41",
        durationSeconds: 281,
        genre: "Emotional Classic",
        play: "50M"
    },
    {
        title: "Un Paarvaiyil",
        artist: "Ilaiyaraaja",
        src: "music/Un Paarvayil.mp3",
        image: "https://wallpaperaccess.com/full/6049260.jpg",
        duration: "4:13",
        durationSeconds: 253,
        genre: "Romantic Melody",
        play: "10M"
    },

];

const SONGS_DATA = songs.map((song, index) => ({
    id: index + 1,
    name: song.title,
    artist: song.artist,
    duration: song.duration,
    durationSeconds: song.durationSeconds,
    image: song.image,
    src: song.src,
    genre: song.genre,
    plays: song.plays
}));




const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const likeBtn = document.getElementById('like-btn');
const progressSlider = document.getElementById('progress-slider');
const progressFill = document.getElementById('progress-fill');
const volumeSlider = document.getElementById('volume-slider');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');

const playerSongName = document.getElementById('player-song');
const playerArtistName = document.getElementById('player-artist');
const playerAlbumImg = document.getElementById('player-album');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');


const recommendedSongsContainer = document.getElementById('recommended-songs');
const pageTitle = document.getElementById('page-title');
const navLinks = document.querySelectorAll('.nav-link');

const searchResultsSection = document.getElementById('search-results-section');
const searchResultsContainer = document.getElementById('search-results');
const favoriteSection = document.getElementById('favorites-section');
const favoritesList = document.getElementById('favorites-list');


let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0;
let likedSongs = new Set(JSON.parse(localStorage.getItem('likedSongs')) || []);
let currentPlaylist = SONGS_DATA;


document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    renderRecommendedSongs();
    updatePlayerDisplay();
});

function initializeApp() {
    volumeSlider.style.setProperty('--volume', '70%');
    audioPlayer.volume = 0.7;
}


function setupEventListeners() {
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', playPrevious);
    nextBtn.addEventListener('click', playNext);
    shuffleBtn.addEventListener('click', toggleShuffle);
    repeatBtn.addEventListener('click', toggleRepeat);
    likeBtn.addEventListener('click', toggleLike);

    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('ended', handleSongEnd);
    audioPlayer.addEventListener('error', handleAudioError);

    progressSlider.addEventListener('input', seekAudio);
    volumeSlider.addEventListener('input', adjustVolume);

    searchInput.addEventListener('input', handleSearch);
    clearSearchBtn.addEventListener('click', clearSearch);

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            handleNavigation(link.getAttribute('href'));
        });
    });
}

function handleAudioError() {
    console.warn("Audio file not found or failed to load. Falling back to Aaya Sher.");
    const currentSrc = audioPlayer.src;
    if (!currentSrc.includes('aaya-sher.m4a')) {
        audioPlayer.src = 'music/aaya-sher.m4a';
        if (isPlaying) {
            audioPlayer.play().catch(err => console.log("Playback failed on fallback: ", err));
        }
    }
}


function handleNavigation(target) {
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`a[href="${target}"]`).classList.add('active');

    searchResultsSection.style.display = 'none';
    favoriteSection.style.display = 'none';
    document.getElementById('hero-section').style.display = 'grid';
    document.getElementById('recommended-section').style.display = 'block';

    if (target === '#search') {
        pageTitle.textContent = 'Search Music';
        searchInput.focus();
    } else if (target === '#library') {
        pageTitle.textContent = 'Your Library';
    } else if (target === '#favorites') {
        pageTitle.textContent = 'Your Liked Songs';
        searchResultsSection.style.display = 'none';
        document.getElementById('hero-section').style.display = 'none';
        document.getElementById('recommended-section').style.display = 'none';
        favoriteSection.style.display = 'block';
        renderFavorites();
    } else {
        pageTitle.textContent = 'Welcome Back';
    }
}


function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query.length === 0) {
        clearSearchBtn.style.display = 'none';
        searchResultsSection.style.display = 'none';
        document.getElementById('hero-section').style.display = 'grid';
        document.getElementById('recommended-section').style.display = 'block';
        return;
    }

    clearSearchBtn.style.display = 'block';
    document.getElementById('hero-section').style.display = 'none';
    document.getElementById('recommended-section').style.display = 'none';

    const results = SONGS_DATA.filter(song =>
        song.name.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query) ||
        song.genre.toLowerCase().includes(query)
    );

    renderSearchResults(results);
    searchResultsSection.style.display = 'block';
}

function clearSearch() {
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    searchResultsSection.style.display = 'none';
    document.getElementById('hero-section').style.display = 'grid';
    document.getElementById('recommended-section').style.display = 'block';
}




function renderRecommendedSongs() {
    recommendedSongsContainer.innerHTML = SONGS_DATA.map(song => createSongElement(song)).join('');
    attachSongEventListeners();
}

function renderSearchResults(results) {
    if (results.length === 0) {
        searchResultsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <p>No songs found. Try a different search.</p>
            </div>
        `;
        return;
    }

    searchResultsContainer.innerHTML = results.map(song => `
        <div class="search-result-item" onclick="loadSong(${song.id}); togglePlay();">
            <img src="${song.image}" alt="${song.name}" class="search-result-image">
            <div class="search-result-name">${song.name}</div>
            <div class="search-result-type">${song.artist}</div>
        </div>
    `).join('');
}

function renderFavorites() {
    if (likedSongs.size === 0) {
        favoritesList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-heart"></i>
                <p>No liked songs yet. Add some!</p>
            </div>
        `;
        return;
    }

    const favoriteSongs = SONGS_DATA.filter(song => likedSongs.has(song.id));
    favoritesList.innerHTML = favoriteSongs.map(song => createSongElement(song)).join('');
    attachSongEventListeners();
}

function createSongElement(song) {
    const isLiked = likedSongs.has(song.id);
    const isCurrentPlaying = currentSongIndex === SONGS_DATA.findIndex(s => s.id === song.id) && isPlaying;

    return `
        <div class="song-item ${isCurrentPlaying ? 'playing' : ''}" data-song-id="${song.id}">
            <img src="${song.image}" alt="${song.name}" class="song-thumbnail">
            <div class="song-info">
                <div class="song-name">${song.name}</div>
                <div class="song-artist">${song.artist}</div>
            </div>
            <div class="song-duration">${song.duration}</div>
            <button class="song-like-btn ${isLiked ? 'liked' : ''}" data-song-id="${song.id}">
                <i class="fa${isLiked ? 's' : 'r'} fa-heart"></i>
            </button>
        </div>
    `;
}

function attachSongEventListeners() {
    document.querySelectorAll('.song-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (!e.target.closest('.song-like-btn')) {
                const songId = parseInt(item.getAttribute('data-song-id'));
                loadSong(songId);
                togglePlay();
            }
        });
    });

    document.querySelectorAll('.song-like-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const songId = parseInt(btn.getAttribute('data-song-id'));
            toggleLikeSong(songId, btn);
        });
    });
}


function togglePlay() {
    if (audioPlayer.src === '') {
        loadSong(SONGS_DATA[0].id);
    }

    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }

    isPlaying = !isPlaying;
    updatePlayButton();
}

function playNext() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * SONGS_DATA.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % SONGS_DATA.length;
    }

    loadSong(SONGS_DATA[currentSongIndex].id);
    if (isPlaying) audioPlayer.play();
}

function playPrevious() {
    currentSongIndex = (currentSongIndex - 1 + SONGS_DATA.length) % SONGS_DATA.length;
    loadSong(SONGS_DATA[currentSongIndex].id);
    if (isPlaying) audioPlayer.play();
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active', isShuffle);
}

function toggleRepeat() {
    repeatMode = (repeatMode + 1) % 3;
    repeatBtn.classList.toggle('active', repeatMode > 0);

    if (repeatMode === 0) {
        repeatBtn.innerHTML = '<i class="fas fa-redo"></i>';
    } else if (repeatMode === 1) {
        repeatBtn.innerHTML = '<i class="fas fa-redo"></i><span style="font-size: 10px; position: absolute; bottom: 0; right: 0;">∞</span>';
    } else {
        repeatBtn.innerHTML = '<i class="fas fa-redo"></i><span style="font-size: 10px; position: absolute; bottom: 0; right: 0;">1</span>';
    }
}

function toggleLike() {
    toggleLikeSong(SONGS_DATA[currentSongIndex].id, likeBtn);
}

function toggleLikeSong(songId, element) {
    if (likedSongs.has(songId)) {
        likedSongs.delete(songId);
        element.classList.remove('liked');
        element.innerHTML = '<i class="far fa-heart"></i>';
    } else {
        likedSongs.add(songId);
        element.classList.add('liked');
        element.innerHTML = '<i class="fas fa-heart"></i>';
    }

    localStorage.setItem('likedSongs', JSON.stringify(Array.from(likedSongs)));
    updateAllSongElements();
}

function loadSong(songId) {
    const song = SONGS_DATA.find(s => s.id === songId);
    currentSongIndex = SONGS_DATA.indexOf(song);

    audioPlayer.src = song.src;
    playerSongName.textContent = song.name;
    playerArtistName.textContent = song.artist;
    playerAlbumImg.src = song.image;
    durationEl.textContent = song.duration;

    progressSlider.max = song.durationSeconds;

    const isLiked = likedSongs.has(songId);
    likeBtn.classList.toggle('liked', isLiked);
    likeBtn.innerHTML = `<i class="fa${isLiked ? 's' : 'r'} fa-heart"></i>`;

    updateAllSongElements();
}

function handleSongEnd() {
    if (repeatMode === 2) {
        // Repeat one
        audioPlayer.currentTime = 0;
        audioPlayer.play();
    } else {
        playNext();
        if (isPlaying) audioPlayer.play();
    }
}




function seekAudio(e) {
    audioPlayer.currentTime = e.target.value;
}

function adjustVolume(e) {
    const volume = e.target.value / 100;
    audioPlayer.volume = volume;

    const percentage = e.target.value;
    volumeSlider.style.setProperty('--volume', percentage + '%');
}

function updateProgress() {
    const { currentTime, duration } = audioPlayer;

    progressSlider.value = currentTime;
    progressFill.style.width = (currentTime / duration) * 100 + '%';

    currentTimeEl.textContent = formatTime(currentTime);
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function updatePlayButton() {
    if (isPlaying) {
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        playBtn.classList.add('playing');
    } else {
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        playBtn.classList.remove('playing');
    }
}

function updatePlayerDisplay() {
    if (SONGS_DATA.length > 0) {
        loadSong(SONGS_DATA[0].id);
    }
}

function updateAllSongElements() {
    document.querySelectorAll('.song-item').forEach(item => {
        const songId = parseInt(item.getAttribute('data-song-id'));
        const isCurrentPlaying = currentSongIndex === SONGS_DATA.findIndex(s => s.id === songId) && isPlaying;

        item.classList.toggle('playing', isCurrentPlaying);

        const likeBtn = item.querySelector('.song-like-btn');
        const isLiked = likedSongs.has(songId);
        likeBtn.classList.toggle('liked', isLiked);
        likeBtn.innerHTML = `<i class="fa${isLiked ? 's' : 'r'} fa-heart"></i>`;
    });
}


document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        togglePlay();
    } else if (e.code === 'ArrowRight') {
        playNext();
    } else if (e.code === 'ArrowLeft') {
        playPrevious();
    }
});
