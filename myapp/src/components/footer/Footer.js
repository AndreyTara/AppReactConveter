import React from "react";
import s from './Footer.module.css'
import { Logo } from "./logo/Logo.js";
import { Nav } from "./nav/Nav.js";
import { Mobile } from "./mobile/Mobile.js";
import { Phone } from "./phone/Phone.js";
import { Social } from "./social/Social.js";

function Footer() {
	return (
		<div className={s.footer} >
			<div className={s.footer_wrapper}>
				<Logo />
				<Nav />
				<Mobile />
				<Phone />
				<Social />
			</div>
		</div >
	);
}

export { Footer };
