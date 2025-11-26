import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="py-12 bg-[#f6f7fd] min-h-screen">
      <div className="w-[80%] mx-auto">
        <h1 className="text-3xl font-bold text-[#26262c] mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-[#26262c] mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#4747d7] mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-[#26262c]">Address</h3>
                    <p className="text-[#76767f]">123 Education Lane, Sacred Heart, SA</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[#4747d7] mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-[#26262c]">Phone</h3>
                    <p className="text-[#76767f]">+27 (0)11 234 5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#4747d7] mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-[#26262c]">Email</h3>
                    <p className="text-[#76767f]">info@sacredheart.edu.za</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-medium text-gray-700 mb-2">School Location</div>
                  <p className="text-gray-600">Google Map Placeholder</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-[#26262c] mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#76767f] mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4747d7] focus:border-[#4747d7]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#76767f] mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4747d7] focus:border-[#4747d7]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#76767f] mb-1">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4747d7] focus:border-[#4747d7]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#76767f] mb-1">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4747d7] focus:border-[#4747d7]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4747d7] hover:bg-[#3a3ac5] text-white font-medium py-3 px-6 rounded-md transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;