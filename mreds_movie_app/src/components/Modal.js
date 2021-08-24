import '../css/Modal.css'

const Modal = ({show = false, onClose, children}) => {
  return (
    <>
    {show && 
      <div className="modal">
        <div className="modal-content">
          <div className="modal-close-button-container">
            <button onClick={onClose}>X</button>
          </div>
          {children}
        </div>
      </div>
    }
    </>
  )
}

export default Modal;