import { useState, useLayoutEffect } from "react";

// windowサイズを取得
const useWindowSize = (): number[] => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};

export default useWindowSize;
