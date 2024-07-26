import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

// OAuth2.0 공부 필요함
export const { handlers, signIn, signOut, auth } = NextAuth({
  // 📍 인증 제공자
  providers: [
    CredentialsProvider({
      // 📍 email, password 로그인 시 사용 - 사용자가 입력한 정보를 이용해서 로그인 처리
      // credentials : 로그인 정보를 가진 객체
      async authorize(credentials) {
        const res = await fetch(`${SERVER}/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
        const resJson = await res.json();

        if (resJson.ok) {
          const user = resJson.item;
          console.log(user);
          // 📍 authorize의 리턴 값 타입인 'User' 형태로 리턴 (auth.d.ts에서 토큰 추가하여 직접 확장함)
          return {
            id: user._id,
            name: user.name,
            email: user.email,
            type: user.type,
            image: user.profileImage && SERVER + user.profileImage,
            accessToken: user.token.accessToken,
            refreshToken: user.token.refreshToken,
          };
        } else return null;
      },
    }),
    github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // 📍 세션 = 본인을 식별할 수 있는 장치
  session: {
    strategy: "jwt", // default
    maxAge: 60 * 60 * 24, // 만료 기간 : 24시간
  },

  // 📍
  pages: {
    signIn: "/login", // defualt : /auth/signin
  },

  // 📍 왕복잡. 달린다. 꽉잡아
  // authorize의 리턴값을 받고 상황에 따라 callbacks 함수가 실행됨
  // user : authorize 리턴값 (사용자 정보 || null)
  callbacks: {
    // 📍 로그인 처리 지속 여부
    // true 리턴 : 로그인 처리 계속, false 리턴 / Error throw : 로그인 흐름 중단 (뒤의 함수들)
    async signIn({ user }) {
      // 📍 user에 들어있는 사용자 정보를 이용해 최초 1회 DB 저장 (회원가입) - 토큰 없어서 게시글 작성이 어렵잔아
      // 가입된 회원인 경우, 자동으로 로그인 처리 (api 서버에서 해줌)
      return true;
    },

    // 📍 로그인 성공 시 회원 정보로 token 객체 설정
    // 토큰 만료를 체크하여, 만료되었다면 refreshToken으로 accessToken 갱신
    // refreshToken 마저 만료되었다면 로그아웃 처리
    // 📍 최초 로그인 시 호출되어 user 객체 전달
    async jwt({ token, user }) {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },

    // 📍 클라이언트에서 세션 정보 요청시 호출 - session 정보 확인이 필요할 때
    // token 객체 정보를 통해 session 객체 설정
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    },
  },
});

/**
 * 사용자 로그인 시도
 * 1️⃣ authrize 함수 실행 : 로그인 성공하면 user 리턴
 * 2️⃣ signIn 실행 : 로그인 플로우 계속 진행할지 확인
 * 3️⃣ jwt 콜백 실행 : 토큰 객체 줄테니까 정보 저장해주면 내가 알아서 관리할게 (만료되면 재발급도 해줄게)
 * 4️⃣ session 콜백 실행 : 브라우저에서 로그인 여부 확인하기 위해 세션 정보 요청할 때 호출
 */
