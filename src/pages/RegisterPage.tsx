
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthForm from '@/components/auth/AuthForm';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-24">
        <AuthForm type="register" />
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
