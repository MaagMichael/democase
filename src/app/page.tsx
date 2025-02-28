import Link from "next/link";
import Blog from "./blog/page";

export default function Home() {
  return (
    <>
      <Link href="http://localhost:3000/api/blogs" target="_blank">
        http://localhost:3000/api/blogs
      </Link>
      <br />
      <Link href="http://localhost:3000/api/blog/1" target="_blank">
        http://localhost:3000/api/blog/1
      </Link>
      <br />
      <Link href="http://localhost:3000/api/blog/100" target="_blank">
        http://localhost:3000/api/blog/100 not found error 404
      </Link>
      <br />
      <Blog />
      {/* ######################################################## */}

      <Link
        href="http://localhost:3000/api/search?query=hello&page=1"
        target="_blank"
      >
        http://localhost:3000/api/search?query=hello&page=1
      </Link>
      <br />
      <Link
        href="http://localhost:3000/api/search?tag=news&tag=tech"
        target="_blank"
      >
        http://localhost:3000/api/search?tag=news&tag=tech
      </Link>

    </>
  );
}
