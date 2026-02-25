import React, { useState } from "react";

function Home() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? 1 : prev - 1));
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gray-50 flex items-center justify-center">

      {/* Slides Wrapper */}
      <div className="w-full h-full flex transition-transform duration-700"
           style={{ transform: `translateX(-${current * 100}%)` }}>

        {/* Slide 1 - Main */}
        <div className="min-w-full flex items-center justify-center">
          <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
            <h1 className="text-blue-900 text-5xl">Rise.</h1>
            <h1 className="text-orange-500 text-5xl">Learn.</h1>
            <h1 className="text-emerald-600 text-5xl">Achieve.</h1>
          </div>
        </div>

        {/* Slide 2 - Container with Buttons */}
        <div className="min-w-full flex items-center justify-center">
          <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-semibold mb-6 text-sky-900">
              Prepare for Entrance Exams
            </h2>
            <p>
              Get access to Comprehensive mock tests and practice questions designed by experts
            </p>

            <div className="space-x-4">
              <button className="px-6 py-3 bg-sky-900 text-white rounded-lg hover:bg-sky-700 transition">
                Explore
              </button>

              <button className="px-6 py-3 border border-sky-900 text-sky-900 rounded-lg hover:bg-sky-900 hover:text-white transition">
                Contact
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 text-3xl"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 text-3xl"
      >
        ›
      </button>

    </section>
  );
}

export default Home;