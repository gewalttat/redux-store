//основной экшен добавляющий книги
//пейлод из стейта загрузит книги
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

//экшен с запросом перезагрузки стора книг
const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

//экшен с ошибкой загрузки книг
//пейлод получит ошибку которая возникнет
const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

export const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
};

export const bookRemovedFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookId
  };
};

export const allBooksRemovedFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId
  };
};


const fetchBooks = (bookstoreService, dispatch) => () => {
            //диспатч реквеста, запрос книг по тайпу букс реквестед
            dispatch(booksRequested());
            //запрос идет на сервисный код (или на сервер в дургом случае) и получает геттер
            bookstoreService.getBooks()
                //если ок дата(книги) диспатчатся аргументом в экшен букслодед и отрисовываются 
                .then((data) => dispatch(booksLoaded(data)))
                //если нет вызов ошибки
                .catch((err) => dispatch(booksError(err)))
}


export {
    fetchBooks
}

