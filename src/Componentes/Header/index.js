import './style.css';

function Header() {
    return (
        <header>
            <div className="limitar-secao header-menu">
                <div>
                    <img src="assets/logo.png" alt="" />
                </div>
                <nav>
                    <a href='#produtos'>PRODUTOS</a>
                    <a href='#sobre'>SOBRE</a>
                    <a href='#contato'>CONTATO</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;