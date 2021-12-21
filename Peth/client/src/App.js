import './App.css'
import React, { useState, useEffect } from "react"
import Axios from 'axios'

//import logo from './img/ariedam.png'

function App() {

  const [empresa, setEmpresa] = useState()
  const [vaga, setVaga] = useState()
  const [email, setEmail] = useState()

  const [employeeList, setEmployeeList] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data)
      console.log(response)
    })
  }, [])

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      empresa: empresa,
      vaga: vaga,
      email: email
    }).then(() => {
      console.log('Sucesso')
    })
  }


  return (
    <div className='cem'>
      <header>
        <nav>

          <div className='navi'>
            <a >Home</a>
          </div>


          <div className='navi'>
            <a>Cadastrar</a>
          </div>


          <div className='navi'>
            <a href=''>Contato</a>
          </div>

        </nav>
      </header>
      {/* -------------------------------------------------------- */}
      <h2 className='h2cad'><br/><br/><br/>Cadastre sua Empresa: </h2>
      <br/>
      <div className='cad'>
    
        <label>Empresa:</label><br/>
        <input type="text"
          onChange={(event) => {
            setEmpresa(event.target.value)
          }} />
      </div>

      <div className='cad'>

        <label>Habilidades Desejadas:</label><br/>
        <input type="text"
          onChange={(event) => {
            setVaga(event.target.value)
          }} />
      </div>

      <div className='cad'>

        <label>Contato:</label><br/>
        <input type="text" onChange={(event) => {
          setEmail(event.target.value)
        }} />
      </div>

       
      
     
      
      <div className='btncss'>
      <br /><br />

      <p className='infopgn'>Após o cadastro atualize a página e araste para baixo</p>
      <br /><br />

      <button onClick={addEmployee} >Cadastrar</button>
      </div>
      <br /><br />
      <div className='h2title'>
      <h2 >Vagas</h2>
      </div>

      <div className='listcem'>
        {employeeList.map((val) =>
        
          <div className='listcss'>
            Empresa: {val.empresa}<br />
            Habilidades:    {val.vaga}<br />
            Contato:   {val.email}<br />
          </div>)}
          
          </div>    
        <br/>
          <footer>
            <h3>Christiann Rosenau Nunes</h3>
            <p>Site de demonstração para mostrar meus conhecimentos de desenvolvimeto web</p> 
          </footer>

      {/*<img src={logo} />*/}

    </div>
  )
}

export default App