"use client";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="max-w-[1240px]  m-auto my-5 ">
        <div className="font-bold text-xl text-center  mt-5 mb-3">
          <Link href="/login" className="btn btn-primary   mt-5 mb-3">
            Sign In
          </Link>

          <Link href="/register" className="btn btn-primary    mb-3 ">
            Registration
          </Link>
          <Link href="/admin/" className="btn btn-danger ">
            My Account
          </Link>
          <div className="my-5 text-left">
            <p>
              My app is connected with Mongo DB. After registration a
              verification mail will send to your mail.{" "}
            </p>

            <p className="my-5">
              If you faild to recived mail, I have display verification link for
              test purpose. <br></br>After clicking verification - redirect to
              login
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
