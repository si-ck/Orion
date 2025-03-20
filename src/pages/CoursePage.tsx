
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoPlayer from '@/components/VideoPlayer';
import { courseData } from '@/lib/data';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';
import AuthGuard from '@/components/auth/AuthGuard';

const CoursePage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  // Find the course from our data
  const course = courseData.find(c => c.id === courseId);
  
  useEffect(() => {
    // If the course doesn't exist, navigate back to the home page
    if (!course) {
      toast.error("Course not found");
      navigate('/');
      return;
    }
    
    // If this is the data science course and it has videos, show a success toast
    if (course.id === 'data-science' && course.videos) {
      toast.success("Data Science playlist loaded successfully");
    }
  }, [course, navigate]);
  
  if (!course) return null;
  
  return (
    <AuthGuard>
      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-8 animate-fade-in">
              <Link to={user ? "/dashboard" : "/"} className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft size={16} className="mr-2" />
                {user ? "Back to Dashboard" : "Back to Home"}
              </Link>
            </div>
            
            {/* Course Header */}
            <div className="mb-12 animate-slide-up">
              <div className="inline-block">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/20 mb-4">
                  {course.label}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">{course.description}</p>
            </div>
            
            {/* Video Player */}
            <div className="animate-scale-in">
              {course.videos && course.videos.length > 0 ? (
                <VideoPlayer videos={course.videos} />
              ) : (
                <div className="text-center p-16 bg-muted rounded-xl">
                  <h3 className="text-xl font-medium mb-2">Content Coming Soon</h3>
                  <p className="text-muted-foreground">
                    This course content is currently being developed. Check back soon!
                  </p>
                </div>
              )}
            </div>
            
            {/* Course Details */}
            <div className="mt-16 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-2">
                  <h2 className="text-2xl font-semibold mb-6">About this Course</h2>
                  <div className="prose max-w-none">
                    <p>
                      Our comprehensive {course.title} course is designed to take you from beginner to expert. 
                      You'll learn through a combination of video lectures, hands-on exercises, and real-world projects.
                    </p>
                    <h3>What you'll learn</h3>
                    <ul>
                      <li>Understand core concepts and principles of {course.title}</li>
                      <li>Apply theoretical knowledge to practical, real-world problems</li>
                      <li>Master industry-standard tools and best practices</li>
                      <li>Build a portfolio of projects to showcase your new skills</li>
                    </ul>
                    <h3>Requirements</h3>
                    <ul>
                      <li>Basic computer skills</li>
                      <li>Dedication and willingness to practice</li>
                      <li>No prior experience in {course.title} needed — we'll teach you everything you need to know</li>
                    </ul>
                  </div>
                </div>
                
                <div className="col-span-1">
                  <div className="bg-secondary/50 rounded-xl p-6 sticky top-24">
                    <h3 className="font-semibold mb-4">Course Details</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm text-muted-foreground">Instructor</h4>
                        <p className="font-medium">Dr. Jane Smith</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-muted-foreground">Duration</h4>
                        <p className="font-medium">12 weeks</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-muted-foreground">Difficulty</h4>
                        <p className="font-medium">Beginner to Advanced</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-muted-foreground">Certificate</h4>
                        <p className="font-medium">Yes, upon completion</p>
                      </div>
                    </div>
                    
                    <div className="mt-8 space-y-4">
                      {!user && (
                        <Link to="/register" className="block w-full">
                          <button className="w-full rounded-full bg-primary text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors">
                            Enroll Now
                          </button>
                        </Link>
                      )}
                      
                      <button className="w-full rounded-full bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium shadow-sm hover:bg-secondary/80 transition-colors">
                        Download Syllabus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </AuthGuard>
  );
};

export default CoursePage;
