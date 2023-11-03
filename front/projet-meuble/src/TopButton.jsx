
import React, { useState, useEffect } from "react";

export default function TopButton() {
    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    
    document.documentElement.scrollTop = 0;
  };

  return (
    <div>
      {showButton && (
        <button id="myBtn" onClick={scrollToTop} style={{ display: "block" }}>
          Top
        </button>
      )}
    </div>
  )
}
