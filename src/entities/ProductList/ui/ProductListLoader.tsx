import {FC} from "react";
import ProductCardLoader from "./ProductCardLoader.tsx";


interface IProductListLoaderProps {
length:number
}


const ProductListLoader: FC<IProductListLoaderProps> = ({length}) => {
  const loaderList = Array.from({length:length},(_,index)=>index)
	return (
			<div>
        {loaderList.map(index=><ProductCardLoader key={index}/>)}
			</div>
	)
}

export default ProductListLoader