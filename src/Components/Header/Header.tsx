import {FC} from "react";
import style from './header.module.scss'
import { TbBrandValorant } from "react-icons/tb";




const Header: FC = ({}) => {
	return (
			<div>
				<header className={style.header}>
					<TbBrandValorant/>
					<span>Valantis</span>
					<span>Valantis</span>
					<TbBrandValorant/>
				</header>
			</div>
	)
}

export default Header