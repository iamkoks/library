import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        const [click, setClick] = useState(false);

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

        const addClick = ()=> {
            setBook( books.push({
                name: valueBook,
                author: valueAuthor
            }))
        };

        let book = books && books.map(item =>{
        return(
                    <tr>
                        <th>{item.name}</th>
                        <th>{item.author}</th>
                    </tr>
            ) 
        });

            
    return(
            <Card bg="dark" text="white" className="card"> 
                <Card.Header>Книги, которые я прочитал</Card.Header>
                <Table className="table" striped bordered hover size="sm" variant="dark">
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
                    <p className="p">Название книги:</p>
                    <input className="input" onChange={(e) => setValueBook(e.target.value)}></input>
                    <br></br>
                    <p className="p">Автор книги:</p>
                    <input className="input" onChange={(e) => setValueAuthor(e.target.value)}></input>
                    <br></br>
                    <button className="button" onClick={() => setClick(true)}>Добавить</button>
            </Card>
               
                
    
    )
}

export default BookEnd;