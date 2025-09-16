/**
 * Social sharing functionality for AI Learning Journey blog
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all share buttons
    initShareButtons();
    
    // Initialize social profile links hover effects
    initSocialProfileLinks();
});

/**
 * Initialize share buttons for all articles
 */
function initShareButtons() {
    const shareButtons = document.querySelectorAll('.share-button');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const type = this.dataset.share;
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            
            let shareUrl;
            
            switch(type) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'reddit':
                    shareUrl = `https://reddit.com/submit?url=${url}&title=${title}`;
                    break;
                case 'email':
                    shareUrl = `mailto:?subject=${title}&body=Check out this article: ${url}`;
                    break;
            }
            
            // Open share dialog
            window.open(shareUrl, 'share-popup', 'height=500,width=600');
            
            // Track share event (for future analytics implementation)
            trackShareEvent(type);
        });
    });
    
    // Copy link button functionality
    const copyLinkButtons = document.querySelectorAll('.copy-link');
    copyLinkButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Copy current URL to clipboard
            navigator.clipboard.writeText(window.location.href)
                .then(() => {
                    // Show success message
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    
                    // Reset button text after 2 seconds
                    setTimeout(() => {
                        this.innerHTML = originalText;
                    }, 2000);
                    
                    // Track copy event
                    trackShareEvent('copy');
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        });
    });
}

/**
 * Initialize hover effects for social profile links
 */
function initSocialProfileLinks() {
    const socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.querySelector('i').classList.add('pulse');
        });
        
        link.addEventListener('mouseleave', function() {
            this.querySelector('i').classList.remove('pulse');
        });
    });
}

/**
 * Track share events (placeholder for future analytics)
 * @param {string} platform - The sharing platform used
 */
function trackShareEvent(platform) {
    // This is a placeholder for future analytics implementation
    console.log(`Article shared via: ${platform}`);
    
    // Example for future Google Analytics implementation:
    // if (typeof gtag === 'function') {
    //     gtag('event', 'share', {
    //         'event_category': 'Social',
    //         'event_label': platform,
    //         'value': 1
    //     });
    // }
}