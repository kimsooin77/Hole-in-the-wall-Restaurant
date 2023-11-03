import Link from "next/link";
import { useState } from "react";
import { HiMenu } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai";
import Logo  from "../component/assets/Logo.svg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="navbar">
                <Logo className="navbar_logo"  />
                <div className="navbar_list">
                    <Link href="/stores" className="navbar_list_item">맛집 목록</Link>
                    <Link href="/stores/new" className="navbar_list_item">맛집 등록</Link>
                    <Link href="/users/likes" className="navbar_list_item">찜한 가게</Link>
                    <Link href="/users/login" className="navbar_list_item">로그인</Link>
                </div>
                <div role="presentation" className="navbar_button" onClick={() => setIsOpen(val => !val)}>
                    {isOpen ? <AiOutlineClose size="20px" /> : <HiMenu size="20px" />}
                </div>
            </div>
            {isOpen && (
                <div className="navbar_mobile">
                <div className="navbar_list_mobile">
                    <Link href="/stores" className="navbar_list_item_mobile">맛집 목록</Link>
                    <Link href="/stores/new" className="navbar_list_item_mobile">맛집 등록</Link>
                    <Link href="/users/likes" className="navbar_list_item_mobile">찜한 가게</Link>
                    <Link href="/users/login" className="navbar_list_item_mobile">로그인</Link>
                </div>
            </div>
            )}
        </>
    )
}