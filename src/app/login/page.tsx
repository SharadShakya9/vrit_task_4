"use server"

import { getSession } from "@/actions";
import LoginForm from "@/components/loginForm";
import { redirect } from "next/navigation";
import React from "react";

const LoginPage = async () => {

  return (
    <main className="w-screen min-h-screen flex justify-center items-center bg-lemons">
      <div className="w-[60%] h-[400px] bg-white rounded-3xl flex">
        <div className="w-[35%] flex justify-center items-center">
          <img className="w-[200px]" src="/lemonl.png" alt="lemon" />
        </div>
        <div className="w-[65%] bg-yellow-400 rounded-l-[99px] flex justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
