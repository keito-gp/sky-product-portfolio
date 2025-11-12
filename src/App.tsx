
import Header from "./components/Header"; // Headerコンポーネントをインポート
import Footer from "./components/Footer"; // Footerコンポーネントをインポート
import ProductList from "./components/ProductList"; // ProductListコンポーネントをインポート
import ProductIntro from "./components/ProductIntro"; // ProductIntroコンポーネントをインポート

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* 製品紹介コンポーネントを配置 */}
        <ProductIntro />
        {/* 商品一覧コンポーネントを配置 */}
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
