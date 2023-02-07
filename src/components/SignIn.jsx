import React from "react";
import { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { motion } from "framer-motion";
import { parent, pageAnim } from "../utils/animations";

function SignIn() {
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
      <motion.form
        variants={pageAnim}
        onSubmit={handleSubmit}
        className="signInform"
      >
        <h2 className="font-CDisplay text-center text-[3.5rem] font-medium">
          sign up
        </h2>
        {error && (
          <h4 className="mx-auto w-fit text-red-500 text-center text-[1.6rem] rounded-[3px] p-2 border border-red-500 bg-[rgba(255,0,0,0.05)]">
            {error}
          </h4>
        )}
        <div className="login-form-group">
          <label htmlFor="">full name</label>
          <input
            type="text"
            name="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            placeholder="John Doe"
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="">email address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@email.com"
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="">enter password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={passWord}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="enter password"
          />
        </div>

        <button disabled={loading} type="submit">
          {loading ? (
            <span className=" flex w-fit ml-[32%] ">
              <InfinitySpin width="100" color="#fff" />
            </span>
          ) : (
            "Sign Up"
          )}
        </button>
        <h5 className="text-center">
          already have an account ?{" "}
          <Link to="/login" className="text-[#333] font-CDisplay font-medium">
            Log In
          </Link>
        </h5>
      </motion.form>
    </motion.div>
  );
}

export default SignIn;
