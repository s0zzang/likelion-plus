import Button from "@components/Button";
import { boradList } from "@pages/community";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { userState } from "@recoil/atoms";
import { API_SERVER } from "@hooks/useFetch";
import { Link, useNavigate, useParams } from "react-router-dom";
import Theme from "../Theme";

const Header = () => {
  const { type } = useParams();
  const user = useRecoilValue(userState);
  const resetUser = useResetRecoilState(userState);
  const navigate = useNavigate();
  const handleLogOut = () => {
    resetUser();
    navigate("/");
  };

  return (
    <header className="px-8 min-w-80 bg-slate-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-color duration-500 ease-in-out">
      <nav className="flex flex-wrap justify-center items-center py-4 md:flex-nowrap md:justify-between">
        <div className="w-1/3 order-1 md:w-auto">
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
                  <Link
                    className={`${
                      item.href === `/${type}`
                        ? "text-orange-400 font-semibold"
                        : ""
                    }`}
                    to={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-2/3 order-1 flex justify-end items-center md:order-2 md:w-auto">
          {user ? (
            <p className="flex items-center">
              <img
                className="w-8 rounded-full mr-2 aspect-square object-cover"
                src={`${API_SERVER}/${user.profileImage}`}
              />
              {user.name}님 :)
              <Button size="md" bgColor="black" onClick={handleLogOut}>
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
          <Theme />
        </div>
      </nav>
    </header>
  );
};

export default Header;
