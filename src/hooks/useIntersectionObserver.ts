import { RefObject, useEffect, useState } from "react";

export default function useIntersectionObserver(elementRef : RefObject<Element>, {threshold = 0.1, root = null, rootMargin = "0%"}) {
    // intersectionObserver의 결과값을 저장
    const [entry, setEntry] = useState<IntersectionObserverEntry>();

    const updateEntry = ([entry] : IntersectionObserverEntry[]):void => {
        setEntry(entry);
    };

    useEffect(() => {
        const node = elementRef.current; // 관찰할 값
        const hasIOSupport = !!window.IntersectionObserver; // 현재 브라우저의 intersectionObserver 서포트 유무
        
        if (!node || !hasIOSupport) return; // 관찰할 값이 없거나 브라우저가 지원하지 않는다면 return

        const observerParams = { threshold, root, rootMargin };
        const observer = new IntersectionObserver(updateEntry, observerParams);

        observer.observe(node);

        return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [elementRef?.current, root, rootMargin, JSON.stringify(threshold)]);
    return entry;
}