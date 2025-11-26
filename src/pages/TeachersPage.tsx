import React from 'react';

const TeachersPage: React.FC = () => {
  // Teachers data
  const teachers = [
    { id: 1, name: 'Mr NA Khumalo', subject: 'CAT' },
    { id: 2, name: 'Miss T Mngadi', subject: 'Mathematics' },
    { id: 3, name: 'Mr S Niehaus', subject: 'Geography' },
    { id: 4, name: 'Miss NP Luthuli', subject: 'Physical Science' },
    { id: 5, name: 'Miss T Mazibuko', subject: 'Tourism' },
    { id: 6, name: 'Miss TL Mvubu', subject: 'IsiZulu' },
    { id: 7, name: 'Miss TN Shozi', subject: 'English' },
    { id: 8, name: 'Miss HP Ndlovu', subject: 'IsiZulu' },
    { id: 9, name: 'Miss TH Msomi', subject: 'History' },
    { id: 10, name: 'Miss NP Zulu', subject: 'Agriculture' },
    { id: 11, name: 'Miss Shandu', subject: 'Maths Literacy' },
    { id: 12, name: 'Mrs BG Makhanya', subject: 'Life Orientation' },
    { id: 13, name: 'Mr M Mthalane', subject: 'Music' },
    { id: 14, name: 'Mr Mthethwa', subject: 'Isizulu' },
    { id: 15, name: 'Miss Mkhize', subject: '' },
    { id: 16, name: 'Miss TC Simon', subject: 'English' },
    { id: 17, name: 'Mr AG Jhungbathur', subject: 'Maths' },
    { id: 18, name: 'Miss A Mzobe', subject: 'Business Studies' },
    { id: 19, name: 'Miss P Barnes', subject: 'Admin' },
    { id: 20, name: 'Miss T Ngidi', subject: 'Admin' },
    { id: 21, name: 'Mr SK Pillay', subject: 'Accounting' },
    { id: 22, name: 'Mr. Rasta Thokozani Mahaye', subject: 'Lithographic Operator' },
    { id: 23, name: 'Mr. Mhlengi', subject: 'Technician' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Title Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[#26262c] mb-8">Our Educators</h1>
        </div>
      </section>

      {/* Deputy Principal Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#26262c] mb-4">Deputy Principal</h3>
              <p className="text-[#76767f] mb-4">
                Meet our dedicated Deputy Principal, Mrs. NS Goba, fostering excellence and supporting student success. our Deputy Principal ensures every student's potential is nurtured. Guiding academic excellence and she leads with passion. At the heart of our school's success, our Deputy Principal champions innovation and collaboration. Working alongside the principal, she shapes the future of our school.
              </p>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <span className="text-gray-500">Mrs. NS Goba Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOD Science Section */}
      <section className="py-16 bg-[#f6f7fd]">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <span className="text-gray-500">Miss NC Mtshali Photo</span>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-[#26262c] mb-4">HOD OF SCIENCE</h4>
              <p className="text-[#76767f] mb-4">
                Miss. NC Mtshali, our Head of the Science Department, is a dedicated educator with over a decade of experience... Her leadership fosters a collaborative learning environment... Miss NC Mtshali's passion for science and her warm, approachable nature inspire both students and staff...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOD Language Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#26262c] mb-4">HOD Language</h3>
              <p className="text-[#76767f] mb-4">
                Mr. SMN Mkhize, our Head of the Language Department, brings over fifteen years of experience... He is celebrated for his innovative teaching techniques... Known for his approachable demeanor, Mr. Mkhize inspires both students and colleagues...
              </p>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <span className="text-gray-500">Mr. SMN Mkhize Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOD Commerce Section */}
      <section className="py-16 bg-[#f6f7fd]">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <span className="text-gray-500">Mr. Vambe Photo</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#26262c] mb-4">HOD Commerce</h3>
              <p className="text-[#76767f] mb-4">
                Mr. Vambe, our Head of the Commerce Department, brings over a decade of expertise... renowned for his innovative teaching methods that connect theoretical concepts to real-world applications... His approachable nature and mentorship inspire students and colleagues alike...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Few Words About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <div className="w-full h-1 bg-[#4747d7] mb-8"></div>
            <h4 className="text-xl font-bold text-[#26262c] mb-2">A Few Words About</h4>
            <h2 className="text-2xl md:text-3xl font-bold text-[#26262c] mb-6">Our Educators and Admin Staff</h2>
            <p className="text-[#76767f] max-w-4xl mx-auto">
              Our educators are not just teachers; they are mentors, role models, and advocates for learning. They create a nurturing and inclusive environment where students feel supported, challenged, and encouraged to excel. Their ability to adapt teaching methods to meet the diverse needs of students ensures that every learner has the opportunity to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teachers.map(teacher => (
              <div key={teacher.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed rounded-t-lg w-full h-64 flex items-center justify-center">
                  <span className="text-gray-500">{teacher.name}'s Photo</span>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-[#26262c] mb-2">{teacher.name}</h4>
                  <p className="text-[#4747d7]">{teacher.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-[#f6f7fd]">
        <div className="container mx-auto px-6 sm:px-8 max-w-4xl text-center">
          <div className="text-5xl text-[#4747d7] mb-6">❝</div>
          <blockquote className="text-xl md:text-2xl font-medium text-[#26262c] mb-8 italic">
            "Live as if you were to die tomorrow. Learn as if you were to live forever."
          </blockquote>
          <p className="text-lg font-bold text-[#26262c]">- Mahatma Gandhi</p>
        </div>
      </section>
    </div>
  );
};

export default TeachersPage;