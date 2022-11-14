import React, { useEffect, useState } from "react";
import style from "./css/Header.module.css";
import { rdxSetModal } from "../redux/modalSlice";
import { useAppDispatch } from "../redux/hooks";

const scrollTop = (): number => {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
};

export const Header: React.FC = () => {
  //redux
  const rdxDispatch = useAppDispatch();
  //useState used only in this file
  const [hideHeader, setHideHeader] = useState(false);

  const onScroll = () => {
    if (scrollTop() < 80) {
      setHideHeader(false);
    } else {
      setHideHeader(true);
    }
  };

  const searchButtonFunc = () => {
    rdxDispatch(rdxSetModal(true));
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${style.Container} ${hideHeader && style.Container__Hide}`} id="header">
      <span>NETFLIX</span>
      <button className={style.Button__Search} onClick={searchButtonFunc}>
        search
      </button>
    </header>
  );
};
