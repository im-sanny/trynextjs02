import React from "react";

const getDetailsPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await await res.json();
  return data;
};

const PostDetailsPage = async ({ params }) => {
  const { title, body } = await getDetailsPost(params.id);
  return (
    <div>
      <h4>Title: {title}</h4>
      <p>Description: {body}</p>
    </div>
  );
};

export default PostDetailsPage;
