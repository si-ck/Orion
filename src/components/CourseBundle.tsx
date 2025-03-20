
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Course } from '@/lib/data';
import { cn } from '@/lib/utils';

interface CourseBundleProps {
  course: Course;
}

const CourseBundle = ({ course }: CourseBundleProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/course/${course.id}`}
      className="course-card block rounded-2xl overflow-hidden h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className={cn(
            "object-cover w-full h-full transition-all duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        {course.label && (
          <div className="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium bg-primary/90 text-white">
            {course.label}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold">{course.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{course.description}</p>
        
        <div className={cn(
          "mt-4 flex items-center text-sm font-medium text-primary transition-all duration-300",
          isHovered ? "translate-x-2" : "translate-x-0"
        )}>
          Explore course <ArrowRight size={16} className="ml-2" />
        </div>
      </div>
    </Link>
  );
};

export default CourseBundle;
