import Link from "next/link";
import LogoutForm from "./logoutForm";
import { getSession } from "@/actions";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav className="w-screen h-[60px] flex justify-center bg-lemons items-center gap-10 text-white text-xl font-semibold">
      <Link href="/">Homepage</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/login">Login</Link>
      {session.isLoggedIn && <LogoutForm />}
    </nav>
  );
};

export default Navbar;
