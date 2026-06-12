
const songs = [
    { 
        title: "Aaya Sher", 
        artist: "Anirudh Ravichander", 
        src: "music/aaya-sher.m4a",
        image: "https://i.scdn.co/image/ab67616d00001e0248be563b0c9f1d7985a7c608", // Lion cover from Spotify
        duration: "3:15",
        durationSeconds: 195,
        genre: "Energetic",
        plays: "1.2M"
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
        title: "Arabic Kuthu (Halamithi Habibo)", 
        artist: "Anirudh Ravichander & Jonita Gandhi", 
        src: "music/song1.mp3",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&h=200&fit=crop", // Party Dance
        duration: "4:40",
        durationSeconds: 280,
        genre: "Kuthu",
        plays: "450M"
    },
    { 
        title: "Vaathi Coming", 
        artist: "Anirudh Ravichander", 
        src: "music/song2.mp3",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200&h=200&fit=crop", // Dancing Crowd
        duration: "3:48",
        durationSeconds: 228,
        genre: "Dance",
        plays: "320M"
    },
    { 
        title: "Hukum - Thalaivar Alappara", 
        artist: "Anirudh Ravichander", 
        src: "music/song3.mp3",
        image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=200&h=200&fit=crop", // Audio setup
        duration: "3:27",
        durationSeconds: 207,
        genre: "Mass",
        plays: "180M"
    },
    { 
        title: "Naan Ready (From Leo)", 
        artist: "Anirudh Ravichander & Thalapathy Vijay", 
        src: "music/song4.mp3",
        image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200&h=200&fit=crop", // Stadium
        duration: "4:07",
        durationSeconds: 247,
        genre: "Kuthu",
        plays: "210M"
    },
    { 
        title: "Blinding Lights", 
        artist: "The Weeknd", 
        src: "music/blinding-lights.mp3",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop", // Neon Lights
        duration: "3:20",
        durationSeconds: 200,
        genre: "Synthwave",
        plays: "4.1B"
    }
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
    const isPlaying = currentSongIndex === SONGS_DATA.findIndex(s => s.id === song.id) && isPlaying;
    
    return `
        <div class="song-item ${isPlaying ? 'playing' : ''}" data-song-id="${song.id}">
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
