import Modal from 'react-modal';

export function ModalAdd({ ModalAddIsOpen, closeAddModal, handleSubmit, title, ingredients, instructions, imagem, setTitle, setIngredients, setInstructions, setImagem, errors }) {
  console.log(errors);

  return (
    <Modal
      isOpen={ModalAddIsOpen}
      onRequestClose={closeAddModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <form className="modalAdd" onSubmit={handleSubmit} method="POST">
        <div className="cabecario">
          <h3>Adicionar Receita</h3>
          <img onClick={closeAddModal} src="/assests/fechar.png" alt="Fechar" />
        </div>

        <div className="campoText">
          <p>Nome da receita *</p>
          <input
            placeholder={errors ? errors.some(key => key.title) && 'O título é obrigatório' : ''}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
          />

          <p>Ingredientes *</p>
          <textarea
            placeholder={errors ? errors.some(key => key.ingredients) && 'Os ingredientes são obrigatório' : ''}
            name=""
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            id="ingredients"></textarea>

          <p>Instruções *</p>
          <textarea
            placeholder={errors ? errors.some(key => key.instructions) && 'As instruções são obrigatório' : ''}
            name=""
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            id="instructions"></textarea>

          <p>Imagem URL</p>
          <input
            placeholder={errors ? errors.some(key => key.imagem) && 'A imagem é obrigatória e é uma URL' : ''}
            value={imagem} onChange={(e) => setImagem(e.target.value)}
            type="text"
            id="imagem"
          />
        </div>
        <button className="react-modal-close" type="submit">Adicionar</button>
      </form>
    </Modal>
  );
}