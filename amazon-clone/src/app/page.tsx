'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { CategoryGrid } from '@/components/CategoryGrid';
import { products, categories } from '@/data/products';
import { ChevronRight, Truck, Shield, RotateCcw, CreditCard } from 'lucide-react';

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.brand.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const featuredProducts = products.slice(0, 8);
  const dealsProducts = products.filter(product => product.originalPrice).slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onSearch={handleSearch} />
      
      {/* Hero Banner */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative h-full flex items-center justify-center text-white text-center px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Welcome to Amazon Clone
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover millions of products at unbeatable prices
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-lg text-lg transition-colors">
              Start Shopping
            </button>
          </div>
        </div>
      </div>

      {/* Features Banner */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Truck className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">Secure Payment</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <RotateCcw className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium">Easy Returns</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CreditCard className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium">Multiple Payment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Categories */}
        <CategoryGrid categories={categories} />

        {/* Today's Deals */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Today's Deals</h2>
            <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
              See all deals
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {dealsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
            <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
              View all
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* All Products */}
        {filteredProducts.length !== products.length && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Search Results ({filteredProducts.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Get to Know Us</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-yellow-400">About Amazon</a></li>
                <li><a href="#" className="hover:text-yellow-400">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-400">Press Releases</a></li>
                <li><a href="#" className="hover:text-yellow-400">Amazon Science</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Make Money with Us</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-yellow-400">Sell products</a></li>
                <li><a href="#" className="hover:text-yellow-400">Become an Affiliate</a></li>
                <li><a href="#" className="hover:text-yellow-400">Advertise Your Products</a></li>
                <li><a href="#" className="hover:text-yellow-400">Self-Publish with Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Amazon Payment Products</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-yellow-400">Amazon Business Card</a></li>
                <li><a href="#" className="hover:text-yellow-400">Shop with Points</a></li>
                <li><a href="#" className="hover:text-yellow-400">Reload Your Balance</a></li>
                <li><a href="#" className="hover:text-yellow-400">Amazon Currency Converter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Let Us Help You</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-yellow-400">Your Account</a></li>
                <li><a href="#" className="hover:text-yellow-400">Your Orders</a></li>
                <li><a href="#" className="hover:text-yellow-400">Shipping Rates & Policies</a></li>
                <li><a href="#" className="hover:text-yellow-400">Returns & Replacements</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Amazon Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
