// src/data/products.ts
import skypceImage from "../assets/bt_skypce.png";
import skymenuclassImage from "../assets/bt_class.png";
import skycloudImage from "../assets/bt_cloud.png";
import skymecImage from "../assets/bt_mec.png";
import skyattImage from "../assets/bt_skyatt.png";
import skydivImage from "../assets/bt_skydiv.png";
import skyseaImage from "../assets/bt_skysea.png";

// 商品データの型定義
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  productUrl: string;
}

// `SKYの商品説明.txt` を元に作成した商品データ
const products: Product[] = [
  {
    id: 1,
    name: "SKYSEA Client View",
    description:
      "企業・自治体などのIT資産を一元管理し、セキュリティと運用の最適化を実現するクライアント運用管理ソフトウェアです。",
    price: 1138000, // 参考価格
    imageUrl: skyseaImage,
    category: "運用管理",
    productUrl: "https://www.skygroup.jp/solution/skysea/",
  },
  {
    id: 2,
    name: "SKYPCE",
    description:
      "名刺情報を組織の資産として共有・活用するクラウド型名刺管理サービス。AI-OCRによる高精度データ化と、組織全体での情報共有を実現。",
    price: 30000, // 仮の価格
    imageUrl: skypceImage,
    category: "営業支援",
    productUrl: "https://www.skypce.net/", // SKYPCEの公式サイト
  },
  {
    id: 3,
    name: "SKYDIV Desktop Client",
    description:
      "シンクライアント／仮想デスクトップ環境の運用を支援する管理ソフトウェア。ワンクリック接続と直感的UIで、VDI・SBC方式を柔軟に構築可能。",
    price: 50000, // 仮の価格
    imageUrl: skydivImage,
    category: "仮想化",
    productUrl: "https://www.skydiv.jp/", // SKYDIVの公式サイト
  },
  {
    id: 4,
    name: "SKYMEC IT Manager",
    description:
      "病院・医療機関に特化したIT機器運用管理・情報セキュリティ対策ソフトウェアです。診療業務を止めない安定稼働を前提に、医療情報を安全に保護します。",
    price: 80000, // 仮の価格
    imageUrl: skymecImage,
    category: "医療",
    productUrl: "https://www.skygroup.jp/solution/skymec/",
  },
  {
    id: 5,
    name: "SKYATT",
    description:
      "Web／モバイル／デスクトップアプリを対象に、プログラミング知識を必要とせず自動テストを実施可能。高精度な品質保証を効率的に支援します。",
    price: 60000, // 仮の価格
    imageUrl: skyattImage,
    category: "開発支援",
    productUrl: "https://www.skygroup.jp/software/quality/skyatt.html",
  },
  {
    id: 6,
    name: "SKYMENU Class",
    description:
      "児童・生徒の端末を教師用PCから一元管理し、教材配布・画面共有・意見交換を支援する授業支援ソフトウェアです。",
    price: 40000, // 仮の価格
    imageUrl: skymenuclassImage,
    category: "教育",
    productUrl: "https://www.skymenu-class.net/",
  },
  {
    id: 7,
    name: "SKYMENU Cloud",
    description:
      "児童・生徒がクラウド上で学習・発表・意見共有を行える授業支援ツールです。サーバー構築不要で、どこからでも利用可能。",
    price: 45000, // 仮の価格
    imageUrl: skycloudImage,
    category: "教育",
    productUrl: "https://www.skygroup.jp/solution/skymenu-cloud/",
  },
];

export default products;
