import React from "react";
import s from "./Enter.module.css";
import enterOffice from "../../../assets/icons/enter.svg";

function Enter() {
	return (
		<div className={s.enter}>
			<div className={s.enter_wrapper}>
				<img src={enterOffice} alt="enterOffice" width={20} height={22} />
				<p className={s.enter_text}>Особистий кабінет</p>
			</div>

		</div>
	)
}
export { Enter }