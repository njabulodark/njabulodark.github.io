import React from 'react';

const ActivitiesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Title Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#26262c]">Co-curricular Activities</h1>
        </div>
      </section>

      {/* Music & Choir Section (Zig-Zag Layout) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          {/* Row 1: Music */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center">
                <span className="text-gray-500">20240521_111212-scaled.jpg</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#26262c] mb-4">Music</h3>
              <p className="text-[#76767f]">
                Sacred Heart is very proud to have Mr Mthobisi Mthalane as our full-time music teacher. Mr Mthalane has worked with many high profile artists such as Dorothy Masuku, Camagwini, Ntando, Zulu Boy, Rebecca Maloepe, Hlengiwe Mhlaba, Benjamin Dube, Jub Jub and Jazel brothers, to mention just a few.
              </p>
            </div>
          </div>

          {/* Row 2: School Choir */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#26262c] mb-4">School choir</h3>
              <p className="text-[#76767f]">
                With a low student-to-teacher ratio, our students receive personalized attention and support. Our teachers work closely with students to identify their strengths and areas for improvement, and help them reach their full potential.
              </p>
            </div>
            <div>
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center">
                <span className="text-gray-500">20240521_111619-scaled.jpg</span>
              </div>
            </div>
          </div>

          {/* Row 3: Performing Arts & Music */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center">
                <span className="text-gray-500">20240521_113828-1-scaled.jpg</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#26262c] mb-4">Performing Arts & Music</h3>
              <p className="text-[#76767f]">
                With professionals on board, we take pride in training our students in art forms like dance, drama, painting and more. We organize exhibitions, concerts and musical events to encourage our students to own their talent and flourish in those fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* "Visual Tour" Carousel Section */}
      <section className="py-16 bg-[#f6f7fd]">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <h6 className="text-lg font-medium text-[#26262c] text-center mb-4">Sacred Heart Secondary School</h6>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#26262c] text-center mb-12">
            Music on Thursday with Mr Mthalane and Mr Ndebele at Sacred Heart Secondary School's: A Visual Tour
          </h3>
          
          {/* Placeholder for carousel - actual implementation would use a carousel library */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-gray-200 border-2 border-dashed rounded-lg w-full h-64 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Visual Tour Image {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-4xl">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
              </svg>
              <p className="text-gray-600">School Music Video</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;