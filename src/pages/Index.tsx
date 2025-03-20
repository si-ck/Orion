
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeaturedCourses from '@/components/FeaturedCourses';
import Categories from '@/components/Categories';
import { ArrowRight, CheckCircle, Star, Users, FileText } from 'lucide-react';

const features = [
  {
    title: 'Expert-led courses',
    description: 'Learn from industry professionals with years of experience',
  },
  {
    title: 'Self-paced learning',
    description: 'Study at your own pace, anytime and anywhere',
  },
  {
    title: 'Interactive content',
    description: 'Engage with quizzes, assignments, and hands-on projects',
  },
  {
    title: 'Certificate of completion',
    description: 'Receive a certificate upon successful course completion',
  },
];

const stats = [
  { count: '500+', label: 'Courses Available', icon: <FileText className="h-6 w-6 text-primary/80" /> },
  { count: '100+', label: 'Expert Instructors', icon: <Users className="h-6 w-6 text-primary/80" /> },
  { count: '50K+', label: 'Active Students', icon: <Users className="h-6 w-6 text-primary/80" /> },
  { count: '95%', label: 'Satisfaction Rate', icon: <Star className="h-6 w-6 text-primary/80" /> },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Web Development Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
    quote: "The clean, distraction-free interface helped me focus on learning rather than fighting with the platform. I've completed 3 courses already and can't wait to start more."
  },
  {
    name: "David Chen",
    role: "Data Science Professional",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
    quote: "Orion has the perfect balance of theory and practical application. The projects are challenging but incredibly rewarding. I've learned more in 3 months than in a year elsewhere."
  },
  {
    name: "Maya Patel",
    role: "UX Design Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80",
    quote: "The instructor quality is exceptional. Every course I've taken has been taught by an industry leader who brings real-world examples into the curriculum."
  },
];

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      <Categories />
      
      <FeaturedCourses />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium rounded-full bg-blue-50 text-primary mb-4">
                Why Choose Orion
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A learning experience designed for real results
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform combines elegant design with powerful learning tools to help you achieve your goals faster and more effectively.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start bg-gray-50 rounded-lg p-4 transition-all hover:shadow-md">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                      <p className="mt-1 text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="mt-8 group inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 smooth-transition">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" 
                  alt="Students learning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 w-64 border border-gray-100">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Active Students</p>
                    <p className="text-xl font-bold text-gray-900">3,578</p>
                  </div>
                  <div className="h-12 w-12 flex items-center justify-center bg-blue-50 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>This week</span>
                    <span className="font-medium">+12.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Join our growing community of learners achieving their goals</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full mb-4">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-primary">{stat.count}</p>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium rounded-full bg-blue-50 text-primary mb-4">
              Student Testimonials
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              What our students are saying
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover-scale">
                <div className="flex flex-col items-center text-center">
                  <div className="h-20 w-20 rounded-full overflow-hidden mb-4 border-2 border-primary p-1">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
                  <p className="text-gray-600 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white rounded-full"></div>
          <div className="absolute top-1/3 -right-24 w-80 h-80 bg-white rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-white rounded-full"></div>
        </div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to start your learning journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of students who are already expanding their knowledge and advancing their careers with Orion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 smooth-transition">
              Get Started Today
            </button>
            <button className="px-8 py-4 bg-transparent text-white border border-white font-medium rounded-lg shadow-md hover:shadow-lg hover:bg-white/10 smooth-transition">
              Browse Courses
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
