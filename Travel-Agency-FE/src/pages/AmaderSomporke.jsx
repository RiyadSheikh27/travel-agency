// import React from 'react'
// import aboutImage from '../images/AboutUSLogo.png'

// const AmaderSomporke = () => {
//     // mock data for about us section
//     const data = [
//         {
//             title: 'আমরা আপনার স্বপ্নের ভ্রমণের সঙ্গী', description: 'আমরা শুধু একটি ট্র্যাভেল এজেন্সি নই, আমরা আপনার অবিস্মরণীয় অভিজ্ঞতার নির্মাতা। আমাদের অভিজ্ঞ টিম হাজারো মানুষের স্বপ্নের ভ্রমণকে বাস্তবে রূপ দিয়েছে, কারণ আমরা প্রতিটি যাত্রাকে আপনার জীবনের সেরা স্মৃতিতে পরিণত করতে চাই।',
//             mission: 'আমাদের লক্ষ্য', missiontext: 'সর্বোচ্চ মানের সেবা, বন্ধুত্বপূর্ণ পরিবেশ এবং সাশ্রয়ী মূল্যে আপনার পছন্দের ভ্রমণ অভিজ্ঞতা নিশ্চিত করা।', vision: 'আমাদের ভিশন', visiontext: 'পৃথিবীর প্রতিটি কোণে ভ্রমণকে সহজ, নিরাপদ এবং আনন্দময় করে তোলা, যাতে প্রতিটি মানুষ তার স্বপ্নের গন্তব্যে পৌঁছাতে পারে।',
//             logo: aboutImage,
//         },
//     ];
//     return (

//         // set font as sutonnyMJ
//         <div className=''>
//             {/* aboutus section */}
//             <div className='h-auto flex justify-center items-center text-center'>
//                 <div>
//                     {/* mapping the data */}
//                     {data.map((info, index) => ((
//                         <div key={index}>
//                             <div className='lg:p-10 p-6 flex justify-evenly items-center lg:gap-20 gap-2 lg:pt-20 pt-10'>
//                                 <div className='lg:w-[600px] w-[350px] lg:space-y-6 p-2 space-y-4'>
//                                     {/* title */}
//                                     <h1 className='lg:text-5xl text-2xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent'>{info.title}</h1>
//                                     {/* description */}
//                                     <p className='lg:text-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-cyan-950 bg-clip-text text-transparent'>{info.description}</p>
//                                 </div>
//                                 {/* logo of about us  */}
//                                 <div>
//                                     <img src={info.logo} alt="" className='lg:w-[600px] w-96  rounded-l-full ' />
//                                 </div>
//                             </div>
//                             <div className='lg:p-10 p-3 flex justify-center items-center lg:gap-40 pb-20'>
//                                 <div className='lg:w-96 lg:space-y-4 space-y-3'>
//                                     {/* mission title */}
//                                     <h1 className='lg:text-3xl text-xl font-semibold'>{info.mission}</h1>
//                                     {/* mission text */}
//                                     <p className='text-gray-600 lg:text-xl'>{info.missiontext}</p>
//                                 </div>
//                                 <div className='lg:w-96 lg:space-y-4 space-y-3'>
//                                     {/* vision title */}
//                                     <h1 className='lg:text-3xl text-xl font-semibold'>{info.vision}</h1>
//                                     {/* vision text */}
//                                     <p className='text-gray-600 lg:text-xl'>{info.visiontext}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     )))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AmaderSomporke


import React from 'react'

const AmaderSomporke = () => {
    // mock data for about us section
    const data = [
        {
            title: 'স্বপ্নের যাত্রায় আমরা আছি আপনার পাশে',
            description: 'আমরা শুধু ট্র্যাভেল এজেন্সি নই, আমরা আপনার ভ্রমণের নির্ভরযোগ্য সঙ্গী। আমাদের অভিজ্ঞ টিম ইতিমধ্যেই অসংখ্য মানুষের বিদেশ যাত্রা সফলভাবে সম্পন্ন করেছে। ভিসা, টিকিট থেকে শুরু করে সব ধরণের সহায়তা আমরা নিশ্চিত করি, যাতে আপনার ভ্রমণ হয় সহজ, নিরাপদ এবং ঝামেলামুক্ত।',
            mission: 'আমাদের লক্ষ্য',
            missiontext: 'সর্বোচ্চ মানের সেবা, বন্ধুত্বপূর্ণ পরিবেশ এবং সাশ্রয়ী মূল্যে আপনার পছন্দের ভ্রমণ অভিজ্ঞতা নিশ্চিত করা।',
            vision: 'আমাদের ভিশন',
            visiontext: 'পৃথিবীর প্রতিটি কোণে ভ্রমণকে সহজ, নিরাপদ এবং আনন্দময় করে তোলা, যাতে প্রতিটি মানুষ তার স্বপ্নের গন্তব্যে পৌঁছাতে পারে।',
            logo: 'https://images.unsplash.com/photo-1621632361333-4649f0b59adc?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

    return (
        <section id="amadersomporke" className='bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl'>
                {data.map((info, index) => (
                    <div key={index} className='space-y-16 sm:space-y-20 lg:space-y-24'>

                        {/* Hero Section with Title, Description and Image */}
                        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center'>

                            {/* Left Content */}
                            <div className='space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1'>
                                <div className='space-y-4 sm:space-y-6'>
                                    <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold leading-tight'>
                                        <span className='bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent'>
                                            {info.title}
                                        </span>
                                    </h1>

                                    <div className='w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full'></div>
                                </div>

                                <p className='text-base text-justify sm:text-xs lg:text-sm xl:text-md 2xl:text-xl font-medium text-gray-700 leading-relaxed'>
                                    {info.description}
                                </p>

                                <button className='bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6 rounded-xl text-sm sm:text-base lg:text-lg xl:text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
                                    আরও জানুন
                                </button>
                            </div>

                            {/* Right Image */}
                            <div className='order-1 lg:order-2'>
                                <div className='relative'>
                                    <div className='absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl transform rotate-6 opacity-20'></div>
                                    <img
                                        src={info.logo}
                                        alt="About Us"
                                        className='relative w-full h-64 sm:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] object-cover rounded-3xl shadow-2xl hover:transform hover:scale-105 transition-all duration-500'
                                    />

                                    {/* Floating Stats Cards */}
                                    <div className='absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-4 sm:p-6 shadow-xl'>
                                        <div className='text-center'>
                                            <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500'>নিশ্চিত ভ্রমণ</div>
                                        </div>
                                    </div>

                                    <div className='absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-2xl p-4 sm:p-6 shadow-xl'>
                                        <div className='text-center'>
                                            <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500'>৫★</div>
                                            <div className='text-xs sm:text-sm lg:text-base text-gray-600'>রেটিং</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mission and Vision Cards */}
                        <div className='grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16'>

                            {/* Mission Card */}
                            <div className='bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group'>
                                <div className='space-y-4 sm:space-y-6'>
                                    <div className='flex items-center space-x-4'>
                                        <div className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                            <svg className='w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                                            </svg>
                                        </div>
                                        <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-3xl font-bold text-gray-800'>
                                            {info.mission}
                                        </h2>
                                    </div>
                                    <p className='text-base sm:text-lg lg:text-xl xl:text-xl text-gray-600 leading-relaxed'>
                                        {info.missiontext}
                                    </p>
                                </div>
                            </div>

                            {/* Vision Card */}
                            <div className='bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group'>
                                <div className='space-y-4 sm:space-y-6'>
                                    <div className='flex items-center space-x-4'>
                                        <div className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                            <svg className='w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'></path>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'></path>
                                            </svg>
                                        </div>
                                        <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-3xl font-bold text-gray-800'>
                                            {info.vision}
                                        </h2>
                                    </div>
                                    <p className='text-base sm:text-lg lg:text-xl xl:text-xl text-gray-600 leading-relaxed'>
                                        {info.visiontext}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Features Section */}
                        <div className='bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-8 sm:p-12 lg:p-16 xl:p-20 text-center text-white'>
                            <h3 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10'>
                                কেন আমাদের বেছে নেবেন?
                            </h3>
                            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10'>
                                {[
                                    { icon: '🏆', title: 'অভিজ্ঞতা', desc: '১০+ বছরের অভিজ্ঞতা' },
                                    { icon: '🔒', title: 'নিরাপত্তা', desc: '১০০% নিরাপদ ভ্রমণ' },
                                    { icon: '💰', title: 'সাশ্রয়ী', desc: 'সেরা দামে সেরা সেবা' },
                                    { icon: '🎯', title: 'বিশ্বস্ত', desc: 'হাজারো সন্তুষ্ট গ্রাহক' }
                                ].map((feature, idx) => (
                                    <div key={idx} className='space-y-3 sm:space-y-4'>
                                        <div className='text-3xl sm:text-4xl lg:text-5xl'>{feature.icon}</div>
                                        <h4 className='text-lg sm:text-xl lg:text-2xl font-bold'>{feature.title}</h4>
                                        <p className='text-sm sm:text-base lg:text-lg opacity-90'>{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default AmaderSomporke