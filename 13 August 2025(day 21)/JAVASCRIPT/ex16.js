document.addEventListener('DOMContentLoaded', function() {
    // Image array (replace with your own image paths)
    const images = [
        'https://picsum.photos/id/10/800/400',
        'https://picsum.photos/id/11/800/400',
        'https://picsum.photos/id/12/800/400',
        'https://picsum.photos/id/13/800/400',
        'https://picsum.photos/id/14/800/400'
    ];
    
    const galleryImage = document.getElementById('galleryImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    
    // Initialize gallery
    function showImage(index) {
        galleryImage.src = images[index];
        galleryImage.alt = `Image ${index + 1}`;
        
        // Disable buttons when at start/end
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === images.length - 1;
    }
    
    // Event listeners
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            showImage(currentIndex);
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            showImage(currentIndex);
        }
    });
    
    // Initialize with first image
    showImage(currentIndex);
});