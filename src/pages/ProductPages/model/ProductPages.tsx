import {FC} from "react";
import ProductList from "../../../entities/ProductList/model/ProductList.tsx";
import style from './productPages.module.scss'
import Header from "../../../entities/Header/Header.tsx";
import ProductPageFilters from "../../../entities/ProductPageFilters/ProductPageFilters.tsx";

interface IProductPagesProps {

}


const ProductPages: FC<IProductPagesProps> = ({}) => {
	return (
			<div className={style.productPage}>
				<Header/>
				<div className={style.content}>
					<ProductPageFilters/>
					<ProductList/>
				</div>
			</div>
	)
}

export default ProductPages