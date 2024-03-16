import {FC, ReactNode, useState} from "react";
import style from './filterList.module.scss'

import {HiBarsArrowDown, HiBarsArrowUp} from "react-icons/hi2";

interface IFilterControlsProps {
	filterList: ReactNode,
	nameControls:string
}


const FilterControls: FC<IFilterControlsProps> = ({filterList,nameControls}) => {
	const [activeList, setActiveList] = useState(false)
	const filterControlsHandler = () => setActiveList(state => !state)
	return (
			<div>
				<div className={style.controls} onClick={filterControlsHandler}>
					<div className={style.icon}>{activeList ? <HiBarsArrowUp/> : <HiBarsArrowDown/>}</div>
					<span className={style.name}>{nameControls}</span>
				</div>
				{activeList && filterList}
			</div>
	)
}

export default FilterControls