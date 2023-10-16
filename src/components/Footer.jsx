import './footer.css'
import facebook from "/src/images/fb-icon.png"
import github from "/src/images/gh-icon.png"
import instagram from "/src/images/ig-icon.png"
import twitter from "/src/images/tw-icon.png"

function Footer() {
  return (
    <>
      <footer>
          <a href="https://twitter.com/Viporaaa">
            <img src={twitter} className='footer-icon'/>
          </a>
          <a href="https://www.facebook.com/PlugThenPlay/">
          <img src={facebook} className='footer-icon'/>
          </a>
          <a href="https://www.instagram.com/viporaaa/">
          <img src={instagram} className='footer-icon'/>
          </a>
          <a href="https://github.com/iamvipora">
            <img src={github} className='footer-icon'/>
          </a> 
      </footer>
    </>
  )
}

export default Footer