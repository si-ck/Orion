
import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: any) => {
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form data:', data);
      toast.success('Message sent successfully! We\'ll be in touch soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Contact form error:', error);
    }
  };

  return (
    <Layout>
      {/* Hero section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-80 h-80 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Touch</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have questions about our platform, courses, or partnership opportunities?
              We'd love to hear from you. Fill out the form below or reach out directly.
            </p>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <div className="py-16 bg-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-16 lg:grid-cols-2">
            
            {/* Contact information */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">support@orion.learning</p>
                    <p className="mt-1 text-gray-600">partnerships@orion.learning</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                    <p className="mt-1 text-gray-600">Mon-Fri, 9am-5pm PST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Office</h3>
                    <p className="mt-1 text-gray-600">Alliance University</p>
                    <p className="text-gray-600">Bangalore, India, 562106</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                    <a 
                      key={social} 
                      href={`https://${social}.com`} 
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-primary hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" clipRule="evenodd" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8">Send us a message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    {...register('name', { required: 'Name is required' })}
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message?.toString()}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Please enter a valid email'
                      }
                    })}
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message?.toString()}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    {...register('subject', { required: 'Subject is required' })}
                    aria-invalid={errors.subject ? 'true' : 'false'}
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500">{errors.subject.message?.toString()}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message should be at least 10 characters'
                      }
                    })}
                    aria-invalid={errors.message ? 'true' : 'false'}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message.message?.toString()}</p>
                  )}
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ section */}
      <div className="py-16 bg-gray-50 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">
              Common questions about our platform and courses
            </p>
          </div>
          
          <div className="mx-auto max-w-3xl divide-y divide-gray-200">
            {[
              {
                question: "How do I sign up for a course?",
                answer: "You can sign up for courses by creating an account and browsing our course catalog. Once you find a course you're interested in, simply click 'Enroll' and follow the payment instructions if applicable."
              },
              {
                question: "Are there any free courses available?",
                answer: "Yes! We offer a selection of free courses across various categories. Look for the 'Free' tag when browsing our course catalog."
              },
              {
                question: "How can I become an instructor?",
                answer: "We're always looking for experienced instructors to join our platform. Please fill out the contact form above with details about your expertise and teaching experience."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for course payments. All transactions are secure and encrypted."
              },
            ].map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
