import {FC} from "react";
import ProductList from "../../../entities/ProductList/model/ProductList.tsx";
import style from './productPages.module.scss'

interface IProductPagesProps {

}


const ProductPages: FC<IProductPagesProps> = ({}) => {
	return (
			<div className={style.productPage}>
           <ProductList/>
			</div>
	)
}

export default ProductPages