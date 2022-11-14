import React, { useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import style from "./css/HeartIcons.module.css";

type propsType = {
  value: number;
};

export const HeartIcons: React.FC<propsType> = ({ value }) => {
  const val1 = Math.floor((value * 10) / 20);
  const val2 = 100 - (((value * 10) % 20) / 20) * 100;

  useEffect(() => {
    const ref = document.getElementById("BlackDiv");
    if (ref) ref.style.width = `${val2}%`;
  }, [val2]);

  return (
    <div className={style.AreaDiv}>
      {Array(val1)
        .fill(0)
        .map((_, index) => (
          <AiFillHeart key={index} />
        ))}
      <div className={style.LastDiv}>
        <AiFillHeart />
        <div className={style.BlackDiv} id="BlackDiv" />
      </div>
    </div>
  );
};
