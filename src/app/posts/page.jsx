import { getPosts } from "@/services/postApi";
import React from "react";

const PostPage = async () => {
  const postData = await getPosts();
  console.log(postData);
  return (
    <div className="">
      All posts
      <div className="grid grid-cols-4 gap-5 lg:mx-10 ">
        {postData?.slice(0, 20)?.map(({ title, id, body }) => (
          <div key={id} className="border">
            <h1>Title: {title}</h1>
            <p>Description: {body} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
