import { useState, useEffect } from 'react';
import axios from 'axios';
import s from './app.module.scss';

const App = () => {

  const [produto, setProduto] = useState([]);

  const pegarDados = async () => {

    const dados = await axios.get('https://fakestoreapi.com/products');

    setProduto(dados.data);
  }

  useEffect(() => {
    pegarDados();
  },[produto])

  return (
    <section className={s.container}>
      {produto.map((item, id) => (
        <div key={id} className={s.card} >
          <img className={s.img} src={item.image} alt="" />
          <h4 className={s.title}>{item.title}</h4>
        </div>
      ))}
    </section>
  )
}

export default App;