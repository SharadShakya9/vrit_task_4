"use client"

import React from "react";
import { login } from "@/actions";
import { useFormState } from "react-dom";

const LoginForm = () => {
    const [state, formAction] = useFormState<any, FormData>(login, undefined)

  return (
    <form action={formAction} className="flex w-full flex-col items-center gap-3">
      <div className="flex flex-col gap-2">
        <label htmlFor="username">Username</label>
        <input
          className="p-2 rounded-md placeholder:italic focus-visible:outline-blue-500 focus-visible:outline-none"
          id="username"
          name="username"
          type="text"
          placeholder="Enter your username"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          className="p-2 rounded-md placeholder:italic focus-visible:outline-blue-500 focus-visible:outline-none"
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <button className="px-5 py-3 bg-blue-500 rounded-lg">
        <p className="text-white font-semibold text-xl">Sign In</p>
      </button>

      {state?.error && <p className="text-red-600 text-2xl italic">{state.error}</p>}
    </form>
  );
};

export default LoginForm;
