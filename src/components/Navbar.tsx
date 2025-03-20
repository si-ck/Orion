
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 sm:px-6 lg:px-8 py-4",
        isScrolled ? "glass-morphism shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600"></div>
            <span className="text-xl font-bold">Orion</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="#courses" className="text-sm font-medium hover:text-primary transition-colors">Courses</Link>
            {isAuthenticated && (
              <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">Dashboard</Link>
            )}
            <Link to="#about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
            <Link to="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <div className="text-sm font-medium">
                  Hi, {user?.name}
                </div>
                <button 
                  onClick={() => logout()}
                  className="text-sm font-medium bg-white/10 hover:bg-white/20 text-foreground px-4 py-2 rounded-full transition-colors border border-border"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-sm font-medium bg-white/10 hover:bg-white/20 text-foreground px-4 py-2 rounded-full transition-colors border border-border"
                >
                  Sign In
                </Link>
                <Link 
                  to="/register" 
                  className="text-sm font-medium bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full transition-colors"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-morphism shadow-md animate-fade-in">
          <div className="py-4 px-6 space-y-4">
            <Link 
              to="/" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="#courses" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </Link>
            {isAuthenticated && (
              <Link 
                to="/dashboard" 
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            <Link 
              to="#about" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="#contact" 
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              {isAuthenticated ? (
                <>
                  <div className="text-sm font-medium px-4 py-2">
                    Hi, {user?.name}
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="text-sm font-medium bg-white/10 hover:bg-white/20 text-foreground px-4 py-2 rounded-full transition-colors border border-border w-full text-center"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="text-sm font-medium bg-white/10 hover:bg-white/20 text-foreground px-4 py-2 rounded-full transition-colors border border-border w-full text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/register" 
                    className="text-sm font-medium bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full transition-colors w-full text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
