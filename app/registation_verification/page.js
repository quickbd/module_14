"use client";

import { useRouter } from "next/navigation";
export default function verification(param) {
  const verificationToken = param.verificationToken;
  const router = useRouter();

  const verificationfns = async (e) => {
    e.preventDefault();
    const { searchParams } = new URL(req.url);
    let verification_token = searchParams.get("verification_token");
    try {
      setLoading(true);
      const response = await fetch(`${process.env.API}/verification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ verification_token }),
      });

      if (!response.ok) {
        const data = await response.json();
        toast.error(data.err);
        setLoading(false);
        return;
      }

      const data = await response.json();
      toast.success(data.success);
      setLoading(false);
      router.push("/admin/login");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Invalid Verification Link");
    }
  };

  verificationfns();
}
