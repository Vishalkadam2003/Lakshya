import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'swiper/css';
import ProtectedRoute from "./components/ProtectedRoute";

import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import ForgetPass from "./page/forgetpass";
import LoginPage from "./page/login";
import SignupPage from "./page/signup";

import Home from "./page/home";
import HomeTwo from "./page/home-2";
import HomeThree from "./page/home-3";
import HomeFour from "./page/home-4";
import HomeFive from "./page/home-5";
import HomeSix from "./page/home-6";
import HomeSeven from "./page/home-7";
import AboutPage from "./page/about";
import BlogPage from "./page/blog";
import BlogPageTwo from "./page/blog-2";
import BlogPageThree from "./page/blog-3";
import BlogSingle from "./page/blog-single";
import CartPage from "./page/cart-page";
import ContactPage from "./page/contact";
import CoursePage from "./page/course";
import CourseSingle from "./page/course-single";
import CourseView from "./page/course-view";
import InstructorPage from "./page/instructor";
import SearchNone from "./page/search-none";
import SearchPage from "./page/search-page";
import ShopPage from "./page/shop";
import ShopDetails from "./page/shop-single";
import TeamPage from "./page/team";
import TeamSingle from "./page/team-single";

import AdminUserCreation from './forms/AdminUserCreation';
import Nda from "./page/nda";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Auth routes - accessible without login */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgetpass" element={<ForgetPass />} />

        {/* All other routes require login */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/index-2" element={<HomeTwo />} />
          <Route path="/index-3" element={<HomeThree />} />
          <Route path="/index-4" element={<HomeFour />} />
          <Route path="/index-5" element={<HomeFive />} />
          <Route path="/index-6" element={<HomeSix />} />
          <Route path="/index-7" element={<HomeSeven />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/course-single" element={<CourseSingle />} />
          <Route path="/course-view" element={<CourseView />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-2" element={<BlogPageTwo />} />
          <Route path="/blog-3" element={<BlogPageThree />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team-single" element={<TeamSingle />} />
          <Route path="/instructor" element={<InstructorPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop-single" element={<ShopDetails />} />
          <Route path="/cart-page" element={<CartPage />} />
          <Route path="/search-page" element={<SearchPage />} />
          <Route path="/search-none" element={<SearchNone />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/nda" element={<Nda />} />
          <Route path="/admin-create-user" element={<AdminUserCreation />} />
        </Route>

        {/* Redirect everything else */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
