import React, { Fragment, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../component/layout/header";
import Footer from "../component/layout/footer";
import PageHeader from "../component/layout/pageheader";

const title = "Login";
const btnText = "Submit";

const socialList = [
    { link: '#', iconName: 'icofont-facebook', className: 'facebook' },
    { link: '#', iconName: 'icofont-twitter', className: 'twitter' },
    { link: '#', iconName: 'icofont-linkedin', className: 'linkedin' },
    { link: '#', iconName: 'icofont-instagram', className: 'instagram' },
    { link: '#', iconName: 'icofont-pinterest', className: 'pinterest' },
];

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const redirectMessage = location.state?.message;

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));

                // Redirect to original page or NDA
                const redirectPath = location.state?.from?.pathname || "/nda";
                navigate(redirectPath, { replace: true });
            } else {
                setError(data.message);
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <Fragment>
            <Header />
            <PageHeader title={'Login Page'} curPage={'Login'} />

            {redirectMessage && (
                <p style={{ color: "red", textAlign: "center", marginBottom: "10px" }}>
                    {redirectMessage}
                </p>
            )}

            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
                        <form className="account-form" onSubmit={handleLogin}>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    placeholder="Email *" 
                                    value={email} 
                                    onChange={e => setEmail(e.target.value)} 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    placeholder="Password *" 
                                    value={password} 
                                    onChange={e => setPassword(e.target.value)} 
                                />
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="d-block lab-btn"><span>{btnText}</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <span className="d-block cate pt-10">
                                Don’t Have any Account? <Link to="/signup">Sign Up</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default LoginPage;
