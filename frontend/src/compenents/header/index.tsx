import imageHeader from '../../assets/img/imageHeader.svg'
import './styles.css'

function Header() {
return(
<header>
<div className="headerPrincipal">
  <img src={imageHeader} alt="header" />
  <h1>DSMeta</h1>
  <p>Desenvolvido por <a href="https://www.instagram.com/vininogueiraa_/"></a></p>
</div>
</header>
)
}

export default Header