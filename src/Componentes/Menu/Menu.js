import React, {useState} from React;
import './Menu.css'
const Menu = () => {

    const [burguer_class, setBurguerClass] = useState("burguer-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState("false")

    const updateMenu = () =>{
        if(!isMenuClicked){
            setBurguerClass("burguer-bar clicked")
            setMenuClass("menu visivel")
        }
        else{
            setBurguerClass("burguer-bar unclicked")
            setMenuClass("menu oculto")
        }
    }
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