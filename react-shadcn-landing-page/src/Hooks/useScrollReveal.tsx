import { useEffect } from "react";

export function useScrollReveal(offset = 100) {

  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animate");

    function handleScroll() {
      const windowHeight = window.innerHeight;

      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - offset) {
          el.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Page load par bhi check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);
  
}