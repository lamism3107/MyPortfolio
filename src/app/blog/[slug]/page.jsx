"use client";
import Image from "next/image";
import "./detailPost.css";
import Comments from "@/components/comments/Comments";
import fetcher from "@/app/fetcher/fetcher";
import useSWR from "swr";
import BlogSidebar from "@/components/blogSidebar/BlogSidebar";

const DetailPost = ({ params }) => {
  const { slug } = params;
  console.log(slug);
  const { data, error, isLoading } = useSWR(`/api/posts/${slug}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div className="my-12">loading...</div>;
  //   const data = await getData(slug);
  console.log("check data", data);
  return (
    <div className={`post-container mt-[100px] `}>
      <div className={`post-info flex items-center gap-[50px] mb-12`}>
        <div className={`post-text flex-1 `}>
          <h1
            className={`post-title text-3xl  mb-12`}
            style={{ lineHeight: "1.2" }}
          >
            {data?.title}
          </h1>
          <div className={`post-author flex items-center gap-5 flex-`}>
            {data?.user?.image && (
              <div className={`post-author__img-box w-12 h-12 relative `}>
                <Image
                  src={data?.user?.image}
                  alt=""
                  fill
                  className={`post-author__avt rounded-full object-cover`}
                />
              </div>
            )}
            <div
              className={`post-author-info flex flex-col gap-[6px] text-secondary`}
            >
              <span className={`post-author__name text-xl font-medium`}>
                {/* {data?.} */}
              </span>
              <span className={`post-date`}>
                {" "}
                {(function formatDate(dateString) {
                  const [year, month, day] = dateString.split("-");
                  return `${day}-${month}-${year}`;
                })(data?.createdAt?.substring(0, 10))}
              </span>
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
        <div className={`post-content-box w-[70%]  `}>
          <div className={`post-content__desc`}>{data.desc}</div>
          {data?.content}
          <div className="font-bold ">
            <Comments postSlug={slug} />
          </div>
        </div>
        {/* <div> */}
        <BlogSidebar />
        {/* </div> */}
      </div>
    </div>
  );
};

export default DetailPost;
