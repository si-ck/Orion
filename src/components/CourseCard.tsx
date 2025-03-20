
import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, Users, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  hours: number;
  thumbnailUrl: string;
  price: number;
  originalPrice?: number;
  category: string;
  className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  instructor,
  rating,
  students,
  hours,
  thumbnailUrl,
  price,
  originalPrice,
  category,
  className
}) => {
  return (
    <Link 
      to={`/courses/${id}`} 
      className={cn(
        "group block rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 bg-white shadow-sm hover:shadow-md card-hover",
        className
      )}
    >
      <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
        <img 
          src={thumbnailUrl} 
          alt={title}
          className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 rounded-full p-3 backdrop-blur-sm shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <Play className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>
        <div className="absolute top-2 left-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/80 backdrop-blur-sm text-gray-800">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-2">
          {instructor}
        </p>
        
        <div className="flex items-center text-sm mb-3">
          <div className="flex items-center text-yellow-500 mr-2">
            <Star className="h-4 w-4 mr-1 fill-current" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
          
          <div className="flex items-center text-gray-500 mr-2">
            <Users className="h-4 w-4 mr-1" />
            <span>{students.toLocaleString()}</span>
          </div>
          
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{hours}h</span>
          </div>
        </div>
        
        <div className="flex items-center">
          <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
