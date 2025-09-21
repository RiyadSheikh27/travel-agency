import React from 'react'

const Contact = () => {
    // Contact information data
    const contactInfo = {
        title: 'আমাদের সাথে যোগাযোগ করুন',
        subtitle: 'আপনার স্বপ্নের ভ্রমণ পরিকল্পনা করতে আজই যোগাযোগ করুন',
        phone: '+8801612168868',
        whatsapp: '+8801612168868',
        email: 'riyad.cse27@gmail.com',
        address: 'ঢাকা, বাংলাদেশ',
        workingHours: 'সকাল ৯টা - রাত ৯টা (সাত দিন)',
        description: 'আপনার যেকোনো প্রশ্ন বা ভ্রমণ পরিকল্পনার জন্য আমাদের অভিজ্ঞ টিমের সাথে যোগাযোগ করুন।'
    };

    const handleCall = () => {
        window.location.href = `tel:${contactInfo.phone}`;
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent('আস্সালামু আলাইকুম! আমি আপনাদের সার্ভিস সম্পর্কে জানতে চাই।');
        window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
    };

    const features = [
        {
            icon: '📞',
            title: 'ফোন সাপোর্ট',
            description: 'তাৎক্ষণিক সহায়তার জন্য কল করুন'
        },
        {
            icon: '💬',
            title: 'হোয়াটসঅ্যাপ চ্যাট',
            description: 'দ্রুত উত্তরের জন্য মেসেজ করুন'
        },
        {
            icon: '✈️',
            title: 'ভ্রমণ পরামর্শ',
            description: 'বিনামূল্যে ভ্রমণ পরিকল্পনা'
        },
        {
            icon: '🎯',
            title: 'কাস্টমাইজড প্যাকেজ',
            description: 'আপনার পছন্দ অনুযায়ী ট্যুর'
        }
    ];

    return (
        <section id="contact" className='bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-12 lg:py-20'>
            <div className='container mx-auto px-4 lg:px-8 max-w-6xl'>
                
                {/* Header Section */}
                <div className='text-center mb-12 lg:mb-16'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4'>
                        <span className='bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent'>
                            {contactInfo.title}
                        </span>
                    </h1>
                    <div className='w-16 lg:w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 lg:mb-6'></div>
                    <p className='text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto'>
                        {contactInfo.subtitle}
                    </p>
                </div>

                <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16'>
                    
                    {/* Left Side - Contact Info */}
                    <div className='bg-white rounded-2xl p-6 lg:p-8 shadow-lg'>
                        <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-6'>
                            যোগাযোগের তথ্য
                        </h2>
                        
                        <div className='space-y-4 lg:space-y-5'>
                            {/* Phone */}
                            <div className='flex items-center space-x-4'>
                                <div className='w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center'>
                                    <span className='text-lg'>📞</span>
                                </div>
                                <div>
                                    <h3 className='text-sm lg:text-base font-semibold text-gray-800'>ফোন</h3>
                                    <p className='text-sm lg:text-base text-orange-600 font-medium'>{contactInfo.phone}</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className='flex items-center space-x-4'>
                                <div className='w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center'>
                                    <span className='text-lg'>📧</span>
                                </div>
                                <div>
                                    <h3 className='text-sm lg:text-base font-semibold text-gray-800'>ইমেইল</h3>
                                    <p className='text-sm lg:text-base text-orange-600 font-medium'>{contactInfo.email}</p>
                                </div>
                            </div>

                            {/* Address */}
                            <div className='flex items-center space-x-4'>
                                <div className='w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center'>
                                    <span className='text-lg'>📍</span>
                                </div>
                                <div>
                                    <h3 className='text-sm lg:text-base font-semibold text-gray-800'>ঠিকানা</h3>
                                    <p className='text-sm lg:text-base text-orange-600 font-medium'>{contactInfo.address}</p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className='flex items-center space-x-4'>
                                <div className='w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center'>
                                    <span className='text-lg'>🕒</span>
                                </div>
                                <div>
                                    <h3 className='text-sm lg:text-base font-semibold text-gray-800'>কর্মসময়</h3>
                                    <p className='text-sm lg:text-base text-orange-600 font-medium'>{contactInfo.workingHours}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - CTA Buttons & Description */}
                    <div className='bg-white rounded-2xl p-6 lg:p-8 shadow-lg'>
                        <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6 text-center'>
                            এখনই যোগাযোগ করুন
                        </h2>
                        
                        <p className='text-sm md:text-base text-gray-600 mb-6 lg:mb-8 text-center leading-relaxed'>
                            {contactInfo.description}
                        </p>

                        {/* CTA Buttons */}
                        <div className='space-y-4'>
                            {/* Call Button */}
                            <button
                                onClick={handleCall}
                                className='w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 lg:py-4 rounded-xl text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2'
                            >
                                <span className='text-lg'>📞</span>
                                <span>এখনই কল করুন</span>
                            </button>

                            {/* WhatsApp Button */}
                            <button
                                onClick={handleWhatsApp}
                                className='w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-3 lg:py-4 rounded-xl text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2'
                            >
                                <span className='text-lg'>💬</span>
                                <span>হোয়াটসঅ্যাপে মেসেজ করুন</span>
                            </button>
                        </div>

                        {/* Quick Contact Badge */}
                        <div className='mt-6 p-3 lg:p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl text-center'>
                            <p className='text-xs lg:text-sm text-orange-800 font-semibold'>
                                ⚡ দ্রুত সাড়া - ৫ মিনিটের মধ্যে উত্তর পাবেন!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10 lg:mb-16'>
                    {features.map((feature, index) => (
                        <div key={index} className='bg-white rounded-xl p-4 lg:p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center'>
                            <div className='text-2xl lg:text-3xl mb-2 lg:mb-3'>{feature.icon}</div>
                            <h3 className='text-sm lg:text-base font-bold text-gray-800 mb-2'>
                                {feature.title}
                            </h3>
                            <p className='text-xs lg:text-sm text-gray-600'>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className='bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl p-6 lg:p-10 text-center text-white'>
                    <h3 className='text-lg md:text-xl lg:text-2xl font-bold mb-3 lg:mb-4'>
                        আপনার স্বপ্নের ভ্রমণ শুরু করুন আজই!
                    </h3>
                    <p className='text-sm md:text-base mb-4 lg:mb-6 opacity-90 max-w-2xl mx-auto'>
                        বিশেষ ছাড় এবং অফার পেতে এখনই যোগাযোগ করুন।
                    </p>
                    <div className='flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center max-w-md mx-auto'>
                        <button
                            onClick={handleCall}
                            className='w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100 font-bold px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2'
                        >
                            <span>📞</span>
                            <span>কল করুন</span>
                        </button>
                        <button
                            onClick={handleWhatsApp}
                            className='w-full sm:w-auto bg-white text-green-600 hover:bg-gray-100 font-bold px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2'
                        >
                            <span>💬</span>
                            <span>হোয়াটসঅ্যাপ</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact