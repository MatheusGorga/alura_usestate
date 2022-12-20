import './App.css';
import { useState } from 'react'

function App() {
  const [endereco, setEndereco] = useState({})

  function manipularEndereco(e) {
    const cep = e.target.value

    setEndereco({
      cep: cep
    })

    if (cep && cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => setEndereco({
          cep: data.cep,
          rua: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf

        }))
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <input type='text' onChange={manipularEndereco} />

        <ul>
          <li>Cep: {endereco.cep}</li>
          <li>Bairro: {endereco.bairro}</li>
          <li>Rua: {endereco.rua}</li>
          <li>Cidade: {endereco.cidade}</li>
          <li>Estado: {endereco.estado}</li>
        </ul>

        <button type='submit' onClick={manipularEndereco}>Pesquisar</button>


      </header>
    </div>
  );
}

export default App;
