import React from "react";
import s from "./Social.module.css";
import iconFb from "../../../assets/icons/Fb_logo.png";
import iconInst from "../../../assets/icons/Inst_logo.png";
import iconTwit from "../../../assets/icons/Twit_logo.png";
import iconYou from "../../../assets/icons/YouT_logo.png";
import {
	BrowserRouter,
	Link
} from 'react-router-dom';

function Social() {
	const items = [
		{
			icon: iconFb,
			title: 'facebook',
			path: 'https://uk-ua.facebook.com/',
			width: 9,
			height: 16
		},
		{
			icon: iconInst,
			title: 'instagram',
			path: 'https://www.instagram.com/',
			width: 16,
			height: 16
		},
		{
			icon: iconTwit,
			title: 'twitter',
			path: 'https://twitter.com/',
			width: 16,
			height: 13
		},
		{
			icon: iconYou,
			title: 'youtube',
			path: 'https://www.youtube.com/',
			width: 16,
			height: 13
		},
	]

	return (
		<BrowserRouter>
			<div className={s.item}>
				<ul className={s.item_wrapper}>
					{items.map((item) => (
						<li className={s.item_li} key={item.path} >
							<Link className={s.item_link} to={item.path}>
								<img className={s.item_img} src={item.icon} alt={item.title} width={item.width} height={item.height} />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</BrowserRouter>
	)
}
export { Social }