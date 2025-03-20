
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CourseBundle from '@/components/CourseBundle';
import Footer from '@/components/Footer';
import { courseData } from '@/lib/data';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Courses Section */}
      <section id="courses" className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold">Featured Course Bundles</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-balance">
              Explore our most popular course bundles designed to help you master new skills and advance your career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseData.map((course) => (
              <div key={course.id} className="animate-scale-in">
                <CourseBundle course={course} />
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="#" 
              className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-secondary hover:bg-secondary/80 transition-colors"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="about" className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-up">
              <div className="inline-block">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/20 mb-6">
                  Why Choose Orion
                </span>
              </div>
              
              <h2 className="text-3xl font-bold">Learn from industry experts at your own pace</h2>
              
              <p className="mt-4 text-muted-foreground text-balance">
                Our platform combines cutting-edge technology with expert instruction to deliver a seamless learning experience that fits your schedule and learning style.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Expert Instructors</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Learn from industry professionals with years of real-world experience.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Learn at Your Pace</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Access course content anytime, anywhere, and progress at your own speed.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Verified Certificates</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Earn recognized certificates to showcase your new skills and expertise.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-fade-in">
              <div className="relative">
                <div className="absolute -top-5 -left-5 h-32 w-32 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-5 -right-5 h-32 w-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                  alt="Students learning" 
                  className="rounded-2xl shadow-xl relative z-10 w-full object-cover h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Ready to start learning?</h2>
            <p className="mt-4 text-muted-foreground text-balance">
              Join thousands of students already learning on our platform. Start your journey today!
            </p>
            
            <div className="mt-10">
              <Link 
                to="/register" 
                className="inline-flex items-center rounded-full bg-primary text-white px-6 py-3 text-base font-medium shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
