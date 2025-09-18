import React from 'react'

const Heros = () => {
  // mock data for hero section
  const details = [
    {
      text: "১ লক্ষ+ সফল বিদেশ যাত্রা", 
      logos: [
        "https://web.moxcreative.com/markeezo/wp-content/uploads/sites/18/2023/03/logo-1.png", 
        "https://web.moxcreative.com/markeezo/wp-content/uploads/sites/18/2023/03/logo-2.png",
        "https://web.moxcreative.com/markeezo/wp-content/uploads/sites/18/2023/03/logo-3.png", 
        "https://web.moxcreative.com/markeezo/wp-content/uploads/sites/18/2023/03/logo-4.png",
        "https://web.moxcreative.com/markeezo/wp-content/uploads/sites/18/2023/03/logo-5.png", 
        "https://web.moxcreative.com/markeezo/wp-content/uploads/sites/18/2023/03/logo-11.png"
      ]
    },
  ];

  return (
    <div className='w-full bg-gradient-to-r from-yellow-50 to-orange-200'>
      {/* Hero section with background image */}
      <div 
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0,0,0,0.6)'
        }}
      >
        <div className='container mx-auto max-w-7xl'>
          <div className='text-white space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left lg:max-w-3xl xl:max-w-4xl py-16 sm:py-20 lg:py-24'>
            {/* Title */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight'>
              <div className='mb-2 sm:mb-4'>ভ্রমণ আর নয় স্বপ্ন</div>
              <div>এবার বাস্তবতা</div>
            </h1>
            
            {/* Description */}
            <div className='text-yellow-100 font-semibold text-sm sm:text-base lg:text-lg xl:text-xl space-y-2 sm:space-y-3 max-w-2xl mx-auto lg:mx-0'>
              <p>আমরা শুধু ট্র্যাভেল এজেন্সি নই, আমরা আপনার ভ্রমণের সঙ্গী।</p>
              <p>আমাদের লক্ষ্য হলো আপনাকে একটি নিরবচ্ছিন্ন এবং স্মরণীয় অভিজ্ঞতা দেওয়া।</p>
              <p>আপনি কোথায় যেতে চান, তা বলুন আর বাকিটা আমাদের উপর ছেড়ে দিন।</p>
            </div>
            
            {/* Button */}
            <button className='bg-gradient-to-br from-yellow-400 to-orange-600 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-lg text-sm sm:text-base lg:text-lg xl:text-xl hover:from-yellow-500 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
              বিস্তারিত দেখুন
            </button>
          </div>
        </div>
      </div>

      {/* Statistics and Logos Section */}
      <div className='relative -mt-16 sm:-mt-20 lg:-mt-24 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24'>
        <div className='container mx-auto max-w-6xl'>
          <div className='bg-white rounded-xl lg:rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12'>
            {details.map((detail, index) => (
              <div key={index} className='text-center'>
                {/* Statistics Title */}
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-800 mb-6 sm:mb-8 lg:mb-12'>
                  {detail.text}
                </h2>
                
                {/* Company Logos Grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center'>
                  {detail.logos.map((logo, idx) => (
                    <div key={idx} className='w-full h-16 sm:h-20 lg:h-24 flex items-center justify-center p-2 hover:scale-105 transition-transform duration-300'>
                      <img 
                        className='max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300' 
                        src={logo} 
                        alt={`Partner company ${idx + 1}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heros