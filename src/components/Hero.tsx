
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={cn("relative overflow-hidden bg-white py-20 sm:py-32", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center">
          <div className="mb-6 inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium rounded-full bg-blue-50 text-primary">
            Learn efficiently, grow exponentially
          </div>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-6">
            Elevate your knowledge with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Orion
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-balance max-w-2xl mx-auto">
            A minimalist learning platform designed for focus and clarity. 
            Master new skills with beautiful, distraction-free courses tailored to your learning journey.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
            <Link to="/courses" className="group relative overflow-hidden rounded-lg bg-primary px-8 py-4 text-base font-medium text-white shadow-md hover:shadow-lg transition-all duration-300 active:scale-95">
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              Get Started
              <ArrowRight className="ml-1 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/courses" className="text-base font-medium text-gray-600 hover:text-gray-900 smooth-transition flex items-center px-4 py-2 border border-transparent hover:border-gray-200 rounded-lg">
              Browse Courses
              <ArrowRight className="ml-1 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        {/* Stats banner */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 md:mt-20">
          <div className="flex flex-col items-center bg-white shadow-sm rounded-xl p-4 hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-primary">500+</div>
            <div className="mt-1 text-sm text-gray-500">Courses</div>
          </div>
          <div className="flex flex-col items-center bg-white shadow-sm rounded-xl p-4 hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-primary">50k+</div>
            <div className="mt-1 text-sm text-gray-500">Students</div>
          </div>
          <div className="flex flex-col items-center bg-white shadow-sm rounded-xl p-4 hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-primary">100+</div>
            <div className="mt-1 text-sm text-gray-500">Instructors</div>
          </div>
          <div className="flex flex-col items-center bg-white shadow-sm rounded-xl p-4 hover:shadow-md transition-all">
            <div className="text-2xl sm:text-3xl font-bold text-primary">95%</div>
            <div className="mt-1 text-sm text-gray-500">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Abstract background elements */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 w-60 h-60 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
    </div>
  );
};

export default Hero;
