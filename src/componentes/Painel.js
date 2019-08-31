import React from 'react'
import { Jumbotron} from 'reactstrap'

function Painel() {
    return(

    <div className='container mt-5' align='center'>
      <Jumbotron className='painel' align='center'>
        <h1 className='display-3'>Produtos</h1>
        <p className='lead'>Um app para consumir uma api rest
        </p>
        <hr className='my-2' />
        <p>Irei colocar todos os códigos utilizados no meu GitHub pessoal ->
        <a href='https://github.com/vitor7001'
         className='px-md-5 btn btn-success' rel='noopener noreferrer' 
         target='_blank'>Produtos!</a>
         </p>
      </Jumbotron>
    </div>
)
}

export default Painel