import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../public/image/Logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, status } = useSession();
  return (
    <>
      <div className="navbar">
        <Link href="/">
          <Logo className="navbar_logo" />
        </Link>
        <div className="navbar_list">
          <Link href="/stores" className="navbar_list_item">
            맛집 목록
          </Link>
          <Link href="/stores/new" className="navbar_list_item">
            맛집 등록
          </Link>
          <Link href="/users/likes" className="navbar_list_item">
            찜한 가게
          </Link>
          <Link href="/users/mypage" className="navbar_list_item">
            마이페이지
          </Link>
          {status === "authenticated" ? (
            <button type="button" onClick={() => signOut()}>
              로그아웃
            </button>
          ) : (
            <Link href="/api/auth/signin" className="navbar_list_item">
              로그인
            </Link>
          )}
        </div>
        <div
          role="presentation"
          className="navbar_button"
          onClick={() => setIsOpen((val) => !val)}
        >
          {isOpen ? <AiOutlineClose size="20px" /> : <HiMenu size="20px" />}
        </div>
      </div>
      {isOpen && (
        <div className="navbar_mobile">
          <div className="navbar_list_mobile">
            <Link
              href="/stores"
              className="navbar_list_item_mobile"
              onClick={() => setIsOpen(false)}
            >
              맛집 목록
            </Link>
            <Link
              href="/stores/new"
              className="navbar_list_item_mobile"
              onClick={() => setIsOpen(false)}
            >
              맛집 등록
            </Link>
            <Link
              href="/users/likes"
              className="navbar_list_item_mobile"
              onClick={() => setIsOpen(false)}
            >
              찜한 가게
            </Link>
            <Link
              href="/users/mypage"
              className="navbar_list_item_mobile"
              onClick={() => setIsOpen(false)}
            >
              마이페이지
            </Link>
            {status === "authenticated" ? (
              <button
                type="button"
                onClick={() => {
                  signOut();
                  setIsOpen(false);
                }}
              >
                로그아웃
              </button>
            ) : (
              <Link
                href="/api/auth/signin"
                className="navbar_list_item_mobile"
                onClick={() => setIsOpen(false)}
              >
                로그인
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
