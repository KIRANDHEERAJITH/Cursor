import { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop'
  },
  {
    id: '2',
    name: 'Books',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop'
  },
  {
    id: '3',
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop'
  },
  {
    id: '4',
    name: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop'
  },
  {
    id: '5',
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop'
  },
  {
    id: '6',
    name: 'Health & Beauty',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop'
  }
];

export const products: Product[] = [
  {
    id: '1',
    title: 'Apple iPhone 15 Pro Max',
    description: 'The most advanced iPhone yet with A17 Pro chip, titanium design, and revolutionary camera system.',
    price: 1199,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
    category: 'Electronics',
    rating: 4.8,
    reviews: 2847,
    inStock: true,
    brand: 'Apple',
    features: ['A17 Pro chip', 'Titanium design', '48MP camera', '5G capable']
  },
  {
    id: '2',
    title: 'Samsung 65" 4K Smart TV',
    description: 'Crystal clear 4K resolution with smart TV features and sleek design.',
    price: 799,
    originalPrice: 999,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
    category: 'Electronics',
    rating: 4.5,
    reviews: 1523,
    inStock: true,
    brand: 'Samsung',
    features: ['4K UHD', 'Smart TV', 'HDR10+', 'Alexa Built-in']
  },
  {
    id: '3',
    title: 'Sony WH-1000XM5 Headphones',
    description: 'Industry-leading noise canceling with crystal clear hands-free calling.',
    price: 329,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop',
    category: 'Electronics',
    rating: 4.7,
    reviews: 3421,
    inStock: true,
    brand: 'Sony',
    features: ['Noise canceling', '30 hour battery', 'Quick charge', 'Multipoint connection']
  },
  {
    id: '4',
    title: 'The Great Gatsby',
    description: 'F. Scott Fitzgerald\'s masterpiece about the American Dream in the Jazz Age.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    category: 'Books',
    rating: 4.2,
    reviews: 8934,
    inStock: true,
    brand: 'Scribner',
    features: ['Classic literature', 'Paperback', '180 pages']
  },
  {
    id: '5',
    title: 'Nike Air Max 270',
    description: 'Comfortable running shoes with Air Max technology for all-day comfort.',
    price: 129,
    originalPrice: 150,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    category: 'Fashion',
    rating: 4.4,
    reviews: 2156,
    inStock: true,
    brand: 'Nike',
    features: ['Air Max technology', 'Breathable mesh', 'Durable sole', 'Multiple colors']
  },
  {
    id: '6',
    title: 'Instant Pot Duo 7-in-1',
    description: 'Electric pressure cooker that replaces 7 kitchen appliances.',
    price: 89,
    originalPrice: 120,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
    category: 'Home & Kitchen',
    rating: 4.6,
    reviews: 12847,
    inStock: true,
    brand: 'Instant Pot',
    features: ['7-in-1 functionality', '6 quart capacity', 'Smart programming', 'Safety features']
  },
  {
    id: '7',
    title: 'Yoga Mat Premium',
    description: 'High-quality yoga mat with superior grip and cushioning.',
    price: 39,
    originalPrice: 55,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    category: 'Sports',
    rating: 4.3,
    reviews: 892,
    inStock: true,
    brand: 'YogaLife',
    features: ['Non-slip surface', 'Eco-friendly', '6mm thick', 'Carrying strap included']
  },
  {
    id: '8',
    title: 'MacBook Air M2',
    description: 'Supercharged by M2 chip for incredible performance and battery life.',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop',
    category: 'Electronics',
    rating: 4.9,
    reviews: 1876,
    inStock: true,
    brand: 'Apple',
    features: ['M2 chip', 'Retina display', '18-hour battery', 'Touch ID']
  },
  {
    id: '9',
    title: 'Gaming Chair Pro',
    description: 'Ergonomic gaming chair with lumbar support and adjustable height.',
    price: 249,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
    category: 'Home & Kitchen',
    rating: 4.1,
    reviews: 743,
    inStock: true,
    brand: 'GameMax',
    features: ['Ergonomic design', 'Lumbar support', 'Adjustable height', 'Premium materials']
  },
  {
    id: '10',
    title: 'Skincare Set Deluxe',
    description: 'Complete skincare routine with cleanser, serum, and moisturizer.',
    price: 79,
    originalPrice: 105,
    image: 'https://images.unsplash.com/photo-1556228578-dd1e8155b5d2?w=400&h=400&fit=crop',
    category: 'Health & Beauty',
    rating: 4.5,
    reviews: 2341,
    inStock: true,
    brand: 'GlowSkin',
    features: ['Complete routine', 'Natural ingredients', 'All skin types', 'Dermatologist tested']
  },
  {
    id: '11',
    title: 'Wireless Bluetooth Speaker',
    description: 'Portable speaker with 360-degree sound and waterproof design.',
    price: 49,
    originalPrice: 69,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    category: 'Electronics',
    rating: 4.2,
    reviews: 1654,
    inStock: true,
    brand: 'SoundWave',
    features: ['360-degree sound', 'Waterproof', '12-hour battery', 'Bluetooth 5.0']
  },
  {
    id: '12',
    title: 'Coffee Maker Deluxe',
    description: 'Programmable coffee maker with thermal carafe and auto shut-off.',
    price: 89,
    originalPrice: 120,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
    category: 'Home & Kitchen',
    rating: 4.4,
    reviews: 987,
    inStock: true,
    brand: 'BrewMaster',
    features: ['Programmable', 'Thermal carafe', 'Auto shut-off', '12-cup capacity']
  }
];