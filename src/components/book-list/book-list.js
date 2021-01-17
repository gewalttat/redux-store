import React, { Component } from 'react'
import BookListItem from '../book-list-item/book-list-item'
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc'
import { fetchBooks, bookAddedToCart } from '../../actions/actions'
import { compose } from '../../utils/compose'
import Spinner from '../spinner/spinner'
import ErrorIndicator from '../error-indicator/error-indicator'
import './book-list.css'

class BookListContainer extends Component {

    componentDidMount() {
        //забирает данные из пропс (буксторсервис)
        this.props.fetchBooks();
    }


    //список книг получает книги из пропс
    //возвращает отрисованное заполнение списка книгами 
    render() {
        const { books, loading, error, onAddedToCart } = this.props;
        //если идет загрузка отображает спинер
        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <BookList
        books={books} 
        onAddedToCart={onAddedToCart}
        />
    }
}

//применяет входящие стейтом свойства в пропс, кажется
const mapStateToProps = ({ bookList: { books, loading, error }}) => {
    return { books, loading, error }
}

//функция диспатчит экшены
//буксторсервис деструктуризацией тащится из ownProps
const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    //ownProps позволяет получить доступ к обернутым данным
    return {
        //напрямую экшен передать нельзя (?)
        //возвращается объект фечбукс который выше обрабатывает компонент маунт
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
};


//отрисовка
//получает букс из пропс
//возвращает список с ид книги который включает в себя компонент буклистайтем
const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className='book-list'>
            {books.map((book) => {
                return (
                    <li key={book.id}>
                    {/*буклиститем получает в пропсы бук и функцию с телом из ид книги*/}
                        <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)} />
                    </li>
                )
            })}
        </ul>
    )}

console.log(typeof (booksLoaded))
//композ принимает НОС, коннект соединяет стейт и экшен
//они оборачивают буклист


export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);