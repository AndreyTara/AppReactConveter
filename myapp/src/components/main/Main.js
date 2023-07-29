import s from "./Main.module.css"
function Main() {
	return (
		<div className={s.main}>
			<div className={s.main_wrapper}>
				<section className={s.main_top_wrapper}>
					<div className={s.main_top_description}>
						<h2> Чіп Челендж</h2>
						<p>Обмінник валют - навчальний</p>
						{/* <Navlink path='/converter/*' className={s.main_top_description_button}>
					<span>Конвертер валют</span>
				</Navlink> */}
					</div>
					<div className={s.main_top_img_area}>
						<img src="./assets/images/main/mastercard.png" alt="Фото банківської карти>" />
					</div>
				</section>
				<section className={s.main_bottom_wrapper}>
					<div className={s.main_bottom_description}>
						<h2>Конвертер валют</h2>
						<p>Перевіренна діяльність банківської групи за останнічотири
							звітні квартали становить 50 і більше відсотків</p>
						{/* <Navlink path='/converter/*' className={s.main_buttom_description_button}>
					<span>Конвертер валют</span>
				</Navlink> */}
					</div>
					<div className={s.main_buttom_img_area}>
						<img src="./images/main/main_top_image.png" alt="Фото банківської карти>" />
					</div>
				</section>

			</div>
		</div>
	);
}

export { Main };

