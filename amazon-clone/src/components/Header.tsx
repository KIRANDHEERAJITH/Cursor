'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Menu, MapPin, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      {/* Main header */}
      <div className="flex items-center px-4 py-2 space-x-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="bg-yellow-400 text-black px-3 py-1 rounded font-bold text-xl">
            amazon
          </div>
        </Link>

        {/* Delivery address */}
        <div className="hidden md:flex items-center text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          <div>
            <div className="text-xs text-gray-300">Deliver to</div>
            <div className="font-semibold">New York 10001</div>
          </div>
        </div>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
          <div className="flex rounded-md overflow-hidden">
            <select className="bg-gray-200 text-black px-3 py-2 text-sm border-r">
              <option>All</option>
              <option>Electronics</option>
              <option>Books</option>
              <option>Fashion</option>
              <option>Home & Kitchen</option>
              <option>Sports</option>
              <option>Health & Beauty</option>
            </select>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Amazon"
              className="flex-1 px-4 py-2 text-black outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 transition-colors"
            >
              <Search className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        </form>

        {/* Language selector */}
        <div className="hidden md:flex items-center">
          <img
            src="https://flagcdn.com/w20/us.png"
            alt="US Flag"
            className="w-5 h-3 mr-1"
          />
          <span className="text-sm">EN</span>
        </div>

        {/* Account */}
        <div className="hidden md:flex flex-col text-sm">
          <span className="text-xs text-gray-300">Hello, Sign in</span>
          <span className="font-semibold">Account & Lists</span>
        </div>

        {/* Orders */}
        <div className="hidden md:flex flex-col text-sm">
          <span className="text-xs text-gray-300">Returns</span>
          <span className="font-semibold">& Orders</span>
        </div>

        {/* Cart */}
        <Link href="/cart" className="flex items-center hover:bg-gray-800 px-2 py-1 rounded">
          <div className="relative">
            <ShoppingCart className="w-8 h-8" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </div>
          <span className="ml-1 font-semibold">Cart</span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sub navigation */}
      <div className="bg-gray-800 px-4 py-2 flex items-center space-x-6 text-sm overflow-x-auto">
        <button className="flex items-center whitespace-nowrap">
          <Menu className="w-4 h-4 mr-1" />
          All
        </button>
        <Link href="/category/electronics" className="whitespace-nowrap hover:text-yellow-400">
          Electronics
        </Link>
        <Link href="/category/books" className="whitespace-nowrap hover:text-yellow-400">
          Books
        </Link>
        <Link href="/category/fashion" className="whitespace-nowrap hover:text-yellow-400">
          Fashion
        </Link>
        <Link href="/category/home" className="whitespace-nowrap hover:text-yellow-400">
          Home & Kitchen
        </Link>
        <Link href="/category/sports" className="whitespace-nowrap hover:text-yellow-400">
          Sports
        </Link>
        <Link href="/category/beauty" className="whitespace-nowrap hover:text-yellow-400">
          Health & Beauty
        </Link>
        <Link href="/deals" className="whitespace-nowrap hover:text-yellow-400">
          Today's Deals
        </Link>
        <Link href="/prime" className="whitespace-nowrap hover:text-yellow-400">
          Prime
        </Link>
        <Link href="/customer-service" className="whitespace-nowrap hover:text-yellow-400">
          Customer Service
        </Link>
      </div>
    </header>
  );
};