import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Favorites() {
  const fav = useSelector((state) => state.favoriteReducer.favorites);
  const dispatch = useDispatch();
  console.log(fav)

  return <>
  fff
  {fav.map((item)=>{return(<p>{item.name}</p>)})}
  </>;
}

export default Favorites;
