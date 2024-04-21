import React, {useState} from React;
const Menu = () => {

    const [burguer_class, setBurguerClass] = useState("burguer-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState("false")
    return(
        <div style={{width: '100%', height: '100vh'}}>
            <nav>
                <div className="burguer-menu">
                    <div className={burguer_class} onClick={updateMenu}></div>
                    <div className={burguer_class} onClick={updateMenu}></div>
                    <div className={burguer_class} onClick={updateMenu}></div>
                </div>
            </nav>
            <div className={menu_class}></div>
        </div>
    );
}
export default Menu;