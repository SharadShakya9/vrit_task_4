"use client";

import Button from "@/components/button";
import React from "react";

const page = () => {
  const handleSubmit = () => {
    console.log("Do Something");
  };

  return (
    <main className="min-w-screen min-h-screen flex justify-center items-center bg-lemons">
      <div className="w-[60%] h-[400px] bg-white rounded-3xl flex">
        <div className="w-[35%] flex justify-center items-center">
          <img className="w-[200px]" src="/lemonl.png" alt="lemon" />
        </div>
        <div className="w-[65%] bg-yellow-400 rounded-l-[99px] flex justify-center items-center">
          <form className="flex w-full flex-col items-center gap-3">
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className="p-2 rounded-md placeholder:italic focus-visible:outline-blue-500 focus-visible:outline-none"
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                className="p-2 rounded-md placeholder:italic focus-visible:outline-blue-500 focus-visible:outline-none"
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <Button onSubmit={handleSubmit}>Sign In</Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default page;
