"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/dashboard");
  };
  return (
    <div>
      <h1 className="text-3xl text-center">Welcome to Home page</h1>
      <button onClick={handleNavigation} className="my-5">Dashboard</button>
    </div>
  );
};

export default HomePage;
