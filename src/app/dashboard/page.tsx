"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const sessionUsername = sessionStorage.getItem("username");
    const localUsername = localStorage.getItem("username");
    if (sessionUsername && sessionUsername !== "") {
      setUsername(sessionUsername);
      setShow(true);
    } else {
      setUsername(localUsername || "");
      setShow(false);
    }
  }, []);

  const back = () => {
    localStorage.removeItem("username");
    sessionStorage.removeItem("username ");
    router.push("/");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>Welcome {username}</div>
      <div style={{ display: show ? "" : "none" }}>
        You have 30 minutes to use this Page
      </div>
      <div className="text-2xl pt-4">Validation passed!!</div>
      <button className="pt-4" onClick={()=>back()}>Back to Mainpage</button>
    </div>
  );
};
export default Dashboard;
