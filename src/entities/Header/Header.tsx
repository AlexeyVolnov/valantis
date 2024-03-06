import {FC} from "react";
import style from './header.module.scss'
import { TbBrandValorant } from "react-icons/tb";

interface IHeaderProps {

}


const Header: FC<IHeaderProps> = ({}) => {
	return (
			<div>
				<header className={style.header}>
					<TbBrandValorant />
					<span>Valantis</span>
					<TbBrandValorant />
				</header>
			</div>
	)
}

export default Header