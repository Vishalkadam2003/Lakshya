import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";

const title = "Register Now";
const socialTitle = "Register With Social Media";
const btnText = "Get Started Now";

let socialList = [
  { link: 'https://facebook.com', iconName: 'icofont-facebook', className: 'text-blue-600 hover:text-blue-800' },
  { link: 'https://twitter.com', iconName: 'icofont-twitter', className: 'text-blue-400 hover:text-blue-600' },
  { link: 'https://linkedin.com', iconName: 'icofont-linkedin', className: 'text-blue-700 hover:text-blue-900' },
  { link: 'https://instagram.com', iconName: 'icofont-instagram', className: 'text-pink-500 hover:text-pink-700' },
  { link: 'https://pinterest.com', iconName: 'icofont-pinterest', className: 'text-red-600 hover:text-red-800' },
];

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || `Signup failed with status ${res.status}`);
      }

      navigate("/admin-create-user");
    } catch (error) {
      console.error("Signup error:", error);
      alert(error.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Header />
      <PageHeader title={title} curPage={'Sign Up'} />

      <div className="bg-gradient-to-r from-sky-200 to-indigo-200 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
          <h2 className="text-center text-3xl font-extrabold text-gray-800">{title}</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text" name="name" placeholder="User Name"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <input
                type="email" name="email" placeholder="Email"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <input
                type="password" name="password" placeholder="Password"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <input
                type="password" name="confirmPassword" placeholder="Confirm Password"
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
              >
                {loading ? "Submitting..." : btnText}
              </button>
            </div>
          </form>

          <div className="text-center pt-4">
            <p className="text-gray-600">
              Are you a member? <Link to="/login" className="text-sky-600 hover:underline">Login</Link>
            </p>

            <div className="mt-4 flex items-center justify-center space-x-2">
              <span className="text-gray-400">or</span>
            </div>

            <h5 className="mt-4 text-gray-700">{socialTitle}</h5>
            <ul className="flex justify-center space-x-4 mt-2">
              {socialList.map((val, i) => (
                <li key={val.iconName}>
                  <a href={val.link} target="_blank" rel="noopener noreferrer"
                     className={`text-2xl ${val.className} transition-transform transform hover:scale-110`}>
                    <i className={val.iconName}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default SignupPage;