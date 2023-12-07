import { mapState } from "@/atom";
import { useState } from "react";
import { MdOutlineMyLocation } from "react-icons/md";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";

export default function CurrentLocationButton() {
  const [loading, setLoading] = useState<boolean>(false);
  const map = useRecoilValue(mapState);

  const handleCurrentPosition = () => {
    setLoading(true);

    const options = {
      enableHighAccuracy: false, // 정확도 높은 포지션 여부
      timeout: 5000, // 장치가 위치를 반환하기 위해 허용되는 최대 시간
      maximumAge: Infinity, // 캐시된 위치의 최대 수명
    };

    if (navigator.geolocation && map) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentPosition = new window.kakao.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );

          if (currentPosition) {
            setLoading(false);
            map.panTo(currentPosition);
            toast.success("현재 위치로 이동되었습니다.");
          }
          return currentPosition;
        },
        () => {
          toast.error("현재 위치를 가져올 수 없습니다.");
          setLoading(false);
        },
        options
      );
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed w-full top-0 inset-x-0 h-screen flex flex-col justify-center bg-black/60 z-50">
          <div className="animate-spin w-10 h-10 text-blue-400 rounded-full border-[4px] m-auto borde-t-transparent border-current" />
        </div>
      )}
      <button
        type="button"
        onClick={handleCurrentPosition}
        className="fixed z-10 p-2 shadow right-5 bottom-20 bg-white-100 rounded-md hover:shadow-lg focus:shadow-lg hover:bg-blue-200"
      >
        <MdOutlineMyLocation className="w-5 h-5" />
      </button>
    </>
  );
}
