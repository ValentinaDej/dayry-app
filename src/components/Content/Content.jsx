import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { DayryItems } from "../DayryItems/DayryItems";
import { CommentItems } from "../CommentItems/CommentItems";

import classes from "./Content.module.scss";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem();
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    addComment();
  };

  const addItem = () => {
    if (itemName.trim() !== "") {
      const id = Date.now();
      const newItem = {
        id,
        name: itemName,
        comments: [],
      };

      const updatedItems = [...savedItems, newItem];
      setSavedItems(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));
      localStorage.setItem("activeItem", JSON.stringify(newItem));
      setCommentNumber(id);
      setItemName("");
      setSavedComments([]);
    }
  };

  const addComment = () => {
    if (commentName.trim() !== "") {
      const activeItem = JSON.parse(localStorage.getItem("activeItem"));

      let lastCommentId = 0;

      if (activeItem?.comments?.length > 0) {
        const lastComment = activeItem.comments[activeItem.comments.length - 1];
        lastCommentId = parseInt(lastComment.id.split("-")[1], 10) + 1;
      }

      const id = `${activeItem?.id}-${lastCommentId}`;
      const newComment = {
        id,
        name: commentName,
        color: commentColor,
      };

      activeItem.comments.push(newComment);
      localStorage.setItem("activeItem", JSON.stringify(activeItem));

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
    }
  };

  const handleItemSelect = (index) => {
    setCommentNumber(index);
    const foundItem = savedItems?.find((item) => item.id === index);

    if (foundItem) {
      localStorage.setItem("activeItem", JSON.stringify(foundItem));
    }

    const activeItem = JSON.parse(localStorage.getItem("activeItem"));
    if (activeItem) {
      setSavedComments(activeItem?.comments);
    }
  };

  const deleteItem = (index, e) => {
    e.stopPropagation();
    const updatedItems = [...savedItems];
    updatedItems.splice(index, 1);
    setSavedItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));

    const lastItem = updatedItems[updatedItems.length - 1];
    if (lastItem) {
      handleItemSelect(lastItem.id);
    } else {
      localStorage.removeItem("activeItem");
      setCommentNumber("");
      setSavedComments([]);
    }
  };
  return (
    <>
      <DayryItems
        items={savedItems}
        onDelete={deleteItem}
        onItemSelect={handleItemSelect}
        itemName={itemName}
        setItemName={setItemName}
        handleSubmit={handleSubmit}
        commentNumber={commentNumber}
      />
      <CommentItems
        commentNumber={commentNumber}
        savedComments={savedComments}
        commentName={commentName}
        setCommentName={setCommentName}
        commentColor={commentColor}
        setCommentColor={setCommentColor}
        handleSubmitComment={handleSubmitComment}
      />
    </>
  );
};

Content.propTypes = {};
