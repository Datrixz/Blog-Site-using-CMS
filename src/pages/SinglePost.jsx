import { useParams } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";
import PortableText from "react-portable-text";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => {
  return builder.image(source);
};

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          _id,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          },
            body,
            "name": author->name,
            "authorImage": author->image
          
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost)
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <Loading />
      </div>
    );
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl text-center font-semibold mt-6">
          My Blog Post
        </h1>
        <div className="flex justify-center">
          <div className="divider w-[80vw]"></div>
        </div>
        <div className="card max-w-7xl bg-base-100 shadow-lg border break-inside mx-3 my-4">
          <h1 className="text-3xl md:text-5xl text-center p-3 md:p-6 font-semibold">
            {singlePost.title}
          </h1>
          <figure>
            <img src={singlePost.mainImage.asset.url} alt={singlePost.alt} />
          </figure>
          <div className="card-body p-4 md:p-8 text-lg md:text-2xl text-justify">
            <PortableText content={singlePost.body} />
          </div>
          <div className="flex justify-center">
            <div className="divider w-[80vw] m-0"></div>
          </div>
          <div className="flex items-center">
            <div className="avatar p-4 md:p-8">
              <div className="rounded-full w-14 md:w-20">
                <img
                  alt={singlePost.name}
                  src={urlFor(singlePost.authorImage)
                    .width(100)
                    .height(100)
                    .url()}
                />
              </div>
            </div>
            <h3 className="text-lg md:text-3xl text-primary font-bold">
              {singlePost.name}
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SinglePost;
