import {FC, SyntheticEvent} from "react";
import style from './filterListPrice.module.scss'
import {useAppDispatch, useAppSelector} from "../../../redux/state/storeHooks.ts";
import {inputPrice} from "../../../redux/reducers/productFilterReducer/productFilterReducer.ts";


interface IFilterListPriceProps {

}


const FilterListPrice: FC<IFilterListPriceProps> = ({}) => {
	const price = useAppSelector(state=>state.productFilterReducer.price.currentPrice)
	const dispatch = useAppDispatch()

	const priceHandler = (e:SyntheticEvent<HTMLInputElement>)=>{
		dispatch(inputPrice(Number(e.currentTarget.value)))
	}

	return (
			<div>
				<input onChange={priceHandler} className={style.price} value={price} placeholder={"Введите цену"} type="text"/>
			</div>
	)
}

export default FilterListPrice