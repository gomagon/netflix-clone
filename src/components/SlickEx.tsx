import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./css/SlickEx.module.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const settings_default = {
  dots: false,
  infinite: true,
  speed: 1200,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <AiFillCaretRight color="#CCCCCC" />,
  prevArrow: <AiFillCaretLeft color="#CCCCCC" />,
};

type propsType = {
  children: React.ReactNode;
  item_count: number;
};

export const SlickEx: React.FC<propsType> = (props: propsType) => {
  const count = props.item_count > 5 ? 5 : props.item_count;
  const settings = { ...settings_default, slidesToShow: count, slidesToScroll: count };

  return (
    <Slick
      className={
        count === 1
          ? style.Slick__1
          : count === 2
          ? style.Slick__2
          : count === 3
          ? style.Slick__3
          : count === 4
          ? style.Slick__4
          : style.Slick
      }
      {...settings}
    >
      {props.children}
    </Slick>
  );
};
