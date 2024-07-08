import CommentNew from './CommentNew';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@components/Button';

export default function CommentList() {
  const navigate = useNavigate();
  return (
    <main className="container mx-auto mt-4 px-4">
      <section className="mb-8 p-4">
        <div className="font-semibold text-xl">
          제목 : 좋은 소식이 있습니다.
        </div>
        <div className="text-right text-gray-400">작성자 : 제이지</div>
        <div className="mb-4">
          <div>
            <pre className="font-roboto w-full p-2 whitespace-pre-wrap">
              좋은 소식을 가지고 왔습니다.
              <br />
              오늘 드디어 최종 면접을 합니다.
              <br />
              많이 응원해 주세요^^
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

      {/* <!-- 댓글 목록 --> */}
      <section className="mb-8">
        <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>

        {/* <!-- 댓글 -->  */}
        <div className="shadow-md rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <img
              className="w-8 mr-2 rounded-full"
              src="http://api.fesp.shop/files/00-sample/user-muzi.webp"
              alt="어피치 프로필 이미지"
            />
            <Link href="" className="text-orange-400">
              어피치
            </Link>
            <time
              className="ml-auto text-gray-500"
              dateTime="2024.07.02 14:11:22"
            >
              2024.07.02 14:11:22
            </time>
          </div>
          <pre className="whitespace-pre-wrap text-sm">화이팅!</pre>
        </div>

        {/* <!-- 댓글 --> */}
        <div className="shadow-md rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <img
              className="w-8 mr-2 rounded-full"
              src="http://api.fesp.shop/files/00-sample/user-muzi.webp"
              alt="무지 프로필 이미지"
            />
            <Link href="" className="text-orange-400">
              무지
            </Link>
            <time
              className="ml-auto text-gray-500"
              dateTime="2024.07.07 12:34:56"
            >
              2024.07.07 12:34:56
            </time>
          </div>
          <div className="flex justify-between items-center mb-2">
            <pre className="whitespace-pre-wrap text-sm">축하해요~~</pre>
            {/* <button type="button" className="bg-red-500 py-1 px-4 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded">삭제</button> */}
          </div>
        </div>

        <CommentNew />
      </section>
    </main>
  );
}
