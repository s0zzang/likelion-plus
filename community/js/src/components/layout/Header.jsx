import Button from "@components/Button";
import { boradList } from "@pages/community";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { userState } from "@recoil/atoms";
import { API_SERVER } from "@hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const user = useRecoilValue(userState);
  const resetUser = useResetRecoilState(userState);
  const navigate = useNavigate();
  const handleLogOut = () => {
    resetUser();
    navigate("/");
  };

  return (
    <header className="px-8 min-w-80 bg-slate-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-color duration-500 ease-in-out">
      <nav className="flex flex-wrap justify-center items-center p-4 md:flex-nowrap md:justify-between">
        <div className="w-1/2 order-1 md:w-auto">
          <Link to="/" className="flex items-center gap-2">
            <img className="h-10" src="/favicon.png" alt="로고 이미지" />
            <span className="text-lg font-bold">소정컴</span>
          </Link>
        </div>
        <div className="w-auto order-2 text-base mt-4 md:mt-0">
          <ul className="flex items-center gap-6 uppercase">
            {boradList.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="hover:text-amber-500 hover:font-semibold"
                >
                  <Link to={item.href}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-1/2 order-1 flex justify-end items-center md:order-2 md:w-auto">
          {user ? (
            <p className="flex items-center">
              <img
                className="w-8 rounded-full mr-2"
                src={`${API_SERVER}/${user.profileImage}`}
              />
              {user.name}님 :)
              <Button size="md" bgColor="gray" onClick={handleLogOut}>
                로그아웃
              </Button>
            </p>
          ) : (
            <div className="flex justify-end">
              <Button size="sm" onClick={() => navigate("/user/login")}>
                로그인
              </Button>
              <Button
                size="sm"
                bgColor="gray"
                onClick={() => navigate("/user/signup")}
              >
                회원가입
              </Button>
            </div>
          )}
          {/* 로그인 후 */}
          {/*
            
            */}

          {/* 로그인 전 */}

          {/* 라이트/다크 모드 전환 */}
          <button
            type="button"
            data-toggle-dark="dark"
            className="ml-4 flex items-center w-8 h-8 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <svg
              data-toggle-icon="moon"
              className="w-3.5 h-3.5 hidden"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
            </svg>
            <svg
              data-toggle-icon="sun"
              className="w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
            </svg>
            <span className="sr-only">Toggle dark/light mode</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
