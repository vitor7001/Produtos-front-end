import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { InputGroup, InputGroupAddon} from 'reactstrap';

function Acoes() {
    const [nome, setNome] = useState('')
    const [qtd, setQtd] = useState(0)
    const [valor, setValor] = useState(0)
    const [data, setData] = useState([])
    const [salvou, setSalvou] = useState(false)

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
    }, [salvou])

    const limparCampos = () =>{
        setNome('')
        setQtd(0)
        setValor(0)
    }

    const save = () => {
        axios.post('/produto', {
            "nome": nome,
            "quantidade": qtd,
            "valor": valor
        })
            .then(resp => {
                //setSucess(true)
                setSalvou(!salvou)
                limparCampos()
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

                <td>{record.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>

                <td>
                    <Link className='btn btn-primary'
                        to={'/produto/' + record.id}>Info</Link>
                </td>
            </tr>
        )
    }

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
               
            </form>

            <button onClick={save} className='btn btn-primary'>
                    Salvar
            </button>

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