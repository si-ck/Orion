import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import { 
  BarChart, 
  Globe, 
  ShoppingCart, 
  Play, 
  ChevronUp, 
  ChevronDown 
} from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);

  const { isLoading, error, data: course } = useQuery({
    queryKey: ['course', id],
    queryFn: async () => {
      const res = await fetch(`https://api.example.com/courses/${id}`);
      if (!res.ok) {
        throw new Error('Failed to fetch course');
      }
      return res.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!course) return <div>Course not found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
      <div className="flex items-center mb-2">
        <Globe className="mr-2 h-4 w-4" />
        <span>{course.instructor}</span>
      </div>
      <div className="flex items-center mb-2">
        <BarChart className="mr-2 h-4 w-4" />
        <span>{course.level}</span>
      </div>
      <p className="mb-4">{course.description}</p>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">What you'll learn</h2>
        <ul className="list-disc pl-5">
          {course.learningObjectives.map((objective: string, index: number) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Course Content</h2>
        {course.content.map((section: any, index: number) => (
          <div key={index} className="border rounded p-2 mb-2">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <h3 className="font-semibold">{section.title}</h3>
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </div>
            {isExpanded && (
              <ul className="list-decimal pl-5 mt-2">
                {section.lessons.map((lesson: any, lessonIndex: number) => (
                  <li key={lessonIndex} className="flex items-center">
                    <Play className="mr-2 h-4 w-4" />
                    <span>{lesson.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <ShoppingCart className="mr-2 h-4 w-4 inline-block" />
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetail;
