import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                {/* Векторная иконка книги */}
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#333333"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="header__icon"
                >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>

                <div>
                    <h1 className="header__title">Библиотека</h1>
                    <p className="header__subtitle">Откройте новые истории</p>
                </div>
            </div>
        </header>
    )
}

export default Header;