"use client";

import React from "react";
import Typed from "typed.js";

const TypedText = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [text],
      typeSpeed: 80,
      loop: false,
      backSpeed: 50,
      showCursor: false,
      startDelay: delay,
    });

    return () => {
      typed.destroy();
    };
  }, [text, delay]);

  return <span className={className} ref={el} />;
};

export default TypedText;
