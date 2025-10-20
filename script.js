// Product Data - Based on the uploaded images
const productData = [
    {
        id: 1,
        name: "Calgary Tower",
        image: "calgary_magnet_04_tower_cleaned.png",
        theme: "landmarks",
        price: 12.99,
        description: "Iconic Calgary Tower featuring the city's most recognizable landmark with vintage poster styling.",
        featured: true,
        popular: true
    },
    {
        id: 2,
        name: "Calgary Stampede",
        image: "calgary_magnet_02_stampede_cleaned.png",
        theme: "sports",
        price: 12.99,
        description: "The Greatest Outdoor Show on Earth - Calgary Stampede in classic vintage design.",
        featured: true,
        popular: true
    },
    {
        id: 3,
        name: "Canada Olympic Park",
        image: "calgary_magnet_03_olympic_cleaned.png",
        theme: "sports",
        price: 12.99,
        description: "Winter sport capital featuring ski jumps and the iconic Olympic legacy.",
        featured: false,
        popular: true
    },
    {
        id: 4,
        name: "Calgary Zoo",
        image: "calgary_magnet_05_zoo_cleaned.png",
        theme: "culture",
        price: 12.99,
        description: "Wildlife conservation and natural beauty at Calgary's premier zoo.",
        featured: true,
        popular: false
    },
    {
        id: 5,
        name: "Heritage Park",
        image: "calgary_magnet_06_heritage_fixed_cleaned.png",
        theme: "culture",
        price: 12.99,
        description: "Step back in time at Heritage Park Historical Village with vintage train imagery.",
        featured: false,
        popular: false
    },
    {
        id: 6,
        name: "Scotiabank Saddledome",
        image: "calgary_magnet_07_saddledome_cleaned.png",
        theme: "sports",
        price: 12.99,
        description: "Home of the Calgary Flames - the iconic saddle-shaped arena.",
        featured: true,
        popular: true
    },
    {
        id: 7,
        name: "Calaway Park",
        image: "calaway_park_cleaned.png",
        theme: "culture",
        price: 12.99,
        description: "Family fun and entertainment at Calgary's premier amusement park.",
        featured: false,
        popular: false
    },
    {
        id: 8,
        name: "Chinook Arc",
        image: "chinook_arc_cleaned.png",
        theme: "landmarks",
        price: 12.99,
        description: "Winter warmth and rainbow magic at Calgary's iconic Chinook Arc sculpture.",
        featured: false,
        popular: false
    },
    {
        id: 9,
        name: "Cowboys Casino",
        image: "cowboys_casino_cleaned.png",
        theme: "culture",
        price: 12.99,
        description: "Western hospitality and entertainment in the heart of Calgary.",
        featured: false,
        popular: false
    },
    {
        id: 10,
        name: "Fish Creek Park",
        image: "fish_creek_park_cleaned.png",
        theme: "parks",
        price: 12.99,
        description: "Urban natural oasis featuring serene waterways and abundant wildlife.",
        featured: true,
        popular: false
    },
    {
        id: 11,
        name: "Fort Calgary",
        image: "fort_calgary_cleaned.png",
        theme: "culture",
        price: 12.99,
        description: "Foundation of the city - where Calgary's rich history began.",
        featured: false,
        popular: false
    },
    {
        id: 12,
        name: "Glenbow Museum",
        image: "glenbow_museum_cleaned.png",
        theme: "culture",
        price: 12.99,
        description: "Art and culture hub showcasing Alberta's heritage and contemporary works.",
        featured: false,
        popular: false
    },
    {
        id: 13,
        name: "National Music Centre",
        image: "national_music_centre_cleaned.png",
        theme: "culture",
        price: 12.99,
        description: "Home of music - Calgary's architectural marvel celebrating Canadian music heritage.",
        featured: true,
        popular: false
    },
    {
        id: 14,
        name: "Peace Bridge",
        image: "peace_bridge_cleaned.png",
        theme: "landmarks",
        price: 12.99,
        description: "Downtown destination featuring the iconic red helical bridge design.",
        featured: true,
        popular: true
    },
    {
        id: 15,
        name: "Prince's Island Park",
        image: "princes_island_park_cleaned.png",
        theme: "parks",
        price: 12.99,
        description: "Urban oasis in the heart of Calgary with scenic river views and walking paths.",
        featured: false,
        popular: false
    },
    {
        id: 16,
        name: "Stephen Avenue Walk",
        image: "stephen_ave_walk_cleaned.png",
        theme: "landmarks",
        price: 12.99,
        description: "Historic downtown pedestrian mall showcasing Calgary's urban heritage.",
        featured: false,
        popular: false
    },
    {
        id: 17,
        name: "University of Calgary",
        image: "university_of_calgary_cleaned.png",
        theme: "landmarks",
        price: 12.99,
        description: "Discover innovation at Calgary's premier educational institution.",
        featured: false,
        popular: false
    },
    {
        id: 18,
        name: "Main Calgary Collection",
        image: "calgary_magnet_01_main_cleaned.png",
        theme: "landmarks",
        price: 12.99,
        description: "Classic Calgary cityscape featuring the iconic tower and mountain backdrop.",
        featured: true,
        popular: true
    },
    {
        id: 19,
        name: "Stampede Tower",
        image: "stampede_tower_cleaned.png",
        theme: "landmarks",
        price: 12.99,
        description: "Stampede Tower showcasing Calgary's western heritage and modern skyline.",
        featured: false,
        popular: false
    },
    {
        id: 20,
        name: "Calgary Stampede Classic",
        image: "stampede_cleaned.png",
        theme: "sports",
        price: 12.99,
        description: "The Greatest Outdoor Show featuring cowboy action and western heritage.",
        featured: true,
        popular: true
    },
    {
        id: 21,
        name: "Fish Creek Provincial Park",
        image: "fish_creek_park_cleaned.png",
        theme: "parks",
        price: 12.99,
        description: "Local legend - Calgary's largest urban park with natural beauty and wildlife.",
        featured: false,
        popular: false
    }
];

// Global State
let currentFilter = 'all';
let currentSort = 'featured';
let cart = JSON.parse(localStorage.getItem('calgaryMagnetsCart')) || [];
let currentShowcaseIndex = 0;

// DOM Elements
const elements = {
    // Navigation
    searchBtn: document.getElementById('searchBtn'),
    searchOverlay: document.getElementById('searchOverlay'),
    searchClose: document.getElementById('searchClose'),
    searchInput: document.getElementById('searchInput'),
    searchResults: document.getElementById('searchResults'),
    cartBtn: document.getElementById('cartBtn'),
    cartCount: document.getElementById('cartCount'),
    menuToggle: document.getElementById('menuToggle'),
    navMenu: document.querySelector('.nav-menu'),

    // Hero Section
    exploreBtn: document.getElementById('exploreBtn'),
    arPreviewBtn: document.getElementById('arPreviewBtn'),
    magnetShowcase: document.getElementById('magnetShowcase'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),

    // Collection
    productGrid: document.getElementById('productGrid'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    sortSelect: document.getElementById('sortSelect'),
    loadMoreBtn: document.getElementById('loadMoreBtn'),

    // Modal
    productModal: document.getElementById('productModal'),
    modalOverlay: document.getElementById('modalOverlay'),
    modalClose: document.getElementById('modalClose'),
    modalImage: document.getElementById('modalImage'),
    modalTitle: document.getElementById('modalTitle'),
    modalTheme: document.getElementById('modalTheme'),
    modalDescription: document.getElementById('modalDescription'),
    qtyInput: document.getElementById('qtyInput'),
    qtyIncrease: document.getElementById('qtyIncrease'),
    qtyDecrease: document.getElementById('qtyDecrease'),
    addToCartBtn: document.getElementById('addToCartBtn'),
    zoomIn: document.getElementById('zoomIn'),
    zoomOut: document.getElementById('zoomOut'),
    zoomReset: document.getElementById('zoomReset'),

    // 3D Carousel Modal
    carouselModal: document.getElementById('modal'),
    carouselModalContent: document.getElementById('modalContent'),
    carouselModalClose: document.getElementById('closeModalBtn'),

    // Cart
    cartSidebar: document.getElementById('cartSidebar'),
    cartClose: document.getElementById('cartClose'),
    cartItems: document.getElementById('cartItems'),
    cartTotal: document.getElementById('cartTotal'),
    checkoutBtn: document.getElementById('checkoutBtn')
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    createHeroShowcase();
    renderProducts();
    updateCartUI();
    setupAnimations();
    initializePWA();
    initializeAnalytics();
});

function initializeApp() {
    // Set initial states
    updateCartCount();
    renderCartItems();
    
    // Show loading state for hero showcase
    showHeroLoading();
    
    // Initialize showcase after a brief delay for smooth loading
    setTimeout(() => {
        createHeroShowcase();
        hideHeroLoading();
    }, 500);
    
    // Setup smooth scrolling for navigation links
    setupSmoothScrolling();
    
    // Initialize theme cards
    setupThemeCards();
}

function showHeroLoading() {
    const showcase = elements.magnetShowcase;
    showcase.innerHTML = `
        <div class="showcase-loading">
            <div class="loading-spinner"></div>
            <p>Loading Calgary's finest magnets...</p>
        </div>
    `;
}

function hideHeroLoading() {
    const loading = elements.magnetShowcase.querySelector('.showcase-loading');
    if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => loading.remove(), 300);
    }
}

function setupThemeCards() {
    document.querySelectorAll('.theme-card').forEach(card => {
        card.addEventListener('click', function() {
            const theme = this.dataset.theme;
            handleFilter(theme);
            document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function setupEventListeners() {
    // Navigation Events
    elements.searchBtn.addEventListener('click', toggleSearchOverlay);
    elements.searchClose.addEventListener('click', closeSearchOverlay);
    elements.searchInput.addEventListener('input', handleSearch);
    elements.cartBtn.addEventListener('click', toggleCartSidebar);
    elements.menuToggle.addEventListener('click', toggleMobileMenu);

    // Hero Events
    elements.exploreBtn.addEventListener('click', scrollToCollection);
    elements.arPreviewBtn.addEventListener('click', showARPreview);
    elements.prevBtn.addEventListener('click', previousShowcase);
    elements.nextBtn.addEventListener('click', nextShowcase);

    // Collection Events
    elements.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => handleFilter(btn.dataset.filter));
    });
    elements.sortSelect.addEventListener('change', handleSort);
    elements.loadMoreBtn.addEventListener('click', loadMoreProducts);

    // Modal Events
    elements.modalClose.addEventListener('click', closeModal);
    elements.modalOverlay.addEventListener('click', closeModal);
    elements.qtyIncrease.addEventListener('click', increaseQuantity);
    elements.qtyDecrease.addEventListener('click', decreaseQuantity);
    elements.qtyInput.addEventListener('change', updatePriceDisplay);
    elements.qtyInput.addEventListener('input', updatePriceDisplay);
    elements.addToCartBtn.addEventListener('click', addToCart);
    elements.zoomIn.addEventListener('click', () => zoomImage(1.2));
    elements.zoomOut.addEventListener('click', () => zoomImage(0.8));
    elements.zoomReset.addEventListener('click', resetZoom);

    // Cart Events
    elements.cartClose.addEventListener('click', closeCartSidebar);
    elements.checkoutBtn.addEventListener('click', proceedToCheckout);

    // 3D Carousel Modal Events
    elements.carouselModalClose.addEventListener('click', closeCarouselModal);
    elements.carouselModal.addEventListener('click', (e) => {
        if (e.target === elements.carouselModal) closeCarouselModal();
    });

    // Magnet click events
    elements.magnetShowcase.addEventListener('click', handleMagnetClick);

    // Keyboard Events
    document.addEventListener('keydown', handleKeyboardEvents);

    // Window Events
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
}

// Navigation Functions
function toggleSearchOverlay() {
    elements.searchOverlay.classList.toggle('active');
    if (elements.searchOverlay.classList.contains('active')) {
        elements.searchInput.focus();
    }
}

function closeSearchOverlay() {
    elements.searchOverlay.classList.remove('active');
    elements.searchInput.value = '';
    elements.searchResults.innerHTML = '';
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    if (query.length < 2) {
        elements.searchResults.innerHTML = '';
        return;
    }

    // Enhanced search with fuzzy matching and scoring
    const results = productData.map(product => {
        let score = 0;
        const name = product.name.toLowerCase();
        const description = product.description.toLowerCase();
        const theme = product.theme.toLowerCase();
        
        // Exact matches get highest score
        if (name.includes(query)) score += 100;
        if (description.includes(query)) score += 50;
        if (theme.includes(query)) score += 25;
        
        // Fuzzy matching for partial matches
        if (name.includes(query.substring(0, Math.min(query.length, 3)))) score += 30;
        if (description.includes(query.substring(0, Math.min(query.length, 3)))) score += 15;
        
        // Keyword matching
        const keywords = ['tower', 'bridge', 'park', 'museum', 'zoo', 'stampede', 'olympic', 'heritage'];
        keywords.forEach(keyword => {
            if (query.includes(keyword) && (name.includes(keyword) || description.includes(keyword))) {
                score += 40;
            }
        });
        
        return { ...product, score };
    }).filter(product => product.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8); // Limit to top 8 results

    renderSearchResults(results);
    
    // Add search analytics
    if (results.length > 0) {
        trackSearchEvent(query, results.length);
    }
}

function trackSearchEvent(query, resultCount) {
    // Track search analytics (in a real app, send to analytics service)
    console.log(`Search: "${query}" returned ${resultCount} results`);
    
    // Store in localStorage for local analytics
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    searchHistory.push({
        query,
        resultCount,
        timestamp: Date.now()
    });
    
    // Keep only last 50 searches
    if (searchHistory.length > 50) {
        searchHistory.splice(0, searchHistory.length - 50);
    }
    
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

function renderSearchResults(results) {
    if (results.length === 0) {
        elements.searchResults.innerHTML = '<p class="no-results">No magnets found matching your search.</p>';
        return;
    }

    elements.searchResults.innerHTML = results.map(product => `
        <div class="search-result-item" onclick="openProductModal(${product.id})">
            <img src="${product.image}" alt="${product.name}">
            <div>
                <h4>${product.name}</h4>
                <p>${product.theme} • $${product.price}</p>
            </div>
        </div>
    `).join('');
}

function toggleMobileMenu() {
    elements.navMenu.classList.toggle('active');
    elements.menuToggle.classList.toggle('active');
}

// Hero Functions - Enhanced 3D Carousel with Advanced Physics
function createHeroShowcase() {
    const featuredProducts = productData.filter(p => p.featured);
    elements.magnetShowcase.innerHTML = '';
    
    featuredProducts.forEach((product, index) => {
        const magnetDiv = document.createElement('div');
        magnetDiv.className = 'showcase-magnet';
        magnetDiv.dataset.index = index;
        magnetDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="showcase-overlay">
                <h4>${product.name}</h4>
                <p>$${product.price}</p>
                <div class="showcase-badges">
                    ${product.popular ? '<span class="badge popular">🔥 Popular</span>' : ''}
                    ${product.featured ? '<span class="badge featured">⭐ Featured</span>' : ''}
                </div>
            </div>
            <div class="magnet-glow"></div>
        `;
        elements.magnetShowcase.appendChild(magnetDiv);
    });
    
    // Initialize the 3D carousel with enhanced physics
    updateShowcase();
    setupAdvancedPhysics();
    
    // Enhanced auto-rotation with user interaction detection
    let autoRotateInterval;
    let isUserInteracting = false;
    
    function startAutoRotation() {
        autoRotateInterval = setInterval(() => {
            if (!isUserInteracting) {
                nextShowcase();
            }
        }, 4000);
    }
    
    function stopAutoRotation() {
        clearInterval(autoRotateInterval);
    }
    
    // Pause auto-rotation on user interaction
    elements.magnetShowcase.addEventListener('mouseenter', () => {
        isUserInteracting = true;
        stopAutoRotation();
    });
    
    elements.magnetShowcase.addEventListener('mouseleave', () => {
        isUserInteracting = false;
        startAutoRotation();
    });
    
    // Touch interaction for mobile
    elements.magnetShowcase.addEventListener('touchstart', () => {
        isUserInteracting = true;
        stopAutoRotation();
    });
    
    elements.magnetShowcase.addEventListener('touchend', () => {
        setTimeout(() => {
            isUserInteracting = false;
            startAutoRotation();
        }, 3000);
    });
    
    startAutoRotation();
}

function nextShowcase() {
    const totalMagnets = elements.magnetShowcase.querySelectorAll('.showcase-magnet').length;
    currentShowcaseIndex = (currentShowcaseIndex + 1) % totalMagnets;
    updateShowcase();
}

function previousShowcase() {
    const totalMagnets = elements.magnetShowcase.querySelectorAll('.showcase-magnet').length;
    currentShowcaseIndex = (currentShowcaseIndex - 1 + totalMagnets) % totalMagnets;
    updateShowcase();
}

function updateShowcase() {
    const magnetElements = document.querySelectorAll('.showcase-magnet');
    const totalMagnets = magnetElements.length;
    const angleStep = 360 / totalMagnets;
    const radius = window.innerWidth > 768 ? 320 : 240; // Increased radius for better spacing

    magnetElements.forEach((magnet, index) => {
        const relativeIndex = (index - currentShowcaseIndex + totalMagnets) % totalMagnets;
        const angle = relativeIndex * angleStep;
        const angleRad = (angle * Math.PI) / 180;
        
        // Enhanced 3D positioning with smooth curves
        const x = Math.sin(angleRad) * radius;
        const y = Math.sin(angleRad * 0.5) * 20; // Subtle vertical movement
        const z = -Math.cos(angleRad) * (radius / 2.5);
        
        let scale, opacity, zIndex, rotationY, glowIntensity;
        
        if (relativeIndex === 0) { // Center item - completely viewable
            scale = 1.4;
            opacity = 1;
            zIndex = 400;
            rotationY = 0;
            glowIntensity = 1;
            magnet.classList.add('active');
            magnet.classList.add('center-magnet');
        } else if (relativeIndex === 1 || relativeIndex === totalMagnets - 1) { // Immediate neighbors
            scale = 0.8;
            opacity = 0.25;
            zIndex = 200;
            rotationY = relativeIndex === 1 ? -15 : 15;
            glowIntensity = 0.3;
            magnet.classList.remove('active', 'center-magnet');
        } else if (relativeIndex === 2 || relativeIndex === totalMagnets - 2) { // Second neighbors
            scale = 0.65;
            opacity = 0.15;
            zIndex = 150;
            rotationY = relativeIndex === 2 ? -25 : 25;
            glowIntensity = 0.15;
            magnet.classList.remove('active', 'center-magnet');
        } else if (relativeIndex === 3 || relativeIndex === totalMagnets - 3) { // Third neighbors
            scale = 0.5;
            opacity = 0.1;
            zIndex = 100;
            rotationY = relativeIndex === 3 ? -35 : 35;
            glowIntensity = 0.08;
            magnet.classList.remove('active', 'center-magnet');
        } else { // Furthest items
            scale = 0.35;
            opacity = 0.05;
            zIndex = 50;
            rotationY = relativeIndex < totalMagnets / 2 ? -45 : 45;
            glowIntensity = 0.03;
            magnet.classList.remove('active', 'center-magnet');
        }
        
        // Apply enhanced transforms with rotation and glow
        magnet.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale}) rotateY(${rotationY}deg)`;
        magnet.style.opacity = opacity;
        magnet.style.zIndex = zIndex;
        
        // Enhanced glow effect
        const glow = magnet.querySelector('.magnet-glow');
        if (glow) {
            glow.style.opacity = glowIntensity;
            glow.style.boxShadow = `0 0 ${20 + glowIntensity * 40}px rgba(49, 130, 206, ${glowIntensity * 0.8})`;
        }
        
        // Add subtle animation delay for smoother transitions
        magnet.style.transitionDelay = `${Math.abs(relativeIndex) * 50}ms`;
    });
}

// Advanced Physics Engine for Enhanced Interactions
function setupAdvancedPhysics() {
    const magnets = document.querySelectorAll('.showcase-magnet');
    let isMouseOver = false;
    
    magnets.forEach((magnet, index) => {
        // Enhanced hover effects
        magnet.addEventListener('mouseenter', () => {
            isMouseOver = true;
            magnet.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            magnet.style.transform += ' translateY(-10px)';
            magnet.style.filter = 'brightness(1.1) saturate(1.2)';
            
            // Enhanced glow on hover
            const glow = magnet.querySelector('.magnet-glow');
            if (glow) {
                glow.style.opacity = '0.8';
                glow.style.boxShadow = '0 0 60px rgba(49, 130, 206, 0.9)';
            }
        });
        
        magnet.addEventListener('mouseleave', () => {
            isMouseOver = false;
            magnet.style.filter = 'brightness(1) saturate(1)';
            
            // Reset glow
            const glow = magnet.querySelector('.magnet-glow');
            if (glow) {
                glow.style.opacity = '';
                glow.style.boxShadow = '';
            }
            
            // Reset position after delay
            setTimeout(() => {
                if (!isMouseOver) {
                    updateShowcase();
                }
            }, 100);
        });
        
        // Enhanced click interactions
        magnet.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add click ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(49, 130, 206, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            const rect = magnet.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            
            magnet.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

function showCarouselModal(index) {
    const featuredProducts = productData.filter(p => p.featured);
    const product = featuredProducts[index];
    if (!product) return;
    
    elements.carouselModalContent.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover rounded-xl mb-6">
        <h2 class="text-3xl font-bold text-gray-900">${product.name}</h2>
        <p class="text-2xl font-bold text-yellow-500 my-3">$${product.price}</p>
        <p class="text-gray-600">${product.description}</p>
        <button class="mt-8 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800" onclick="addToCartFromCarousel(${product.id})">Add to Cart</button>
    `;
    elements.carouselModal.classList.add('visible');
}

function closeCarouselModal() {
    elements.carouselModal.classList.remove('visible');
}

function handleMagnetClick(e) {
    const target = e.target.closest('.showcase-magnet');
    if (!target) return;
    
    const clickedIndex = parseInt(target.dataset.index);
    
    if (clickedIndex === currentShowcaseIndex) {
        showCarouselModal(clickedIndex);
    } else {
        currentShowcaseIndex = clickedIndex;
        updateShowcase();
    }
}

function addToCartFromCarousel(productId) {
    const quantity = 1;
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        const product = productData.find(p => p.id === productId);
        if (product) {
            cart.push({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity: quantity
            });
        }
    }
    
    updateCartStorage();
    updateCartUI();
    closeCarouselModal();
    showCartAnimation();
    showNotification(`Added ${productData.find(p => p.id === productId)?.name} to cart`, 'success');
}

function scrollToCollection() {
    document.getElementById('collection').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function showARPreview() {
    // Enhanced AR Preview functionality
    const arModal = createARModal();
    document.body.appendChild(arModal);
    
    // Check for camera access
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
            .then(stream => {
                const video = arModal.querySelector('#arVideo');
                video.srcObject = stream;
                video.play();
                
                // Add magnet overlay
                addMagnetOverlay(arModal);
            })
            .catch(error => {
                console.error('Camera access denied:', error);
                showCameraFallback(arModal);
            });
    } else {
        showCameraFallback(arModal);
    }
}

function createARModal() {
    const modal = document.createElement('div');
    modal.className = 'ar-modal';
    modal.innerHTML = `
        <div class="ar-overlay">
            <div class="ar-content">
                <div class="ar-header">
                    <h3>AR Preview - Try Before You Buy</h3>
                    <button class="ar-close" onclick="closeARModal(this)">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="ar-camera-container">
                    <video id="arVideo" autoplay playsinline muted></video>
                    <div class="ar-magnet-overlay" id="magnetOverlay">
                        <img src="" alt="Magnet Preview" id="overlayMagnet">
                        <div class="ar-instructions">
                            <p>📱 Point your camera at a flat surface</p>
                            <p>🧲 The magnet will appear in AR</p>
                            <p>📏 Tap to place and resize</p>
                        </div>
                    </div>
                    <div class="ar-controls">
                        <button class="ar-btn" onclick="changeMagnetSize('small')">Small</button>
                        <button class="ar-btn" onclick="changeMagnetSize('medium')">Medium</button>
                        <button class="ar-btn" onclick="changeMagnetSize('large')">Large</button>
                        <button class="ar-btn" onclick="captureARImage()">📸 Capture</button>
                    </div>
                </div>
                <div class="ar-info">
                    <p><strong>How it works:</strong> Our AR technology lets you visualize how Calgary magnets will look on your fridge or any metal surface. Perfect for planning your collection!</p>
                </div>
            </div>
        </div>
    `;
    
    // Add AR modal styles
    const style = document.createElement('style');
    style.textContent = `
        .ar-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 5000;
            background: rgba(0, 0, 0, 0.95);
        }
        
        .ar-overlay {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .ar-content {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            max-width: 90vw;
            max-height: 90vh;
            width: 400px;
        }
        
        .ar-header {
            padding: 1rem;
            background: var(--primary-color);
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .ar-camera-container {
            position: relative;
            width: 100%;
            height: 300px;
            background: #000;
        }
        
        #arVideo {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .ar-magnet-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 2;
        }
        
        #overlayMagnet {
            width: 120px;
            height: 140px;
            object-fit: cover;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            opacity: 0.9;
        }
        
        .ar-instructions {
            position: absolute;
            top: -60px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 0.5rem;
            border-radius: 8px;
            font-size: 0.8rem;
            text-align: center;
            white-space: nowrap;
        }
        
        .ar-controls {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 0.5rem;
            z-index: 3;
        }
        
        .ar-btn {
            padding: 0.5rem 1rem;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 20px;
            font-size: 0.8rem;
            cursor: pointer;
            transition: var(--transition-fast);
        }
        
        .ar-btn:hover {
            background: var(--dark-blue);
        }
        
        .ar-info {
            padding: 1rem;
            background: var(--cream-color);
            font-size: 0.9rem;
            color: var(--dark-blue);
        }
        
        .ar-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 50%;
            transition: var(--transition-fast);
        }
        
        .ar-close:hover {
            background: rgba(255, 255, 255, 0.2);
        }
    `;
    
    document.head.appendChild(style);
    return modal;
}

function addMagnetOverlay(modal) {
    const overlayMagnet = modal.querySelector('#overlayMagnet');
    const featuredProducts = productData.filter(p => p.featured);
    const randomMagnet = featuredProducts[Math.floor(Math.random() * featuredProducts.length)];
    
    overlayMagnet.src = randomMagnet.image;
    overlayMagnet.alt = randomMagnet.name;
    
    // Add tap to place functionality
    const cameraContainer = modal.querySelector('.ar-camera-container');
    cameraContainer.addEventListener('click', (e) => {
        const rect = cameraContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const overlay = modal.querySelector('.ar-magnet-overlay');
        overlay.style.left = x + 'px';
        overlay.style.top = y + 'px';
        overlay.style.transform = 'translate(-50%, -50%)';
    });
}

function changeMagnetSize(size) {
    const overlayMagnet = document.querySelector('#overlayMagnet');
    if (!overlayMagnet) return;
    
    const sizes = {
        small: '80px 100px',
        medium: '120px 140px',
        large: '160px 180px'
    };
    
    overlayMagnet.style.width = sizes[size].split(' ')[0];
    overlayMagnet.style.height = sizes[size].split(' ')[1];
}

function captureARImage() {
    const video = document.querySelector('#arVideo');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);
    
    // Add magnet overlay to canvas
    const overlayMagnet = document.querySelector('#overlayMagnet');
    if (overlayMagnet) {
        ctx.drawImage(overlayMagnet, canvas.width / 2 - 60, canvas.height / 2 - 70, 120, 140);
    }
    
    // Convert to image and download
    canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'calgary-magnet-ar-preview.jpg';
        a.click();
        URL.revokeObjectURL(url);
    });
    
    showNotification('AR preview saved to your device!', 'success');
}

function showCameraFallback(modal) {
    const video = modal.querySelector('#arVideo');
    video.style.display = 'none';
    
    const fallback = document.createElement('div');
    fallback.className = 'ar-fallback';
    fallback.innerHTML = `
        <div class="fallback-content">
            <i class="fas fa-camera fa-3x"></i>
            <h4>Camera Access Required</h4>
            <p>To use AR preview, please allow camera access when prompted.</p>
            <button class="ar-btn" onclick="retryCameraAccess()">Try Again</button>
            <button class="ar-btn" onclick="closeARModal(this.closest('.ar-modal'))">Close</button>
        </div>
    `;
    
    modal.querySelector('.ar-camera-container').appendChild(fallback);
}

function closeARModal(button) {
    const modal = button.closest('.ar-modal');
    const video = modal.querySelector('#arVideo');
    
    if (video.srcObject) {
        const tracks = video.srcObject.getTracks();
        tracks.forEach(track => track.stop());
    }
    
    modal.remove();
}

function retryCameraAccess() {
    closeARModal(document.querySelector('.ar-close'));
    setTimeout(() => showARPreview(), 500);
}

// Product Functions
function renderProducts() {
    let filteredProducts = filterProducts();
    filteredProducts = sortProducts(filteredProducts);
    
    elements.productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card fade-in" data-theme="${product.theme}" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-overlay">
                    <div class="product-overlay-content">
                        <h4>${product.name}</h4>
                        <p>${product.description}</p>
                        <button class="quick-add-btn" onclick="event.stopPropagation(); addToCartFromGrid(${product.id})">
                            <i class="fas fa-shopping-bag"></i> Quick Add
                        </button>
                    </div>
                </div>
            </div>
            <div class="product-info">
                <div class="product-theme">${product.theme}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price}</div>
                <div class="product-rating">
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <span class="rating-text">(4.9/5)</span>
                </div>
                <div class="product-actions">
                    <button class="quick-add-btn" onclick="event.stopPropagation(); addToCartFromGrid(${product.id})">
                        Add to Cart
                    </button>
                    <button class="wishlist-btn">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Trigger animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach((el, index) => {
            setTimeout(() => el.classList.add('visible'), index * 100);
        });
    }, 100);
}

function filterProducts() {
    if (currentFilter === 'all') {
        return productData;
    }
    return productData.filter(product => product.theme === currentFilter);
}

function sortProducts(products) {
    switch (currentSort) {
        case 'alphabetical':
            return products.sort((a, b) => a.name.localeCompare(b.name));
        case 'popular':
            return products.sort((a, b) => b.popular - a.popular);
        case 'newest':
            return products.sort((a, b) => b.id - a.id);
        case 'featured':
        default:
            return products.sort((a, b) => b.featured - a.featured);
    }
}

function handleFilter(filter) {
    currentFilter = filter;
    
    // Update active filter button
    elements.filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });
    
    renderProducts();
}

function handleSort() {
    currentSort = elements.sortSelect.value;
    renderProducts();
}

function loadMoreProducts() {
    // Simulate loading more products
    elements.loadMoreBtn.textContent = 'Loading...';
    elements.loadMoreBtn.disabled = true;
    
    setTimeout(() => {
        elements.loadMoreBtn.textContent = 'Load More Magnets';
        elements.loadMoreBtn.disabled = false;
        // In a real app, this would fetch more products from an API
    }, 1000);
}

// Modal Functions
function openProductModal(productId) {
    const product = productData.find(p => p.id === productId);
    if (!product) return;

    // Update modal content
    elements.modalImage.src = product.image;
    elements.modalImage.alt = product.name;
    elements.modalTitle.textContent = product.name;
    elements.modalTheme.textContent = product.theme.charAt(0).toUpperCase() + product.theme.slice(1);
    elements.modalDescription.textContent = product.description;
    elements.qtyInput.value = 1;
    elements.addToCartBtn.innerHTML = `<i class="fas fa-shopping-bag"></i> Add to Cart - $${product.price}`;
    
    // Store current product for cart functionality
    elements.modalImage.dataset.productId = productId;
    elements.modalImage.dataset.currentPrice = product.price;
    
    // Reset zoom
    resetZoom();
    
    // Show modal with animation
    elements.productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Add click-to-zoom functionality
    setupImageZoom();
}

function closeModal() {
    elements.productModal.classList.remove('active');
    document.body.style.overflow = '';
    resetZoom();
}

function increaseQuantity() {
    const currentQty = parseInt(elements.qtyInput.value);
    if (currentQty < 10) {
        elements.qtyInput.value = currentQty + 1;
        updatePriceDisplay();
    }
}

function decreaseQuantity() {
    const currentQty = parseInt(elements.qtyInput.value);
    if (currentQty > 1) {
        elements.qtyInput.value = currentQty - 1;
        updatePriceDisplay();
    }
}

function updatePriceDisplay() {
    const quantity = parseInt(elements.qtyInput.value);
    const price = parseFloat(elements.modalImage.dataset.currentPrice);
    const totalPrice = (price * quantity).toFixed(2);
    elements.addToCartBtn.innerHTML = `<i class="fas fa-shopping-bag"></i> Add to Cart - $${totalPrice}`;
}

function zoomImage(factor) {
    const image = elements.modalImage;
    const currentScale = parseFloat(image.style.transform.match(/scale\(([^)]+)\)/)?.[1] || 1);
    const newScale = Math.max(0.5, Math.min(3, currentScale * factor));
    image.style.transform = `scale(${newScale})`;
    image.style.cursor = newScale > 1 ? 'move' : 'zoom-in';
}

function resetZoom() {
    elements.modalImage.style.transform = 'scale(1)';
    elements.modalImage.style.cursor = 'zoom-in';
}

function setupImageZoom() {
    const image = elements.modalImage;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let translateX = 0;
    let translateY = 0;
    let initialDistance = 0;
    let initialScale = 1;

    // Click/Tap to zoom
    image.addEventListener('click', (e) => {
        e.preventDefault();
        const currentScale = parseFloat(image.style.transform.match(/scale\(([^)]+)\)/)?.[1] || 1);
        if (currentScale === 1) {
            zoomImage(1.5);
        } else if (currentScale >= 1.5) {
            zoomImage(0.67);
        }
    });

    // Mouse events
    image.addEventListener('mousedown', (e) => {
        const currentScale = parseFloat(image.style.transform.match(/scale\(([^)]+)\)/)?.[1] || 1);
        if (currentScale > 1) {
            isDragging = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
            image.style.cursor = 'grabbing';
            e.preventDefault();
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            translateX = e.clientX - startX;
            translateY = e.clientY - startY;
            const currentScale = parseFloat(image.style.transform.match(/scale\(([^)]+)\)/)?.[1] || 1);
            image.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
            e.preventDefault();
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            const currentScale = parseFloat(image.style.transform.match(/scale\(([^)]+)\)/)?.[1] || 1);
            image.style.cursor = currentScale > 1 ? 'move' : 'zoom-in';
        }
    });

    // Touch events for mobile
    image.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            const currentScale = parseFloat(image.style.transform.match(/scale\(([^)]+)\)/)?.[1] || 1);
            if (currentScale > 1) {
                isDragging = true;
                startX = e.touches[0].clientX - translateX;
                startY = e.touches[0].clientY - translateY;
            }
        } else if (e.touches.length === 2) {
            // Pinch to zoom
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            initialDistance = Math.sqrt(
                Math.pow(touch2.clientX - touch1.clientX, 2) + 
                Math.pow(touch2.clientY - touch1.clientY, 2)
            );
            initialScale = parseFloat(image.style.transform.match(/scale\(([^)]+)\)/)?.[1] || 1);
        }
        e.preventDefault();
    });

    image.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1 && isDragging) {
            translateX = e.touches[0].clientX - startX;
            translateY = e.touches[0].clientY - startY;
            const currentScale = parseFloat(image.style.transform.match(/scale\(([^)]+)\)/)?.[1] || 1);
            image.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
        } else if (e.touches.length === 2) {
            // Pinch zoom
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const currentDistance = Math.sqrt(
                Math.pow(touch2.clientX - touch1.clientX, 2) + 
                Math.pow(touch2.clientY - touch1.clientY, 2)
            );
            const scale = initialScale * (currentDistance / initialDistance);
            const clampedScale = Math.max(0.5, Math.min(3, scale));
            image.style.transform = `scale(${clampedScale}) translate(${translateX}px, ${translateY}px)`;
        }
        e.preventDefault();
    });

    image.addEventListener('touchend', () => {
        isDragging = false;
    });
}

// Cart Functions
function addToCart() {
    const productId = parseInt(elements.modalImage.dataset.productId);
    const quantity = parseInt(elements.qtyInput.value);
    
    // Validation
    if (!productId || quantity < 1 || quantity > 10) {
        showNotification('Please select a valid quantity (1-10)', 'error');
        return;
    }
    
    const product = productData.find(p => p.id === productId);
    if (!product) {
        showNotification('Product not found', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        const newTotal = existingItem.quantity + quantity;
        if (newTotal > 10) {
            showNotification('Maximum 10 items per product', 'error');
            return;
        }
        existingItem.quantity = newTotal;
        showNotification(`Added ${quantity} more ${product.name} to cart`, 'success');
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity: quantity
        });
        showNotification(`Added ${product.name} to cart`, 'success');
    }
    
    updateCartStorage();
    updateCartUI();
    closeModal();
    showCartAnimation();
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function addToCartFromGrid(productId) {
    const quantity = 1;
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        const product = productData.find(p => p.id === productId);
        cart.push({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity: quantity
        });
    }
    
    updateCartStorage();
    updateCartUI();
    showCartAnimation();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartStorage();
    updateCartUI();
}

function updateCartQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            updateCartStorage();
            updateCartUI();
        }
    }
}

function updateCartStorage() {
    localStorage.setItem('calgaryMagnetsCart', JSON.stringify(cart));
}

function updateCartUI() {
    updateCartCount();
    renderCartItems();
    updateCartTotal();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    elements.cartCount.textContent = totalItems;
    elements.cartCount.style.display = totalItems > 0 ? 'block' : 'none';
}

function renderCartItems() {
    if (cart.length === 0) {
        elements.cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">
                    <i class="fas fa-shopping-bag"></i>
                </div>
                <h4>Your cart is empty</h4>
                <p>Add some beautiful Calgary magnets to get started!</p>
                <button class="btn-primary" onclick="closeCartSidebar(); document.getElementById('collection').scrollIntoView({behavior: 'smooth'})">
                    Browse Collection
                </button>
            </div>
        `;
        return;
    }
    
    elements.cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">$${item.price} each</div>
                <div class="cart-item-subtotal">Subtotal: $${(item.price * item.quantity).toFixed(2)}</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" class="cart-item-qty" value="${item.quantity}" min="1" max="10" 
                           onchange="updateCartQuantity(${item.id}, parseInt(this.value))">
                    <button class="qty-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})" ${item.quantity >= 10 ? 'disabled' : ''}>
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove item">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    elements.cartTotal.textContent = total.toFixed(2);
}

function toggleCartSidebar() {
    elements.cartSidebar.classList.toggle('active');
    if (elements.cartSidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeCartSidebar() {
    elements.cartSidebar.classList.remove('active');
    document.body.style.overflow = '';
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Simulate checkout process
    alert('Checkout functionality would be implemented here. This would redirect to a secure payment processor.');
}

function showCartAnimation() {
    const cartBtn = elements.cartBtn;
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);
}

// Utility Functions
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                // Close mobile menu if open
                elements.navMenu.classList.remove('active');
                elements.menuToggle.classList.remove('active');
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                // Smooth scroll with offset for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animations
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
        observer.observe(el);
    });
}

function handleKeyboardEvents(e) {
    // Close modals with Escape key
    if (e.key === 'Escape') {
        closeModal();
        closeCarouselModal();
        closeSearchOverlay();
        closeCartSidebar();
    }
    
    // Carousel navigation with arrow keys
    if (elements.carouselModal.classList.contains('visible')) {
        if (e.key === 'ArrowLeft') previousShowcase();
        if (e.key === 'ArrowRight') nextShowcase();
        return;
    }
    
    // Search with Enter key
    if (e.key === 'Enter' && elements.searchInput === document.activeElement) {
        const query = elements.searchInput.value;
        if (query.length >= 2) {
            // Trigger search
            handleSearch({ target: { value: query } });
        }
    }
}

function handleScroll() {
    const navbar = document.querySelector('.navbar');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    // Update active navigation link based on scroll position
    updateActiveNavLink();
}

function updateActiveNavLink() {
    const sections = ['home', 'collection', 'themes', 'about', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            const link = document.querySelector(`a[href="#${section}"]`);
            
            if (rect.top <= 100 && rect.bottom >= 100) {
                navLinks.forEach(l => l.classList.remove('active'));
                if (link) link.classList.add('active');
            }
        }
    });
}

function handleResize() {
    // Handle responsive adjustments
    if (window.innerWidth <= 768) {
        elements.navMenu.classList.remove('active');
    }
    
    // Update carousel layout on resize
    updateShowcase();
}

// Theme filtering is now handled in setupThemeCards() function

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! We\'ll get back to you soon.');
        this.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Newsletter form handling
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    const button = this.querySelector('button');
    const originalHTML = button.innerHTML;
    
    button.innerHTML = '<i class="fas fa-check"></i>';
    button.style.background = 'var(--green-color)';
    
    setTimeout(() => {
        button.innerHTML = originalHTML;
        button.style.background = '';
        this.reset();
        alert('Thank you for subscribing to our newsletter!');
    }, 2000);
});

// Wishlist functionality
document.addEventListener('click', function(e) {
    if (e.target.closest('.wishlist-btn')) {
        e.preventDefault();
        const btn = e.target.closest('.wishlist-btn');
        const icon = btn.querySelector('i');
        
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            btn.style.background = 'var(--secondary-color)';
            btn.style.color = 'white';
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            btn.style.background = 'var(--cream-color)';
            btn.style.color = '';
        }
    }
});

// Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('loading');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll handler
window.addEventListener('scroll', debounce(handleScroll, 10));

// Add loading states to buttons
function addLoadingState(button, text = 'Loading...') {
    const originalText = button.innerHTML;
    button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${text}`;
    button.disabled = true;
    
    return () => {
        button.innerHTML = originalText;
        button.disabled = false;
    };
}

// PWA Initialization
function initializePWA() {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('Service Worker registered successfully:', registration);
                    
                    // Check for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                // New content is available, prompt user to refresh
                                showUpdateNotification();
                            }
                        });
                    });
                })
                .catch(error => {
                    console.log('Service Worker registration failed:', error);
                });
        });
    }
    
    // Handle install prompt
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        showInstallPrompt();
    });
    
    // Track app installed event
    window.addEventListener('appinstalled', () => {
        console.log('PWA was installed');
        trackEvent('pwa_installed');
        hideInstallPrompt();
    });
}

function showUpdateNotification() {
    const notification = document.createElement('div');
    notification.className = 'update-notification';
    notification.innerHTML = `
        <div class="update-content">
            <i class="fas fa-sync-alt"></i>
            <span>New version available!</span>
            <button onclick="updateApp()" class="update-btn">Update Now</button>
            <button onclick="closeUpdateNotification()" class="close-update-btn">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .update-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: 1rem;
            border-radius: 10px;
            box-shadow: var(--shadow-lg);
            z-index: 6000;
            animation: slideInRight 0.3s ease;
        }
        
        .update-content {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .update-btn {
            background: white;
            color: var(--primary-color);
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            font-weight: 600;
            cursor: pointer;
        }
        
        .close-update-btn {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        @keyframes slideInRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }
    `;
    
    document.head.appendChild(style);
}

function updateApp() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then(registration => {
            if (registration && registration.waiting) {
                registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                window.location.reload();
            }
        });
    }
}

function closeUpdateNotification() {
    const notification = document.querySelector('.update-notification');
    if (notification) {
        notification.remove();
    }
}

function showInstallPrompt() {
    const installBanner = document.createElement('div');
    installBanner.className = 'install-banner';
    installBanner.innerHTML = `
        <div class="install-content">
            <i class="fas fa-download"></i>
            <div>
                <strong>Install Calgary Magnets App</strong>
                <p>Get quick access to your favorite magnets!</p>
            </div>
            <button onclick="installApp()" class="install-btn">Install</button>
            <button onclick="hideInstallPrompt()" class="close-install-btn">×</button>
        </div>
    `;
    
    document.body.appendChild(installBanner);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .install-banner {
            position: fixed;
            bottom: 20px;
            left: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: 1rem;
            border-radius: 10px;
            box-shadow: var(--shadow-lg);
            z-index: 6000;
            animation: slideInUp 0.3s ease;
        }
        
        .install-content {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .install-content div {
            flex: 1;
        }
        
        .install-btn {
            background: white;
            color: var(--primary-color);
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            font-weight: 600;
            cursor: pointer;
        }
        
        .close-install-btn {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        @keyframes slideInUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
        }
    `;
    
    document.head.appendChild(style);
}

function installApp() {
    if (window.deferredPrompt) {
        window.deferredPrompt.prompt();
        window.deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
                trackEvent('pwa_install_accepted');
            } else {
                console.log('User dismissed the install prompt');
                trackEvent('pwa_install_dismissed');
            }
            window.deferredPrompt = null;
        });
    }
    hideInstallPrompt();
}

function hideInstallPrompt() {
    const banner = document.querySelector('.install-banner');
    if (banner) {
        banner.remove();
    }
}

// Analytics Initialization
function initializeAnalytics() {
    // Enhanced analytics tracking
    trackPageView();
    
    // Track user interactions
    trackUserEngagement();
    
    // Track performance metrics
    trackPerformanceMetrics();
}

function trackPageView() {
    const pageData = {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
        referrer: document.referrer,
        timestamp: Date.now()
    };
    
    console.log('Page view tracked:', pageData);
    
    // Store in localStorage for offline analytics
    const analyticsData = JSON.parse(localStorage.getItem('analyticsData') || '[]');
    analyticsData.push({
        type: 'page_view',
        data: pageData,
        timestamp: Date.now()
    });
    
    // Keep only last 100 events
    if (analyticsData.length > 100) {
        analyticsData.splice(0, analyticsData.length - 100);
    }
    
    localStorage.setItem('analyticsData', JSON.stringify(analyticsData));
}

function trackUserEngagement() {
    let startTime = Date.now();
    let isActive = true;
    
    // Track time on page
    const trackTime = () => {
        if (isActive) {
            const timeSpent = Date.now() - startTime;
            if (timeSpent > 30000) { // Track after 30 seconds
                trackEvent('time_on_page', { duration: timeSpent });
            }
        }
    };
    
    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollDepth > maxScrollDepth) {
            maxScrollDepth = scrollDepth;
            if (maxScrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
                trackEvent('scroll_depth', { depth: maxScrollDepth });
            }
        }
    });
    
    // Track when user becomes inactive
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            isActive = false;
            trackTime();
        } else {
            isActive = true;
            startTime = Date.now();
        }
    });
    
    // Track on page unload
    window.addEventListener('beforeunload', () => {
        trackTime();
    });
}

function trackPerformanceMetrics() {
    // Track page load performance
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            const metrics = {
                load_time: perfData.loadEventEnd - perfData.loadEventStart,
                dom_content_loaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                first_paint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-paint')?.startTime || 0,
                first_contentful_paint: performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
            };
            
            trackEvent('performance_metrics', metrics);
        }, 1000);
    });
}

function trackEvent(eventName, eventData = {}) {
    const event = {
        name: eventName,
        data: eventData,
        timestamp: Date.now(),
        user_agent: navigator.userAgent,
        screen_resolution: `${screen.width}x${screen.height}`,
        viewport_size: `${window.innerWidth}x${window.innerHeight}`
    };
    
    console.log('Event tracked:', event);
    
    // Store in localStorage
    const analyticsData = JSON.parse(localStorage.getItem('analyticsData') || '[]');
    analyticsData.push(event);
    
    // Keep only last 100 events
    if (analyticsData.length > 100) {
        analyticsData.splice(0, analyticsData.length - 100);
    }
    
    localStorage.setItem('analyticsData', JSON.stringify(analyticsData));
    
    // Send to analytics service (in a real app)
    // sendToAnalytics(event);
}

// Export functions for global access
window.openProductModal = openProductModal;
window.addToCartFromGrid = addToCartFromGrid;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.handleFilter = handleFilter;
window.addToCartFromCarousel = addToCartFromCarousel;
window.closeCarouselModal = closeCarouselModal;
window.previousShowcase = previousShowcase;
window.nextShowcase = nextShowcase;
window.updateApp = updateApp;
window.closeUpdateNotification = closeUpdateNotification;
window.installApp = installApp;
window.hideInstallPrompt = hideInstallPrompt;
window.changeMagnetSize = changeMagnetSize;
window.captureARImage = captureARImage;
window.closeARModal = closeARModal;
window.retryCameraAccess = retryCameraAccess;
