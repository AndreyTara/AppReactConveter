import React from "react";
import logo from "../../../assets/icons/logo.svg";
import s from "./Logo.module.css";

function Logo() {
	return (
		<div className={s.logo}>
			<div className={s.logo_wrapper}>
				<img src={logo} alt="logo" width={23} height={23} />
				<p className={s.logo_text}>Чип Чендж</p>
				
			</div>
		</div>
	)
}
export { Logo }