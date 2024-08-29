import { getSession } from "@/actions";
import Link from "next/link";
import React from "react";

const DashboardPage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    return (
      <div className="bg-lemons w-full min-h-screen flex flex-col justify-center items-center text-3xl">
        <p>Dashboard</p>
        <p>You are not logged in!!!</p>
        <p>
          Go to the{" "}
          <Link href="/login" className="underline text-white">
            Login Page
          </Link>{" "}
          to login
        </p>
      </div>
    );
  }

  return (
    <div className="bg-lemons w-full min-h-screen flex flex-col justify-center items-center text-3xl">
      <p>Dashboard</p>
      <p>
        Welcome, <b>{session.username}</b>
      </p>
    </div>
  );
};

export default DashboardPage;
