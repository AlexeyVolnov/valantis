import {FC, memo} from "react";
import style from './filterItemBrand.module.scss'
import {useAppDispatch} from "../../../../redux/state/storeHooks.ts";
import {selectBrand} from "../../../../redux/reducers/productFilterReducer/productFilterReducer.ts";
import {ImCheckboxChecked, ImCheckboxUnchecked} from "react-icons/im";


interface IFilterItemBrandProps {
	brand: { select: boolean, name: string }
}


const FilterItemBrand: FC<IFilterItemBrandProps> = ({brand}) => {
	const dispatch = useAppDispatch()
	const selectBrandHandler = () => {
		dispatch(selectBrand(brand.name))
	}
	return (

			<li onClick={selectBrandHandler} className={style.brand}>
				<span className={style.icon}>{brand.select ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>}</span>
				<span>{brand.name}</span>
			</li>

	)
}

export default memo(FilterItemBrand)