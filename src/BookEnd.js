import React, { useState, useEffect } from 'react';

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
        <div style={divStyle}>
                <table>
                    <caption>Книги, которые я прочитал.</caption>
                    <tr>
                        <th>Название книги.</th>
                        <th>Автор книги.</th>
                    </tr>
                    {book}
                </table>
                <div style={divStyle}>
                    Название книги:<input onChange={(e) => setValueBook(e.target.value)}></input>
                    <br></br>
                    Автор книги:<input onChange={(e) => setValueAuthor(e.target.value)}></input>
                    <br></br>
                    <button onClick={() => setClick(true)}>Добавить</button>
                </div>
            </div>
    )
}

export default BookEnd;