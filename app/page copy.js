import Slideshow from "@/components/Slideshow";
import BlogCategories from "./blog/categories/page";
import NewestPost from "./blog/newest/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Slideshow />
      <div className="max-w-[1240px]  m-auto my-5 ">
        <BlogCategories />
        <div className="font-bold text-xl  mt-5 mb-3">Latest Post</div>
        <NewestPost />
      </div>
    </main>
  );
}
