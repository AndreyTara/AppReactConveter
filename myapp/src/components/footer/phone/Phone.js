import React from "react";
import s from "./Phone.module.css";
import iconPhone from "../../../assets/icons/phone.png";

function Phone() {
	const info = {
		title: 'phone',
		icon: iconPhone,
		width: 16,
		height: 16,
		textNum: "8 800 111 22 23",
		textStr: "Безкожтовно для дзвінків в межах України"
	}

	return (
		<div className={s.item}>
			<div className={s.item_wrapper}>
				<img className={s.item_img} src={info.icon} alt={info.title} width={info.width} height={info.height} />
				<div className={s.item_section}>
					<p className={s.item_textNum}>{info.textNum}</p>
					<p className={s.item_textStr}>{info.textStr}</p>
				</div>
			</div>
		</div>
	)
}
export { Phone }