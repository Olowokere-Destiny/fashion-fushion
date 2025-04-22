import { useEffect, useState, RefObject } from "react";

const useIsTopVisibleOnce = (ref: RefObject<HTMLElement>): boolean => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && !hasBeenVisible) {
        const { top } = ref.current.getBoundingClientRect();
        if (top >= 0 && top <= window.innerHeight) {
          setHasBeenVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, hasBeenVisible]);

  return hasBeenVisible;
};

export default useIsTopVisibleOnce;