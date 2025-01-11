const video = document.getElementById('background-video');

const kittyVideos = [
    'https://example.com/kitty1.mp4',
    'https://example.com/kitty2.mp4',
    'https://example.com/kitty3.mp4',
];

const randomVideo = kittyVideos[Math.floor(Math.random() * kittyVideos.length)];

video.src = randomVideo;
