import User from "@/models/user";
import dbConnect from "@/utility/dbConnect";
export async function POST(req, res) {
  dbConnect();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { verification_token } = searchParams.get("verification_token");

  let dbUser = await User.findOne({ verification_token });

  if (dbUser) {
    dbUser = await User.update({
      status: "Active",
    });
    router.replace(callbackUrl);
  }
}
