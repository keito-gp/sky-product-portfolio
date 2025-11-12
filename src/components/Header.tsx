

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">SKY株式会社 商品紹介</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.skygroup.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200"
              >
                HP
              </a>
            </li>
            <li>
              <a href="#product-list" className="hover:text-blue-200">
                商品一覧
              </a>
            </li>
            <li>
              <a
                href="https://www.skygroup.jp/company/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200"
              >
                会社概要
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
