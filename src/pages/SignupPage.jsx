import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { motion } from "framer-motion";
import { parent, pageAnim } from "../utils/animations";
import { FaRegUser, FaRegEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiLock } from "react-icons/fi";
import { SigninSlider } from "../components";

function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { signUp } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    try {
      setLoading(true);
      await signUp(email, passWord);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setError(
        error.message.split(" ").slice(1).join(" ").replaceAll("auth/", "")
      );
    }
  };
  return (
    <motion.div
      variants={parent}
      initial="hidden"
      animate="show"
      className="signInPage"
    >
      <header className="">
        <h5 className="font-CDisplay font-bold text-[3rem]">ARTSY</h5>
        <Link to="/" className="underline normal-case">
          Continue as guest
        </Link>
      </header>
      <motion.main className="" variants={pageAnim}>
        <div className="formSlider w-[55%] h-[54rem]">
          <SigninSlider />
        </div>
        <motion.form onSubmit={handleSubmit} className="signInform">
          <h4 className="font-CDisplay font-medium">create your account</h4>
          <div className="inputbox">
            <article>
              <FaRegUser />
            </article>
            <input
              type="text"
              name="name"
              id="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <label htmlFor="name">full name</label>
          </div>
          <div className="inputbox">
            <article>
              <FaRegEnvelope />
            </article>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">email address</label>
          </div>
          <div className="inputbox">
            <article>
              <FiLock />
            </article>
            <input
              type="password"
              name="password"
              id="password"
              value={passWord}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">passsword</label>
          </div>

          <button disabled={loading} type="submit" className="signup">
            {loading ? (
              <span className=" flex w-fit ml-[33%] ">
                <InfinitySpin width="100" color="#fff" />
              </span>
            ) : (
              "Sign Up"
            )}
          </button>
          <button className="signupGoogle">
            <FcGoogle />
            sign up with google
          </button>
          <h4 className="text-[#777] text-[1.6rem]">
            already have an account?{" "}
            <Link to="/login" className="text-[#000] text-[1.8re]">
              login
            </Link>
          </h4>
        </motion.form>
      </motion.main>
    </motion.div>
  );
}

export default SignupPage;
