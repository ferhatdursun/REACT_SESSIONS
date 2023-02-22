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

const initialValueFetch = {
  data: null,
  status: null,
  error: null,
};

export function useFetchData() {
  const [fetchData, setFetchData] = useState(initialValueFetch);

  function onLoading() {
    setFetchData({
      ...initialValueFetch,
      status: "loading",
    });
  }
  function onError(error) {
    setFetchData({
      ...initialValueFetch,
      status: "error",
      error: error,
    });
  }
  function onSuccess(data) {
    setFetchData({
      ...initialValueFetch,
      status: "success",
      data: data,
    });
  }
  return [fetchData, { onError, onLoading, onSuccess }];
}
