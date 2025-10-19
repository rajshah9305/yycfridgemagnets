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
    showcasePrev: document.getElementById('showcasePrev'),
    showcaseNext: document.getElementById('showcaseNext'),

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
    elements.showcasePrev.addEventListener('click', previousShowcase);
    elements.showcaseNext.addEventListener('click', nextShowcase);

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

    const results = productData.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.theme.toLowerCase().includes(query)
    );

    renderSearchResults(results);
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

// Hero Functions
function createHeroShowcase() {
    const featuredProducts = productData.filter(p => p.featured);
    elements.magnetShowcase.innerHTML = '';
    
    featuredProducts.forEach((product, index) => {
        const magnetDiv = document.createElement('div');
        magnetDiv.className = 'showcase-magnet';
        magnetDiv.dataset.productId = product.id;
        magnetDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="showcase-overlay">
                <h4>${product.name}</h4>
                <p>$${product.price}</p>
            </div>
        `;
        elements.magnetShowcase.appendChild(magnetDiv);
    });
    
    // Initialize rotation
    updateShowcaseTransform();
    
    // Auto-rotate every 4 seconds
    setInterval(() => {
        nextShowcase();
    }, 4000);
}

function nextShowcase() {
    const magnets = elements.magnetShowcase.querySelectorAll('.showcase-magnet');
    if (magnets.length === 0) return;
    
    currentShowcaseIndex = (currentShowcaseIndex + 1) % magnets.length;
    updateShowcaseTransform();
}

function previousShowcase() {
    const magnets = elements.magnetShowcase.querySelectorAll('.showcase-magnet');
    if (magnets.length === 0) return;
    
    currentShowcaseIndex = (currentShowcaseIndex - 1 + magnets.length) % magnets.length;
    updateShowcaseTransform();
}

function updateShowcaseTransform() {
    const magnets = elements.magnetShowcase.querySelectorAll('.showcase-magnet');
    if (magnets.length === 0) return;
    
    magnets.forEach((magnet, index) => {
        const offset = (index - currentShowcaseIndex) * 60; // Increased angle for better visibility
        const zOffset = (index - currentShowcaseIndex) * -80; // Increased depth
        const scale = index === currentShowcaseIndex ? 1 : 0.8;
        const opacity = index === currentShowcaseIndex ? 1 : 0.6;
        
        magnet.style.transform = `translateZ(${zOffset}px) rotateY(${offset}deg) scale(${scale})`;
        magnet.style.opacity = opacity;
        magnet.style.zIndex = magnets.length - Math.abs(index - currentShowcaseIndex);
        
        // Add click handler for each magnet
        magnet.onclick = () => {
            const productId = parseInt(magnet.dataset.productId);
            openProductModal(productId);
        };
    });
}

function scrollToCollection() {
    document.getElementById('collection').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function showARPreview() {
    // Simulate AR preview functionality
    alert('AR Preview feature coming soon! This will allow you to see how the magnets look on your fridge using your device camera.');
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
        closeSearchOverlay();
        closeCartSidebar();
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

// Export functions for global access
window.openProductModal = openProductModal;
window.addToCartFromGrid = addToCartFromGrid;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.handleFilter = handleFilter;
