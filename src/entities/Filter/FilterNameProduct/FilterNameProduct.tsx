import {FC, SyntheticEvent} from "react";
import style from './filterNameProduct.module.scss'
import {useAppDispatch, useAppSelector} from "../../../redux/state/storeHooks.ts";
import {inputProductName} from "../../../redux/reducers/productFilterReducer/productFilterReducer.ts";

interface IFilterNameProductProps {

}


const FilterNameProduct: FC<IFilterNameProductProps> = ({}) => {
	const dispatch = useAppDispatch()
	const inputHandler = (e: SyntheticEvent<HTMLInputElement>) => {
		dispatch(inputProductName(e.currentTarget.value))
	}
	const inputValue = useAppSelector(state => state.productFilterReducer.productName)
	return (
			<>
				{<input
						onChange={inputHandler}
						value={inputValue}
						className={style.inputNameProduct}
						placeholder={'Название товара'}
						type="text"/>}
			</>
	)
}

export default FilterNameProduct