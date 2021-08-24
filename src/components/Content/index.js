import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import Modal from 'react-modal';

import { Container } from './styles';
import { Validation } from '../../helpers/Validations';

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

  const [errors, setErrors] = useState([]);

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

    let formData = {
      title: e.target[0].value,
      ingredients: e.target[1].value,
      instructions: e.target[2].value,
      imagem: e.target[3].value,
    };

    const checkValidation = Validation({ formData });

    if(checkValidation.length > 0){
      setErrors(checkValidation);
      return;
    }

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

  console.log(errors)

  async function handleDelete(id) {
    await api.delete(`/culinary/${id}`);

    const foodsFiltered = food.filter(foods => foods.id !== id);

    setFood(foodsFiltered);
    closeEditModal();
  }

  async function handleSearch(e) {
    e.preventDefault();

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
          <form className="search" onSubmit={handleSearch}>
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
              {errors.some(key => key.title) && <span>O título é obrigatório</span>}
              <p>Ingredientes *</p>
              <textarea name="" value={ingredients} onChange={(e) => setIngredients(e.target.value)}></textarea>
              {errors.some(key => key.ingredients) && <span>Os ingredientes são obrigatório</span>}
              <p>Instruções *</p>
              <textarea name="" value={instructions} onChange={(e) => setInstructions(e.target.value)}></textarea>
              {errors.some(key => key.instructions) && <span>As instruções são obrigatório</span>}
              <p>Imagem URL</p>
              <input value={imagem} onChange={(e) => setImagem(e.target.value)} type="text" />
              {errors.some(key => key.imagem) && <span>A imagem é obrigatória e é uma URL</span>}
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
      )}

      <footer>
        <h2>Seus segredos culinários estão guardados</h2>
        <img src="/assests/cookbook.png" alt="" />
      </footer>

    </Container>
  )
}