
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, BookOpen, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import AuthModal from './AuthModal';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const location = useLocation();

  const openAuthModal = (type: 'login' | 'signup') => {
    setAuthType(type);
    setAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                Orion
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium smooth-transition inline-flex items-center",
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Right Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 smooth-transition"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <button 
                className="text-sm font-medium text-gray-600 hover:text-gray-900 smooth-transition"
                onClick={() => openAuthModal('login')}
              >
                Log in
              </button>
              <button 
                className="neo-button text-sm font-medium text-primary"
                onClick={() => openAuthModal('signup')}
              >
                Sign up
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-60" : "max-h-0"
          )}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium smooth-transition",
                  location.pathname === item.path
                    ? "text-primary bg-blue-50"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3">
                <div className="flex-shrink-0">
                  <User className="h-8 w-8 rounded-full p-1 bg-gray-100 text-gray-600" />
                </div>
                <div className="ml-3 space-y-1">
                  <button 
                    className="block text-base font-medium text-gray-600 hover:text-gray-900"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openAuthModal('login');
                    }}
                  >
                    Log in
                  </button>
                  <button 
                    className="block text-base font-medium text-primary hover:text-blue-600"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openAuthModal('signup');
                    }}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                  <BookOpen className="h-3 w-3 text-white" />
                </div>
                <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                  Orion
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Learning, distilled to its purest form</p>
            </div>
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm text-gray-500 hover:text-gray-700 smooth-transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Orion Learning. All rights reserved.
          </div>
        </div>
      </footer>

      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
        type={authType}
        setType={setAuthType}
      />
    </div>
  );
};

export default Layout;
