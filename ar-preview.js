/**
 * AR Preview Module for Calgary Magnets
 * Handles augmented reality functionality for magnet placement simulation
 */

class ARPreview {
    constructor(productData) {
        this.productData = productData;
        this.isActive = false;
        this.currentModal = null;
        this.cameraStream = null;
    }

    /**
     * Initialize AR Preview functionality
     */
    init() {
        console.log('AR Preview module initialized');
    }

    /**
     * Show AR Preview modal with camera feed
     */
    showARPreview() {
        if (this.isActive) return;
        
        this.isActive = true;
        const arModal = this.createARModal();
        document.body.appendChild(arModal);
        this.currentModal = arModal;
        
        // Check for camera access
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ 
                video: { 
                    facingMode: 'environment',
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                } 
            })
                .then(stream => {
                    this.cameraStream = stream;
                    const video = arModal.querySelector('#arVideo');
                    video.srcObject = stream;
                    video.play();
                    
                    // Add magnet overlay
                    this.addMagnetOverlay(arModal);
                })
                .catch(error => {
                    console.error('Camera access denied:', error);
                    this.showCameraFallback(arModal);
                });
        } else {
            this.showCameraFallback(arModal);
        }
    }

    /**
     * Create AR modal HTML structure
     */
    createARModal() {
        const modal = document.createElement('div');
        modal.className = 'ar-modal';
        modal.innerHTML = `
            <div class="ar-overlay">
                <div class="ar-content">
                    <div class="ar-header">
                        <h3>AR Preview - Try Before You Buy</h3>
                        <button class="ar-close" onclick="arPreview.closeARModal(this)">
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
                            <button class="ar-btn" onclick="arPreview.changeMagnetSize('small')">Small</button>
                            <button class="ar-btn" onclick="arPreview.changeMagnetSize('medium')">Medium</button>
                            <button class="ar-btn" onclick="arPreview.changeMagnetSize('large')">Large</button>
                            <button class="ar-btn" onclick="arPreview.captureARImage()">📸 Capture</button>
                        </div>
                    </div>
                    <div class="ar-info">
                        <p><strong>How it works:</strong> Our AR technology lets you visualize how Calgary magnets will look on your fridge or any metal surface. Perfect for planning your collection!</p>
                    </div>
                </div>
            </div>
        `;
        
        // Add AR modal styles
        this.addARStyles();
        return modal;
    }

    /**
     * Add CSS styles for AR modal
     */
    addARStyles() {
        if (document.getElementById('ar-preview-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'ar-preview-styles';
        style.textContent = `
            .ar-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 5000;
                background: rgba(0, 0, 0, 0.95);
                animation: fadeIn 0.3s ease;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .ar-overlay {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            
            .ar-content {
                background: white;
                border-radius: 20px;
                overflow: hidden;
                max-width: 90vw;
                max-height: 90vh;
                width: 400px;
                animation: slideUp 0.3s ease;
            }
            
            @keyframes slideUp {
                from { transform: translateY(50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            .ar-header {
                padding: 1rem;
                background: var(--primary-color, #1a365d);
                color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .ar-header h3 {
                margin: 0;
                font-size: 1.1rem;
            }
            
            .ar-camera-container {
                position: relative;
                width: 100%;
                height: 300px;
                background: #000;
                overflow: hidden;
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
                transition: all 0.3s ease;
            }
            
            #overlayMagnet {
                width: 120px;
                height: 140px;
                object-fit: contain;
                object-position: center;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                opacity: 0.9;
                background: white;
                transition: all 0.3s ease;
            }
            
            .ar-instructions {
                position: absolute;
                top: -60px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 8px;
                font-size: 0.8rem;
                text-align: center;
                white-space: nowrap;
                backdrop-filter: blur(10px);
            }
            
            .ar-controls {
                position: absolute;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                gap: 0.5rem;
                z-index: 3;
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .ar-btn {
                padding: 0.5rem 1rem;
                background: var(--primary-color, #1a365d);
                color: white;
                border: none;
                border-radius: 20px;
                font-size: 0.8rem;
                cursor: pointer;
                transition: all 0.3s ease;
                font-weight: 500;
            }
            
            .ar-btn:hover {
                background: var(--dark-blue, #2d3748);
                transform: translateY(-2px);
            }
            
            .ar-btn:active {
                transform: translateY(0);
            }
            
            .ar-info {
                padding: 1rem;
                background: var(--cream-color, #f7fafc);
                font-size: 0.9rem;
                color: var(--dark-blue, #2d3748);
                line-height: 1.5;
            }
            
            .ar-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 50%;
                transition: all 0.3s ease;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .ar-close:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: scale(1.1);
            }
            
            .ar-fallback {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(0, 0, 0, 0.8);
            }
            
            .fallback-content {
                text-align: center;
                color: white;
                padding: 2rem;
            }
            
            .fallback-content i {
                margin-bottom: 1rem;
                opacity: 0.7;
            }
            
            .fallback-content h4 {
                margin-bottom: 0.5rem;
                font-size: 1.2rem;
            }
            
            .fallback-content p {
                margin-bottom: 1.5rem;
                opacity: 0.8;
                line-height: 1.5;
            }
            
            /* Mobile optimizations */
            @media (max-width: 480px) {
                .ar-content {
                    width: 95vw;
                    max-height: 95vh;
                }
                
                .ar-camera-container {
                    height: 250px;
                }
                
                .ar-controls {
                    bottom: 5px;
                    gap: 0.25rem;
                }
                
                .ar-btn {
                    padding: 0.4rem 0.8rem;
                    font-size: 0.75rem;
                }
                
                .ar-instructions {
                    font-size: 0.7rem;
                    padding: 0.4rem 0.8rem;
                    top: -50px;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    /**
     * Add magnet overlay to camera feed
     */
    addMagnetOverlay(modal) {
        const overlayMagnet = modal.querySelector('#overlayMagnet');
        const featuredProducts = this.productData.filter(p => p.featured);
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
            
            // Add visual feedback
            overlay.style.transform += ' scale(1.1)';
            setTimeout(() => {
                overlay.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 200);
        });
    }

    /**
     * Change magnet size in AR view
     */
    changeMagnetSize(size) {
        const overlayMagnet = document.querySelector('#overlayMagnet');
        if (!overlayMagnet) return;
        
        const sizes = {
            small: { width: '80px', height: '100px' },
            medium: { width: '120px', height: '140px' },
            large: { width: '160px', height: '180px' }
        };
        
        const selectedSize = sizes[size];
        if (selectedSize) {
            overlayMagnet.style.width = selectedSize.width;
            overlayMagnet.style.height = selectedSize.height;
            
            // Add visual feedback
            overlayMagnet.style.transform = 'scale(1.1)';
            setTimeout(() => {
                overlayMagnet.style.transform = 'scale(1)';
            }, 200);
        }
    }

    /**
     * Capture AR scene as image
     */
    captureARImage() {
        const video = document.querySelector('#arVideo');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;
        
        // Draw video frame
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Add magnet overlay to canvas
        const overlayMagnet = document.querySelector('#overlayMagnet');
        if (overlayMagnet && overlayMagnet.src) {
            const overlay = document.querySelector('.ar-magnet-overlay');
            const containerRect = document.querySelector('.ar-camera-container').getBoundingClientRect();
            const overlayRect = overlay.getBoundingClientRect();
            
            // Calculate overlay position relative to video
            const x = (overlayRect.left - containerRect.left) / containerRect.width * canvas.width;
            const y = (overlayRect.top - containerRect.top) / containerRect.height * canvas.height;
            const width = parseInt(overlayMagnet.style.width) * (canvas.width / containerRect.width);
            const height = parseInt(overlayMagnet.style.height) * (canvas.height / containerRect.height);
            
            // Create image element for drawing
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => {
                ctx.drawImage(img, x - width/2, y - height/2, width, height);
                
                // Convert to image and download
                canvas.toBlob(blob => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `calgary-magnet-ar-preview-${Date.now()}.jpg`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                    
                    this.showNotification('AR preview saved to your device!', 'success');
                }, 'image/jpeg', 0.9);
            };
            img.src = overlayMagnet.src;
        } else {
            // Just save video frame
            canvas.toBlob(blob => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `calgary-ar-preview-${Date.now()}.jpg`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                
                this.showNotification('AR preview saved to your device!', 'success');
            }, 'image/jpeg', 0.9);
        }
    }

    /**
     * Show camera fallback when access is denied
     */
    showCameraFallback(modal) {
        const video = modal.querySelector('#arVideo');
        video.style.display = 'none';
        
        const fallback = document.createElement('div');
        fallback.className = 'ar-fallback';
        fallback.innerHTML = `
            <div class="fallback-content">
                <i class="fas fa-camera fa-3x"></i>
                <h4>Camera Access Required</h4>
                <p>To use AR preview, please allow camera access when prompted.</p>
                <p>You can also try refreshing the page and allowing camera permissions.</p>
                <button class="ar-btn" onclick="arPreview.retryCameraAccess()">Try Again</button>
                <button class="ar-btn" onclick="arPreview.closeARModal(this.closest('.ar-modal'))">Close</button>
            </div>
        `;
        
        modal.querySelector('.ar-camera-container').appendChild(fallback);
    }

    /**
     * Close AR modal and cleanup
     */
    closeARModal(button) {
        const modal = button ? button.closest('.ar-modal') : this.currentModal;
        if (!modal) return;
        
        // Stop camera stream
        if (this.cameraStream) {
            const tracks = this.cameraStream.getTracks();
            tracks.forEach(track => track.stop());
            this.cameraStream = null;
        }
        
        // Remove modal with animation
        modal.style.opacity = '0';
        modal.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
        
        this.isActive = false;
        this.currentModal = null;
    }

    /**
     * Retry camera access
     */
    retryCameraAccess() {
        this.closeARModal();
        setTimeout(() => {
            this.showARPreview();
        }, 500);
    }

    /**
     * Show notification message
     */
    showNotification(message, type = 'success') {
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

    /**
     * Get current AR state
     */
    getState() {
        return {
            isActive: this.isActive,
            hasModal: !!this.currentModal,
            hasCamera: !!this.cameraStream
        };
    }

    /**
     * Cleanup method
     */
    destroy() {
        this.closeARModal();
        
        // Remove styles
        const styles = document.getElementById('ar-preview-styles');
        if (styles) {
            styles.remove();
        }
    }
}

// Export for use in main script
window.ARPreview = ARPreview;
