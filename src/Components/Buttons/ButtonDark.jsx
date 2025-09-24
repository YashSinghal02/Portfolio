import './ButtonDark.css'

function ButtonDark(props) {
  return (
    <div>
     <button className="button">
     <span className="button-content">{props.name} </span>
     </button>
    </div>
  )
}

export default ButtonDark
