import {FC, SyntheticEvent} from "react";
import style from './filterListPrice.module.scss'
import store from "../../../store/store.ts";
import {observer} from "mobx-react";





const FilterListPrice: FC = observer(() => {
	const price = store.filter.filterProductPrice

	const priceHandler = (e:SyntheticEvent<HTMLInputElement>)=>{
		store.setFilterPrice(Number(e.currentTarget.value))
	}
	return (
			<div>
				<input onChange={priceHandler} className={style.price} value={price||''}  placeholder={"Введите цену"} type="number"/>
			</div>
	)
})

export default FilterListPrice