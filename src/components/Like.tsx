import { StoreType } from "@/interface";
import axios from "axios";
import { useSession } from "next-auth/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

interface LikeProps {
  storeId: number;
}

export default function Like({ storeId }: LikeProps) {
  const { data: session } = useSession();
  const fetchStore = async () => {
    const { data } = await axios(`/api/stores?id=${storeId}`);
    return data as StoreType;
  };

  const { data: store } = useQuery(`like-store-${storeId}`, fetchStore, {
    enabled: !!storeId,
    refetchOnWindowFocus: false,
  });

  const toggleLike = async () => {
    // 찜하기 / 찜 취소
    if (session?.user && store) {
      try {
        const like = await axios.post("/api/likes", {
          storeId: store.id,
        });

        console.log(like);
        if (like.status === 201) {
          toast.success("가게를 찜했습니다.");
        } else {
          toast.warn("찜을 삭제했습니다.");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <button type="button" onClick={toggleLike}>
      {/* 로그인 된 사용자가 좋아요를 눌렀을 경우 */}
      {store?.likes?.length ? (
        <AiFillHeart className="hover:text-red-600 focus:text-red-600 text-red-500" />
      ) : (
        <AiOutlineHeart className="hover:text-red-600 focus:text-red-600" />
      )}
    </button>
  );
}
