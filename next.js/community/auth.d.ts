export declare module "@auth/core/types" {
  interface User {
    type: string;
    accessToken: string;
    refreshToken: string;
  }
  interface Session {
    type: string;
    accessToken: string;
    refreshToken: string;
  }
}
export declare module "@auth/core/jwt" {
  interface JWT {
    accessToken: string;
    refreshToken: string;
  }
}
