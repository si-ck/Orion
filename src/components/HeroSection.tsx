
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[70%] rounded-full blur-3xl bg-blue-100/30 dark:bg-blue-900/20" />
        <div className="absolute -bottom-[30%] -left-[20%] w-[60%] h-[60%] rounded-full blur-3xl bg-indigo-100/30 dark:bg-indigo-900/20" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/20 mb-6">
              Welcome to Orion Learning Platform
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-up text-balance">
            Elevate Your Skills with <span className="text-gradient">Premium</span> Online Courses
          </h1>
          
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-150 text-balance">
            Learn from industry experts and master the skills that matter in today's digital landscape. Our carefully crafted courses combine theory with practical applications.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-300">
            <Link 
              to="#courses" 
              className="rounded-full bg-primary text-white px-6 py-3 text-base font-medium shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto"
            >
              Explore Courses
            </Link>
            <Link 
              to="#about" 
              className="rounded-full bg-secondary text-secondary-foreground px-6 py-3 text-base font-medium shadow-sm hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary w-full sm:w-auto"
            >
              Learn More <ArrowRight size={16} className="ml-2 inline" />
            </Link>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-in animation-delay-500">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-muted-foreground text-sm">Expert Courses</div>
            </div>
            <div className="w-px h-12 bg-border self-center"></div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">10k+</div>
              <div className="text-muted-foreground text-sm">Active Students</div>
            </div>
            <div className="w-px h-12 bg-border self-center"></div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-muted-foreground text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
