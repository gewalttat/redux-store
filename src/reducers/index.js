import updateBookList from '../reducers/book-list'
import updateShoppingCart from '../reducers/shopping-cart'
//это редюсер через который пролетают все данные
//здесь стейт (читай стор) = объявленному выше, вторым компонентом прилетает действие
//у дейсьвий есть тайпы
//применяю свич-кейс
//если у экшена тайп букс лодед, возвращаю список книг payload
//в дефолтном варианте со стейтом-стором ничего не происходит 

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  }
};

export default reducer;