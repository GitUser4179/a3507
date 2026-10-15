export default function Modal({ content, onClose }) {
  if (!content) {
    return null;
  }

  return (
    <div
      className="modal"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          x
        </span>
        <h2 id="modal-title">{content.title}</h2>
        <p id="modal-description">{content.description}</p>
      </div>
    </div>
  );
}
