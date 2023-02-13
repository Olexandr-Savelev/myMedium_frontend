import { useEffect } from "react";

const useOutsideClick = (
  element: HTMLDivElement | null,
  handler: () => void
) => {
  useEffect(() => {
    const callHandlerOnOutsideClick = (event: MouseEvent) => {
      if (element) {
        if (!element.contains(event.target as Node)) {
          console.log("123");
          handler();
        }
      }
    };
    document.addEventListener("click", callHandlerOnOutsideClick);
    return () => {
      document.removeEventListener("click", callHandlerOnOutsideClick);
    };
  }, [element]);
};

export default useOutsideClick;
