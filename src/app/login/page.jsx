"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { signIn, useSession } from "next-auth/react";
import React, { useContext, useEffect } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
// import "./login.css";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const Login = () => {
  // useEffect(() => {
  //   window.localStorage.setItem("login", "false");
  // }, []);
  //
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const { data, status } = useSession();
  console.log("data, status: ", data, status);
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <>
      <div className="wrapper   mt-[80px] py-10 ">
        <div
          className={`${
            theme === "dark" && "bg-secondary"
          } py-10 text-center w-2/3 mx-auto rounded-lg`}
        >
          <div className="flex flex-col w-full">
            <div
              className={`${
                theme === "dark"
                  ? "bg-prime border-none"
                  : "border border-gray-200"
              } md:w-80 mx-auto flex items-center justify-center gap-2 px-4 py-3 my-4 rounded-full  shadow-md cursor-pointer hover:brightness-[0.85] hover:shadow-lg font-bold`}
              onClick={() => signIn("google")}
            >
              <FaGoogle className="text-xl" />
              Tiếp tục bằng Google
            </div>

            <div
              className={`${
                theme === "dark"
                  ? "bg-prime border-none"
                  : "border border-gray-200"
              } md:w-80 mx-auto flex items-center justify-center gap-2 px-4 py-3 my-4 rounded-full  shadow-md cursor-pointer hover:brightness-[0.85] hover:shadow-lg font-bold`}
              // onClick={loginWithGoogle}
              onClick={() => signIn("facebook")}
            >
              <FaFacebook className="text-xl" />
              Tiếp tục bằng Facebook
            </div>

            <div
              className={`${
                theme === "dark"
                  ? "bg-prime border-none"
                  : "border border-gray-200"
              } md:w-80 mx-auto flex items-center justify-center gap-2 px-4 py-3 my-4 rounded-full  shadow-md cursor-pointer hover:brightness-[0.85] hover:shadow-lg font-bold`}
              // onClick={loginWithGoogle}
              onClick={() => signIn("github")}
            >
              <FaGithub className="text-xl" />
              Tiếp tục bằng Github
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
