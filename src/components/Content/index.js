import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import Modal from 'react-modal';

import { Container } from './styles';

export function Main() {
  const [food, setFood] = useState([]);
  const [item, setItem] = useState({});
  const [search, setSearch] = useState('');

  const [ModalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [ModalEditIsOpen, setModalEditIsOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [imagem, setImagem] = useState('');

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    api.get('/culinary')
      .then(response => setFood(response.data))
  }

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

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/culinary', {
      title,
      ingredients,
      instructions,
      imagem
    });

    const newData = [...food];
    newData.push(response.data);
    setFood(newData);

    closeAddModal();
    setTitle('');
    setIngredients('');
    setInstructions('');
    setImagem('');
  }

  async function handleDelete(id) {
    await api.delete(`/culinary/${id}`);

    const foodsFiltered = food.filter(foods => foods.id !== id);

    setFood(foodsFiltered);
    closeEditModal();
  }

  async function handleSearch(e, search) {

    console.log(search)
    e.preventDefault();
    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    // const data = await response.json();

    console.log(response);
  }


  return (
    <Container>
      <div className="group">
        <div className="left">
          <h2>Todas as receitas</h2>
        </div>

        <section className="pesquisar">
          <form onSubmit={() => handleSearch(search)}>
            <button><img src="/assests/pesquisar.png" alt="Pesquisar" /></button>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquisar" type="text" />
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
        {food.map((foods, id) => (
          <div key={foods.id} className="card">
            <img src={foods.imagem} alt={foods.title} />
            <h3>{foods.title}</h3>
            <hr />
            <div>
              <button onClick={() => openEditModal(foods)} className="receita">Abrir receita</button>
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
            <div>
              <h3>{item.title}</h3>
              <img onClick={closeEditModal} src="" alt="Fechar" />
            </div>

            <div>
              <textarea>{item.ingredients}</textarea>
              <img src={item.imagem} alt={item.title} />
            </div>

            <div>
              <textarea>{item.instructions}</textarea>
            </div>

            <div>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
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