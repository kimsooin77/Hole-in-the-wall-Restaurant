import { useEffect } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [router, status]);

  return (
    <div className="flex flex-col justify-center px-6 lg:px-8 h-[60vh]">
      <div className="mx-auto w-full max-w-sm">
        <div className="text-primary text-center text-2xl font-semibold italic">
          Hole in the wall
        </div>
        <div className="text-center mt-6 text-2xl font-bold text-gray-600">
          SNS 계정으로 로그인해주세요.
        </div>
        <p className="mt-2 text-center text-sm text-gray-600">
          계정이 없다면 자동으로 회원가입이 진행됩니다.
        </p>
      </div>
      <div className="mt-10 mx-auto w-full max-w-sm">
        <div className="flex flex-col gap-3">
          <button
            type="button"
            className="text-white flex gap-2 bg-[#4285f4] hover:bg-[#4285f4]/90 font-medium rounded-lg w-full px-5 py-4 text-center items-center justify-center"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <AiOutlineGoogle className="w-6 h-6" />
            Sign in With Google
          </button>
          <button
            type="button"
            className="text-white flex gap-3 bg-[#2db400] hover:bg-[#2db400]/90 font-medium rounded-lg w-full px-5 py-4 text-center items-center justify-center"
            onClick={() => signIn("naver", { callbackUrl: "/" })}
          >
            <SiNaver className="w-4 h-4" />
            Sign in With Naver
          </button>
          <button
            type="button"
            className="text-black flex gap-2 bg-[#f2f01b] hover:bg-[#f2f01b]/90 font-medium rounded-lg w-full px-5 py-4 text-center items-center justify-center"
            onClick={() => signIn("kakao", { callbackUrl: "/" })}
          >
            <RiKakaoTalkFill className="w-6 h-6" />
            Sign in With Kakao
          </button>
        </div>
      </div>
    </div>
  );
}
