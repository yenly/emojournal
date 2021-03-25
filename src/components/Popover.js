import React, { useState } from 'react'
import Tippy from '@tippyjs/react'
import { sticky } from 'tippy.js'

import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import 'tippy.js/animations/shift-away-subtle.css'

const defaultTippyProps = {
  animation: 'shift-away-subtle',
  arrow: false,
  interactive: true,
  placement: 'auto',
  delay: [0, 0],
  duration: [350, 200],
  maxWidth: 280,
  appendTo: document.body,
  sticky: true,
  plugins: [sticky],
  theme: 'light',
  inertia: true
}

const Popover = ({ children, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => {
    setIsOpen(true)
  }
  const close = () => {
    setIsOpen(false)
  }

  const tippyContent = content({ close })
  const tippyChildren = children({ open })

  function onHide() {
    if (isOpen) {
      close()
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
  )
}

export default Popover
