import {FC, useEffect} from "react";
import FilterItemBrand from "./FilterItemBrand/FilterItemBrand.tsx";
import style from './filterListBrand.module.scss'
import store from "../../../store/store.ts";
import {observer} from "mobx-react";


const FilterListBrand: FC = observer(() => {
	const listBrand = store.listBrand

	useEffect(() => {
		listBrand.length === 0 && store.fetchAllBrands()
	},[]);

	return (
			<ul className={style.filterListBrand}>
				{listBrand?.length && listBrand.map(brand => <FilterItemBrand key={brand.name} brand={brand}/>)}
			</ul>
	)
})

export default FilterListBrand