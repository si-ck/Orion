
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Define form schemas for login and register
const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

const registerSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  role: z.enum(['student', 'teacher']),
});

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

interface AuthFormProps {
  type: 'login' | 'register';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const navigate = useNavigate();
  const isLogin = type === 'login';
  const schema = isLogin ? loginSchema : registerSchema;

  const form = useForm<any>({
    resolver: zodResolver(schema),
    defaultValues: isLogin 
      ? { email: '', password: '' }
      : { name: '', email: '', password: '', role: 'student' },
  });

  const onSubmit = async (data: LoginFormValues | RegisterFormValues) => {
    try {
      // For now, we'll use localStorage to simulate a database
      if (isLogin) {
        // Check if user exists in localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find((u: any) => u.email === data.email && u.password === data.password);
        
        if (!user) {
          toast.error('Invalid email or password');
          return;
        }
        
        // Store current user in localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        toast.success('Login successful!');
        navigate('/dashboard');
      } else {
        // Register - store new user in localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const existingUser = users.find((u: any) => u.email === (data as RegisterFormValues).email);
        
        if (existingUser) {
          toast.error('User with this email already exists');
          return;
        }
        
        // Add new user
        const newUser = { 
          id: Date.now().toString(),
          ...(data as RegisterFormValues) 
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Also log user in
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        toast.success('Registration successful!');
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Auth error:', error);
      toast.error('An error occurred');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 rounded-xl bg-card border border-border shadow-sm">
      <h2 className="text-2xl font-bold text-center mb-6">
        {isLogin ? 'Sign in to your account' : 'Create your account'}
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {!isLogin && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {!isLogin && (
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>I am a:</FormLabel>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        value="student"
                        checked={field.value === 'student'}
                        onChange={() => field.onChange('student')}
                        className="h-4 w-4 text-primary border-border focus:ring-primary"
                      />
                      <span>Student</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        value="teacher"
                        checked={field.value === 'teacher'}
                        onChange={() => field.onChange('teacher')}
                        className="h-4 w-4 text-primary border-border focus:ring-primary"
                      />
                      <span>Teacher</span>
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button type="submit" className="w-full">
            {isLogin ? 'Sign in' : 'Create account'}
          </Button>
        </form>
      </Form>

      <div className="mt-6 text-center text-sm">
        {isLogin ? (
          <p>
            Don't have an account?{' '}
            <a href="/register" className="text-primary hover:underline">
              Register
            </a>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <a href="/login" className="text-primary hover:underline">
              Sign in
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
