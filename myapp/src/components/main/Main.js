import React from "react";
import s from "./Main.module.css"
import { Top } from "./top/Top.js";
import { Middle } from "./middle/Middle.js";
import { Convert } from "./convert/Convert.js";
import { History } from "./history/History.js";

function Main() {
	return (
		<div className={s.main}>
			<div className={s.main_wrapper}>
				<Top />
				<Middle />
				<Convert />
				<History />
			</div>
		</div>
	);
}

export { Main };

