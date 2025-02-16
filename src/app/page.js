import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl text-center">Welcome to Home page</h1>
      <Link href="/dashboard">
        <button>Dashboard</button>
      </Link>
    </div>
  );
};

export default HomePage;
