import React from 'react'
import {
    Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap'

function Sobre() {
    return (

        <div className='container mt-5' align='center'>
            <Card>
                <CardHeader tag="h3"><h2>Vitor Gomes Pereira</h2></CardHeader>
                <CardBody>
                    <CardTitle> <h3>Futuro desenvolvedor!</h3></CardTitle>
                    <CardText align='fluid'>
                        <p>Estudante do segundo semestre em Análise e Desenvolvimento de Sistemas pela
                            Fatec Zona Sul - Dom Paulo Evaristo Arns
                            </p>
                        <p>Aplicativo desenvolvido para agregar ao meu portfólio pessoal,
                            com o intuito de aprender sobre ReactJS para um
                                possível rumo em minha carreira!</p>

                    </CardText>
                </CardBody>
                <CardFooter className='text-muted'>
                   Contato: <a href='https://www.linkedin.com/in/vitor-g-pereira/'
                    rel='noopener noreferrer' target='_blank'>Vitor Gomes Pereira</a>
                </CardFooter>
            </Card>
        </div>



    )
}

export default Sobre