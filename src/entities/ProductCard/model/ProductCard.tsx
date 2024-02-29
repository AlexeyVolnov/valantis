import {FC} from "react";
import style from '../model/productCard.module.scss'
interface IProductCardProps {
	productId: string,
	name: string,
	brand: string,
	price:number
}


const ProductCard: FC<IProductCardProps> = ({productId,brand,name,price}) => {
	return (
			<div className={style.productCard}>
				<div className={style.name}>{name}</div>
				<div className={style.price}>{price}</div>
				<div className={style.productId}>{productId}</div>
				<div className={style.brand}>{brand}</div>
			</div>
	)
}

export default ProductCard