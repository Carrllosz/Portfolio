// src/utils/ScrollToSectionOnLoad.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSectionOnLoad = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sectionId = params.get("section");

    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        // Timeout para esperar DOM renderizar
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

export default ScrollToSectionOnLoad;
