import Sidebar from "@/components/shared/Sidebar";

const DashoboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashoboardLayout;
