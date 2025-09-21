import React from "react";

const RLSection = () => {
  return (
    <section
      id="rl-license"
      className="py-20 bg-gradient-to-r from-green-50 to-green-100"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          📜 সরকারি অনুমোদিত RL লাইসেন্সধারী এজেন্সি
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
          ভরসা ট্রাভেলস বাংলাদেশ সরকারের অনুমোদিত{" "}
          <span className="font-bold text-green-700">RL (Recruiting License)</span>{" "}
          এজেন্সি। আমরা বৈধভাবে বিদেশে কর্মী প্রেরণ করি এবং নির্ভরযোগ্য সেবা প্রদান করে থাকি।
        </p>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              ✅ সরকারি অনুমোদন
            </h3>
            <p className="text-gray-600">
              আমরা বাংলাদেশ সরকারের অনুমোদিত RL লাইসেন্সধারী এজেন্সি।
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              🌍 বৈধ কর্মসংস্থান
            </h3>
            <p className="text-gray-600">
              আমাদের মাধ্যমে বিদেশে কর্মসংস্থানের সব প্রক্রিয়া বৈধভাবে সম্পন্ন হয়।
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              🤝 নির্ভরযোগ্য সেবা
            </h3>
            <p className="text-gray-600">
              স্বচ্ছতা ও আস্থার সঙ্গে আমরা প্রার্থীদের পাশে থাকি।
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="https://wa.me/8801626382361"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            এখনই যোগাযোগ করুন
          </a>
        </div>
      </div>
    </section>
  );
};

export default RLSection;
