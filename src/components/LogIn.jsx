import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { motion } from "framer-motion";
import { parent, pageAnim } from "../utils/animations";

function LogIn() {
  const [email, setEmail] = useState("");
  const [passWord1, setPassword1] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signIn(email, passWord1);
      setTimeout(() => {
        navigate("/");
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
      className="loginPage"
    >
      <motion.form
        variants={pageAnim}
        onSubmit={handleSubmit}
        className="loginform"
      >
        <h2 className="font-CDisplay text-center text-[3.5rem] font-medium">
          Login
        </h2>
        {error && (
          <h4 className="mx-auto w-fit text-red-500 text-center text-[1.6rem] rounded-[3px] p-2 border border-red-500 bg-[rgba(255,0,0,0.05)]">
            {error}
          </h4>
        )}
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
            value={passWord1}
            onChange={(e) => setPassword1(e.target.value)}
            required
            placeholder="password"
          />
        </div>

        <button type="submit">
          {loading ? (
            <span className=" flex w-fit ml-[32%] ">
              <InfinitySpin width="100" color="#fff" />
            </span>
          ) : (
            "Log in"
          )}
        </button>
        <h5 className="text-center">
          don't have an account ?{" "}
          <Link to="/signIn" className="text-[#333] font-CDisplay font-medium">
            Sign Up
          </Link>
        </h5>
      </motion.form>
    </motion.div>
  );
}

export default LogIn;
