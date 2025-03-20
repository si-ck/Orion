
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, LineChart, Smartphone, Atom, Layout, MessageSquare, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryItemProps {
  title: string;
  icon: React.ReactNode;
  count: number;
  color: string;
  className?: string;
}

const categories = [
  {
    title: 'Web Development',
    icon: <Code className="h-6 w-6" />,
    count: 142,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Data Science',
    icon: <Database className="h-6 w-6" />,
    count: 87,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Business Analytics',
    icon: <LineChart className="h-6 w-6" />,
    count: 65,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone className="h-6 w-6" />,
    count: 53,
    color: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Science & Engineering',
    icon: <Atom className="h-6 w-6" />,
    count: 78,
    color: 'bg-red-50 text-red-600',
  },
  {
    title: 'UI/UX Design',
    icon: <Layout className="h-6 w-6" />,
    count: 49,
    color: 'bg-pink-50 text-pink-600',
  },
  {
    title: 'Languages',
    icon: <MessageSquare className="h-6 w-6" />,
    count: 93,
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    title: 'Humanities',
    icon: <BookOpen className="h-6 w-6" />,
    count: 61,
    color: 'bg-teal-50 text-teal-600',
  },
];

const CategoryItem: React.FC<CategoryItemProps> = ({ title, icon, count, color, className }) => {
  return (
    <Link 
      to={`/courses?category=${encodeURIComponent(title)}`}
      className={cn(
        "flex flex-col items-center p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md smooth-transition hover-scale",
        className
      )}
    >
      <div className={cn("p-3 rounded-lg mb-4", color)}>
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-900 text-center mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{count} courses</p>
    </Link>
  );
};

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Browse Categories</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Explore our wide range of courses in various fields
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <CategoryItem key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
