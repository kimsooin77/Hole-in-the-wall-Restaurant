import { useState } from "react";
import Map from '@/components/Map';
import Markers from '@/components/Markers';
import * as stores from "@/assets/data/store_data.json";
import StoreBox from "@/components/StoreBox";

export default function Home() {
  const storeDatas = stores["DATA"];
  const [map, setMap] = useState(null);
  const [currentStore, setCurrentStore] = useState(null);

  
  return (
    <>
      <Map setMap={setMap} />
      <Markers storeDatas={storeDatas} map={map} setCurrentStore={setCurrentStore} />
      <StoreBox store={currentStore} setStore={setCurrentStore } />
    </>
  )
}
