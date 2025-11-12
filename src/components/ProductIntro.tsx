// src/components/ProductIntro.tsx

import React from "react";
import skyseaConsoleImage from "../assets/skysea_console.jpg"; // 画像をインポート

function ProductIntro() {
  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <header className="bg-blue-800 text-white p-6">
        <h1 className="text-3xl font-bold">SKYSEA Client View</h1>
        <p className="text-sm mt-2">クライアント運用管理の定番ソリューション</p>
      </header>

      {/* 差し込む画像 */}
      <div className="my-8">
        <img
          src={skyseaConsoleImage}
          alt="SKYSEA Client View Console"
          className="w-full rounded-lg shadow-xl"
        />
      </div>

      {/* Product Overview */}
      <section className="max-w-5xl mx-auto p-6 bg-white shadow-md my-6 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          🎯 製品概要
        </h2>
        <p>
          新たな技術の積極的な活用で、お客様の日々の運用管理をよりスムーズに。
          「SKYSEA Client View」は、Sky株式会社が開発・提供する
          クライアントPC・IT資産運用管理ソフトウェアです。
        </p>
        <p className="mt-3 text-sm text-gray-600">
          製品：
          <a
            href="https://www.skygroup.jp/solution/skysea/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            SKYSEA Client View
          </a>
        </p>
      </section>

      {/* Key Features */}
      <section className="max-w-5xl mx-auto p-6 bg-white shadow-md my-6 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          ⚙️ 主な機能一覧
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>資産管理：</strong>{" "}
            日々変動する資産情報を自動収集、IT資産運用の最適化を支援
          </li>
          <li>
            <strong>ログ管理：</strong>{" "}
            日々のPCの挙動をログとして管理情報漏洩リスクの早期発見などに活躍
          </li>
          <li>
            <strong>セキュリティ管理：</strong>{" "}
            社内ポリシーに沿って不適切な操作を制限、ユーザーの情報セキュリティ意識向上に
          </li>
          <li>
            <strong>デバイス管理：</strong> デバイスやメディアの適正管理で、個人
            / 機密情報の漏洩防止を支援
          </li>
          <li>
            <strong>ITセキュリティ対策強化：</strong>{" "}
            猛威を振るうサイバー攻撃に多層防御による情報漏洩対策を
          </li>
          <li>
            <strong>レポート：</strong>{" "}
            日々蓄積されるデータを活用し、IT資産運用の傾向を適切に把握
          </li>
          <li>
            <strong>メンテナンス：</strong>{" "}
            離れた拠点のPCをリモート操作、メンテナンスや問い合わせ対応を効率的に
          </li>
          <li>
            <strong>ソフトウェア資産管理（SAM）：</strong>{" "}
            管理台帳でソフトウェア資産を複合的に管理し、導入・運用などの各フェーズでの業務を支援
          </li>
          <li>
            <strong>サーバー監査：</strong>{" "}
            重要データが集まるサーバーのアクセス状況の把握を支援
          </li>
          <li>
            <strong>モバイル機器管理（MDM）：</strong>{" "}
            スマートフォン、タブレット端末のビジネス活用を支援
          </li>
          <li>
            <strong>管理者向けコミュニティサイト：</strong>{" "}
            管理者だけが利用できるコミュニティサイトで運用に関する質問や情報交換が手軽にできる
          </li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto p-6 bg-white shadow-md my-6 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          💼 導入メリット
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>IT資産の「見える化」により、管理工数・コストを削減。</li>
          <li>ログ・操作履歴の記録で情報漏洩リスクを早期発見。</li>
          <li>
            組織のさまざまなIT機器、ソフトウェアを1つのツールで管理することで運用を効率的に
          </li>
          <li>
            SAM構築に必要な台帳でソフトウェア資産の適切な管理を支援。ライセンス監査対応の手間も軽減。
          </li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto p-6 bg-white shadow-md my-6 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          💰 価格・ライセンス構成
        </h2>
        <p>
          本製品は、<strong>サーバーライセンス＋クライアントライセンス</strong>
          による構成で、端末台数に応じたスケーラブルなライセンス体系を採用しています。
        </p>
        <div className="bg-gray-100 p-4 rounded-lg my-4">
          <p>
            <strong>Light Edition（100台構成）参考価格：</strong>
            <br />
            クライアントライセンス＋保守費用込み：約1,138,000円（税抜）
            <br />
            <span className="text-sm text-gray-600">
              出典：
              <a
                href="https://www.it-ex.com/products/maker/sky/sky-sea-client-view.html"
                className="underline text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                IT-EX
              </a>
            </span>
          </p>
        </div>
        <p className="text-sm text-gray-600">
          ※価格は構成・台数により変動します。最新情報は販売代理店へご確認ください。
        </p>
      </section>

      {/* Case Studies */}
      <section className="max-w-5xl mx-auto p-6 bg-white shadow-md my-6 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          🏢 導入事例・実績
        </h2>
        <ul className="space-y-3">
          <li>
            <strong>パーソルホールディングス株式会社：</strong>{" "}
            グループ全体のIT資産管理を統一・効率化。
            <br />
            <a
              href="https://www.skyseaclientview.net/case/report/case154.html"
              target="_blank"
              className="text-blue-600 underline text-sm"
              rel="noopener noreferrer"
            >
              導入事例を見る
            </a>
          </li>
          <li>
            <strong>社会医療法人 輝城会：</strong>{" "}
            医療機関でセキュリティ強化と利便性を両立。
            <br />
            <a
              href="https://www.skyseaclientview.net/case/report/case111.html"
              target="_blank"
              className="text-blue-600 underline text-sm"
              rel="noopener noreferrer"
            >
              導入事例を見る
            </a>
          </li>
          <li>
            <strong>大和ハウス工業株式会社：</strong>{" "}
            資産管理改善でパッチ適用率を95％に向上。
            <br />
            <a
              href="https://www.skygroup.jp/news/230222_01/"
              target="_blank"
              className="text-blue-600 underline text-sm"
              rel="noopener noreferrer"
            >
              導入事例を見る
            </a>
          </li>
        </ul>
      </section>

      {/* Footer (Original footer from the text file is not used here as we have our own Footer component) */}
    </div>
  );
}

export default ProductIntro;
