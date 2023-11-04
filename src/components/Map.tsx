/*global kakao*/
import Script from "next/script";
import * as stores from "@/assets/data/store_data.json";

declare global {
  interface Window {
    kakao: any;
  }
}

const DEFAULT_LAT = 37.497625203;
const DEFAULT_LNG = 127.03088379;

export default function Map() {
    const loadKakaoMap = () => {
        window.kakao.maps.load(() => {
            const mapContainer = document.getElementById("map");
            const mapOption = {
                center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
                level: 3
            };
            const map = new window.kakao.maps.Map(mapContainer, mapOption);

            stores?.["DATA"]?.map((store) => {

                var imageSrc = store?.bizcnd_code_nm
                    ? `/image/makers/${store?.bizcnd_code_nm}.png`
                    : "/image/makers/default.png",
                    imageSize = new window.kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
                    imageOption = {offset: new window.kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                
                // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
                markerPosition = new window.kakao.maps.LatLng(store.y_dnts, store.x_cnts); // 마커가 표시될 위치입니다

                // 마커가 표시될 위치입니다 
                var markerPosition  = new window.kakao.maps.LatLng(store.y_dnts, store.x_cnts); 

                // 마커를 생성합니다
                var marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                    image : markerImage,
                });

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);

            })
        });
    };
    return (
    <>
        <Script
            strategy="afterInteractive"
            type="text/javascript"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
            onReady={loadKakaoMap} />      
        <div id="map" className="w-full h-screen"></div>      
    </>
    )
}