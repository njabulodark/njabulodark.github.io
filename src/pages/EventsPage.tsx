import React from 'react';
import ThreeDCarousel from '../components/ThreeDCarousel';

const EventsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Title */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#26262c] mb-4">Events</h1>
          <div className="w-20 h-1 bg-[#4747d7]"></div>
        </div>
      </section>

      {/* Event 1: Matric Dance (Nov 2024) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          {/* Top Section - Date and Title */}
          <div className="mb-8">
            <h6 className="text-lg font-medium text-[#6e71e4] mb-2">November 23/ 2024 / 15:00 pm</h6>
            <h3 className="text-2xl md:text-3xl font-bold text-[#2107c8] mb-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
              Class of 2024 MATRIC DANCE: A night to Remember
            </h3>
          </div>

          {/* Main Content - Large Photo Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Main Content - Left: Large Photo */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg">
                <div className="w-full h-96 mb-4 overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="/images/events/matric_dance_2024/IMG-20241123-WA0006-scaled.jpg"
                    alt="Matric Dance Highlight"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Main Content - Right: Text Content */}
            <div className="flex flex-col justify-center">
              <h4 className="text-xl font-bold text-[#26262c] mb-4">What a night to remember!!!!!</h4>
              <p className="text-[#76767f] mb-4">
                Congratulations to our Class of 2024 graduates on your special night! Your journey has been
                filled with dedication, perseverance, and remarkable achievements. The Brently Lodge and
                Lifestyle Centre in Durban provided the perfect setting for this memorable celebration of
                your accomplishments.
              </p>
              <p className="text-[#76767f] mb-4">
                As you move forward into your next chapter, remember that the Sacred Heart family will
                always be here to support you. Embrace your future with courage and confidence, and never
                forget the friendships and memories you've made here.
              </p>
              <p className="text-[#76767f] mb-4">
                Wishing all the best to the Class of 2024 as you embark on your next adventure.
              </p>
              <p className="text-[#76767f] font-semibold">
                With love and blessings, Sacred Heart Secondary School
              </p>
            </div>
          </div>

          {/* Gallery Carousel */}
          <h4 className="text-xl font-bold text-[#26262c] mb-6">Photo Gallery</h4>
          <ThreeDCarousel
            images={[
              '/images/events/matric_dance_2024/IMG-20241123-WA0006-scaled.jpg',
              '/images/events/matric_dance_2024/IMG-20241123-WA0022-225x300.jpg',
              '/images/events/matric_dance_2024/IMG-20241123-WA0022-225x300.jpg',
              '/images/events/matric_dance_2024/IMG-20241123-WA0022-225x300.jpg',
              '/images/events/matric_dance_2024/IMG-20241123-WA0023-225x300.jpg'
            ]}
            altTexts={[
              'Matric Dance Highlight',
              'Matric Dance 2',
              'Matric Dance 3'
            ]}
          />
        </div>
      </section>

      <div className="border-t border-gray-200 mx-6 sm:mx-8 max-w-6xl"></div>

      {/* Event 2: Business Lunch (Oct 2024) */}
      <section className="py-16 bg-[#f6f7fd]">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          {/* Top Section - Date and Title */}
          <div className="mb-8">
            <h6 className="text-lg font-medium text-[#6e71e4] mb-2">October 08/ 2024 / 12:00 pm</h6>
            <h3 className="text-2xl md:text-3xl font-bold text-[#2107c8] mb-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
              Sacred Heart Business Lunch
            </h3>
          </div>

          {/* Main Content - Large Photo Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Main Content - Left: Large Photo */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg">
                <div className="w-full h-96 mb-4 overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="/images/events/business_lunch/PHOTO-2024-10-08-22-19-15-7-2.jpg"
                    alt="Business Lunch Highlight"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Main Content - Right: Text Content */}
            <div className="flex flex-col justify-center">
              <h4 className="text-xl font-bold text-[#26262c] mb-4">Business Partnership Celebration</h4>
              <p className="text-[#76767f] mb-4">
                Our exclusive Business Lunch brought together top companies and industry leaders to foster
                meaningful relationships and explore potential partnerships. The event provided an excellent
                platform for networking and collaboration between the business community and our school.
              </p>
              <p className="text-[#76767f] mb-4">
                The Sacred Heart community extends its heartfelt appreciation to all attending businesses
                and their commitment to education and youth development. These partnerships play a crucial
                role in preparing our students for future success in the business world.
              </p>
              <p className="text-[#76767f] mb-4">
                We look forward to building stronger alliances with industry leaders as we continue to
                provide quality education that meets the evolving needs of the marketplace.
              </p>
              <p className="text-[#76767f] font-semibold">
                With gratitude and appreciation, Sacred Heart Secondary School
              </p>
            </div>
          </div>

          {/* Gallery Carousel */}
          <h4 className="text-xl font-bold text-[#26262c] mb-6">Photo Gallery</h4>
          <ThreeDCarousel
            images={[
              '/images/events/business_lunch/PHOTO-2024-10-08-22-19-15-7-2.jpg',
              '/images/events/business_lunch/PHOTO-2024-10-08-22-19-15-1-300x200.jpg',
              '/images/events/business_lunch/PHOTO-2024-10-08-22-19-15-2-300x200.jpg'
            ]}
            altTexts={[
              'Business Lunch Highlight',
              'Business Lunch 2',
              'Business Lunch 3'
            ]}
          />
        </div>
      </section>

      <div className="border-t border-gray-200 mx-6 sm:mx-8 max-w-6xl"></div>

      {/* Event 3: Gala Dinner (Sep 2024) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          {/* Top Section - Date and Title */}
          <div className="mb-8">
            <h6 className="text-lg font-medium text-[#6e71e4] mb-2">September 19/ 2024 / 18:00 pm</h6>
            <h3 className="text-2xl md:text-3xl font-bold text-[#2107c8] mb-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
              GALA DINNER
            </h3>
          </div>

          {/* Main Content - Large Photo Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Main Content - Left: Large Photo */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg">
                <div className="w-full h-96 mb-4 overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="/images/events/gala_dinner_2024/Sacred-Heart-6187-2.jpg"
                    alt="Gala Dinner 2024 Highlight"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Main Content - Right: Text Content */}
            <div className="flex flex-col justify-center">
              <h4 className="text-xl font-bold text-[#26262c] mb-4">Prestigious Annual Gala Dinner</h4>
              <p className="text-[#76767f] mb-4">
                Sacred Heart Secondary School hosted its prestigious Annual Gala Dinner, celebrating
                academic excellence, community spirit, and achievements across various fields. The evening
                brought together students, staff, parents, and distinguished guests for an unforgettable
                experience filled with awards, performances, and recognition.
              </p>
              <p className="text-[#76767f] mb-4">
                The gala highlighted the remarkable talents of our students and the unwavering support
                of our community. It was a testament to the values and traditions that Sacred Heart
                continues to uphold while fostering an environment of growth and achievement.
              </p>
              <p className="text-[#76767f] mb-4">
                As we look back on this successful event, we are reminded of the strength of our
                community bonds and the bright future that lies ahead for our students.
              </p>
              <p className="text-[#76767f] font-semibold">
                With pride and celebration, Sacred Heart Secondary School
              </p>
            </div>
          </div>

          {/* Gallery Carousel */}
          <h4 className="text-xl font-bold text-[#26262c] mb-6">Photo Gallery</h4>
          <ThreeDCarousel
            images={[
              '/images/events/gala_dinner_2024/Sacred-Heart-6187-2.jpg',
              '/images/events/gala_dinner_2024/Sacred-Heart-6188-2.jpg',
              '/images/events/gala_dinner_2024/Sacred-Heart-6183-1.jpg'
            ]}
            altTexts={[
              'Gala Dinner 2024 Highlight',
              'Gala Dinner 2',
              'Gala Dinner 3'
            ]}
          />
        </div>
      </section>

      <div className="border-t border-gray-200 mx-6 sm:mx-8 max-w-6xl"></div>

      {/* Event 4: Gala Dinner (Sep 2023) */}
      <section className="py-16 bg-[#f6f7fd]">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          {/* Top Section - Date and Title */}
          <div className="mb-8">
            <h6 className="text-lg font-medium text-[#6e71e4] mb-2">September 30/ 2023 / 18:30 pm</h6>
            <h3 className="text-2xl md:text-3xl font-bold text-[#2107c8] mb-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
              GALA DINNER
            </h3>
          </div>

          {/* Main Content - Large Photo Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Main Content - Left: Large Photo */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg">
                <div className="w-full h-96 mb-4 overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="/images/events/gala_dinner_2023/IMG_9557-scaled.jpg"
                    alt="Gala Dinner 2023 Highlight"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Main Content - Right: Text Content */}
            <div className="flex flex-col justify-center">
              <h4 className="text-xl font-bold text-[#26262c] mb-4">Annual Gala Dinner Partnership</h4>
              <p className="text-[#76767f] mb-4">
                Sacred Heart Secondary School hosted its prestigious Annual Gala Dinner in partnership
                with Sumptuous Caterers. The evening was a resounding success, bringing together the
                entire Sacred Heart community to celebrate academic achievements, cultural performances,
                and the strong bonds that unite us.
              </p>
              <p className="text-[#76767f] mb-4">
                The partnership with Sumptuous Caterers provided an exceptional dining experience,
                enhancing the elegance of the event. It was a beautiful showcase of student talents,
                with performances and presentations that highlighted the diverse abilities of our
                learners.
              </p>
              <p className="text-[#76767f] mb-4">
                This event continues to be a cornerstone of our annual calendar, fostering community
                spirit and creating lasting memories for students, staff, and families alike.
              </p>
              <p className="text-[#76767f] font-semibold">
                With gratitude and celebration, Sacred Heart Secondary School
              </p>
            </div>
          </div>

          {/* Gallery Carousel */}
          <h4 className="text-xl font-bold text-[#26262c] mb-6">Photo Gallery</h4>
          <ThreeDCarousel
            images={[
              '/images/events/gala_dinner_2023/IMG_9557-scaled.jpg',
              '/images/events/gala_dinner_2023/IMG_9695-300x200.jpg',
              '/images/events/gala_dinner_2023/IMG_9692-300x200.jpg'
            ]}
            altTexts={[
              'Gala Dinner 2023 Highlight',
              'Gala Dinner 2',
              'Gala Dinner 3'
            ]}
          />
        </div>
      </section>

      <div className="border-t border-gray-200 mx-6 sm:mx-8 max-w-6xl"></div>

      {/* Event 5: Valentine's Day Picnic (Feb 2024) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
          {/* Top Section - Date and Title */}
          <div className="mb-8">
            <h6 className="text-lg font-medium text-[#6e71e4] mb-2">February 14/ 2024 / 10:00 am</h6>
            <h3 className="text-2xl md:text-3xl font-bold text-[#2107c8] mb-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
              Valentine's Day Picnic
            </h3>
          </div>

          {/* Main Content - Large Photo Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Main Content - Left: Large Photo */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg">
                <div className="w-full h-96 mb-4 overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="/images/events/valentines_day_picnic/IMG-20240215-WA0004-1024x576.jpg"
                    alt="Valentine's Day Highlight"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Main Content - Right: Text Content */}
            <div className="flex flex-col justify-center">
              <h4 className="text-xl font-bold text-[#26262c] mb-4">Community Spirit at its Finest</h4>
              <p className="text-[#76767f] mb-4">
                Our Valentine's Day Picnic remains a cherished tradition that fosters community spirit
                and celebrates the bonds of friendship and love within our Sacred Heart family. Students,
                staff, and families gathered for a day of fun, food, and fellowship under the bright
                February sun.
              </p>
              <p className="text-[#76767f] mb-4">
                The event featured games, entertainment, and shared meals that brought together members
                of our school community in a relaxed, joyful atmosphere. This picnic serves as a
                reminder of the strong community we have built at Sacred Heart.
              </p>
              <p className="text-[#76767f] mb-4">
                These moments of togetherness strengthen our school bonds and create lasting memories
                that our students will treasure for years to come. We look forward to many more
                celebrations together.
              </p>
              <p className="text-[#76767f] font-semibold">
                With love and community spirit, Sacred Heart Secondary School
              </p>
            </div>
          </div>

          {/* Gallery Carousel */}
          <h4 className="text-xl font-bold text-[#26262c] mb-6">Photo Gallery</h4>
          <ThreeDCarousel
            images={[
              '/images/events/valentines_day_picnic/IMG-20240215-WA0004-1024x576.jpg',
              '/images/events/valentines_day_picnic/IMG-20240215-WA0005.jpg',
              '/images/events/valentines_day_picnic/IMG-20240528-WA0024-150x150.jpg'
            ]}
            altTexts={[
              'Valentine\'s Day Highlight',
              'Valentine\'s Day 2',
              'Valentine\'s Day 3'
            ]}
          />
        </div>
      </section>
    </div>
  );
};

export default EventsPage;