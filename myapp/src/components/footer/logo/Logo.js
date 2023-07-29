import React from "react";
import { Logo as LogoShare } from "../../../share/logo/Logo.js";
import s from "./Logo.module.css";

function Logo() {
	return (
		<div className={s.logo}>
			<div className={s.logo_wrapper}>
				<div className={s.logo_logoShere}>
					<LogoShare />
				</div>
				<div className={s.logo_dicription}>
					<p className={s.logo_text}>04128, м.Київ, вул. Хрещатик, 19</p>
					<p className={s.logo_text}>Ліцензія НБУ №156</p>
					<p className={s.logo_text}>Ⓒ ПАТ ЧіпЧендж, 2019-2023</p>
				</div>
			</div>
		</div>
	)
}
export { Logo }