import React from 'react';

const StudentsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero / Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#26262c] mb-4">Our Students</h2>
            <div className="w-24 h-1 bg-[#4747d7] mx-auto mb-8"></div>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-[#76767f] italic">
                "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle". 
                Winners are not those who never fail, but those who never quit"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Life Description & Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#26262c] mb-4">Students</h2>
            <div className="w-24 h-1 bg-[#4747d7] mx-auto mb-8"></div>
            <p className="text-[#76767f] max-w-4xl mx-auto text-lg" style={{ fontFamily: 'Arial, sans-serif' }}>
              At Sacred Heart Secondary School, we believe in fostering an environment where students can take ownership of their learning, 
              develop curiosity, and feel empowered to reach their full potential. Our students are encouraged to explore their passions, 
              challenge themselves academically, and grow as individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Placeholder for images using divs with background styling */}
            <div className="bg-gray-200 border-2 border-dashed rounded-lg w-full h-64 flex items-center justify-center">
              <span className="text-gray-500">Students Group Photo</span>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-lg w-full h-64 flex items-center justify-center">
              <span className="text-gray-500">Students at Desks</span>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-lg w-full h-64 flex items-center justify-center">
              <span className="text-gray-500">Students Outdoors</span>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-lg w-full h-64 flex items-center justify-center">
              <span className="text-gray-500">Student Portrait</span>
            </div>
          </div>
        </div>
      </section>

      {/* Adventure Section */}
      <section className="py-16 bg-[#f6f7fd]">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="flex items-center mb-12">
            <div className="h-1 bg-[#4747d7] flex-grow"></div>
            <span className="mx-4 text-[#26262c] font-medium">Adventure</span>
            <div className="h-1 bg-[#4747d7] flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#26262c] mb-4">Boot Camp</h3>
              <p className="text-[#76767f] mb-6">
                Our strong academic and extracurricular programs are complemented by educational boot camps that challenge students 
                to push their boundaries. These intensive learning experiences help students develop resilience, teamwork, and leadership skills.
              </p>
              <p className="text-[#76767f]">
                Through these programs, students gain valuable life skills and create lasting memories that shape their character and future success.
              </p>
            </div>
            
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center">
              <span className="text-gray-500">Student Boot Camp Carousel (21 images)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Team Building Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <div className="w-full h-1 bg-[#4747d7] mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center">
              <span className="text-gray-500">Staff Team Building Carousel (3 images)</span>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#26262c] mb-4">Staff Team Building</h3>
              <p className="text-[#76767f] mb-6">
                Our dedicated staff participate in regular team building activities to enhance collaboration, communication, and morale. 
                This creates a positive working environment that directly benefits our students.
              </p>
              <p className="text-[#76767f]">
                Strong relationships among staff members translate into a supportive and nurturing environment where students can thrive academically and personally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentsPage;