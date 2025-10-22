# Amazon Clone

A modern, full-featured e-commerce platform inspired by Amazon, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core E-commerce Functionality
- **Product Catalog**: Browse through a variety of products across different categories
- **Search & Filter**: Search products by name, description, brand, or category
- **Category Navigation**: Browse products by category with filtering options
- **Product Details**: Detailed product pages with descriptions, ratings, and features
- **Shopping Cart**: Add, remove, and update quantities of products
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### User Experience
- **Modern UI**: Clean, professional design inspired by Amazon's interface
- **Interactive Elements**: Hover effects, smooth transitions, and intuitive navigation
- **Real-time Updates**: Cart count updates instantly when items are added/removed
- **Loading States**: Professional loading indicators and error handling

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Next.js 14**: Latest App Router, server-side rendering, and optimizations
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Context API**: Global state management for shopping cart
- **Component Architecture**: Reusable, modular components

## 🛍️ Product Categories

- **Electronics**: Smartphones, laptops, TVs, headphones, and more
- **Books**: Literature, educational, and reference materials
- **Fashion**: Clothing, shoes, and accessories
- **Home & Kitchen**: Appliances, furniture, and home essentials
- **Sports**: Fitness equipment, outdoor gear, and sporting goods
- **Health & Beauty**: Skincare, cosmetics, and wellness products

## 🗂️ Project Structure

```
amazon-clone/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── cart/            # Shopping cart page
│   │   ├── category/        # Category listing pages
│   │   ├── product/         # Product detail pages
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   ├── components/          # Reusable UI components
│   │   ├── CategoryGrid.tsx # Category display grid
│   │   ├── Header.tsx       # Navigation header
│   │   └── ProductCard.tsx  # Product display card
│   ├── context/             # React Context providers
│   │   └── CartContext.tsx  # Shopping cart state management
│   ├── data/                # Mock data
│   │   └── products.ts      # Product and category data
│   └── types/               # TypeScript type definitions
│       └── index.ts         # Interface definitions
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind CSS configuration
├── package.json            # Dependencies and scripts
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd amazon-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Features Walkthrough

### Homepage
- **Hero Banner**: Welcoming users with attractive visuals
- **Category Grid**: Easy navigation to different product categories
- **Today's Deals**: Featured discounted products
- **Featured Products**: Curated product recommendations

### Product Browsing
- **Category Pages**: Filter products by category with sorting options
- **Search Functionality**: Find products quickly using the search bar
- **Product Cards**: Rich product previews with images, ratings, and prices

### Shopping Cart
- **Add to Cart**: One-click addition from any product view
- **Quantity Management**: Increase/decrease quantities or remove items
- **Real-time Totals**: Automatic calculation of subtotals, tax, and total
- **Persistent State**: Cart contents maintained across page navigation

### Product Details
- **Comprehensive Information**: Full product descriptions and specifications
- **Image Display**: High-quality product images
- **Customer Ratings**: Star ratings and review counts
- **Related Products**: Suggestions for similar items

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Development**: ESLint, Prettier

## 🎨 Design Philosophy

The design follows modern e-commerce principles:
- **Clean Layout**: Minimal clutter with focus on products
- **Intuitive Navigation**: Easy-to-find categories and search
- **Mobile-First**: Responsive design for all screen sizes
- **Performance**: Optimized images and fast loading times
- **Accessibility**: Semantic HTML and proper contrast ratios

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured layout with sidebar navigation
- **Tablet**: Adapted grid layouts and touch-friendly interfaces
- **Mobile**: Streamlined navigation and optimized product cards

## 🔄 State Management

The application uses React Context for state management:
- **Cart Context**: Manages shopping cart items, quantities, and totals
- **Persistent State**: Cart contents maintained across page refreshes
- **Type Safety**: Full TypeScript integration for state operations

## 🚀 Performance Optimizations

- **Static Generation**: Pre-rendered pages for faster loading
- **Image Optimization**: Responsive images with proper sizing
- **Code Splitting**: Automatic code splitting by Next.js
- **CSS Optimization**: Tailwind CSS with purging unused styles

## 🔮 Future Enhancements

Potential features for future development:
- **User Authentication**: Login/register functionality
- **Order Management**: Order history and tracking
- **Payment Integration**: Stripe or PayPal integration
- **Product Reviews**: User-generated reviews and ratings
- **Wishlist**: Save products for later
- **Admin Panel**: Product and order management
- **Search Filters**: Advanced filtering options
- **Recommendations**: AI-powered product suggestions

## 📄 License

This project is for educational and demonstration purposes. All product images are sourced from Unsplash and are used under their license terms.

## 🤝 Contributing

This is a demonstration project, but contributions and improvements are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or issues, please open an issue in the repository or contact the development team.

---

**Note**: This is a demonstration project and not a real e-commerce store. No actual purchases can be made.
