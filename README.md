# Calgary Magnets - Premium Vintage Collection

An elite, Awwwards-worthy e-commerce website showcasing Calgary's finest vintage-style fridge magnet collection. Built with modern web technologies and featuring an immersive, interactive user experience.

## 🌟 Live Demo

🚀 **View the live website**:  https://yycfridgemagnets.vercel.app

## ✨ Features

### 🎨 **Design Excellence**
- **Vintage Aesthetic**: Inspired by mid-20th century travel posters with modern sophistication
- **Premium Typography**: Playfair Display for headings, Inter for body text
- **Sophisticated Color Palette**: Deep blues, gold accents, and cream tones
- **Smooth Animations**: CSS transitions and JavaScript-powered interactions
- **Responsive Design**: Optimized for all devices from mobile to desktop

### 🛍️ **E-commerce Features**
- **Interactive Product Gallery**: Filter by themes (Landmarks, Parks, Culture, Sports)
- **Advanced Search**: Real-time search with overlay interface
- **Product Modal**: Detailed view with zoom functionality and specifications
- **Shopping Cart**: Sidebar cart with quantity controls and persistent storage
- **Wishlist**: Heart-based wishlist functionality
- **AR Preview**: Placeholder for augmented reality fridge preview

### 🎯 **User Experience**
- **Hero Showcase**: 3D rotating magnet display with auto-rotation
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Loading States**: Elegant loading animations and transitions
- **Keyboard Navigation**: Full keyboard accessibility support
- **Mobile-First**: Touch-optimized interface for mobile devices

### 🏗️ **Technical Features**
- **Vanilla JavaScript**: No frameworks, pure performance
- **CSS Grid & Flexbox**: Modern layout techniques
- **Local Storage**: Persistent cart and user preferences
- **Lazy Loading**: Optimized image loading for performance
- **Intersection Observer**: Scroll-triggered animations
- **Debounced Events**: Performance-optimized scroll handling

## 📁 Project Structure

```
yycfridgemagnets/
├── index.html              # Main HTML structure
├── styles.css              # Comprehensive CSS styles
├── script.js               # Interactive JavaScript functionality
├── README.md               # Project documentation
├── package.json            # Project configuration
├── .gitignore              # Git ignore file
└── images/                 # Product images (21 unique designs)
    ├── calgary_magnet_01_main_cleaned.png
    ├── calgary_magnet_02_stampede_cleaned.png
    ├── calgary_magnet_03_olympic_cleaned.png
    ├── calgary_magnet_04_tower_cleaned.png
    ├── calgary_magnet_05_zoo_cleaned.png
    ├── calgary_magnet_06_heritage_fixed_cleaned.png
    ├── calgary_magnet_07_saddledome_cleaned.png
    ├── calaway_park_cleaned.png
    ├── chinook_arc_cleaned.png
    ├── cowboys_casino_cleaned.png
    ├── fish_creek_park_cleaned.png
    ├── fort_calgary_cleaned.png
    ├── glenbow_museum_cleaned.png
    ├── national_music_centre_cleaned.png
    ├── peace_bridge_cleaned.png
    ├── princes_island_park_cleaned.png
    ├── stampede_cleaned.png
    ├── stampede_tower_cleaned.png
    ├── stephen_ave_walk_cleaned.png
    └── university_of_calgary_cleaned.png
```

## 🎨 Design Philosophy

### **Visual Hierarchy**
- **Primary Navigation**: Fixed header with blur backdrop
- **Hero Section**: Full-screen immersive experience with 3D showcase
- **Content Sections**: Clear separation with consistent spacing
- **Call-to-Actions**: Prominent buttons with hover effects

### **Color Psychology**
- **Primary Blue (#1a365d)**: Trust, reliability, Calgary's sky
- **Gold (#d69e2e)**: Premium quality, warmth, Alberta's heritage
- **Cream (#f7fafc)**: Elegance, cleanliness, vintage paper
- **Accent Colors**: Strategic use for highlights and interactions

## 🚀 Getting Started

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/rajshah9305/yycfridgemagnets.git
   cd yycfridgemagnets
   ```

2. Open `index.html` in your web browser
3. For development, use a local server: `python -m http.server 8000`

### **Usage**
1. **Browse Collection**: Use the hero showcase or scroll to collection
2. **Filter Products**: Click theme buttons to filter by category
3. **Search**: Click the search icon to find specific magnets
4. **View Details**: Click any product to open detailed modal
5. **Add to Cart**: Use quantity controls and add to cart
6. **Checkout**: Access cart via the bag icon in navigation

## 📱 Responsive Breakpoints

- **Mobile**: < 480px - Single column, touch-optimized
- **Tablet**: 481px - 768px - Two columns, adjusted spacing
- **Desktop**: > 768px - Full layout with all features

## 🎯 Product Categories

### **Landmarks** (5 magnets)
- Calgary Tower
- Peace Bridge
- Stephen Avenue Walk
- University of Calgary
- Main Calgary Collection

### **Parks & Nature** (4 magnets)
- Fish Creek Park
- Prince's Island Park
- Fish Creek Provincial Park
- Natural beauty themes

### **Culture & Heritage** (6 magnets)
- Calgary Zoo
- Heritage Park
- Fort Calgary
- Glenbow Museum
- National Music Centre
- Calaway Park

### **Sports & Entertainment** (6 magnets)
- Calgary Stampede
- Canada Olympic Park
- Scotiabank Saddledome
- Stampede Tower
- Calgary Stampede Classic
- Cowboys Casino

## 🔧 Customization

### **Adding New Products**
1. Add product data to the `productData` array in `script.js`
2. Include the image file in the project directory
3. Update the theme categories if needed

### **Modifying Colors**
1. Update CSS custom properties in `:root` section of `styles.css`
2. All colors are centrally defined for easy customization

### **Changing Typography**
1. Update font imports in the HTML head section
2. Modify font-family properties in CSS custom properties

## 🌐 Browser Support

- **Chrome**: 90+ ✅
- **Firefox**: 88+ ✅
- **Safari**: 14+ ✅
- **Edge**: 90+ ✅
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+ ✅

## 📈 Performance Optimizations

- **Lazy Loading**: Images load as they enter viewport
- **Debounced Scroll**: Optimized scroll event handling
- **CSS Animations**: Hardware-accelerated transitions
- **Minimal JavaScript**: Vanilla JS for maximum performance
- **Optimized Images**: Compressed PNG files for fast loading

## 🎨 Animation Details

### **Entrance Animations**
- **Fade In**: Products fade in with staggered timing
- **Slide In**: Elements slide from left/right
- **Scale In**: Modal content scales in smoothly

### **Interactive Animations**
- **Hover Effects**: Subtle transforms and shadows
- **Button States**: Color transitions and scale effects
- **Loading States**: Spinner animations and progress indicators

## 🔒 Security Considerations

- **Input Validation**: Form inputs are validated before processing
- **XSS Prevention**: Content is properly escaped
- **Local Storage**: Sensitive data is not stored locally
- **HTTPS Ready**: All external resources use secure protocols

## 🚀 Future Enhancements

### **Planned Features**
- **AR Integration**: Real camera-based fridge preview
- **Payment Processing**: Stripe/PayPal integration
- **User Accounts**: Registration and order history
- **Reviews System**: Customer reviews and ratings
- **Inventory Management**: Real-time stock updates
- **Multi-language**: French and other language support

### **Advanced Features**
- **AI Recommendations**: Personalized product suggestions
- **Social Sharing**: Share favorite magnets
- **Bulk Orders**: Corporate and wholesale pricing
- **Custom Design**: Upload your own Calgary photos
- **Gift Wrapping**: Special packaging options

## 📞 Support

For questions, suggestions, or support:
- **Email**: hello@calgarymagnets.com
- **Phone**: +1 (403) 555-CALGARY
- **Location**: Calgary, Alberta, Canada

## 📄 License

© 2024 Calgary Magnets. All rights reserved.
Made with ❤️ in Calgary, Alberta.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 🌟 Acknowledgments

- **Calgary Heritage**: For the inspiration and iconic landmarks
- **Vintage Poster Artists**: For the aesthetic inspiration
- **Modern Web Standards**: For the technical foundation
- **Open Source Community**: For the tools and libraries

---

**Built with passion for Calgary's heritage and modern web excellence.**

🚀 **Ready for production deployment!**
