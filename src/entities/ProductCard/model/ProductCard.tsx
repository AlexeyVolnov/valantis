import {FC} from "react";
import style from '../model/productCard.module.scss'
import {T_Product} from "../../../api/typeApi.ts";
interface IProductCardProps {
	product:T_Product
}


const ProductCard: FC<IProductCardProps> = ({product}) => {
	return (
			<div className={style.productCard}>
				<div className={style.name}>{product.product}</div>
				<div className={style.price}>{product.price}</div>
				<div className={style.productId}>{product.id}</div>
				<div className={style.brand}>{product.brand}</div>
			</div>
	)
}

export default ProductCard