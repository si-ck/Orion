
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { courseData } from '@/lib/data';
import { toast } from 'sonner';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  
  if (!user) {
    return null; // AuthGuard will handle redirecting
  }

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-24">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
            <p className="text-muted-foreground">You are logged in as a {user.role}</p>
          </div>
          
          <Button onClick={handleLogout} variant="outline">
            Sign Out
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* My Courses Section */}
          <div className="col-span-2 bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-semibold mb-4">My Courses</h2>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courseData.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium">{course.title}</TableCell>
                    <TableCell>{course.label}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-50 text-green-700">
                        {course.videos && course.videos.length > 0 ? 'Available' : 'Coming Soon'}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/course/${course.id}`}>View Course</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        
        {/* Teacher-only section */}
        {user.role === 'teacher' && (
          <div className="mt-8 bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-semibold mb-4">Teacher Dashboard</h2>
            <p className="text-muted-foreground mb-4">
              As a teacher, you have access to all courses and can manage content.
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-lg border border-border bg-background">
                <h3 className="font-medium">Student Progress Tracking</h3>
                <p className="text-sm text-muted-foreground mt-1">Track your students' progress through the courses</p>
              </div>
              
              <div className="p-4 rounded-lg border border-border bg-background">
                <h3 className="font-medium">Course Management</h3>
                <p className="text-sm text-muted-foreground mt-1">Manage course content and materials</p>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;
