import {FC} from "react";
import ProductList from "../../Components/ProductList/model/ProductList.tsx";
import style from './productPages.module.scss'
import Header from "../../Components/Header/Header.tsx";
import ProductFilters from "../../Components/ProductFilters/ProductFilters.tsx";
import {Pagination, PaginationProps} from 'antd';
import store from './../../store/store.ts'


const ProductPages: FC = () => {

	const [brand, name, price, page] = [
		store.filter.filterProductBrand,
		store.filter.filterProductName,
		store.filter.filterProductPrice,
		store.navigation.page
	]
	const onChange: PaginationProps['onChange'] = (page) => {
		store.setPage(page)
	};

	return (
			<div className={style.productPage}>
				<Header/>
				<div className={style.content}>
					<ProductFilters/>
					<ProductList/>
				</div>
				<div className={style.pagination}>
					{!name.length && price === 0 && !brand.length &&
							<Pagination defaultCurrent={page} showSizeChanger={false} onChange={onChange} total={1000}/>}
				</div>
			</div>
	)
}

export default ProductPages