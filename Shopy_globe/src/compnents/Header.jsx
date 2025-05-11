import React from "react";
import shop from "../assets/shop.svg";
import { Link, Links } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
      const cart = useSelector((state) => state.cart)
  return (
    <div className="text-3xl flex w-full justify-between px-10 py-4 bg-emerald-400">
        <Link to={"/"}>
        <h1>Shopy Globe</h1>
        </Link>
        <Link to={"/cart"}>
        <div className="flex">
        <img src={shop} alt="" height={40} width={40}/>
        <sup className="text-sm text-white rounded-4xl">{cart.cart.length}</sup>
        </div>
        </Link>

    </div>
  );
};

export default Header;
