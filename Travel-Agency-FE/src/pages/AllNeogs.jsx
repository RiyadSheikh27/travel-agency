import { useEffect, useState } from "react";
import ApiBaseUrl from "../api/ApiBaseUrl";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AllNeogsNavbar from "../components/AllNeogsNavbar";

const AllNeogs = () => {
  const [category, setCategory] = useState([]);

  // 🚀 Fetch all jobs
  useEffect(() => {
    fetch(`${ApiBaseUrl.baseUrl}card/`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched All Jobs:", data);
        setCategory(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <AllNeogsNavbar />
      <div className="pt-36 pb-20 bg-gradient-to-r from-yellow-50 to-orange-200 flex justify-center">
        <div className="max-w-7xl w-full px-4">
          {/* Title */}
          <div className="pb-10 text-center space-y-4">
            <h1 className="lg:text-5xl text-2xl text-black font-bold">
              সকল নিয়োগ
            </h1>
            <p className="lg:text-xl text-sm text-gray-700">
              এখানে সবগুলো নিয়োগ বিজ্ঞপ্তি দেখতে পাবেন।
            </p>
          </div>

          {/* All Cards */}
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
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllNeogs;
