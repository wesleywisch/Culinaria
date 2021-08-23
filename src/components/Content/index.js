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

  async function handleSearch(search) {

    if (!search.trim()) {
      getAll();
    }

    const response = await fetch(`http://localhost:3333/culinary?q=${search}`);
    const data = await response.json();

    setFood(data);
  }


  return (
    <Container>
      <div className="group">
        <div className="left">
          <h2>Todas as receitas</h2>
        </div>

        <section className="pesquisar">
          <div className="search" onClick={() => handleSearch(search)}>
            <button><img src="/assests/pesquisar.png" alt="Pesquisar" /></button>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquisar" type="text" />
          </div>


          <div className="add">
            <button onClick={openAddModal}>Adicionar nova receita</button>
          </div>
        </section>
      </div>

      {ModalAddIsOpen && (
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
              <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
              <p>Ingredientes *</p>
              <textarea name="" value={ingredients} onChange={(e) => setIngredients(e.target.value)}></textarea>
              <p>Instruções *</p>
              <textarea name="" value={instructions} onChange={(e) => setInstructions(e.target.value)}></textarea>
              <p>Imagem URL</p>
              <input value={imagem} onChange={(e) => setImagem(e.target.value)} type="text" />
            </div>
            <button className="react-modal-close" type="submit">Adicionar</button>
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
              <img onClick={closeEditModal} src="/assests/fechar.png" alt="Fechar" />
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