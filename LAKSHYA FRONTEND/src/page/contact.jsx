import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import GoogleMap from "../component/sidebar/googlemap";

// टीम contacts डेटा
const teamContacts = [
  {
    name: "Sachin Sangamnerkar",
    city: "Pune",
    phone: "9881347989",
    img: "/assets/images/photos/sachin.png",
  },
  {
    name: "Ajit Madake",
    city: "Kolhapur",
    phone: "9960903108",
    img: "/assets/images/photos/ajit.png",
  },
  {
    name: "Laukik Korgaonkar",
    city: "Sambhajinagar",
    phone: "8329459274",
    img: "/assets/images/photos/laukik.png",
  },
  {
    name: "Govind Dusad",
    city: "Ahilyanagar",
    phone: "9823392485",
    img: "/assets/images/photos/govind.png",
  },
  {
    name: "Mandar Kulkarni",
    city: "Satara",
    phone: "9850045673",
    img: "/assets/images/photos/mandar.png",
  },
  {
    name: "Tanmay Baste",
    city: "Nashik",
    phone: "7066432110",
    img: "/assets/images/photos/tanmay.png",
  },
  {
    name: "Kishor Shendge",
    city: "Sangli",
    phone: "8668756959",
    img: "/assets/images/photos/kishor.png",
  }
];

const ContactPage = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Get In Touch With Us"} curPage={"Contact Us"} />

      {/* Chief Mentors Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 py-16 text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Rajendra Bagwe Sir */}
          <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <img
              src="/assets/images/photos/rajendra.png"
              alt="Chief Mentor"
              className="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover"
            />
           <h2 className="mt-4 text-2xl font-bold text-white">Rajendra Bagwe Sir</h2>

            <p className="text-lg font-semibold text-yellow-300">
              Chief Mentor
            </p>
            <p className="mt-2 text-sm opacity-80" style={{ color: "#fdfaf9ff" }}> Lakshya 1000 IP</p>
          </div>

          {/* Kishor Shendge */}
          <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <img
              src="/assets/images/photos/kishor.png"
              alt="Kishor Shendge"
              className="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover"
            />
           <h2 className="mt-4 text-2xl font-bold text-white">Kishor Shendge</h2>
           <p className="text-lg font-semibold text-yellow-300">
              Mentor & Innovator
            </p>
            <p className="mt-2 text-sm opacity-80" style={{ color: "#fdfaf9ff" }}>
              Guiding students to success
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards ABOVE Map */}
      <div className="py-16" style={{ backgroundColor: "#c2d6f4ff" }}>
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
            📞 Our Team Contacts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {teamContacts.map((person, i) => (
              <div
                key={i}
                className="flex items-center bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md mr-6 object-cover"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    {person.name}
                  </h4>
                  <p className="text-gray-600 text-lg">🏙 {person.city}</p>
                  <p className="text-blue-600 font-semibold text-lg">
                    📞 {person.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Google Map BELOW */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <GoogleMap />
            </div>
          </div>
        </div>

      {/* Contact Form */}
      {/* <div className="py-20 bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 animate-pulse">
              Fill The Form Below
            </h2>
            <p className="text-gray-600 mt-2">
              So We Can Get To Know You And Your Needs Better.
            </p>
          </div>
          <form className="space-y-5 bg-white/70 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-gray-200 hover:scale-[1.01] transition">
            <input
              type="text"
              placeholder="Your Name *"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Mobile Number *"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your Subject *"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
            <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition">
              🚀 Send Message
            </button>
          </form>
        </div>
      </div> */}

      <Footer />
    </Fragment>
  );
};

export default ContactPage;
