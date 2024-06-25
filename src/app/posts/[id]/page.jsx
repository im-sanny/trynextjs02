import React from "react";

const getDetailsPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await await res.json();
  return data;
};

export const generateMetadata = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const postData = await res.json();
  return {
    title: {
      absolute: `${postData.title}`,
    },
    description: postData.body,
    keywords: postData.body.split(" "),
  };
};

const PostDetailsPage = async ({ params }) => {
  const { title, body } = await getDetailsPost(params.id);
  return (
    <div className="h-screen">
      <h4>Title: {title}</h4>
      <p>Description: {body}</p>
    </div>
  );
};

export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());

  return posts?.slice(0, 10)?.map((post) => ({
    id: post.id.toString(),
  }));
} 

export default PostDetailsPage;
