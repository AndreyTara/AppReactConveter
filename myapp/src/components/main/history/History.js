import React from "react";
import s from "./History.module.css";
import arrowRight from "../../../assets/images/arrowRight.svg";

function History({ history, setHistory }) {

	function clearHistory() {
		setHistory([]);
	}

	return (
		<section className={s.item} >
			<div className={s.item_wrapper} >
				<div className={s.item_description} >
					<div className={s.item_header_wrapper}>
						<p className={s.item_header_text}>Історія конвертації</p>
						<input className={s.item_header_btn} onClick={(e) => { clearHistory() }} value='Очистити історію' />
					</div>
					<ul className={s.item_list} >
						{history.map(function (item, index) {
							if (index < 8) {
								return (
									<li className={s.item_li} key={item.id} >
										<span className={s.date} >	{item.date}</span>
										<span className={s.count} >	{item.count}</span>
										<span className={s.currenty} >	{item.currenty}</span>
										<img className={s.img} src={arrowRight} alt="arrowRight" width={14} height={10} />
										<span className={s.countConvert} >	{item.countConvert}</span>
										<span className={s.currentyConvert} >	{item.currentyConvert}</span>
									</li>
								)
							}
						})
						}
					</ul>
				</div >
			</div >
		</section >
	)
}
export { History }