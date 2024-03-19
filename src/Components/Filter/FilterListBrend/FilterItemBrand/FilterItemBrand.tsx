import {FC, memo} from "react";
import style from './filterItemBrand.module.scss'
import {ImCheckboxChecked, ImCheckboxUnchecked} from "react-icons/im";
import store from "../../../../store/store.ts";
import {observer} from "mobx-react";


interface IFilterItemBrandProps {
	brand: { select: boolean, name: string }
}

const FilterItemBrand: FC<IFilterItemBrandProps> = observer(({brand}) => {

	const selectBrandHandler = () => {
		store.selectBrand(brand)
	}
	return (

			<li onClick={selectBrandHandler} className={style.brand}>
				<span className={style.icon}>{brand.select ? <ImCheckboxChecked/> : <ImCheckboxUnchecked/>}</span>
				<span>{brand.name}</span>
			</li>

	)
})

export default memo(FilterItemBrand)