import useFetch from "@hooks/useFetch";
import CommentNew from "./CommentNew";
import { Link, useParams } from "react-router-dom";

export default function CommentList() {
  const param = useParams();
  const id = param._id;
  const fetchItems = useFetch(`/posts/${id}/replies`);
  const commentItems = fetchItems.data?.item;
  console.log(commentItems);

  return (
    <>
      {commentItems?.map((v, i) => (
        <section className="mb-8" key={v?._id}>
          <h4 className="mt-8 mb-4 ml-2">댓글 {commentItems.length}개</h4>

          <div className="shadow-md rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <img
                className="w-8 mr-2 rounded-full"
                src="http://api.fesp.shop/files/00-sample/user-muzi.webp"
                alt="어피치 프로필 이미지"
              />
              <Link to="" className="text-orange-400">
                {v?.user?.name}
              </Link>
              <time
                className="ml-auto text-gray-500"
                dateTime="2024.07.02 14:11:22"
              >
                {v?.createdAt}
              </time>
            </div>
            <pre className="whitespace-pre-wrap text-sm">{v?.content}</pre>
          </div>
          <CommentNew />
        </section>
      ))}
    </>
  );
}
