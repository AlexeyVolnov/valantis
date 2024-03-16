import {FC} from "react";

import ContentLoader from "react-content-loader"





const ProductCardLoader: FC = () => {
  return(
      <ContentLoader
          speed={2}
          width={280}
          height={300}
          viewBox="0 0 280 300"
          backgroundColor="#ecebe4"
          foregroundColor="#1a4c6b"

      >
        <rect x="4" y="-4" rx="0" ry="0" width="281" height="177" />
        <rect x="13" y="183" rx="0" ry="0" width="245" height="32" />
        <rect x="55" y="226" rx="0" ry="0" width="171" height="29" />
        <rect x="5" y="264" rx="0" ry="0" width="273" height="31" />
      </ContentLoader>
  )
}

export default ProductCardLoader