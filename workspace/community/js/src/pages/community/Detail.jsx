import { useNavigate, useParams } from "react-router-dom";
import CommentList from "./CommentList";
import useFetch from "@hooks/useFetch";
import Button from "@components/Button";

export default function Detail() {
  const navigate = useNavigate();
  const param = useParams();
  const id = param._id
  const fetchItems = useFetch(`/posts/${id}`);
  // const postItems = fetchItems.data?.item;
  const detailItems = fetchItems.data?.item;
  console.log(detailItems?.content);
  return (
    <main className="container mx-auto mt-4 px-4">
      <section className="mb-8 p-4">
        <div className="font-semibold text-xl">{detailItems?.title}</div>
        <div className="text-right text-gray-400">
          작성자 : {detailItems?.user.name}
        </div>
        <div className="mb-4">
          <div>
            <pre className="font-roboto w-full p-2 whitespace-pre-wrap">
              {detailItems?.content}
            </pre>
          </div>
          <hr />
        </div>
        <div className="flex justify-end my-4">
          <Button onClick={() => history.back()}>목록</Button>
          <Button bgColor="gray" onClick={() => navigate(`/info/1/edit`)}>
            수정
          </Button>
          <Button bgColor="red" onClick={() => navigate(`/info`)}>
            삭제
          </Button>
        </div>
      </section>
      <CommentList />
    </main>
  );
}
