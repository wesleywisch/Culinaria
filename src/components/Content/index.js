import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import Modal from 'react-modal';

import { Container } from './styles';

export function Main() {
  const [food, setFood] = useState([]);
  const [item, setItem] = useState({});

  const [ModalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [ModalEditIsOpen, setModalEditIsOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imagem, setImagem] = useState('');

  useEffect(() => {
    api.get('/culinary')
      .then(response => setFood(response.data))
  }, []);

  function openAddModal() {
    setModalAddIsOpen(true);
  }

  function closeAddModal() {
    setModalAddIsOpen(false);
  }

  function openEditModal(item) {
    setItem(item);
    setModalEditIsOpen(true);
  }

  function closeEditModal() {
    setModalEditIsOpen(false);
  }

  async function handleSubmit(e, food) {
    e.preventDefault();

    await api.post('/culinary', {
      title,
      ingredients,
      instructions,
      imagem
    });

    closeAddModal();
    setTitle('');
    setIngredients('');
    setInstructions('');
    setImagem('');
  }



  return (
    <Container>
      <div className="group">
        <div className="left">
          <h2>Todas as receitas</h2>
        </div>

        <section className="pesquisar">
          <form>
            <button><img src="/assests/pesquisar.png" alt="Pesquisar" /></button>
            <input placeholder="Pesquisar" type="text" />
          </form>


          <div className="add">
            <button onClick={openAddModal}>Adicionar nova receita</button>
          </div>
        </section>
      </div>

      {ModalAddIsOpen && (
        <Modal
          isOpen={ModalAddIsOpen}
          onRequestClose={closeAddModal}
        >
          <form onSubmit={handleSubmit} method="POST">
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
            <textarea name="" value={ingredients} onChange={(e) => setIngredients(e.target.value)}></textarea>
            <textarea name="" value={instructions} onChange={(e) => setInstructions(e.target.value)}></textarea>
            <input value={imagem} onChange={(e) => setImagem(e.target.value)} type="text" />
            <button type="submit">Enviar</button>
          </form>
        </Modal>
      )}


      <section className="sectionCards">
        {food.map(food => (
          <div key={food.id} className="card">
            <img src={food.imagem} alt={food.title} />
            <h3>{food.title}</h3>
            <hr />
            <div>
              <button onClick={() => openEditModal(food)} className="receita">Abrir receita</button>
            </div>
          </div>
        ))}
      </section>

      {ModalEditIsOpen && (
        <Modal
          isOpen={ModalEditIsOpen}
          onRequestClose={closeEditModal}
        >
          <div className="card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        </Modal>
      )}

      <footer>
        <h2>Seus segredos culinários estão guardados</h2>
        <img src="/assests/cookbook.png" alt="" />
      </footer>

    </Container>
  )
}