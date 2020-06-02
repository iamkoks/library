import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import './index.css'

const divStyle = {
    outline: '2px solid #000',
    width: '250px' 
};

function BookEnd(){

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
        const [clickAdd, setAddClick] = useState(false);
        const [smShow, setSmShow] = useState(false);
        const [indexDelete, setIndexDelete] = useState(-1)
        const [indexChange, setIndexChange] = useState(-1)

        useEffect(() => {
            if (clickAdd && indexChange < 0) {
                books.push({
                    name: valueBook,
                    author: valueAuthor
                });
                setBook(books);
                setValueAuthor('');
                setValueBook('');
            }
            else if(clickAdd && indexChange >= 0){
                books.splice(indexChange, 1, {name: valueBook, author: valueAuthor})
                setBook(books);
                setIndexChange(-1);
                setValueAuthor('');
                setValueBook('');
            }
            setAddClick(false);
        }, [clickAdd])

        useEffect(() => {
            if (indexDelete>=0) {
                books.splice(indexDelete, 1)
                setBook(books);
                setIndexDelete(-1);
            }
        }, [indexDelete])

        useEffect(() => {
            if (indexChange>=0) {
                setValueBook(books[indexChange].name)
                setValueAuthor(books[indexChange].author)
            }
        }, [indexChange])



        const Add = () => {
            if(!valueBook || !valueAuthor)
            {
                return (
                    setSmShow(true)
                )
            }
            else
            {
                setAddClick(true)
            }
        }



        let book = books && books.map((item, index) =>{
        return(
                    <tr key={index} onClick={() => setIndexChange(index)}>
                        <th>{item.name}</th>
                        <th>{item.author}</th>
                        <th>
                            <Button variant="outline-dark" onClick={() => setIndexDelete(index)}>Удалить</Button>
                        </th>
                    </tr>
            ) 
        });

            
    return(
            <Card bg="dark" text="white" className="card"> 
                <Card.Header>Книги, которые я прочитал</Card.Header>
                <div style={{overflowY: "auto", height: "230px"}}>
                <Table className="table" striped bordered hover size="sm" variant="light" style={{width: '460px',marginLeft: '20px', marginTop: '20px'}}>
                    <thead>
                    <tr>
                        <th>Название книги.</th>
                        <th>Автор книги.</th>
                    </tr>
                    </thead>
                    <tbody>
                        {book}
                    </tbody>
                </Table>
                </div>
                    <InputGroup size="sm" className="mb-3" onChange={(e) => setValueBook(e.target.value)} style={{width: '440px', marginLeft: '30px', marginTop: '10px'}}>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Название книги:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={valueBook}/>
                    </InputGroup>
                    <InputGroup className="input" size="sm" className="mb-3" onChange={(e) => setValueAuthor(e.target.value)} style={{width: '440px', marginLeft: '30px'}}>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Автор книги:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={valueAuthor}/>
                    </InputGroup>
                        <Button variant="light" onClick={() => Add()} style={{width: '200px', marginLeft: '30px'}}>{ (indexChange>=0) ? "Изменить" : "Добавить"}</Button>
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

export default BookEnd;