import React, { useState } from 'react';
import { ChevronDown, Upload, X } from 'lucide-react';

interface FormData {
  // Applicant Information
  surname: string;
  firstNames: string;
  streetAddress: string;
  city: string;
  province: string;
  postalCode: string;
  telephone: string;
  idNumber: string;
  placeOfBirth: string;
  homeLanguage: string;

  // Previous School Information
  highestGradePassed: string;
  previousSchoolName: string;

  // Current School Information
  presentGrade: string;
  presentSchoolName: string;
  yearsInPresentGrade: string;
  gradeToEnter: string;

  // Additional Information
  previousBoardingSchool: string;
  boardingSchoolName: string;
  extraMuralActivities: string;
  hasHealthIssues: string;
  illnessName: string;
  familyDoctorName: string;
}

const ApplyPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    surname: '',
    firstNames: '',
    streetAddress: '',
    city: '',
    province: '',
    postalCode: '',
    telephone: '',
    idNumber: '',
    placeOfBirth: '',
    homeLanguage: '',
    highestGradePassed: '',
    previousSchoolName: '',
    presentGrade: '',
    presentSchoolName: '',
    yearsInPresentGrade: '',
    gradeToEnter: '',
    previousBoardingSchool: 'No',
    boardingSchoolName: '',
    extraMuralActivities: '',
    hasHealthIssues: 'No',
    illnessName: '',
    familyDoctorName: '',
  });

  const [reportCard, setReportCard] = useState<File | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after success message
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        surname: '',
        firstNames: '',
        streetAddress: '',
        city: '',
        province: '',
        postalCode: '',
        telephone: '',
        idNumber: '',
        placeOfBirth: '',
        homeLanguage: '',
        highestGradePassed: '',
        previousSchoolName: '',
        presentGrade: '',
        presentSchoolName: '',
        yearsInPresentGrade: '',
        gradeToEnter: '',
        previousBoardingSchool: 'No',
        boardingSchoolName: '',
        extraMuralActivities: '',
        hasHealthIssues: 'No',
        illnessName: '',
        familyDoctorName: '',
      });
    }, 3000);
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4747d7] focus:border-[#4747d7] transition-all duration-200 bg-white";
  const labelClasses = "block text-sm font-medium text-[#26262c] mb-2";
  const selectClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4747d7] focus:border-[#4747d7] transition-all duration-200 bg-white appearance-none cursor-pointer";

  return (
    <div className="py-12 bg-gradient-to-b from-[#f6f7fd] to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#26262c] mb-3">
            Apply to Sacred Heart Secondary School
          </h1>
          <p className="text-[#76767f] text-lg">
            Complete the form below to submit your application
          </p>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="text-green-800 font-semibold">Application Submitted Successfully!</h3>
                <p className="text-green-700 text-sm mt-1">We will review your application and contact you soon.</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Applicant Information Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h2 className="text-2xl font-bold text-[#26262c]">Applicant Information</h2>
              <p className="text-[#76767f] mt-1">Your child's personal details</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="surname" className={labelClasses}>
                  Surname <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="E.g. Mkhize"
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label htmlFor="firstNames" className={labelClasses}>
                  First Names <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstNames"
                  name="firstNames"
                  value={formData.firstNames}
                  onChange={handleChange}
                  placeholder="E.g. John Doe"
                  className={inputClasses}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="streetAddress" className={labelClasses}>
                  Street Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  placeholder="E.g. 42 Wallaby Way"
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label htmlFor="city" className={labelClasses}>City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="E.g. Durban"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="province" className={labelClasses}>Province</label>
                <input
                  type="text"
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  placeholder="E.g. KwaZulu-Natal"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="postalCode" className={labelClasses}>Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="E.g. 4000"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="telephone" className={labelClasses}>
                  Telephone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="E.g. +27 72 571 8974"
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label htmlFor="idNumber" className={labelClasses}>ID Number</label>
                <input
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleChange}
                  placeholder="E.g. 8705037856998"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="placeOfBirth" className={labelClasses}>Place of Birth</label>
                <input
                  type="text"
                  id="placeOfBirth"
                  name="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={handleChange}
                  placeholder="E.g. Durban"
                  className={inputClasses}
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="homeLanguage" className={labelClasses}>Home Language</label>
                <input
                  type="text"
                  id="homeLanguage"
                  name="homeLanguage"
                  value={formData.homeLanguage}
                  onChange={handleChange}
                  placeholder="E.g. Zulu"
                  className={inputClasses}
                />
              </div>
            </div>
          </div>

          {/* Previous School Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h2 className="text-2xl font-bold text-[#26262c]">Previous School Information</h2>
              <p className="text-[#76767f] mt-1">Details about the school where highest grade was passed</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="highestGradePassed" className={labelClasses}>Highest Grade Passed</label>
                <div className="relative">
                  <select
                    id="highestGradePassed"
                    name="highestGradePassed"
                    value={formData.highestGradePassed}
                    onChange={handleChange}
                    className={selectClasses}
                  >
                    <option value="">Select Grade</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="previousSchoolName" className={labelClasses}>Name of School</label>
                <input
                  type="text"
                  id="previousSchoolName"
                  name="previousSchoolName"
                  value={formData.previousSchoolName}
                  onChange={handleChange}
                  placeholder="E.g. Sacred Heart Primary"
                  className={inputClasses}
                />
              </div>


            </div>
          </div>

          {/* Current School Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h2 className="text-2xl font-bold text-[#26262c]">Current School Information</h2>
              <p className="text-[#76767f] mt-1">Details about the applicant's present school</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="presentGrade" className={labelClasses}>Present Grade</label>
                <input
                  type="text"
                  id="presentGrade"
                  name="presentGrade"
                  value={formData.presentGrade}
                  onChange={handleChange}
                  placeholder="E.g. 7"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="presentSchoolName" className={labelClasses}>Name of Present School</label>
                <input
                  type="text"
                  id="presentSchoolName"
                  name="presentSchoolName"
                  value={formData.presentSchoolName}
                  onChange={handleChange}
                  placeholder="E.g. John Doe Primary"
                  className={inputClasses}
                />
              </div>



              <div>
                <label htmlFor="yearsInPresentGrade" className={labelClasses}>Years in Present Grade</label>
                <input
                  type="text"
                  id="yearsInPresentGrade"
                  name="yearsInPresentGrade"
                  value={formData.yearsInPresentGrade}
                  onChange={handleChange}
                  placeholder="E.g. 0"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="gradeToEnter" className={labelClasses}>Grade Applicant Wants to Enter</label>
                <input
                  type="text"
                  id="gradeToEnter"
                  name="gradeToEnter"
                  value={formData.gradeToEnter}
                  onChange={handleChange}
                  placeholder="E.g. 8"
                  className={inputClasses}
                />
              </div>

              {/* Report Card Upload */}
              <div className="md:col-span-2">
                <label className={labelClasses}>Upload Report Card</label>
                <div className="mt-1">
                  {!reportCard ? (
                    <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-[#4747d7] transition-all duration-200">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-10 h-10 mb-3 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold text-[#4747d7]">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-400">PDF, DOC, JPG or PNG (MAX. 5MB)</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setReportCard(e.target.files[0]);
                          }
                        }}
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-xl">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                          <Upload className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-green-800">{reportCard.name}</p>
                          <p className="text-xs text-green-600">{(reportCard.size / 1024).toFixed(1)} KB</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setReportCard(null)}
                        className="p-2 text-green-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h2 className="text-2xl font-bold text-[#26262c]">Additional Information</h2>
              <p className="text-[#76767f] mt-1">Other relevant details about the applicant</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="previousBoardingSchool" className={labelClasses}>
                  Has the applicant ever studied in any other boarding schools?
                </label>
                <div className="relative">
                  <select
                    id="previousBoardingSchool"
                    name="previousBoardingSchool"
                    value={formData.previousBoardingSchool}
                    onChange={handleChange}
                    className={selectClasses}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {formData.previousBoardingSchool === 'Yes' && (
                <div>
                  <label htmlFor="boardingSchoolName" className={labelClasses}>Name of Boarding School</label>
                  <input
                    type="text"
                    id="boardingSchoolName"
                    name="boardingSchoolName"
                    value={formData.boardingSchoolName}
                    onChange={handleChange}
                    placeholder="E.g. Indumiso Boarding School"
                    className={inputClasses}
                  />
                </div>
              )}

              <div className={formData.previousBoardingSchool === 'Yes' ? '' : 'md:col-span-1'}>
                <label htmlFor="extraMuralActivities" className={labelClasses}>Extra-Mural Activities</label>
                <input
                  type="text"
                  id="extraMuralActivities"
                  name="extraMuralActivities"
                  value={formData.extraMuralActivities}
                  onChange={handleChange}
                  placeholder="E.g. Soccer, Netball, Debate"
                  className={inputClasses}
                />
              </div>

              <div className="relative">
                <label htmlFor="hasHealthIssues" className={labelClasses}>
                  Does the applicant have any health issues?
                </label>
                <div className="relative">
                  <select
                    id="hasHealthIssues"
                    name="hasHealthIssues"
                    value={formData.hasHealthIssues}
                    onChange={handleChange}
                    className={selectClasses}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {formData.hasHealthIssues === 'Yes' && (
                <div>
                  <label htmlFor="illnessName" className={labelClasses}>Name of Illness / Condition</label>
                  <input
                    type="text"
                    id="illnessName"
                    name="illnessName"
                    value={formData.illnessName}
                    onChange={handleChange}
                    placeholder="E.g. Asthma"
                    className={inputClasses}
                  />
                </div>
              )}

              <div className={formData.hasHealthIssues === 'Yes' ? 'md:col-span-2' : ''}>
                <label htmlFor="familyDoctorName" className={labelClasses}>Name of Family Doctor</label>
                <input
                  type="text"
                  id="familyDoctorName"
                  name="familyDoctorName"
                  value={formData.familyDoctorName}
                  onChange={handleChange}
                  placeholder="E.g. Dr. John Smith"
                  className={inputClasses}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full md:w-auto px-12 py-4 rounded-xl font-semibold text-lg
                transition-all duration-300 transform
                ${isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#4747d7] hover:bg-[#3a3ac5] hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]'
                }
                text-white shadow-md
              `}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting Application...
                </span>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-[#76767f] text-sm">
            By submitting this form, you agree to our terms and conditions.
            We will contact you via the telephone number provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;