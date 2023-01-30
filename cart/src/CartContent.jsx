import React, { useState, useEffect } from "react";
import MiniCart from "./MiniCart";
import Login from "./Login";
import { jwt } from "./cart";

export default function CartContent() {
	const [token, setToken] = useState();


  useEffect(() => {
    return jwt.subscribe(val => setToken(val ?? ""));
  }, []);

	return (
		<div>
			<div>JWT: {token}</div>
			<Login />
      <MiniCart />
		</div>
	);
}
