import "./styles.css"
import icon from "../../assets/img/logo.svg";


function Header() {
    return (
        <>  
        <header>
            <div className="dsmeta-logo-container">
                <img src={icon} alt=""/>
                    <h1>DEMeta</h1>
                    <p>Desenvolvido por <a href="https://www.instagram.com/devsuperior.ig/">@devsuperior.ig</a></p>
            </div>
        </header>
        </>

    )
}

export default Header