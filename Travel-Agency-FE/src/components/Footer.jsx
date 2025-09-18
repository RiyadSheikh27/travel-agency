import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerData = {
    company: {
      name: 'ভরসা',
      description: 'আমরা আপনার স্বপ্নের ভ্রমণের নির্ভরযোগ্য সঙ্গী। বিশ্বস্ত সেবা ও সাশ্রয়ী মূল্যে আপনার ভ্রমণকে করে তুলুন অবিস্মরণীয়।',
      logo: 'ভরসা'
    },
    quickLinks: [
      { name: 'হোম', href: '#hero' },
      { name: 'আমাদের সম্পর্কে', href: '#amadersomporke' },
      { name: 'প্যাকেজ সমূহ', href: '#packages' },
      { name: 'যোগাযোগ', href: '#contact' }
    ],
    services: [
      { name: 'হজ্জ ও উমরাহ', href: '#' },
      { name: 'বিদেশ ভ্রমণ', href: '#' },
      { name: 'ভিসা সেবা', href: '#' },
      { name: 'এয়ার টিকেট', href: '#' },
      { name: 'হোটেল বুকিং', href: '#' }
    ],
    contact: {
      phone: '+৮৮০১৭১২৩৪৫৬৭৮',
      email: 'info@travelagency.com',
      address: 'ঢাকা, বাংলাদেশ',
      workingHours: 'সকাল ৯টা - রাত ৯টা'
    },
    social: [
      { name: 'Facebook', icon: '📘', href: '#' },
      { name: 'WhatsApp', icon: '💬', href: '#' },
      { name: 'YouTube', icon: '📺', href: '#' },
      { name: 'Instagram', icon: '📷', href: '#' }
    ]
  };

  const handleCall = () => {
    window.location.href = `tel:${footerData.contact.phone}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('আস্সালামু আলাইকুম! আমি আপনাদের সেবা সম্পর্কে জানতে চাই।');
    window.open(`https://wa.me/${footerData.contact.phone.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <footer className='bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white'>
      {/* Main Footer Content */}
      <div className='container mx-auto px-4 lg:px-8 py-8 lg:py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>

          {/* Company Info */}
          <div className='lg:col-span-1'>
            <div className='mb-4 lg:mb-6'>
              <h3 className='text-lg lg:text-xl font-bold text-orange-400 mb-2 lg:mb-3'>
                {footerData.company.name}
              </h3>
            </div>
            <p className='text-sm lg:text-base text-gray-300 leading-relaxed mb-4 lg:mb-6'>
              {footerData.company.description}
            </p>

            {/* Quick Contact Buttons */}
            <div className='flex flex-col sm:flex-row lg:flex-col gap-2 lg:gap-3'>
              <button
                onClick={handleCall}
                className='bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center justify-center space-x-2'
              >
                <span>📞</span>
                <span>কল করুন</span>
              </button>
              <button
                onClick={handleWhatsApp}
                className='bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center justify-center space-x-2'
              >
                <span>💬</span>
                <span>হোয়াটসঅ্যাপ</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-base lg:text-lg font-bold text-orange-400 mb-3 lg:mb-4'>
              দ্রুত লিংক
            </h4>
            <ul className='space-y-2 lg:space-y-3'>
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className='text-sm lg:text-base text-gray-300 hover:text-orange-400 transition-colors duration-300 block'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-base lg:text-lg font-bold text-orange-400 mb-3 lg:mb-4'>
              আমাদের সেবা
            </h4>
            <ul className='space-y-2 lg:space-y-3'>
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className='text-sm lg:text-base text-gray-300 hover:text-orange-400 transition-colors duration-300 block'
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-base lg:text-lg font-bold text-orange-400 mb-3 lg:mb-4'>
              যোগাযোগ
            </h4>
            <div className='space-y-3 lg:space-y-4'>
              <div className='flex items-start space-x-3'>
                <span className='text-orange-400 text-base flex-shrink-0 mt-0.5'>📞</span>
                <div>
                  <p className='text-xs lg:text-sm text-gray-400'>ফোন</p>
                  <p className='text-sm lg:text-base text-gray-300'>{footerData.contact.phone}</p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <span className='text-orange-400 text-base flex-shrink-0 mt-0.5'>📧</span>
                <div>
                  <p className='text-xs lg:text-sm text-gray-400'>ইমেইল</p>
                  <p className='text-sm lg:text-base text-gray-300'>{footerData.contact.email}</p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <span className='text-orange-400 text-base flex-shrink-0 mt-0.5'>📍</span>
                <div>
                  <p className='text-xs lg:text-sm text-gray-400'>ঠিকানা</p>
                  <p className='text-sm lg:text-base text-gray-300'>{footerData.contact.address}</p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <span className='text-orange-400 text-base flex-shrink-0 mt-0.5'>🕒</span>
                <div>
                  <p className='text-xs lg:text-sm text-gray-400'>কর্মসময়</p>
                  <p className='text-sm lg:text-base text-gray-300'>{footerData.contact.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className='bg-gradient-to-r from-yellow-400 to-orange-600 py-3 lg:py-4'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0'>
            <p className='text-sm lg:text-base text-white font-semibold text-center sm:text-left'>
              সর্বস্বত্ব সংরক্ষিত &copy; {footerData.company.name} {currentYear}
            </p>
            <div className='flex items-center space-x-4 text-xs lg:text-sm text-white'>
              <a href='#' className='hover:underline'>প্রাইভেসি পলিসি</a>
              <span>|</span>
              <a href='#' className='hover:underline'>শর্তাবলী</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer