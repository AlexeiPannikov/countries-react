import {MutableRefObject, useEffect} from "react";

export function useClickOutside(ref: MutableRefObject<any>, handler: Function) {
    useEffect(() => {
        const listener = (event: Event) => {
            if (!ref.current || ref.current.contains(event.target)) return;
            handler(event);
        }
        document.addEventListener("click", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("click", listener);
            document.removeEventListener("touchstart", listener);
        }
    })
}