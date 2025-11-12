import { useState } from "react";
// src/components/ProductList.tsx


import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductList() {
  // 検索キーワードを管理するための状態（State）
  const [searchTerm, setSearchTerm] = useState("");

  // フィルタリングされた商品を検索キーワードで絞り込む
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || // 商品名で検索
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) // 説明文で検索
  );

  return (
    <section id="product-list" className="container mx-auto p-4">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        商品一覧
      </h2>

      {/* 検索バーのコンテナ */}
      <div className="flex flex-col items-center mb-8">
        {/* 検索バー */}
        <input
          type="text"
          placeholder="商品名や説明で検索..."
          className="w-full max-w-md p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // 入力値の変更をStateに反映
        />
      </div>

      {/* フィルタリングされた商品一覧 */}
      <div className="flex flex-wrap justify-center">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
