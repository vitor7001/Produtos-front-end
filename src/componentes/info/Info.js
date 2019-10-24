import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

function Info({match}) {
    const [data, setData] = useState([])
    const [valor , setValor] = useState()
    const [valorTotal, setTotal] = useState(0)


    useEffect(() => {
        axios.get('/produto/' + match.params.id)
            .then(res => {
                setData(res.data)
                setValor(res.data.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
                const formatar = res.data.quantidade * res.data.valor
                setTotal(formatar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
            })

    }, [match.params.id])
    

    return (
        <div className='container'>
            <Card>
                <CardHeader tag="h3">Produto</CardHeader>
                <CardBody>
                <CardTitle>Identificação: {data.nome}</CardTitle>
                <CardText>Quantidade: {data.quantidade}</CardText>
                <CardText>Valor unitário: {valor}</CardText>
                <Button>Deletar</Button>
                </CardBody>
                <CardFooter className='text-muted center'>Total: {valorTotal}</CardFooter>
            </Card>

        </div>
     )
}

export default Info