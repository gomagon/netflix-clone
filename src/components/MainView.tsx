import React, { useEffect, useState } from "react";
import { HeartIcons } from "./HeartIcons";
import style from "./css/MainView.module.css";
import ReactPlayer from "react-player/youtube";
import { rdxGetMainview } from "../redux/mainviewSlice";
import { rdxGetModal } from "../redux/modalSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Values } from "../values/Values";
import { rdxSetMylist, rdxGetMylist } from "../redux/mylistSlice";
import { Modal } from "./Modal";

export const MainView: React.FC = () => {
  //redux
  const rdxMainview = useAppSelector(rdxGetMainview);
  const rdxModal = useAppSelector(rdxGetModal);
  const rdxMylist = useAppSelector(rdxGetMylist);
  const rdxDispatch = useAppDispatch();
  //useState. used only in this file
  const [isExist, setIsExist] = useState(false);

  let url;
  if (rdxMainview && rdxMainview.youtube_key !== "")
    url = `${Values.YOUTUBE_BASE_URL}${rdxMainview.youtube_key}`;

  const addList = () => {
    const newlist = [...rdxMylist];
    newlist.push(rdxMainview);
    return newlist;
  };
  const deleteList = () => {
    const newlist = rdxMylist.filter((item) => {
      return item.id !== rdxMainview.id;
    });
    return newlist;
  };
  const addButtonFunc = () => {
    rdxDispatch(rdxSetMylist(addList()));
    setIsExist(true);
  };
  const deleteButtonFunc = () => {
    rdxDispatch(rdxSetMylist(deleteList()));
    setIsExist(false);
  };

  useEffect(() => {
    let isExist = false;
    rdxMylist.forEach((item) => {
      if (item.id === rdxMainview.id) {
        isExist = true;
      }
    });
    if (isExist) setIsExist(true);
    else setIsExist(false);
  }, [rdxMainview, rdxMylist]);

  return (
    <section className={style.Container} id="MainView">
      <div className={style.LeftDiv}>
        <div className={style.DescDiv}>
          <span className={style.TitleSpan}>{rdxMainview.title}</span>
          <div className={style.InfoDiv}>
            <div className={style.InfoSubDiv}>
              <HeartIcons value={rdxMainview.vote_average} />
              <span>avg: {rdxMainview.vote_average}</span>
            </div>
            <span>release: {rdxMainview.release_date}</span>
          </div>
          <span className={style.OverveiwSpan}>{rdxMainview.overview}</span>
          {isExist ? (
            <button
              className={style.Button__Delete}
              onClick={deleteButtonFunc}
              children="- delete"
            />
          ) : (
            <button className={style.Button__Add} onClick={addButtonFunc} children="+ add" />
          )}
        </div>
      </div>
      <div className={style.MovieDiv}>
        <ReactPlayer url={url} playing playsinline loop muted height="100%" width="100%" />
        <div className={style.MovieDiv__Black} />
      </div>
      {rdxModal && <Modal />}
    </section>
  );
};
