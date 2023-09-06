import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="max-w-[1240px]  m-auto my-5 ">
        <div className="font-bold text-xl text-center  mt-5 mb-3">
          <Link href="/admin/login" className="btn btn-primary   mt-5 mb-3">
            Sign In
          </Link>

          <Link href="/admin/register" className="btn btn-primary    mb-3 ">
            Registration
          </Link>
          <Link href="/admin/myapp" className="btn btn-danger ">
            My Account
          </Link>
        </div>
      </div>
    </main>
  );
}
