import './BurgerMenu.css';

const BurgerMenu = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    );
};

export default BurgerMenu;