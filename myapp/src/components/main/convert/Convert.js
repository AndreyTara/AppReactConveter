import React from "react";
import s from "./Convert.module.css";
import arrowDn from "../../../assets/images/arrowDn.svg";
import calendar from "../../../assets/images/calendar.svg";
import arrowTwo from "../../../assets/images/arrowTwo.svg";
import { useState, useEffect } from "react"; //

function Convert({ history, setHistory }) {
	const infoSection = {
		mainText: 'Конвертер валют',
		textE: 'В мене є:',
		textH: 'Хочу придбати:',
		nameButton: 'Зберегти результат',
		imgArrOne: arrowDn,
		imgArrTwo: arrowTwo,
		imgCalendar: calendar,
		сurrencies: [
			"UAH",
			"USD",
			"EUR",
			"GBP",
			"RUB",
			"CNY"
		]
	}
	const maxLengthHistory = 10;

	const [currentDate, setCurrentDate] = useState([]);
	const [input, setInput] = useState(0);
	const [output, setOutput] = useState(0);
	const [countId, setCountId] = useState(1);
	const [selectIn, setSelectIn] = useState('UAH');
	const [selectOut, setSelectOut] = useState('USD');
	const [calendarDate, setCalendarDate] = useState('');
	const [initialDateFetch, setInitialDateFetch] = useState('');
	const [exchangeRates, setExchangeRates] = useState([]);

	const curRate = getCurrency(infoSection.сurrencies, exchangeRates)

	function calcIn(valueIn, selectIn, selectOut) {
		setInput(valueIn);
		if (selectIn === selectOut) {
			setOutput(valueIn);
			return
		}
		setOutput((valueIn * curRate[selectIn] / curRate[selectOut]).toFixed(2));
	}

	function calcOut(valueOut, selectIn, selectOut) {
		setOutput(valueOut);
		if (selectIn === selectOut) {
			setInput(valueOut);
			return
		}
		setInput((valueOut * curRate[selectOut] / curRate[selectIn]).toFixed(2));
	}
	function calcSelectIn(valueIn, selectIn, selectOut) {
		setSelectIn(selectIn);
		if (selectIn === selectOut) {
			setOutput(valueIn);
			return
		}
		setOutput((valueIn * curRate[selectIn] / curRate[selectOut]).toFixed(2));
	}
	function calcSelectOut(valueOut, selectIn, selectOut) {
		setSelectOut(selectOut);
		if (selectIn === selectOut) {
			setInput(valueOut);
			return
		}
		setInput((valueOut * curRate[selectOut] / curRate[selectIn]).toFixed(2));
	}

	function convertDateToStr(createDate) {

		const newDateArr = createDate.toISOString().split('T')[0].split('-');
		const correctionDate = [...newDateArr];
		return correctionDate
	}
	const dateArr = convertDateToStr(new Date())
	const initialDateHistory = dateArr.join('-');
	const initialDateFetchCurrent = calendarDate.split('-').join('');

	if (currentDate !== initialDateHistory) {
		setCurrentDate(initialDateHistory);
		setCalendarDate(initialDateHistory);
	}

	if (initialDateFetchCurrent !== initialDateFetch) {
		setInitialDateFetch(initialDateFetchCurrent);
	}

	console.log(initialDateFetch);
	
	useEffect(() => {
		fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${initialDateFetch}&json`)
			.then((response) => response.json())
			.then((json) => {
				setExchangeRates(json)
			})
			.catch((error) => {
				console.error('Error fetch data exchangeRate:', error)
			});
	}, [initialDateFetch])

	function getCurrency(сurrencies, exchangeRates) {
		const rate = {
			"UAH": 1
		};
		сurrencies.forEach((сurrency) => {
			const findExchangeRate = exchangeRates.find((exchangeRate) => exchangeRate.cc === сurrency);
			if (findExchangeRate) {
				rate[findExchangeRate.cc] = findExchangeRate.rate
			}
		})
		return rate
	}


	return (
		<section className={s.item} >
			<div className={s.item_wrapper} >
				<div className={s.item_description} >
					<p className={s.item_main_text}>{infoSection.mainText}</p>
					<div className={s.item_main_wrapper} >
						<div className={s.item_curData_wrapper}>
							<p className={s.item_text}> {infoSection.textE} </p>
							<div className={s.item_selin}>
								<input className={s.item_input} id="countIn" type="number" name='countIn' value={input}
									onChange={(e) => { calcIn(e.target.value, selectIn, selectOut) }} />

								<select className={s.item_select} name="сurrencyIn" id="сurrencyIn"
									onClick={(e) => { calcSelectIn(input, e.target.value, selectOut) }}>
									{infoSection.сurrencies.map((currency) => {
										return (
											<option key={currency} value={currency} > {currency}</option>
										)
									})}
								</select>
							</div>
							<input id="date" type="date" className={s.item_date} value={calendarDate}
								onChange={(e) => {
									setCalendarDate(e.target.value)
								}} />

						</div>

						<img className={s.item_img} src={infoSection.imgArrTwo} alt='exchange' width={22} height={22} />
						<div className={s.item_curData_wrapper}>
							<p className={s.item_text}>{infoSection.textH}</p>
							<div className={s.item_selin}>

								<input className={s.item_input} id="countOut" type="number" name='countOut' value={output}
									onChange={(e) => { calcOut(e.target.value, selectIn, selectOut) }} />

								<select className={s.item_select} name="сurrencyOut" id="сurrencyOut"
									onClick={(e) => { calcSelectOut(output, selectIn, e.target.value) }}>
									{infoSection.сurrencies.map((currency) => {
										return (
											<option key={currency} value={currency} > {currency}</option>
										)
									})}
								</select>
							</div>

							<input className={s.item_button} value={infoSection.nameButton} onClick={() => {
								setCountId(countId + 1);
								const asd = [...history,
								{
									id: countId,
									date: currentDate,
									count: input,
									currenty: selectIn,
									countConvert: output,
									currentyConvert: selectOut
								}]
								if (asd.length > maxLengthHistory) {
									asd.shift()
								}
								setHistory(asd);
							}} />
						</div>
					</div >
				</div >
			</div >
		</section >
	)
}
export { Convert }