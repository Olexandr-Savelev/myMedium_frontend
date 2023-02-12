import { useEffect } from "react";

interface IListeningKeys {
  [key: string]: () => void;
}

const useKeydown = (listeningKeys: IListeningKeys) => {
  useEffect(() => {
    const keydownListener = (event: KeyboardEvent) => {
      for (let key in listeningKeys) {
        if (event.key === key) {
          listeningKeys[key]();
        }
      }
    };
    document.addEventListener("keydown", keydownListener);
    return () => {
      document.removeEventListener("keydown", keydownListener);
    };
  });
};

export default useKeydown;
