import {FC} from "react";
import style from '../model/productCard.module.scss'
import {T_Product} from "../../../api/typeApi.ts";


interface IProductCardProps {
	product:T_Product,
}


const ProductCard: FC<IProductCardProps> = ({product}) => {
	return (
			<div className={style.productCard}>
				<div className={style.productPhoto}>280X200</div>
				<div className={style.productContent}>
					<div className={style.name}>{product.product}</div>
					<div className={style.brand}>{product.brand}</div>
					<div className={style.price}>{product.price} руб</div>
				</div>
				<div className={style.productFooter}>
					<div className={style.productId}>id:{product.id}</div>
				</div>
			</div>
	)
}

export default ProductCard