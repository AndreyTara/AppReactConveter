import React from "react";
import s from "./History.module.css";
import arrowRight from "../../../assets/images/arrowRight.svg";
// import {
// 	BrowserRouter,
// 	Link
// } from 'react-router-dom';

function History() {
	const items = [
		{
			date: '10-10-2022',
			count: '1000',
			currenty: 'UAH',
			countConvert: '100',
			currentyConvert: 'USA',
		},
		{
			date: '10-10-2022',
			count: '1000',
			currenty: 'UAH',
			countConvert: '100',
			currentyConvert: 'USA',
		},
		{
			date: '10-10-2022',
			count: '1000',
			currenty: 'UAH',
			countConvert: '100',
			currentyConvert: 'USA',
		},
		{
			date: '10-10-2022',
			count: '1000',
			currenty: 'UAH',
			countConvert: '100',
			currentyConvert: 'USA',
		},
		{
			date: '10-10-2022',
			count: '1000',
			currenty: 'UAH',
			countConvert: '100',
			currentyConvert: 'USA',
		},
		{
			date: '10-10-2022',
			count: '1000',
			currenty: 'UAH',
			countConvert: '100',
			currentyConvert: 'USA',
		},
		{
			date: '10-10-2022',
			count: '1000',
			currenty: 'UAH',
			countConvert: '100',
			currentyConvert: 'USA',
		},
		{
			date: '10-10-2022',
			count: '1000',
			currenty: 'UAH',
			countConvert: '100',
			currentyConvert: 'USA',
		}
	]

	return (
		<section className={s.item} >
			<div className={s.item_wrapper} >
				<div className={s.item_description} >
					<div className={s.item_header_wrapper}>
						<p className={s.item_header_text}>Історія конвертації</p>
						<button className={s.item_header_btn}> Очистити історію </button>
					</div>
					<ul className={s.item_list} >
						{items.map((item) => (
							<li className={s.item_li} key={item.date} >
								<span className={s.date} >	{item.date}</span>
								<span className={s.count} >	{item.count}</span>
								<span className={s.currenty} >	{item.currenty}</span>
								<img className={s.img} src={arrowRight} alt="arrowRidht" width={14} height={10} />
								<span className={s.countConvert} >	{item.countConvert}</span>
								<span className={s.currentyConvert} >	{item.currentyConvert}</span>
							</li>
						))}
					</ul>
				</div >


			</div >
		</section >
	)
}
export { History }