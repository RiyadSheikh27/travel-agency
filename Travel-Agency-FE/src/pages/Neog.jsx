import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import banner1 from '../../public/1.webp';
import banner2 from '../images/demo2.jpg';
import banner3 from '../images/demo3.jpg';
import banner4 from '../images/demo4.jpg';
import banner5 from '../images/demo5.jpg';

const Neog = () => {
    const [active, setActive] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModelOpen, setIsModelOpen] = useState(false);

    // Handle modal open for image
    const handelModelOpen = (image) => {
        setSelectedImage(image);
        setActive(true);
    };

    // Handle modal close for image
    const handelModelClose = () => {
        setActive(false);
        setSelectedImage(null);
    };

    // Handle modal for contact
    const openModel = () => {
        setIsModelOpen(true);
    };
    const closeModel = () => {
        setIsModelOpen(false);
    };

    const whatsappNumber = "+8801766957233"; // Replace with your WhatsApp number
    const message = "হ্যালো, আমি আপনার সেবায় আগ্রহী!"; // Replace with your custom message
    const phoneNumber = "+8801766957233"; // Replace with your phone number

    // Phone handler function
    const phoneHandel = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    // WhatsApp handler function
    const encodedMessage = encodeURIComponent(message);
    const whatsappHandel = () => {
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    const category = [
        { banner: banner1, title: 'পদঃ ড্রাইভার', company: 'কোম্পানিঃ আরামকো', salary: 'বেতনঃ ১৫০০ রিয়াল + ওটি + খাবার', logo: 'aramco.png', description: 'এটা হলো বিস্তারিত ১' },
        { banner: banner1, title: 'পদঃ ড্রাইভার', company: 'কোম্পানিঃ আরামকো', salary: 'বেতনঃ ১৫০০ রিয়াল + ওটি + খাবার', logo: 'aramco.png', description: 'এটা হলো বিস্তারিত ১' },
        { banner: banner1, title: 'পদঃ ড্রাইভার', company: 'কোম্পানিঃ আরামকো', salary: 'বেতনঃ ১৫০০ রিয়াল + ওটি + খাবার', logo: 'aramco.png', description: 'এটা হলো বিস্তারিত ১' },
    ];

    return (
        <div className='flex justify-center items-center bg-gradient-to-r from-yellow-50 to-orange-200 pt-20 pb-20 '>
            <div>
                {/* Neog section */}
                <div className='pb-10 text-center space-y-4'>
                    {/* Title and description */}
                    <h1 className='lg:text-5xl text-xl text-black font-bold'>নিয়োগ সমূহ</h1>
                    <p className='lg:text-xl text-sm'>আপনার আগ্রহ এবং যোগ্যতা অনুযায়ী বিভিন্ন বিভাগের পদগুলো দেখুন।</p>
                </div>
                <div className='lg:grid lg:grid-cols-3 lg:gap-10 flex flex-col justify-center items-center gap-10'>
                    {category.map((cata, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden w-80 lg:w-96 flex flex-col items-center"
                        >
                            {/* Image */}
                            <img
                                className='w-full h-full object-contain'
                                src={cata.banner}
                                alt={cata.title}
                            />

                            {/* Designation/Title */}
                            {/* <div className="p-4 text-center font-bold text-lg text-black">
                                {cata.title} <br />
                                {cata.company} <br />
                                {cata.salary}
                            </div> */}

                            {/* Designation/Title with Company Logo */}
                            <div className="flex justify-between items-center w-full px-4">
                                {/* Left side text */}
                                <div className="text-left font-bold text-lg text-black">
                                    {cata.title} <br />
                                    <span className="text-sm font-medium">{cata.company}</span> <br />
                                    <span className="text-sm text-gray-600">{cata.salary}</span>
                                </div>

                                {/* Right side logo */}
                                {cata.logo && (
                                    <img
                                        src={cata.logo}
                                        alt={`${cata.company} logo`}
                                        className="w-28 h-28 object-contain ml-4"
                                    />
                                )}
                            </div>


                            {/* Buttons */}
                            <div className="flex justify-evenly items-center w-full p-4 pt-0 gap-4">
                                <button
                                    onClick={() => handelModelOpen(cata)}
                                    className="flex-1 bg-cyan-950 text-white py-2 rounded-md font-semibold"
                                >
                                    বিস্তারিত
                                </button>
                                <button
                                    onClick={openModel}
                                    className="flex-1 bg-cyan-500 text-white py-2 rounded-md font-semibold"
                                >
                                    যোগাযোগ
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Modal for contact */}
                {isModelOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    {/* Modal title */}
                                    <h1 className="text-center font-extrabold lg:text-2xl text-xl text-orange-600 bg-clip-text">যোগাযোগ করুন আমাদের সাথে</h1>
                                    {/* Modal close button */}
                                    <button className="absolute top-3 right-3 text-orange-700 text-4xl font-bold font-serif" onClick={closeModel}>&times;</button>
                                </div>
                            </div>
                            <div className="flex justify-evenly items-center gap-10">
                                {/* Call button */}
                                <button className="lg:px-4 lg:py-3 px-2 py-2 bg-orange-300 flex justify-between rounded-md items-center lg:gap-4 gap-2" onClick={phoneHandel}>
                                    <span className="text-2xl text-blue-500"><FaPhone /></span>
                                    <h1 className="text-black lg:font-extrabold font-bold">কল করুন</h1>
                                </button>
                                {/* WhatsApp button */}
                                <button className="lg:p-2 p-1 bg-cyan-950 flex justify-between rounded-md items-center gap-2" onClick={whatsappHandel}>
                                    <span className="text-3xl text-[rgb(37,211,102)]"><FaSquareWhatsapp /></span>
                                    <h1 className="text-white lg:font-extrabold font-bold">হোয়াটসঅ্যাপ করুন</h1>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal for selected image */}
                {active && selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg w-full relative lg:ml-10 lg:mr-10 ml-2 mr-2 lg:mt-24 lg:mb-24 overflow-y-auto max-h-[95vh]">
                            <div className="flex justify-between items-center mb-1">
                                <div>
                                    {/* Modal title */}
                                    <h1 className="text-center font-extrabold lg:text-2xl text-xl bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent pt-2">
                                        {selectedImage.title}
                                    </h1>
                                    {/* Modal close button */}
                                    <button className="absolute top-3 right-3 text-orange-700 text-4xl font-bold font-serif" onClick={handelModelClose}>&times;</button>
                                </div>
                            </div>
                            {/* Show selected image */}
                            <div className="lg:flex lg:justify-between lg:items-center text-center mb-2 lg:-mt-6 lg:gap-10 lg:p-10">
                                <img className="lg:w-[950px] lg:h-[500px] w-full p-2 border border-teal-500 lg:rounded-md" src={selectedImage.banner} alt={selectedImage.title} />
                                <p className="lg:w-[950px] lg:p-[100px] w-full p-2 border border-teal-500 bg-gradient-to-tr from-teal-300 to-cyan-950 text-white text-xl">লোরেম ইপসাম ডলর সিট আমেট কনসেক্টুর adipisicing এলিট। ইমপেডিট আস্পিরিওরেস ফেসারে ইয়াক ওডিট আর্কিটেক্টো ইনভেনটোরে ইওস অপটিও অ্যাপেরিয়াম পারফেরেনডিস প্রোভিডেন্ট নেকেসিটেটিবাস, নুল্লা আইডি ডেবিতিস ভেল ম্যাক্সিমে প্লেসেট কুইস ল্যাবোরাম ইয়ারাম ইট্যাকু অ্যাক্কুসামুস পসিমুস। কোয়ারেট প্রোভিডেন্ট, ভোলপটাতে ইল্লো, রেইসিডিস নিহিল রেপ্রেহেনডারেম নেকু ভেনিয়াম ভলুপট্যাটেস ডোলোরেম এন্ড টেম্পোরিবাস পার্সপিসিয়াতিস নেসকিয়েন্ট এক্সেপ্টুরি!</p>
                            </div>
                            <div className="text-center">
                                <p>{selectedImage.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Neog;
