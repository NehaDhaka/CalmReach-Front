import "./Modal.scss";

export default function Modal({ isOpen, onClose, title, children }) {
  const handleClose = () => {
    onClose();
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <div className="modal" onClick={handleClose}>
          <div className="modal__content" onClick={handleModalClick}>
            <span className="modal__close" onClick={handleClose}>
              &times;
            </span>
            <h2 className="modal__title">{title}</h2>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
