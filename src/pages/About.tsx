
import React from 'react';
import { BookOpen, Award, Users, Globe } from 'lucide-react';
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      {/* Hero section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-80 h-80 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Orion</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're on a mission to make education accessible, engaging, and effective for everyone. 
              Our platform brings together exceptional instructors and curious learners in a 
              distraction-free environment focused on growth.
            </p>
          </div>
        </div>
      </div>

      {/* Our story section */}
      <div className="py-16 bg-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-6">Our Story</h2>
            <div className="prose prose-lg prose-blue mx-auto text-gray-600">
              <p>
                Orion began with a simple idea: learning should be a joyful journey, not a chore. In 2022, our founders 
                noticed that many online learning platforms were cluttered with distractions and complicated interfaces 
                that took away from the learning experience.
              </p>
              <p className="mt-4">
                We set out to create something different — a platform that strips away the unnecessary and focuses on what 
                matters: quality content, engaged learning, and measurable progress. Our minimalist approach isn't just 
                about aesthetics; it's about creating space for deeper concentration and more effective knowledge retention.
              </p>
              <p className="mt-4">
                Today, Orion serves over 50,000 learners worldwide, offering courses across a wide range of disciplines. 
                We partner with industry experts and passionate educators who share our vision for accessible, high-quality 
                education.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="py-16 bg-gray-50 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all card-hover">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-primary mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Clarity First</h3>
              <p className="mt-2 text-gray-600">
                We believe that simplicity enhances understanding. Our platform and content prioritize clarity above all.
              </p>
            </div>

            <div className="flex flex-col items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all card-hover">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-primary mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Quality Content</h3>
              <p className="mt-2 text-gray-600">
                Every course on our platform undergoes rigorous review to ensure it meets our high standards for accuracy and value.
              </p>
            </div>

            <div className="flex flex-col items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all card-hover">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-primary mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Inclusive Learning</h3>
              <p className="mt-2 text-gray-600">
                We design our platform to be accessible to all learners, regardless of background or learning style.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="py-16 bg-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              The passionate people behind Orion
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Morgan",
                title: "Founder & CEO",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                bio: "Former professor with a passion for accessible education"
              },
              {
                name: "Sam Chen",
                title: "Chief Learning Officer",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                bio: "Cognitive scientist specializing in online learning methodologies"
              },
              {
                name: "Jordan Taylor",
                title: "Head of Content",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
                bio: "Award-winning educator with 15 years of curriculum development"
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all card-hover">
                <img
                  className="h-24 w-24 rounded-full object-cover mb-4"
                  src={member.image}
                  alt={member.name}
                />
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{member.title}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global presence section */}
      <div className="py-16 bg-gray-50 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Global Presence</h2>
            <p className="mt-4 text-lg text-gray-600">
              Serving learners in over 150 countries
            </p>
          </div>

          <div className="mx-auto flex flex-col items-center mt-8">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-primary mb-6">
              <Globe size={40} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 max-w-3xl">
              {["North America", "Europe", "Asia", "Africa", "South America", "Australia", "Middle East", "Pacific Islands"].map((region) => (
                <div key={region} className="px-4 py-2 bg-white rounded-lg text-center shadow-sm">
                  <span className="text-gray-800">{region}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
