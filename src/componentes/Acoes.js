import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Alert } from 'reactstrap'

function Acoes() {
    const [nome, setNome] = useState('')
    const [qtd, setQtd ] = useState(0)
    const [valor, setValor] = useState(0)
    const [data, setData] = useState([])

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
            nome,
            qtd,
            valor
        })
            .then(resp => {
                //setSucess(true)
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
    return (
        <div className='container'>
            <h1 align='center'> Produtos  {valor}</h1>
            <pre>{JSON.stringify(data) }</pre>

            <form >
                <div className='form-group'>
                    <label>Nome</label>
                    <input type='text' value={nome} 
                    onChange={onChangeNome} id='name' placeholder='Nome' />
                </div>

                <div className='form-group'>
                <label>Quantidade</label>
                <input type='number' value={qtd} 
                onChange={onChangeQtd} id='name' placeholder='QTD' />
                </div>

                <div className='form-group'>
                <label>Valor</label>
                <input type='text' value={valor} 
                onChange={onChangeValor} id='name' placeholder='Valor' />
                </div>

            <button onClick={validar} className='btn btn-primary'>
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