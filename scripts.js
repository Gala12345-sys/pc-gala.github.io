document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxPrevBtn = document.querySelector('.prev-lightbox-btn');
    const lightboxNextBtn = document.querySelector('.next-lightbox-btn');
    const lightboxDownloadLink = document.querySelector('.download-link');
    const closeBtn = document.querySelector('.close-btn');

    let currentIndex = 0;

    // Gestion du clic sur une image de la galerie
    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            currentIndex = index;
            openLightbox(image.src);
        });
    });

    // Fonction pour ouvrir la lightbox avec l'image cliquée
    function openLightbox(imageUrl) {
        lightbox.style.display = 'block';
        lightboxImage.src = imageUrl;
        lightboxDownloadLink.href = imageUrl;
    }

    // Gestion du clic sur les boutons de navigation dans la lightbox
    lightboxPrevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImage.src = galleryImages[currentIndex].src;
        lightboxDownloadLink.href = galleryImages[currentIndex].src;
    });

    lightboxNextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        lightboxImage.src = galleryImages[currentIndex].src;
        lightboxDownloadLink.href = galleryImages[currentIndex].src;
    });

    // Gestion du bouton Fermer
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
});
