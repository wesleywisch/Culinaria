import Modal from 'react-modal';

export function ModalEdit({ ModalEditIsOpen, closeEditModal, handleDelete, item }) {
  return (
    <Modal
      isOpen={ModalEditIsOpen}
      onRequestClose={closeEditModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className="modalEdit">
        <div className="cabecario">
          <h3>{item.title}</h3>
          <img onClick={closeEditModal} src="/assests/fechar.png" alt="Fechar" />
        </div>

        <p>Ingredientes</p>
        <div className="content">
          <textarea>{item.ingredients}</textarea>
          <img src={item.imagem} alt={item.title} />
        </div>

        <div className="instructions">
          <p>Intruções</p>
          <textarea>{item.instructions}</textarea>
        </div>

        <div>
          <button className="react-modal-close" onClick={() => handleDelete(item.id)}>
            <img src="/assests/lixo.png" alt="Delete" />
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}