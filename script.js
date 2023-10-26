var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady() {
    console.log("hey Im ready");
    player.setVolume(50);
    // player.playVideo();
}

function onPlayerStateChange() {
    console.log("my state changed");
}

document.addEventListener("DOMContentLoaded", function () {
    const customCursor = document.querySelector(".custom-cursor");
    const video = document.getElementById("video-background");
    const overlay = document.querySelector(".overlay");
    const otherElements = document.querySelectorAll(".loading-container > *:not(video)");

    let isMuted = false;
    let isHidden = false;

    document.addEventListener("mousemove", function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        customCursor.style.left = mouseX + "px";
        customCursor.style.top = mouseY + "px";
    });

    const tabs = document.querySelectorAll('.tab');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });

    function updateSlider() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.style.display = 'block';
                tabs[index].classList.add('active'); // Add the "active" class to the clicked tab
            } else {
                slide.style.display = 'none';
                tabs[index].classList.remove('active'); // Remove the "active" class from other tabs
            }
        });
    }

    updateSlider();

    const audioPlayer = document.getElementById("background-music");

    document.addEventListener("keydown", function (event) {
        if (event.code === "Space") {
            event.preventDefault(); // Prevent default behavior of the space key
            /* if (player.isMuted()) {
                player.unMute();
            } else {
                player.mute();
            } */
            if (audioPlayer.paused) {
                audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
        } else if (event.code === "Tab") {
            event.preventDefault(); // Prevent default behavior of the tab key
            if (isHidden) {
                // Show other elements and overlay
                otherElements.forEach(element => {
                    element.style.display = "block";
                });
                overlay.style.display = "block";
                isHidden = false;
            } else {
                // Hide other elements and overlay
                otherElements.forEach(element => {
                    element.style.display = "none";
                });
                overlay.style.display = "none";
                isHidden = true;
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
        const audioPlayer = document.getElementById("background-music");
        audioPlayer.volume = 0.5; // Set the initial volume to 50%
    });
