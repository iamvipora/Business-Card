import profile from "/src/images/profile-picture.jpg"
import mail from "/src/images/mail.png"
import linkedin from "/src/images/linkedin.png"
import './info.css'

function Info() {
  return (
    <>
      <div className="info-section">
        <img src={profile} className="profile-picture" />
        <p className="info-name">John Henry Dizon</p>
        <p className="info-title">Frontend Developer</p>
        <p><a className="info-web" href="henrydizon.vercel.app">henrydizon.vercel.app</a></p>
        <div className="info-btns">
          <a href="mailto:henrydizon99@gmail.com">
            <button className="info-email-btn info-btn" id="info-email-btn"><img src={mail} className='info-icon'/><p>Email</p></button>
          </a> 
          <a href="https://www.linkedin.com/in/john-henry-dizon-a5b875284/">
            <button className="info-linkedin-btn info-btn"><img src={linkedin} className='info-icon'/><p>LinkedIn</p></button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Info