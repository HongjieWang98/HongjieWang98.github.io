/**
 * AI Learning Journey - Main JavaScript
 * Handles search functionality, dark mode toggle, and reading time calculation
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize dark mode
    initDarkMode();
    
    // Initialize search functionality
    initSearch();
    
    // Calculate reading time for articles
    calculateReadingTime();
});

/**
 * Dark Mode Functionality
 */
function initDarkMode() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use the system preference
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Set initial theme
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.removeAttribute('data-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Toggle theme when button is clicked
    themeToggleBtn.addEventListener('click', function() {
        let theme;
        
        // If the body has the data-theme attribute, it's in dark mode
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.removeAttribute('data-theme');
            theme = 'light';
            this.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            theme = 'dark';
            this.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        // Save the preference
        localStorage.setItem('theme', theme);
    });
}

/**
 * Search Functionality
 */
function initSearch() {
    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    // Sample search data (in a real application, this would be generated from your content)
    const searchData = [
        {
            title: 'Getting Started with Machine Learning',
            excerpt: 'An introduction to the fundamental concepts of machine learning and how to begin your journey in this exciting field.',
            url: 'blog/getting-started-with-machine-learning.html',
            date: 'May 17, 2023',
            category: 'Machine Learning'
        },
        {
            title: 'Understanding Neural Networks: A Beginner\'s Guide',
            excerpt: 'Demystifying neural networks and explaining how they work in simple terms for beginners.',
            url: 'blog/understanding-neural-networks.html',
            date: 'May 10, 2023',
            category: 'Deep Learning'
        },
        {
            title: 'My AI Learning Journey - Week 1',
            excerpt: 'Reflections on my first week of dedicated learning in the field of artificial intelligence.',
            url: 'blog/my-ai-learning-journey-week-1.html',
            date: 'May 3, 2023',
            category: 'Personal Notes'
        },
        {
            title: 'Tools and Resources for ML Practitioners',
            excerpt: 'A curated collection of essential tools, libraries, and resources for machine learning practitioners.',
            url: 'blog/tools-and-resources-for-ml-practitioners.html',
            date: 'April 25, 2023',
            category: 'Resources'
        }
    ];
    
    // Open search overlay
    searchToggle.addEventListener('click', function() {
        searchOverlay.classList.add('active');
        searchInput.focus();
    });
    
    // Close search overlay
    closeSearch.addEventListener('click', function() {
        searchOverlay.classList.remove('active');
    });
    
    // Close search when clicking outside the search container
    searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove('active');
        }
    });
    
    // Close search when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
        }
    });
    
    // Handle search input
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        // Clear results if query is empty
        if (!query) {
            searchResults.innerHTML = '';
            return;
        }
        
        // Filter results based on query
        const filteredResults = searchData.filter(item => {
            return item.title.toLowerCase().includes(query) || 
                   item.excerpt.toLowerCase().includes(query) ||
                   item.category.toLowerCase().includes(query);
        });
        
        // Display results
        displaySearchResults(filteredResults);
    });
    
    // Display search results
    function displaySearchResults(results) {
        // Clear previous results
        searchResults.innerHTML = '';
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p>No results found. Try a different search term.</p>';
            return;
        }
        
        // Create result items
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            
            resultItem.innerHTML = `
                <h3><a href="${result.url}">${result.title}</a></h3>
                <p>${result.excerpt}</p>
                <div class="search-result-meta">
                    <span>${result.date}</span> • <span>${result.category}</span>
                </div>
            `;
            
            searchResults.appendChild(resultItem);
        });
    }
}

/**
 * Reading Time Calculation
 */
function calculateReadingTime() {
    // Only run on blog post pages
    const postContent = document.querySelector('.post-content');
    if (!postContent) return;
    
    // Get all text content from the post
    const text = postContent.textContent;
    
    // Calculate reading time based on average reading speed (225 words per minute)
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 225);
    
    // Update the reading time display
    const readingTimeElement = document.querySelector('.reading-time');
    if (readingTimeElement) {
        readingTimeElement.innerHTML = `<i class="far fa-clock"></i> ${readingTime} min read`;
    }
}

/**
 * Category Filter for Blog Archive
 */
document.addEventListener('DOMContentLoaded', function() {
    const categoryFilter = document.getElementById('categoryFilter');
    if (!categoryFilter) return;
    
    categoryFilter.addEventListener('change', function() {
        const selectedCategory = this.value.toLowerCase();
        const blogEntries = document.querySelectorAll('.blog-entry');
        
        blogEntries.forEach(entry => {
            const entryCategory = entry.querySelector('.blog-tag').textContent.toLowerCase();
            
            if (selectedCategory === 'all' || entryCategory === selectedCategory) {
                entry.style.display = 'block';
            } else {
                entry.style.display = 'none';
            }
        });
    });
});