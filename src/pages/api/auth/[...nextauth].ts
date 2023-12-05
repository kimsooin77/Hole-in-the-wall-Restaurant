import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/db";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions: NextAuthOptions = {
  session: {
    // jwt기반의 session 사용 명시
    strategy: "jwt" as const,
    // session의 최대 수명 - 30 days
    maxAge: 30 * 24 * 60 * 60,
    // session을 업데이트하는 주기
    updateAge: 60 * 60 * 2,
  },
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || "",
      clientSecret: process.env.NAVER_CLIENT_SECRET || "",
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  pages: {
    signIn: "/users/login",
  },
  callbacks: {
    // 세션을 관리하거나 세션 객체를 수정하여 사용자 정보를 유지 or 업데이트
    // 사용자가 로그인 한 후 세션을 유지하는 동안 세션 객체를 어떻게 수정할 것인지 정의하는 콜백함수
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        // 사용자의 id를 token의 sub 속성으로 설정
        id: token.sub,
      },
    }),
    // jwt토큰을 생성하고 사용자 정보를 포함하는 콜백
    jwt: async ({ user, token }) => {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
