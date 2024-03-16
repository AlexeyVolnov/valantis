import {FC} from "react";
import ProductList from "../../../entities/ProductList/model/ProductList.tsx";
import style from './productPages.module.scss'
import Header from "../../../entities/Header/Header.tsx";
import ProductPageFilters from "../../../entities/ProductPageFilters/ProductPageFilters.tsx";
import {useAppDispatch, useAppSelector} from "../../../redux/state/storeHooks.ts";
import {Pagination, PaginationProps} from 'antd';
import {paginationOnChange} from "../../../redux/reducers/productListReducer/productListReducer.ts";

const ProductPages: FC = () => {
	const {page} = useAppSelector(state => state.productListReducer)
	const price = useAppSelector(state=>state.productFilterReducer.price.currentPrice)
	const name = useAppSelector(state=>state.productFilterReducer.productName)
	const brand = useAppSelector(state=>state.productFilterReducer.brand.currentBrand)
	const dispatch = useAppDispatch()

	const onChange: PaginationProps['onChange'] = (page) => {
		dispatch(paginationOnChange(page))
	};

	return (
			<div className={style.productPage}>
				<Header/>
				<div className={style.content}>
					<ProductPageFilters/>
					<ProductList/>
				</div>
				<div className={style.pagination}>
					{ !name.length && price===0 && !brand.length &&   <Pagination defaultCurrent={page} showSizeChanger={false}  onChange={onChange} total={1000}/>}
				</div>
			</div>
	)
}

export default ProductPages