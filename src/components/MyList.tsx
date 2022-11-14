import React from "react";
import { useAppSelector } from "../redux/hooks";
import style from "./css/CommonListView.module.css";
import { rdxGetMylist } from "../redux/mylistSlice";
import { Image } from "./Image";
import { SlickEx } from "./SlickEx";

export const MyList: React.FC = () => {
  //redux
  const rdxMylist = useAppSelector(rdxGetMylist);

  return (
    <section className={style.Container} id="MyList">
      <h3>My List</h3>
      <SlickEx item_count={rdxMylist.length}>
        {rdxMylist.map((item) => (
          <div key={item.title}>
            <Image {...item} />
          </div>
        ))}
      </SlickEx>
    </section>
  );
};
