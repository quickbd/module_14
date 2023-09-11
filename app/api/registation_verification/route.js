import User from "@/models/user";
import dbConnect from "@/utility/dbConnect";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  try {
    const verification_token = searchParams.get("verification_token");
    let dbUser = await User.findOne({ verification_token: verification_token });
    dbUser.verification_status = "Active";
    return NextResponse.json({ msg: "okay" });
  } catch (err) {
    console.log(err);

    return NextResponse.json({ msg: "err" });
  }
}
