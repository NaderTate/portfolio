import Link from "next/link";
import Image from "next/image";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  return (
    <Link
      href={`https://www.nailed-it.tech/articles/${post.slug.current}`}
      target="_blank"
    >
      <div className="w-screen snap-center lg:p-20 px-8 md:p-44 h-screen flex flex-col items-center justify-center">
        <div className="relative hover:scale-[1.02] transition-transform">
          <Image
            width={1069}
            height={611}
            className="object-contain rounded-md w-[500px]"
            src={post.thumbnail}
            alt={post.title}
          />
          <div className="absolute w-full bottom-0 bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white px-5 py-2 flex justify-between items-center">
            <div>
              <p className="line-clamp-1"> {post.title}</p>
              <p className="line-clamp-1 text-xs ">{post.description}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 items-end justify-end">
              {post.categories.map((category, i) => (
                <div
                  key={category.title + i}
                  className="mx-2 bg-green-700 text-dark-blue text-center px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap"
                >
                  {category.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
