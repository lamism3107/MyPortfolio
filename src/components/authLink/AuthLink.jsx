"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
function AuthLink() {
  //temporary
  const { status } = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          {/* <Link href="/write">Write</Link> */}
          <Link href={"/login"} onClick={signOut}>
            Log out
          </Link>
        </>
      )}
    </>
  );
}
export default AuthLink;
