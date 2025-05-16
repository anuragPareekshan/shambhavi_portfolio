// Image viewing functionality
let currentZoom = 1;
let currentImages = [];
let currentIndex = 0;

function zoomIn() {
    if (currentZoom < 3) {
        currentZoom += 0.25;
        applyZoom();
    }
}

function zoomOut() {
    if (currentZoom > 0.5) {
        currentZoom -= 0.25;
        applyZoom();
    }
}

function resetZoom() {
    currentZoom = 1;
    const image = document.getElementById('fullscreen-image');
    image.style.transform = 'scale(1)';
    image.style.left = '0';
    image.style.top = '0';
}

function applyZoom() {
    const image = document.getElementById('fullscreen-image');
    image.style.transform = `scale(${currentZoom})`;
}

function openFullscreen(img) {
    const overlay = document.getElementById('fullscreen-overlay1');
    const fullImg = document.getElementById('fullscreen-image');
    const caption = document.getElementById('fullscreen-caption');

    fullImg.src = img.src;
    caption.textContent = img.getAttribute('data-caption');

    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    resetZoom();
    updateCurrentImages();
    currentIndex = currentImages.findIndex(image => image.src === img.src);
}

function closeFullscreen() {
    const overlay = document.getElementById('fullscreen-overlay1');
    const fullImg = document.getElementById('fullscreen-image');

    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';

    fullImg.style.transform = 'scale(1)';
    fullImg.style.left = '0';
    fullImg.style.top = '0';
}

function updateCurrentImages() {
    currentImages = [];
    const allImages = document.querySelectorAll('.gallery-image, .mun-image-container img');
    allImages.forEach(img => {
        currentImages.push({
            src: img.src,
            caption: img.getAttribute('data-caption')
        });
    });
}

function nextImage() {
    if (currentImages.length <= 1) return;

    currentIndex = (currentIndex + 1) % currentImages.length;
    const fullImg = document.getElementById('fullscreen-image');
    const caption = document.getElementById('fullscreen-caption');

    fullImg.src = currentImages[currentIndex].src;
    caption.textContent = currentImages[currentIndex].caption;

    resetZoom();
}

function prevImage() {
    if (currentImages.length <= 1) return;

    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    const fullImg = document.getElementById('fullscreen-image');
    const caption = document.getElementById('fullscreen-caption');

    fullImg.src = currentImages[currentIndex].src;
    caption.textContent = currentImages[currentIndex].caption;
    resetZoom();
}

document.addEventListener('DOMContentLoaded', function () {
    updateCurrentImages();
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeFullscreen();
        }

        const overlay = document.getElementById('fullscreen-overlay1');
        if (overlay.style.display === 'flex') {
            if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            }
        }
    });
});