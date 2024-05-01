import CardList from "@/components/postList/PostList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-[120px] ">
      <Featured />
    </div>
  );
}
