import { StoreType } from "@/interface";
import axios from "axios";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useQuery } from "react-query";

interface LikeProps {
  storeId: number;
}

export default function Like({ storeId }: LikeProps) {
  const fetchStore = async () => {
    const { data } = await axios(`/api/stores?id=${storeId}`);
    return data as StoreType;
  };

  const {
    data: store,
    isFetching,
    isSuccess,
    isError,
  } = useQuery(`like-store-${storeId}`, fetchStore, {
    enabled: !!storeId,
    refetchOnWindowFocus: false,
  });

  const toggleLike = () => {
    // 찜하기 / 찜 취소
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
