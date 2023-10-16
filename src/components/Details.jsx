import './details.css'

function Details(props) {
  return (
    <>
      <div className="details-section">
        <p className="title">{props.title}</p>
        <p className='paragraph'>{props.paragraph}</p>
      </div>
    </>
  )
}

export default Details