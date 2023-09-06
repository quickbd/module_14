"use client";
import User from "@/models/user";
import dbConnect from "@/utility/dbConnect";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
export async function GET(req) {
  dbConnect();
  const router = useRouter();
  //const searchParams = useSearchParams();

  const { searchParams } = new URL(req.url);
  let verification_token = searchParams.get("verification_token");
  //const verification_token = searchParams.get("verification_token");
  return verification_token;
  return NextResponse().json({ msg: verification_token });
  console.log(verification_token);
  let dbUser = await User.findOne({ verification_token });
  console.log(dbUser);

  // if (dbUser) {
  //   dbUser = await User.update({
  //     status: "Active",
  //   });

  //   router.replace("/admin");
  // }
}
