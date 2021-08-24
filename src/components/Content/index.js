import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';

import { Validation } from '../../helpers/Validations';

import { ModalAdd } from '../ModalAdd';
import { ModalEdit } from '../ModalEdit';

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

    if (checkValidation.length > 0) {
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
        <ModalAdd
          ModalAddIsOpen={ModalAddIsOpen}
          closeAddModal={closeAddModal}
          handleSubmit={handleSubmit}
          title={title}
          ingredients={ingredients}
          instructions={instructions}
          imagem={imagem}
          setTitle={setTitle}
          setIngredients={setIngredients}
          setInstructions={setInstructions}
          setImagem={setImagem}
          errors={errors}
        />
      )}


      <section className="sectionCards">
        {food.map(foods => (
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
        <ModalEdit
          ModalEditIsOpen={ModalEditIsOpen}
          closeEditModal={closeEditModal}
          handleDelete={handleDelete}
          item={item}
        />
      )}
    </Container>
  )
}