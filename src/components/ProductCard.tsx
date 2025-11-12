
import { Product } from "../data/products"; // Productインターフェースをインポート

// ProductCardコンポーネントが受け取るpropsの型定義
interface ProductCardProps {
  product: Product; // 共通のProductインターフェースを使用
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4 w-72">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-contain rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded-full">
          {product.category}
        </span>
        <a href={product.productUrl} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
            詳細を見る
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
