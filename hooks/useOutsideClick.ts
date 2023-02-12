import { useEffect } from "react";

const useOutsideClick = (
  element: HTMLDivElement | null,
  handler: () => void
) => {
  useEffect(() => {
    const closeModalOnOutsideClick = (event: MouseEvent) => {
      if (element) {
        if (!element.contains(event.target as Node)) {
          handler();
        }
      }
    };
    document.addEventListener("click", closeModalOnOutsideClick);
    return () => {
      document.removeEventListener("click", closeModalOnOutsideClick);
    };
  }, [element]);
};

export default useOutsideClick;
