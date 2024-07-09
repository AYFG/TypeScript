import Button from "@components/Button";
import Theme from "@components/Theme";
import userStore from "@zustand/Store";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const {name, image,accessToken,refreshToken} = userStore((state)=>({
    name: state.name,
    image: state.image,
    accessToken: state.accessToken,
    refreshToken: state.refreshToken,
  }))
  const getItem = JSON.parse(sessionStorage.getItem("user-storage"));
  const accessSessionToken = getItem.state.accessToken;
  const refreshSessionToken = getItem.state.refreshToken;
  // console.log(name)
  // console.log(accessToken === accessSessionToken);
  // console.log(refreshSessionToken === refreshSessionToken);
  return (
    <header className="px-8 min-w-80 bg-slate-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-color duration-500 ease-in-out">
      <nav className="flex flex-wrap justify-center items-center p-4 md:flex-nowrap md:justify-between">
        <div className="w-1/2 order-1 md:w-auto">
          <Link href="/" className="flex items-center gap-2">
            <img
              className="mr-3 h-6 sm:h-9"
              src="/images/favicon.svg"
              alt="로고 이미지"
            />
            <span className="text-lg font-bold">멋사컴</span>
          </Link>
        </div>
        <div className="w-auto order-2 text-base mt-4 md:mt-0">
          <ul className="flex items-center gap-6 uppercase">
            <li className="hover:text-amber-500 hover:font-semibold">
              <Link href="/info">정보공유</Link>
            </li>
            <li className="hover:text-amber-500 hover:font-semibold">
              <Link href="/free">자유게시판</Link>
            </li>
            <li className="hover:text-amber-500 a:font-semibold">
              <Link href="/qna">질문게시판</Link>
            </li>
          </ul>
        </div>

        <div className="w-1/2 order-1 flex justify-end items-center md:order-2 md:w-auto">
          {/* <!-- 로그인 후 --> */}
          {/* <!-- */}
          {accessToken === accessSessionToken && (
            <p className="flex items-center">
              <img
                className="w-8 rounded-full mr-2"
                src="https://api.fesp.shop/files/00-sample/user-muzi.webp"
              />
              {name}
              <Button
                size="md"
                bgColor="gray"
                onClick={() => navigate(`/info`)}
              >
                로그아웃
              </Button>
            </p>
          )}
          {/* --> */}

          {/* <!-- 로그인 전 --> */}
          <div className="flex justify-end">
            <Button type="button" onClick={() => navigate(`/user/login`)}>
              로그인
            </Button>
            <Button
              size="sm"
              bgColor="gray"
              onClick={() => navigate(`/user/signup`)}
            >
              회원가입
            </Button>
          </div>
          <Theme />
        </div>
      </nav>
    </header>
  );
}
