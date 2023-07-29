import React from "react";
import { Logo } from "./logo/Logo.js";
import { Nav } from "./nav/Nav.js";
import { Enter } from "./enter/Enter.js";
import s from "./Header.module.css"

function Header() {

	return (
		<div className={s.header}>
			<div className={s.header_wrapper}>
				<Logo />
				<Nav />
				<Enter />
			</div>
		</div>
	);
}

export { Header };
