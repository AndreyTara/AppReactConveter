import React from "react";
import s from "./Convert.module.css";
import arrowDn from "../../../assets/images/arrowDn.svg";
import calendar from "../../../assets/images/calendar.svg";
import arrowTwo from "../../../assets/images/arrowTwo.svg";
import {
	BrowserRouter,
	Link
} from 'react-router-dom';

function Convert() {
	const infoSection = {
		mainText: 'Конвертер валют',
		textE: 'В мене є:',
		textH: 'Хочу придбати:',
		nameButton: 'Зберегти результат',
		imgArrOne: arrowDn,
		imgArrTwo: arrowTwo,
		imgCalendar: calendar,
		сurrency: {
			UAH: "UAH",
			USD: "USD",
			EUR: "EUR",
		}
	}

	return (
		<BrowserRouter>
			<section className={s.item} >
				<div className={s.item_wrapper} >
					<div className={s.item_description} >
						<p className={s.item_main_text}>{infoSection.mainText}</p>
						<div className={s.item_main_wrapper} >
							<div className={s.item_curData_wrapper}>
								<p className={s.item_text}> {infoSection.textE} </p>
								<div className={s.item_selin}>
									<input className={s.item_input} id="countIn" type="text" name='countIn'></input>
									<select className={s.item_select} name="сurrencyIn" id="сurrencyIn">
										<option value="UAH">UAH</option>
										<option value="USD">USD</option>
										<option value="EUR">EUR</option>
									</select>

								</div>
								<input id="date" type="date" className={s.item_date}  />
							</div>

							<img className={s.item_img} src={infoSection.imgArrTwo} alt='exchange' width={22} height={22} />

							<div className={s.item_curData_wrapper}>
								<p className={s.item_text}>{infoSection.textH}</p>
								<div className={s.item_selin}>
									<input className={s.item_input} id="countOut" type="text" name='countOut' ></input>
									<select className={s.item_select} name="сurrencyOut" id="сurrencyOut">
										<option value="UAH">UAH</option>
										<option value="USD">USD</option>
										<option value="EUR">EUR</option>
									</select>
								</div>
								<Link className={s.item_link} to="#">	<input className={s.item_button} type="button" value={infoSection.nameButton} /> </Link>
							</div>

						</div >
					</div >
				</div >
			</section >
		</BrowserRouter >
	)
}
export { Convert }