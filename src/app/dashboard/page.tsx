"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const sessionUsername = sessionStorage.getItem("username");
    const localUsername = localStorage.getItem("username");
    if (sessionUsername && sessionUsername !== "") {
      setUsername(sessionUsername);
      setShow(true);
    }else{
      setUsername(localUsername || "");
      setShow(false);
    }
  }, []);

  

  return (
    <div className="flex flex-col justify-center items-center">
      <div>Welcome {username}</div>
      <div style={{ display: show ? "" : "none" }}>
        You have 30 minutes to use this Page
      </div>
      <div className="text-2xl pt-4">Validation passed!!</div>
      <div className="pt-4">
        <Link href={"/"}>back to Mainpage</Link>
      </div>
    </div>
  );
};
export default Dashboard;
