function Services() {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <h2 className="text-5xl font-bold text-sky-950 mb-6">
            Explore Our Services
          </h2>
          <p className="text-gray-600 text-lg">
            
          </p>
        </div>

        {/* Right Side */}
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

                {/* Card 1 */}
                <div className="bg-white rounded-2xl p-8 mt-5  shadow-[0_4px_20px_rgba(0,0,0,0.05)] 
                                hover:shadow-lg transition flex flex-col items-center justify-center text-center h-62">
                    <h3 className="text-xl font-semibold text-sky-900 mb-4">
                    Entrance Mock Test
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                    Prepare for NEET, KEAM, and JEE Main with full-length mock tests.
                    Experience real exam conditions with live timer, auto-submission,
                    and detailed performance analysis.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl p-8 mb-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] 
                                hover:shadow-lg transition flex flex-col items-center justify-center text-center h-62">
                    <h3 className="text-xl font-semibold text-sky-900 mb-4">
                    Question Paper Generator
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                    Create customized question papers based on board, class, and subject.
                    Generate practice papers aligned with school curriculum.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl p-8 mt-5 
                                shadow-[0_4px_20px_rgba(0,0,0,0.05)] 
                                hover:shadow-lg transition 
                                flex flex-col items-center justify-center text-center h-62 ">
                    <h3 className="text-xl font-semibold text-sky-900 mb-4">
                    USMLE Mock Test
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                    Comprehensive USMLE preparation with structured guidance,
                    mock exams, and performance analytics.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-2xl p-8 mb-5 
                                shadow-[0_4px_20px_rgba(0,0,0,0.05)] 
                                hover:shadow-lg transition 
                                flex flex-col items-center justify-center text-center h-62">

                <h3 className="text-xl font-semibold text-sky-900 mb-4">
                    Mark Predictor
                </h3>

                <p className="text-gray-500 leading-relaxed text-sm">
                    Forecast your academic performance based on past results
                    using smart predictive insights.
                </p>

                </div>

        </div>
            
      </div>
    </section>
  );
}

export default Services;