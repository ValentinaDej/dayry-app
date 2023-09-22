import React, { useState, useEffect } from "react";

import { DayryItems } from "../DayryItems/DayryItems";
import { CommentItems } from "../CommentItems/CommentItems";

export const Content = () => {
  const [itemName, setItemName] = useState("");
  const [commentName, setCommentName] = useState("");
  const [commentNumber, setCommentNumber] = useState("");
  const [commentColor, setCommentColor] = useState("#000000");
  const [savedItems, setSavedItems] = useState([]);
  const [savedComments, setSavedComments] = useState([]);

  useEffect(() => {
    const activeItem = JSON.parse(localStorage.getItem("activeItem"));
    const savedItemsStr = JSON.parse(localStorage.getItem("items"));
    const activeItemComments = savedItemsStr?.find(
      (item) => item.id === activeItem?.id
    );

    if (activeItem) {
      setCommentNumber(activeItem.id);
    }

    if (savedItemsStr) {
      setSavedItems(savedItemsStr);
    }

    if (activeItemComments) {
      setSavedComments(activeItemComments?.comments);
    }
  }, []);

  const handleAction = (e, isComment) => {
    e.preventDefault();
    if (isComment) {
      addComment();
    } else {
      addItem();
    }
  };

  const geItemId = () => {
    return Date.now();
  };

  const getCommentId = (activeItem) => {
    let lastCommentId = 0;

    if (activeItem?.comments?.length > 0) {
      const lastComment = activeItem.comments[activeItem.comments.length - 1];
      lastCommentId = parseInt(lastComment.id.split("-")[1], 10) + 1;
    }

    return `${activeItem?.id}-${lastCommentId}`;
  };

  const addCommentToItems = (activeItem, newComment) => {
    const targetItemIndex = savedItems.findIndex(
      (item) => item.id === activeItem.id
    );

    if (targetItemIndex !== -1) {
      savedItems.splice(targetItemIndex, 1, activeItem);
    }

    localStorage.setItem("items", JSON.stringify(savedItems));

    const updatedItems = [...savedComments, newComment];
    setSavedComments(updatedItems);
    setCommentName("");
  };

  const addCommentToActiveItem = (activeItem, newComment) => {
    activeItem.comments.push(newComment);
    localStorage.setItem("activeItem", JSON.stringify(activeItem));
  };

  const addItem = () => {
    if (itemName.trim() !== "") {
      const id = geItemId();
      const newItem = {
        id,
        name: itemName.trim(),
        comments: [],
      };

      const updatedItems = [...savedItems, newItem];

      localStorage.setItem("items", JSON.stringify(updatedItems));
      localStorage.setItem("activeItem", JSON.stringify(newItem));

      setSavedItems(updatedItems);
      setCommentNumber(id);
      setItemName("");
      setSavedComments([]);
    }
  };

  const addComment = () => {
    if (commentName.trim() !== "") {
      const activeItem = JSON.parse(localStorage.getItem("activeItem"));

      const id = getCommentId(activeItem);
      const newComment = {
        id,
        name: commentName.trim(),
        color: commentColor,
      };

      addCommentToActiveItem(activeItem, newComment);
      addCommentToItems(activeItem, newComment);
    }
  };

  const handleItemSelect = (index) => {
    setCommentNumber(index);

    const foundItem = savedItems?.find((item) => item.id === index);
    if (foundItem) {
      localStorage.setItem("activeItem", JSON.stringify(foundItem));
      setSavedComments(foundItem?.comments);
    }
  };

  const moveToLastItem = (updatedItems) => {
    const lastItem = updatedItems[updatedItems.length - 1];

    if (lastItem) {
      handleItemSelect(lastItem.id);
    } else {
      localStorage.removeItem("activeItem");
      setCommentNumber("");
      setSavedComments([]);
    }
  };

  const deleteItem = (index, e) => {
    e.stopPropagation();

    const updatedItems = [...savedItems];
    updatedItems.splice(index, 1);

    localStorage.setItem("items", JSON.stringify(updatedItems));
    setSavedItems(updatedItems);

    moveToLastItem(updatedItems);
  };

  return (
    <>
      <DayryItems
        items={savedItems}
        onDelete={deleteItem}
        onItemSelect={handleItemSelect}
        itemName={itemName}
        setItemName={setItemName}
        onAction={(e) => handleAction(e, false)}
        commentNumber={commentNumber}
      />
      <CommentItems
        commentNumber={commentNumber}
        savedComments={savedComments}
        commentName={commentName}
        setCommentName={setCommentName}
        commentColor={commentColor}
        setCommentColor={setCommentColor}
        onAction={(e) => handleAction(e, true)}
      />
    </>
  );
};
