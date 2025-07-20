import { useDispatch } from "react-redux";
import { useState } from "react";
import { addingButtonHandler, deleteHandler } from "./AddingDeleteMethod";

const useCartHandlers = (item) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleAddClick = () => addingButtonHandler(dispatch, item, setShow);
  const handleRemoveClick = () => deleteHandler(dispatch, item, setShow);

  return { show, setShow, handleAddClick, handleRemoveClick };
};

export default useCartHandlers;
