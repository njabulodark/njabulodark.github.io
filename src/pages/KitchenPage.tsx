import React from 'react';
import { Link } from 'react-router-dom';

const KitchenPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#26262c] mb-6">The Kitchen.</h1>
          <div className="w-64 h-1 bg-[#4747d7] mx-0"></div>
        </div>
      </section>

      {/* Intro / "Sumptuous Kitchen" Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Text */}
            <div>
              <div className="bg-gray-200 border-2 border-dashed rounded-lg w-24 h-16 mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">parcelli.png</span>
              </div>
              <h3 className="text-xl font-bold text-[#26262c] mb-4">Sumptuous Kitchen at Sacred Heart Secondary School</h3>
              <p className="text-[#76767f]">
                Sumptuous caters for youth in schools, colleges and residential universities. These ages usually range from 5-25 years old. We have a responsibility to build a strong and healthy population. When creating a menu for an institutional facility / hostel, the following points must be kept in mind. Sumptuous offers meals that are cost effective, quality services to those in the industrial, commercial and institutional sectors.
              </p>
            </div>

            {/* Column 2: Image */}
            <div>
              <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-80 flex items-center justify-center">
                <span className="text-gray-500">20231027_131306-1-scaled.jpg</span>
              </div>
            </div>

            {/* Column 3: Images (Hidden on Mobile/Tablet) */}
            <div className="hidden md:block">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-40 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">catering-info-hotbox.jpg</span>
                </div>
                <div className="bg-gray-200 border-2 border-dashed rounded-2xl w-full h-40 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Breakfast-Buffet.jpg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Menus" Section */}
      <section className="py-16 bg-[#f6f7fd]">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#26262c] mb-6">Menus</h2>
          <div className="w-64 h-1 bg-[#4747d7] mx-auto"></div>
        </div>
      </section>

      {/* Menu Schedule Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <div className="space-y-8">
            {/* Row 1: Breakfast */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-200 pb-4">
              <div>
                <h4 className="text-lg font-bold text-[#26262c]">Breakfast</h4>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#26262c]">6:00am - 6:30am</h4>
              </div>
              <div>
                <ul className="list-disc pl-5 text-[#76767f] space-y-1">
                  <li>A nutritious breakfast</li>
                  <li>Whole grain</li>
                  <li>Protein</li>
                </ul>
              </div>
            </div>

            {/* Row 2: AM Tea */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-200 pb-4">
              <div>
                <h4 className="text-lg font-bold text-[#26262c]">AM Tea</h4>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#26262c]">11:00am - 11:30am</h4>
              </div>
              <div>
                <ul className="list-disc pl-5 text-[#76767f] space-y-1">
                  <li>Balanced combination of hydration</li>
                  <li>Nutrition</li>
                </ul>
              </div>
            </div>

            {/* Row 3: Lunch */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-200 pb-4">
              <div>
                <h4 className="text-lg font-bold text-[#26262c]">Lunch</h4>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#26262c]">14:30am - 15:00am</h4>
              </div>
              <div>
                <ul className="list-disc pl-5 text-[#76767f] space-y-1">
                  <li>Main Dish: Lean Protein (Grilled chicken,)</li>
                  <li>Sides: Mixed greens veggies and fruits</li>
                  <li>Hydration: Beverages (Juice)</li>
                </ul>
              </div>
            </div>

            {/* Row 4: Supper */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="text-lg font-bold text-[#26262c]">Supper</h4>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#26262c]">17:00pm - 17:30pm</h4>
              </div>
              <div>
                <ul className="list-disc pl-5 text-[#76767f] space-y-1">
                  <li>Main Dish: Lean Protein and whole grain</li>
                  <li>Sides: Vegetables, salad and fruits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Our Team" Section */}
      <section className="py-16 bg-[#f6f7fd]">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#26262c] text-center mb-6">Our Team</h2>
          <div className="w-64 h-1 bg-[#4747d7] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Sibonelo Mlangeni */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center">
                <span className="text-gray-500">Sibonelo-Mlangeni.jpg</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#26262c]">Sibonelo Mlangeni</h3>
                <p className="text-[#4747d7]">Director</p>
              </div>
            </div>

            {/* Card 2: Alfred Peta */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center">
                <span className="text-gray-500">Placeholder</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#26262c]">Alfred Peta</h3>
                <p className="text-[#4747d7]">Area Manager</p>
              </div>
            </div>

            {/* Card 3: Nkosiyavuma Ndebele */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center">
                <span className="text-gray-500">Placeholder</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#26262c]">Nkosiyavuma Ndebele</h3>
                <p className="text-[#4747d7]">Catering Manager</p>
              </div>
            </div>

            {/* Card 4: Bongiwe Khanyile */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 border-2 border-dashed w-full h-48 flex items-center justify-center">
                <span className="text-gray-500">IMG-20240527-WA0006-2-1.jpg</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#26262c]">Bongiwe Khanyile</h3>
                <p className="text-[#4747d7]">Head Chef</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff & CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl text-center">
          <h3 className="text-2xl font-bold text-[#26262c] mb-8">Staff</h3>
          <Link
            to="/apply"
            className="inline-flex items-center bg-[#4747d7] hover:bg-[#3a3ac5] text-white font-medium py-2 px-6 rounded-md transition duration-300"
          >
            Apply Today!
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default KitchenPage;