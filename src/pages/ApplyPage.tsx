import React, { useState } from 'react';

interface ApplyFormProps {
  onSubmit?: (data: any) => void;
}

const ApplyPage: React.FC<ApplyFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    currentGrade: '',
    parentName: '',
    email: '',
    phone: '',
    uploadedReport: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    // In a real app, you would send the data to a backend
    alert('Application submitted successfully!');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        uploadedReport: e.target.files[0]
      });
    }
  };

  return (
    <div className="py-12 bg-[#f6f7fd] min-h-screen">
      <div className="max-w-4xl mx-auto p-6 px-6 sm:px-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#26262c] mb-6">Apply to Sacred Heart Secondary School</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#76767f] mb-1">Student Name</label>
                <input
                  type="text"
                  value={formData.studentName}
                  onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4747d7] focus:border-[#4747d7]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#76767f] mb-1">Current Grade</label>
                <select
                  value={formData.currentGrade}
                  onChange={(e) => setFormData({...formData, currentGrade: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4747d7] focus:border-[#4747d7]"
                  required
                >
                  <option value="">Select Grade</option>
                  <option value="Grade 8">Grade 8</option>
                  <option value="Grade 9">Grade 9</option>
                  <option value="Grade 10">Grade 10</option>
                  <option value="Grade 11">Grade 11</option>
                  <option value="Grade 12">Grade 12</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#76767f] mb-1">Parent/Guardian Name</label>
                <input
                  type="text"
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4747d7] focus:border-[#4747d7]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#76767f] mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4747d7] focus:border-[#4747d7]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#76767f] mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4747d7] focus:border-[#4747d7]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#76767f] mb-1">Upload Report Card</label>
                <div className="flex items-center">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
                      <p className="text-xs text-gray-500">PDF, DOC, JPG, PNG (MAX. 5MB)</p>
                    </div>
                    <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.jpg,.jpeg,.png" />
                  </label>
                </div>
                {formData.uploadedReport && (
                  <p className="mt-2 text-sm text-[#4747d7]">Selected: {formData.uploadedReport.name}</p>
                )}
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#4747d7] hover:bg-[#3a3ac5] text-white font-medium py-3 px-6 rounded-md transition duration-300"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;