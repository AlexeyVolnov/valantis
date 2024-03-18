import {FC, useEffect} from "react";
import FilterItemBrand from "./FilterItemBrand/FilterItemBrand.tsx";
import {fetchAllBrands} from "../../../redux/reducers/productFilterReducer/productFilterReducer.ts";
import {useAppDispatch, useAppSelector} from "../../../redux/state/storeHooks.ts";
import style from './filterListBrand.module.scss'


interface IFilterListBrandProps {

}


const FilterListBrand: FC<IFilterListBrandProps> = ({}) => {
	const listBrand = useAppSelector(state => state.productFilterReducer.brand.listBrand)

	const dispatch = useAppDispatch()
	useEffect(() => {
		listBrand.length === 0 && dispatch(fetchAllBrands())
	}, []);


	return (
			<ul className={style.filterListBrand}>
				{listBrand?.length && listBrand.map(brand => <FilterItemBrand key={brand.name} brand={brand}/>)}
			</ul>
	)
}

export default FilterListBrand