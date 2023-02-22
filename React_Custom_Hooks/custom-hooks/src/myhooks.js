import { useState } from "react";

export function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  function onOpen() {
    if (!isOpen) {
      setIsOpen(true);
    }
  }
  function onClose() {
    setIsOpen(false);
  }
  function onToggle() {
    setIsOpen(!isOpen);
  }
  return [isOpen, { onOpen, onClose, onToggle }];
}
