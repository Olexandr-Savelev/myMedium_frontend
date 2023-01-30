import { useEffect, useState } from "react";

export const useMounted = (opened: boolean): boolean => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
    }
    if (!opened) {
      setTimeout(() => {
        setMounted(false);
      }, 300);
    }
  }, [opened]);

  return mounted;
};
