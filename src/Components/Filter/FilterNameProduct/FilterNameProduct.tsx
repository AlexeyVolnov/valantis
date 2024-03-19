import {FC, SyntheticEvent} from "react";
import style from './filterNameProduct.module.scss'
import store from "../../../store/store.ts";
import {observer} from "mobx-react";




const FilterNameProduct: FC = observer(() => {

	const inputValue = store.filter.filterProductName
	return (
			<>
				{<input
						onChange={(e:SyntheticEvent<HTMLInputElement>)=>store.setFilterName(e.currentTarget.value)}
						value={inputValue}
						className={style.inputNameProduct}
						placeholder={'Название товара'}
						type="text"/>}
			</>
	)
})

export default FilterNameProduct