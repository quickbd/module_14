"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function MyApp(params) {
  let session = useSession();
  let status = session.status;
  const router = useRouter();
  if (status !== "authenticated") {
    router.replace("/admin/login");
  }

  return (
    <div className="container">
      <h2>My App </h2>
      <p>{JSON.stringify(session)}</p>
      <button
        onClick={() => signOut({ callbackUrl: "/admin/login" })}
        className="btn btn-danger"
      >
        Logout
      </button>
    </div>
  );
}
