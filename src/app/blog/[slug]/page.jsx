import Menu from "@/components/blogSidebar/BlogSidebar";
import Image from "next/image";
import "./detailPost.css";
import BlogSidebar from "@/components/blogSidebar/BlogSidebar";
// import Comments from "@/components/comments/Comments";

// const getData = async (slug) => {
//   const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const DetailPost = async ({ params }) => {
  const { slug } = params;

  //   const data = await getData(slug);

  return (
    <div className={`post-container mt-[100px] `}>
      <div className={`post-info flex items-center gap-[50px]`}>
        <div className={`post-text flex-1 `}>
          <h1
            className={`post-title text-3xl  mb-12`}
            style={{ lineHeight: "1.2" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
          </h1>
          <div className={`post-author flex items-center gap-5 flex-`}>
            {/* {data?.user?.image && ( */}
            <div className={`post-author__img-box w-12 h-12 relative `}>
              <Image
                src={`/my-picture.jpg`}
                alt=""
                fill
                className={`post-author__avt rounded-full object-cover`}
              />
            </div>
            {/* )} */}
            <div
              className={`post-author-info flex flex-col gap-[6px] text-secondary`}
            >
              <span className={`post-author__name text-xl font-medium`}>
                Lam Tran
              </span>
              <span className={`post-date`}>01.05.2024</span>
            </div>
          </div>
        </div>
        {/* {data?.img && ( */}
        <div
          className={`post-thumbnail-container flex-1 h-[350px] relative rounded-xl overflow-hidden`}
        >
          <Image
            src={`/p1.jpeg`}
            alt=""
            fill
            className={`post-thumbnail object-cover`}
          />
        </div>
        {/* )} */}
      </div>

      {/* Content  */}
      <div className={`post-content flex gap-12`}>
        <div className={`post-content-box w-[70%] mt-[64px]`}>
          <div
            className={`post-content__desc`}
            // dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          {/* <p></p> */}
          {/* <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div> */}
        </div>
        {/* <BlogSidebar /> */}
      </div>
    </div>
  );
};

export default DetailPost;
