import React from "react";
import s from "./Top.module.css";
// import backgroundTop from "../../../assets/images/Bgtop.png";
import masterCard from "../../../assets/images/mastercard.png";
// import {
// 	Link
// } from 'react-router-dom';


function Top({ setIsVisible }) {
	const info = {
		mainText: 'Чіп Чендж',
		text: 'Обмінник валют - навчальний',
		nameButton: 'Конвертер валют',
		imgAlt: "Фото банківської карти",
		img: masterCard
	}
	return (
		<div className={s.item}>
			<section className={s.item_wrapper}>
				<div className={s.item_description} >
					<p className={s.item_main_text}>{info.mainText}</p>
					<p className={s.item_text}>{info.text}</p>
					<input className={s.item_description_button} type="button" value={info.nameButton} onClick={() => setIsVisible(true)} />
				</div>
				<div className={s.item_img_area}>
					<img src={info.img} alt={info.imgAlt} />
				</div>
			</section>
		</div>
	)
}
export { Top }