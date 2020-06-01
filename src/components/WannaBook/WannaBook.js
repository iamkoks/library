import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import './index.css'


function WannaBook(){

        const[books, setBook] = useState(
        [
            {
                name: "Война и Мир",
                author: 'sdad'
            },
            {
                name: "qwe",
                author: 'wqe'
            },
            {
                name: "rty",
                author: 'fdg'
            },
            {
                name: "yui",
                author: 'cxv'
            }]
        )
        
        const[valueBook, setValueBook] = useState('');
        const[valueAuthor, setValueAuthor] = useState('');
        const [click, setClick] = useState(false);
        const [smShow, setSmShow] = useState(false);

        useEffect(() => {
            if (click) {
                books.push({
                    name: valueBook,
                    author: valueAuthor
                });
                setBook(books);
                setClick(false);
            }
        }, [click])

        const Click = () => {
            if(!valueBook || !valueAuthor)
            {
                return (
                    setSmShow(true)
                )
            }
            else
            {
                setClick(true)
            }
        }

        let book = books && books.map((item, index) =>{
        return(
                    <tr key={index}>
                        <th>{index}</th>
                        <th key={index}>{item.name}</th>
                        <th key={index}>{item.author}</th>
                    </tr>
            ) 
        });

            
    return(
            <Card bg="dark" text="white" className="card"> 
                <Card.Header>Книги, которые я хочу прочитать</Card.Header>
                <Table className="table" striped bordered hover size="sm" variant="light" style={{width: '460px',marginLeft: '20px', marginTop: '20px'}}>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Название книги.</th>
                        <th>Автор книги.</th>
                    </tr>
                    </thead>
                    <tbody>
                        {book}
                    </tbody>
                </Table>
                    <InputGroup size="sm" className="mb-3" onChange={(e) => setValueBook(e.target.value)} style={{width: '440px', marginLeft: '30px'}}>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Название книги:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                    <InputGroup className="input" size="sm" className="mb-3" onChange={(e) => setValueAuthor(e.target.value)} style={{width: '440px', marginLeft: '30px'}}>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Автор книги:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                    <Button variant="light" onClick={() => Click()} style={{width: '200px', marginLeft: '30px'}}>Добавить</Button>
                    <InputGroup className="input" size="sm" className="mb-3" onChange={(e) => setValueAuthor(e.target.value)} style={{width: '440px', marginLeft: '30px', marginTop: '10px'}}>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Выберите id:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                    <Button variant="light" style={{width: '200px', marginLeft: '30px'}}>Удалить</Button>
                    <br></br>
                    
                    {/* Окно ошибки */}
                    <Modal
                        size="sm"
                        show={smShow}
                        onHide={() => setSmShow(false)}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Ошибка
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Вы не заполнили все поля.</Modal.Body>
                    </Modal>
            </Card>
        
    
    )
}

export default WannaBook;