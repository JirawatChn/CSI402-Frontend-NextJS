"use client";
import Link from "next/link";
import { AlertBox } from "../Component/AlertBox";
import { TextInput } from "../Component/TextInput";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [isShow, setIsShow] = useState(false);

  const handleUsername = (e: any) => {
    const v = e.target.value;
    setUsername(v);
    console.log(v);
  };

  const handleClick = () => {
    if (username === "") {
      setIsShow(true);
    } else {
      setIsShow(false);
      router.push("/dashboard");
    }
  };
  return (
    <div>
      <p className="font-bold text-lg justify-center flex">Access Registration</p>
      <div className="w-96 flex pb-3">
        <TextInput
          text="Username:"
          inputId="txtUsername"
          onChange={handleUsername}
        />
        <button
          type="button"
          className="bg-green-400 hover:bg-green-500 text-white px-5 rounded-full"
          onClick={() => handleClick()}
        >
          Enter
        </button>
      </div>
      <AlertBox text="Please enter a username" isShow={isShow} />
      <div className="pt-2">
        <Link href="/" className="p-2">
          Go to Mainpage
        </Link>
      </div>
    </div>
  );
};
export default Register;
