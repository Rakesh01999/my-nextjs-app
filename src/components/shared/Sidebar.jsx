import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white py-4 shadow-md">
      <h1 className="text-2xl font-bold mb-6">My Sidebar</h1>
      <nav className="space-y-6">
        <Link href="/" className="block px-4 py-2 hover:text-gray-200">
          Home
        </Link>
        <Link href="/profile" className="block px-4 py-2 hover:text-gray-200">
          Profile
        </Link>
        <Link href="/settings" className="block px-4 py-2 hover:text-gray-200">
          Settings
        </Link>
        <Link href="/login" className="block px-4 py-2 hover:text-gray-200">
          Login
        </Link>
        <Link href="/register" className="block px-4 py-2 hover:text-gray-200">
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
