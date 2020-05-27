import React, {Component} from 'react';


const divStyle = {
    outline: '2px solid #000',
    width: '250px' // 'ms' is the only lowercase vendor prefix
  };


class AppNew extends React.Component {
	constructor() {
		super();
		this.state = {
			books: [
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
                }
            ],
            valueBook: '',
            valueAuthor: ''
		};
	}

	//Изменяем this.state.value при изменении селекта:
	addClick(e) {
        this.state.books.push({
            name: this.state.valueBook,
            author: this.state.valueAuthor
        });
        this.setState({books: this.state.books})
    }

    changeBook(e){
        this.setState({valueBook: e.target.value})
    }

    changeAuthor(e){
        this.setState({valueAuthor: e.target.value})
    }
    
	render() {
        
        let books = this.state.books.map(item =>{
           return(
               <tr>
                   <th>{item.name}</th>
                   <th>{item.author}</th>
               </tr>
            ) 
        })

		return(
            <div style={divStyle}>
               <table>
                    <caption>Книги, которые я хочу прочитать.</caption>
                    <tr>
                        <th>Название книги.</th>
                        <th>Автор книги.</th>
                    </tr>
                    {books}
                </table>
                <div style={divStyle}>
                    Название книги:<input onChange={this.changeBook.bind(this)}></input>
                    <br></br>
                    Автор книги:<input onChange={this.changeAuthor.bind(this)}></input>
                    <br></br>
                    <button onClick={this.addClick.bind(this)}>Добавить</button>
                </div>
            </div>
        ) 
        
	}
}

export default AppNew;