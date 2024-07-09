import { Link } from "react-router-dom";

export const boradList = [
  {
    title: "짜장이네",
    content: "다양한 정보와 지식을 공유해Boa",
    href: "/sozzang",
  },
  {
    title: "바덕이네",
    content: "자유롭게 이야기를 나눠Boa",
    href: "/info",
  },
  {
    title: "희선이네",
    content: "메롱",
    href: "/post",
  },
];

const Community = () => {
  return (
    <main className="container mx-auto mt-10 p-4">
      <section className="text-center">
        <img
          className="rounded-md m-auto"
          src="https://i.pinimg.com/564x/5f/70/34/5f70349da6f9c66c51ce9d9f4f8bd853.jpg"
          alt="welcome"
        />
        <h1 className="text-4xl font-bold mb-4 mt-8">
          소정컴에 오신 것을 환영합니다!
        </h1>
        <p className="text-xl mb-6">
          다양한 주제의 커뮤니티와 활발한 소통을 위한 플랫폼입니다. <br />
          관심사에 따라 참여하고, 의견을 나누세요.
        </p>
        <a
          href="/"
          className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600"
        >
          커뮤니티 참여하기
        </a>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4 text-center">주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {boradList.map((item, idx) => {
            return (
              <div
                className="bg-white p-6 rounded shadow dark:bg-gray-800"
                key={idx}
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="mb-4">{item.content}</p>
                <Link
                  to={item.href}
                  className="text-orange-500 hover:underline"
                >
                  바로가기
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Community;
