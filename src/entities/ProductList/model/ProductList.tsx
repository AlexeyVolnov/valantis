import {FC} from "react";
import style from './productList.module.scss'
import ProductCard from "../../ProductCard/model/ProductCard.tsx";

interface IProductListProps {

}


const ProductList: FC<IProductListProps> = ({}) => {
	return (
			<div className={style.productList}>
         <ProductCard
		         productId={'232323'}
		         name={'name'}
		         brand={'adidas'}
		         price={4000}/>
			</div>
	)
}

export default ProductList