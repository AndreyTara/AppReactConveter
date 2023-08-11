import React from "react";
import s from "./Main.module.css"
import { Top } from "./top/Top.js";
import { Middle } from "./middle/Middle.js";
import { Convert } from "./convert/Convert.js";
import { History } from "./history/History.js";
import { useState } from "react";

function Main() {
	const [history, setHistory] = useState([]);
	const [isVisible, setIsVisible] = useState(true);

	return (
		<section className={s.main}>
			<article className={s.main_wrapper}>
				<Top setIsVisible={setIsVisible} />
				<article className={isVisible ? s.displayBlock : s.displayNone}>
					<Middle setIsVisible={setIsVisible} />
				</article>
				<article className={isVisible ? s.displayNone : s.displayBlock}>
					<Convert history={history} setHistory={setHistory} />
					<History history={history} setHistory={setHistory} />
				</article>
			</article>
		</section >
	);
}

export { Main };

