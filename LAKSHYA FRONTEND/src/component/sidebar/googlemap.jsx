import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const GoogleMap = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-[450px]">
      {/* Left Side: Google Map */}
      <div className="w-full md:w-1/2 h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14243.043590184121!2d74.58496949686337!3d16.851370778417824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1187a66b09f1d%3A0x475c75a8c598fbcd!2sMedPlus!5e0!3m2!1sen!2sin!4v1755583152544!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lakshya Location Map"
        ></iframe>
      </div>

      {/* Right Side: Contact Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white text-gray-900 p-6">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

        <ul className="space-y-5 w-full max-w-sm">
          {/* WhatsApp */}
          <li>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-xl bg-gray-100 hover:bg-green-100 hover:scale-105 transition duration-300 shadow-md"
            >
              <FaWhatsapp className="text-green-600 text-2xl" />
              <span className="font-medium">+91 98765 43210</span>
            </a>
          </li>

          {/* Gmail */}
          <li>
            <a
              href="mailto:example@gmail.com?subject=Inquiry&body=Hello%2C%20I%20would%20like%20to%20know%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-xl bg-gray-100 hover:bg-red-100 hover:scale-105 transition duration-300 shadow-md"
            >
              <FaEnvelope className="text-red-500 text-2xl" />
              <span className="font-medium">example@gmail.com</span>
            </a>
          </li>

          {/* Phone */}
          <li>
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-3 p-3 rounded-xl bg-gray-100 hover:bg-blue-100 hover:scale-105 transition duration-300 shadow-md"
            >
              <FaPhone className="text-blue-500 text-2xl" />
              <span className="font-medium">+91 98765 43210</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GoogleMap;
