"use client";
import { use, useState } from "react";
import { TextInput } from "./Component/TextInput";
import Link from "next/link";
import { AlertBox } from "./Component/AlertBox";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [isShow, setIsShow] = useState(false);

  const handleUsername = (e: any) => {
    const v = e.target.value;
    setUsername(v);
  };

  const handleClick = () => {
    if (username === "admin") {
      setIsShow(false);
      router.push("/dashboard");
    } else {
      setIsShow(true);
    }
  };

  return (
    <div>
      <p className="font-bold text-lg justify-center flex">User Validation</p>
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
          Check
        </button>
      </div>
      <AlertBox text="Unauthorized Please Filled Input or Register" isShow={isShow} />
      <div className="pt-2">
        <Link href="/register" className="p-2">
          Go to Register
        </Link>
      </div>
    </div>
  );
}
