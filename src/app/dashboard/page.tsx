"use client";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-2xl">Validation passed!!</div>
      <div className="pt-2">
        <Link href={"/"}>back to Mainpage</Link>
      </div>
    </div>
  );
};
export default Dashboard;
