import React from "react";
import s from "./Mobile.module.css";
import iconMobile from "../../../assets/icons/mobile.png";

function Mobile() {
	const info = {
		title: 'mobile',
		icon: iconMobile,
		width: 10,
		height: 16,
		textNum: "3773",
		textStr: "Цілодобова підтримка"
	}

	return (
		<div className={s.mobile}>
			<div className={s.mobile_wrapper}>
				<img className={s.mobile_img}src={info.icon} alt={info.title} width={info.width} height={info.height} />
				<div className={s.mobile_section}>
					<p className={s.mobile_textNum}>{info.textNum}</p>
					<p className={s.mobile_textStr}>{info.textStr}</p>
				</div>
			</div>
		</div>
	)
}
export { Mobile }