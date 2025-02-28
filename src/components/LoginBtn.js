"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Image
          className="rounded-full"
          src={session.user.image}
          alt="Profile image"
          width={35}
          height={35}
        ></Image>
        <button onClick={() => signOut()}>
          <div className="border border-gray-500 hover:border-gray-300 p-1 rounded">
            Sign out
          </div>
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>
        <div className="border border-gray-500 hover:border-gray-300  p-1 rounded">
          Sign in
        </div>
      </button>
    </>
  );
}
