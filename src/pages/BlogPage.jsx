import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import sanityClient from "../client";
import Loading from "../components/Loading";


const BlogPage = () => {
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, []);

  const posts =
    postData &&
    postData.map((post, index) => {
      return (
        <div className="card h-max bg-base-100 shadow-lg border break-inside my-4" key={index}>
          <h1 className="text-2xl md:text-3xl text-center p-2 md:p-4 font-semibold">
            {post.title}
          </h1>
          <figure>
            <img src={post.mainImage.asset.url} alt={post.alt} />
          </figure>
          <div className="card-body p-2">
            <div className="card-actions justify-center">
              <Link
                to={"/blog/" + post.slug.current}
                key={post.slug.current}
                className="link link-primary text-xl md:text-2xl font-bold no-underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      );
    });
    if (!posts) return <div className="flex h-screen w-screen justify-center items-center"><Loading/></div>;

  return (
    <div>
      <h1 className="text-4xl md:text-6xl text-center font-semibold mt-6">
        Blog Post Page
      </h1>
      <div className="flex justify-center">
        <div className="divider w-[80vw]"></div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 md:p-8 min-h-screen"> */}
      <div className="masonry sm:masonry-sm md:masonry-md">
          {posts}
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
