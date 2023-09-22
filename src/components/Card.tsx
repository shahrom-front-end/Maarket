// import * as React from 'react';
import Card from "@mui/material/Card";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../reducers/Basket";

export default function ImgMediaCard(props: any) {
  const dispatch = useDispatch();


  return (
    <Card sx={{ maxWidth: 345, borderRadius: "10px" }}>
      <Link to={`/Basket/${props.id}`}>
        <div className="w-[95%] m-auto">
          <div>
            <img className="h-[180px] m-auto p-[7px]" src={props.img} alt="" />
          </div>
          <br />
          <div className="w-[90%] m-auto">
            <h1 className="text-[20px] font-bold hover:text-[#37743e]">{props.price}</h1>
          </div>
          <br />
          <div className="w-[90%] m-auto">
            <h1 className="text-[#ffe347] hover:text-[#37743e] cursor-pointer">
              {props.name} / {props.volume} / {props.standards} /{" "}
              {props.Battery}
            </h1>
          </div>
          <br />
        </div>
      </Link>

      <div className="text-center ">
        <button onClick={()=>dispatch(addProduct(props.e))} className="bg-[#ffda46] hover:text-[#37743e] font-bold   w-[85%] m-auto p-[5px] rounded-lg text-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">
          ADD TO CART
        </button>
      </div>
      <br />
    </Card>
  );
}
