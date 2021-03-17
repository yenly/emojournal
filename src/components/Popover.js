import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import { sticky } from "tippy.js";

import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";
import "tippy.js/animations/shift-away-subtle.css";

const defaultTippyProps = {
  animation: "shift-away-subtle",
  arrow: true,
  interactive: true,
  interactiveBorder: 10,
  placement: "bottom",
  delay: [0, 0],
  duration: [200, 150],
  maxWidth: 500,
  appendTo: document.body,
  sticky: true,
  plugins: [sticky],
  theme: "material",
  inertia: true
};

const Popover = ({ children, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  const tippyContent = content({ close });
  const tippyChildren = children({ open });

  function onHide() {
    if (isOpen) {
      close();
    }
  }

  return (
    <Tippy
      content={tippyContent}
      {...defaultTippyProps}
      visible={isOpen}
      onHide={onHide}
    >
      {tippyChildren}
    </Tippy>
  );
};

export default Popover;
