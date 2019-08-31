import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { Alert } from 'reactstrap'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

function Acoes() {
    const [nome, setNome] = useState('')
    const [qtd, setQtd] = useState(0)
    const [valor, setValor] = useState(0)
    const [data, setData] = useState([])
    const [success, setSucess] = useState(false)

    const onChangeNome = evt => {
        setNome(evt.target.value)
    }
    const onChangeQtd = evt => {
        setQtd(evt.target.value)
    }
    const onChangeValor = evt => {
        setValor(evt.target.value)
    }

    useEffect(() => {
        axios.get('/produtos')
            .then(res => {
                setData(res.data)
            })
    }, [])

    const save = () => {
        axios.post('/produto', {
            "nome": nome,
            "quantidade": qtd,
            "valor": valor
        })
            .then(resp => {
                setSucess(true)
            })
    }

    /*<!-- <button className='btn btn-danger' 
onClick={() => deleteSerie(record.id)}> Remover </button> --> */
    const renderizaLinha = record => {
        return (
            <tr key={record.id} align='center'>
                <th scope='row'>
                    {record.id}
                </th>
                <td>{record.nome}</td>
                <td>{record.quantidade}</td>
                <td>{record.valor}</td>
                <td>
                    <Link className='btn btn-primary'
                        to={'/produto/' + record.id}>Info</Link>
                </td>
            </tr>
        )
    }



    const validar = () => {
        try {
            save()
        } catch (error) {
        }
    }


    if (success)
        return <Redirect to='/acoes' />

    return (
        <div className='container'>
            <h1 align='center'> Produtos</h1>
            <form >
                <div className='form-group'>
                    <InputGroup>
                        <InputGroupAddon addonType='prepend'>Nome: </InputGroupAddon>
                        <input required type='text' value={nome} onChange={onChangeNome}
                            className='form-control' id='name' placeholder='Nome do item' />
                    </InputGroup>
                </div>
                <div className='form-group'>
                    <InputGroup>
                        <InputGroupAddon addonType='prepend'>Quantidade: </InputGroupAddon>
                        <input type='number' value={qtd} onChange={onChangeQtd}
                            className='form-control' id='name' placeholder='Quantidade de itens' />
                    </InputGroup>
                </div>
                <div className='form-group'>
                    <InputGroup>
                        <InputGroupAddon addonType='prepend'>R$: </InputGroupAddon>
                        <input type='number' value={valor} onChange={onChangeValor}
                            className='form-control' id='name' placeholder='Valor' />
                    </InputGroup>
                </div>
                <button onClick={save} className='btn btn-primary'>
                    Salvar
            </button>
            </form>

            <table className='table  table-dark'>
                <thead>
                    <tr align='center'>
                        <th scope='col'>Id</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Qtd</th>
                        <th scope='col'>Valor</th>
                        <th scope='col'>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderizaLinha)}
                </tbody>
            </table>
        </div>
    )
}

export default Acoes