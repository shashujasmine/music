# 🎵 Setup Local Music Files

## How to Add Your Local MP3 Files

The music website is now configured to play local MP3 files from your computer. Follow these steps to set it up:

### Step 1: Prepare Your Music Files

You need to have these MP3 files ready:
- `shape-of-you.mp3` (Ed Sheeran - 3:53)
- `aaya-sher.mp3` (Sandeep Rao - 3:32)
- `arabic-kuthu.mp3` (Anirudh Ravichander - 4:15)
- `monica.mp3` (Krystal - 3:42)

### Step 2: Place Files in the Music Directory

Add your MP3 files to the `/music` folder:

```
music/
├── index.html
├── styles.css
├── script.js
├── README.md
├── SETUP_LOCAL_MUSIC.md
└── music/                    ← Place your MP3 files here
    ├── shape-of-you.mp3
    ├── aaya-sher.mp3
    ├── arabic-kuthu.mp3
    └── monica.mp3
```

### Step 3: Open in Browser

1. Open `index.html` in your web browser
2. The player will load with your local songs
3. Click on any song to play it
4. Use the player controls to play/pause, skip, adjust volume, etc.

## File Requirements

- **Format**: MP3 files only
- **Bitrate**: 128 kbps or higher (recommended 192-320 kbps)
- **Naming**: Use exactly the filenames listed above (case-sensitive on Mac/Linux)
- **Location**: Must be in the `./music/` folder relative to index.html

## How It Works

The player uses the HTML5 `<audio>` element to play local files:

```javascript
// Each song has a 'src' property pointing to the local file
{
    name: 'Shape of You',
    artist: 'Ed Sheeran',
    src: './music/shape-of-you.mp3'  // Local file path
}
```

When you click a song, the player:
1. Loads the audio file from the local path
2. Displays the song title and artist
3. Shows the album art (cached from Unsplash)
4. Allows playback with play/pause, volume, and progress controls

## Features with Local Files

✅ Play/Pause buttons  
✅ Next/Previous navigation  
✅ Progress bar with seek  
✅ Volume control  
✅ Duration display  
✅ Like/Favorite songs (saved in browser)  
✅ Shuffle mode  
✅ Repeat modes  
✅ Search functionality  
✅ Keyboard shortcuts (Space, Arrow keys)  

## Customizing Song Information

To change song names, artists, or durations, edit the `SONGS_DATA` array in `script.js`:

```javascript
const SONGS_DATA = [
    {
        id: 1,
        name: 'Your Song Title',
        artist: 'Your Artist Name',
        duration: '3:53',              // Display duration
        durationSeconds: 233,          // Actual duration in seconds
        image: 'image-url',            // Album art URL
        src: './music/your-file.mp3',  // Local file path
        genre: 'Your Genre',
        plays: 0
    },
    // ... more songs
];
```

## Troubleshooting

### Songs Don't Play
- Check that MP3 files are in the `/music/` folder
- Verify filenames match exactly (including capitalization)
- Ensure files are valid MP3 format
- Check browser console for error messages (F12)

### Duration Shows Incorrectly
- Update the `duration` and `durationSeconds` properties in script.js
- Use an online tool to check actual file duration
- Use VLC or iTunes to verify correct duration

### Album Art Not Showing
- Image URLs are currently from Unsplash
- Replace `image` URLs with local image paths if preferred
- Image format should be JPG, PNG, or WebP

### Browser Issues
- Use a modern browser (Chrome, Firefox, Safari, Edge)
- Clear browser cache if updates don't show
- Check if browser allows local file access

## Adding More Songs

1. Add your MP3 file to the `/music/` folder
2. Add a new entry to `SONGS_DATA` in `script.js`:

```javascript
{
    id: 5,
    name: 'New Song',
    artist: 'Artist Name',
    duration: 'M:SS',
    durationSeconds: XXX,
    image: 'image-url',
    src: './music/new-song.mp3',
    genre: 'Genre',
    plays: 0
}
```

3. Add the song ID to any playlists if desired

## Changing Playlists

Edit `PLAYLISTS_DATA` in `script.js` to create custom playlists:

```javascript
{
    id: 1,
    name: 'My Playlist',
    description: 'My favorite songs',
    image: 'image-url',
    songs: [1, 2, 3, 4]  // Song IDs to include
}
```

## Browser Storage

- Liked songs are saved in browser localStorage
- Clears when you clear browser cache
- Works offline after opening once

## Need Help?

Check the main README.md for:
- Full feature list
- Keyboard shortcuts
- Design system
- Browser compatibility

---

Ready to enjoy your music! 🎵
