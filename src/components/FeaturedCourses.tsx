
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

const featuredCourses = [
  {
    id: '1',
    title: 'Modern Web Development with React',
    instructor: 'Sarah Johnson',
    rating: 4.8,
    students: 5280,
    hours: 42,
    thumbnailUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    price: 89.99,
    originalPrice: 129.99,
    category: 'Web Development',
  },
  {
    id: '2',
    title: 'Data Science Fundamentals: Python & Statistics',
    instructor: 'Alex Chen',
    rating: 4.7,
    students: 3845,
    hours: 38,
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    price: 94.99,
    originalPrice: 149.99,
    category: 'Data Science',
  },
  {
    id: '3',
    title: 'iOS App Development with Swift',
    instructor: 'Michael Kim',
    rating: 4.9,
    students: 2750,
    hours: 36,
    thumbnailUrl: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    price: 99.99,
    originalPrice: 199.99,
    category: 'Mobile Development',
  },
  {
    id: '4',
    title: 'Machine Learning Engineering',
    instructor: 'Emily Rodriguez',
    rating: 4.8,
    students: 4120,
    hours: 45,
    thumbnailUrl: 'https://images.unsplash.com/photo-1558346489-019c0e0edes?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    price: 119.99,
    originalPrice: 199.99,
    category: 'Machine Learning',
  },
];

const FeaturedCourses: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
            <p className="mt-2 text-gray-600">Handpicked courses to get you started on your learning journey</p>
          </div>
          <Link 
            to="/courses" 
            className="mt-4 sm:mt-0 flex items-center text-primary font-medium hover:text-blue-600 transition-colors"
          >
            View all courses
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
