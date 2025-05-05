document.addEventListener('DOMContentLoaded', function () {
    const publicationItems = document.querySelectorAll('.publication-item');
    publicationItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const numberElement = this.querySelector('.number');
            const number = parseInt(numberElement.textContent.replace('.', ''));
            const targetId = `publication-${number}`;
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to adjust layout based on screen width
    function adjustLayout() {
        const width = window.innerWidth;
        const galleryImages = document.querySelectorAll('.gallery-image');

        if (width <= 479) {
            // Extra small devices
            galleryImages.forEach(img => {
                img.style.height = '140px';
            });
        } else if (width <= 768) {
            // Small devices
            galleryImages.forEach(img => {
                img.style.height = '180px';
            });
        } else if (width <= 991) {
            // Medium devices
            galleryImages.forEach(img => {
                img.style.height = '220px';
            });
        } else {
            // Large devices
            galleryImages.forEach(img => {
                img.style.height = '250px';
            });
        }
    }

    // Initial adjustment
    adjustLayout();

    // Adjust on window resize
    window.addEventListener('resize', adjustLayout);
});