import { logout } from "@/actions";
import React from "react";

const LogoutForm = () => {
  return (
    <form action={logout}>
      <button className="bg-green-500 py-2 px-4 rounded-lg">Logout</button>
    </form>
  );
};

export default LogoutForm;
