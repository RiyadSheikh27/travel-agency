import { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import ApiBaseUrl from "../api/ApiBaseUrl";

const Neog = () => {
  const [active, setActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [category, setCategory] = useState([]);

  // 🚀 Fetch Neog API data
  useEffect(() => {
    fetch(`${ApiBaseUrl.baseUrl}card/`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setCategory(data); // ✅ save API response
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-yellow-50 to-orange-200 pt-20 pb-20 ">
      <div>
        {/* Neog section */}
        <div className="pb-10 text-center space-y-4">
          {/* Title and description */}
          <h1 className="lg:text-5xl text-xl text-black font-bold">
            নিয়োগ সমূহ
          </h1>
          <p className="lg:text-xl text-sm">
            আপনার আগ্রহ এবং যোগ্যতা অনুযায়ী বিভিন্ন বিভাগের পদগুলো দেখুন।
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-10 flex flex-col justify-center items-center gap-10">
          {category.map((cata) => (
            <div
              key={cata.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden w-80 lg:w-96 flex flex-col items-center"
            >
              {/* Image */}
              <img
                className="w-full h-full object-contain"
                src={cata.banner}
                alt={cata.designation}
              />

              {/* Title + Company */}
              <div className="flex justify-between items-center w-full px-4">
                <div className="text-left font-bold text-lg text-black">
                  পদবীঃ {cata.designation} <br />
                  <span className="text-sm font-medium">
                    কোম্পানিঃ {cata.company}
                  </span>{" "}
                  <br />
                  বেতনঃ{" "}
                  <span className="text-sm text-gray-600">{cata.salary}</span>
                </div>

                {cata.company_logo && (
                  <img
                    src={cata.company_logo}
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
            <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-lg relative">
              {/* Close button */}
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-3xl"
                onClick={closeModel}
              >
                &times;
              </button>

              {/* Title */}
              <h1 className="text-center font-bold text-xl text-orange-600 mb-6">
                যোগাযোগ করুন আমাদের সাথে
              </h1>

              {/* Buttons in flex row */}
              <div className="flex justify-center gap-4">
                {/* Call button */}
                <button
                  className="flex items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition"
                  onClick={phoneHandel}
                >
                  <FaPhone className="text-lg" />
                  কল করুন
                </button>

                {/* WhatsApp button */}
                <button
                  className="flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition"
                  onClick={whatsappHandel}
                >
                  <FaSquareWhatsapp className="text-xl" />
                  হোয়াটসঅ্যাপ
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal for selected image */}
        {active && selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg relative max-w-5xl w-full mx-4 shadow-xl overflow-y-auto max-h-[90vh]">
              {/* Close button */}
              <button
                className="absolute top-3 right-3 text-orange-700 text-3xl font-bold font-serif"
                onClick={handelModelClose}
              >
                &times;
              </button>

              {/* Content */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Left side: Banner */}
                <div className="flex justify-center items-center">
                  <img
                    className="w-full max-w-[450px] h-auto border border-teal-500 rounded-md object-contain"
                    src={selectedImage.banner}
                    alt={selectedImage.designation}
                  />
                </div>

                {/* Right side: Details */}
                <div className="space-y-3 text-left text-sm lg:text-base">
                  <h1 className="text-xl font-bold text-gray-800">
                    পদবীঃ {selectedImage.designation}
                  </h1>
                  <p className="text-base font-semibold text-gray-700">
                    কোম্পানিঃ {selectedImage.company}
                  </p>

                  {/* Company Logo */}
                  {selectedImage.company_logo && (
                    <img
                      className="w-20 h-20 border rounded-md"
                      src={selectedImage.company_logo}
                      alt={selectedImage.company}
                    />
                  )}

                  <p>
                    <span className="font-bold">বেতনঃ</span>{" "}
                    {selectedImage.salary}
                  </p>
                  <hr />

                  {/* Render description as HTML */}
                  <div className="prose prose-sm lg:prose max-w-none text-gray-800 leading-relaxed">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: selectedImage.desciption, // fixed typo from desciption
                      }}
                    />
                  </div>
                  <hr />

                  <p>
                    <span className="font-bold">ঠিকানাঃ</span>{" "}
                    {selectedImage.address}
                  </p>
                  <hr />
                  <p>
                    <span className="font-bold">যোগাযোগ ১ঃ</span>{" "}
                    {selectedImage.contact1}
                  </p>
                  <hr />
                  <p>
                    <span className="font-bold">যোগাযোগ ২ঃ</span>{" "}
                    {selectedImage.contact2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Neog;
