
import React from 'react';
import {
	BrowserRouter,
	Link
} from 'react-router-dom';
import s from "./Nav.module.css";


//	Switch,
// Route,
function Nav() {
	const navComponents = [
		{
			component: "Послуги",
			path: "/servises/*"
		},
		{
			component: "Конвертер валют",
			path: "/converter/*"
		},
		{
			component: "Контакти",
			path: "/contacts/*"
		},
		{
			component: "Задати запитання",
			path: "/question/*"
		}
	]
	//to={navComponent.path} 
	return (
		<BrowserRouter>
			<div className='nav'>
				<div className='nav_wrapper'>
					<ul className={s.nav_ul}>
						{navComponents.map((navComponent) => (
							<li className={s.nav_li} key={navComponent.path} >
								<Link className={s.nav_link} to="#">	{navComponent.component}</Link>
							</li>
						))}
					</ul>
				</div >
			</div >
		</BrowserRouter>
	)
}

export { Nav }