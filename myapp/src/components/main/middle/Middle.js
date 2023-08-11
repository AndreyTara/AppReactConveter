import React from "react";
import s from "./Middle.module.css";
import PC_hand from "../../../assets/images/PC_hand.png";


function Middle({ setIsVisible }) {
	const info = {
		mainText: 'Конвертер валют',
		text: 'Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.',
		nameButton: 'Конвертер валют',
		imgAlt: "Конвертувати валюту",
		img: PC_hand
	}

	return (
		<div className={s.item} >
			<section className={s.item_wrapper} >
				<div className={s.item_description} >
					<p className={s.item_main_text}>{info.mainText}</p>
					<p className={s.item_text}>{info.text}</p>
					<input className={s.item_description_button} type="button" value={info.nameButton} onClick={() => setIsVisible(false)} />
				</div >
				<div className={s.item_img_area} >
					<img src={info.img} alt={info.imgAlt} />
				</div >
			</section >
		</div >
	)
}
export { Middle }