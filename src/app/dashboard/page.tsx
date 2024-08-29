import { getSession } from "@/actions";
import React from "react";

const DashboardPage = async () => {
  const session = await getSession();

  console.log(session);

  return (
    <div>
      <p>Profile Page</p>
    </div>
  );
};

export default DashboardPage;
