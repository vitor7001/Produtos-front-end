import React from 'react'
import { Jumbotron, Label} from 'reactstrap'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faCodeBranch, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey, faCodeBranch, faLaptopCode);

function Painel() {
    return(

    <div className='container mt-5' align='center'>
      <Jumbotron className='painel' align='center'>
        <h1 className='display-3'>Produtos</h1>
        <hr className='my-2' />
        <p className='lead'>Um app para consumir uma api rest  <FontAwesomeIcon icon="laptop-code"/>
        </p>
        <hr className='my-2' />
        <p>Irei colocar todos os códigos utilizados no meu GitHub pessoal ->
        <a href='https://github.com/vitor7001/Produtos-front-end'
         className='px-md-5 btn btn-success' rel='noopener noreferrer' 
         target='_blank'>
           
           <FontAwesomeIcon
            icon="code-branch"/>
           Produtos!
           
           </a>
         </p>
      </Jumbotron>
    </div>



)
}

export default Painel