
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import CourseCard from '@/components/CourseCard';
import { Search, Filter, ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample courses data
const coursesData = [
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
    thumbnailUrl: 'https://images.unsplash.com/photo-1591696331096-c73fd8814aab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    price: 119.99,
    originalPrice: 199.99,
    category: 'Machine Learning',
  },
  {
    id: '5',
    title: 'UI/UX Design Principles and Practice',
    instructor: 'David Miller',
    rating: 4.6,
    students: 3250,
    hours: 32,
    thumbnailUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    price: 84.99,
    originalPrice: 129.99,
    category: 'UI/UX Design',
  },
  {
    id: '6',
    title: 'Advanced JavaScript: From Fundamentals to Frameworks',
    instructor: 'Jamal Williams',
    rating: 4.9,
    students: 4680,
    hours: 50,
    thumbnailUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    price: 94.99,
    originalPrice: 169.99,
    category: 'Web Development',
  },
  {
    id: '7',
    title: 'Business Analytics and Decision Making',
    instructor: 'Sophia Garcia',
    rating: 4.7,
    students: 3180,
    hours: 38,
    thumbnailUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    price: 89.99,
    originalPrice: 139.99,
    category: 'Business Analytics',
  },
  {
    id: '8',
    title: 'Android Development with Kotlin',
    instructor: 'Ryan Thompson',
    rating: 4.8,
    students: 2950,
    hours: 40,
    thumbnailUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    price: 99.99,
    originalPrice: 179.99,
    category: 'Mobile Development',
  },
];

const categories = [
  'All Categories',
  'Web Development',
  'Data Science',
  'Mobile Development',
  'Machine Learning',
  'UI/UX Design',
  'Business Analytics',
];

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All Categories');
  const [priceFilter, setPriceFilter] = useState('all');

  // Filter courses based on search, category, and price
  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || course.category === selectedCategory;
    
    const matchesPrice = 
      priceFilter === 'all' || 
      (priceFilter === 'free' && course.price === 0) || 
      (priceFilter === 'paid' && course.price > 0) ||
      (priceFilter === 'discounted' && course.originalPrice && course.originalPrice > course.price);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic handled by the filter already
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All Categories') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All Categories');
    setPriceFilter('all');
    setSearchParams({});
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Explore our courses
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Discover high-quality courses taught by expert instructors
              </p>
            </div>
            
            <div className="mt-8 max-w-md mx-auto">
              <form onSubmit={handleSearch} className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary smooth-transition"
                  placeholder="Search for courses..."
                />
              </form>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Filter className="h-5 w-5 mr-2" />
                    Filters
                  </h2>
                  {(selectedCategory !== 'All Categories' || priceFilter !== 'all' || searchTerm) && (
                    <button 
                      onClick={clearFilters}
                      className="text-sm text-primary hover:text-blue-600 flex items-center smooth-transition"
                    >
                      Clear All
                      <X className="h-4 w-4 ml-1" />
                    </button>
                  )}
                </div>
                
                <div className="space-y-6">
                  {/* Categories */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => handleCategoryChange(category)}
                          className={cn(
                            "block w-full text-left px-3 py-2 rounded-lg text-sm smooth-transition",
                            selectedCategory === category
                              ? "bg-blue-50 text-primary font-medium"
                              : "text-gray-600 hover:bg-gray-50"
                          )}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Price</h3>
                    <div className="space-y-2">
                      {[
                        { value: 'all', label: 'All Prices' },
                        { value: 'free', label: 'Free' },
                        { value: 'paid', label: 'Paid' },
                        { value: 'discounted', label: 'Discounted' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setPriceFilter(option.value)}
                          className={cn(
                            "block w-full text-left px-3 py-2 rounded-lg text-sm smooth-transition",
                            priceFilter === option.value
                              ? "bg-blue-50 text-primary font-medium"
                              : "text-gray-600 hover:bg-gray-50"
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Courses Grid */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  Showing <span className="font-medium">{filteredCourses.length}</span> results
                </p>
                
                <div className="relative">
                  <select 
                    className="appearance-none pl-3 pr-8 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-primary focus:border-primary cursor-pointer smooth-transition"
                    defaultValue="popular"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
              
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="mx-auto w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <button 
                    onClick={clearFilters}
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-blue-600 smooth-transition"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
              
              {filteredCourses.length > 0 && (
                <div className="mt-8 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <button className="px-2.5 py-1.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 smooth-transition">
                      Previous
                    </button>
                    {[1, 2, 3, 4, 5].map((page) => (
                      <button
                        key={page}
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-sm font-medium smooth-transition",
                          page === 1
                            ? "bg-primary text-white"
                            : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                        )}
                      >
                        {page}
                      </button>
                    ))}
                    <button className="px-2.5 py-1.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 smooth-transition">
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
