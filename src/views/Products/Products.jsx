import './Products.css'
import Product from '../../components/Product/Product'
import Header from '../Header/Header'

const products = [
    {
        "id": 1,
        "title": "Goodnight Moon Will Will",
        "author": "Margaret Wise Brown",
        "publisher": "Harper Festival",
        "year": 1947,
        "pages": 30,
        "plot": "In a soothing, repetitive tone, a young rabbit says goodnight to all the things in the room worth of food before making his glorious. ",
        "audience": "1 - 4 years",
        "color": "#2F80ED"
      },
      {
        "id": 2,
        "title": "The Very Hungry Caterpillar",
        "author": "Eric Carle",
        "publisher": "Philomel Books",
        "year": 1969,
        "pages": 26,
        "plot": "In this classic children’s book, a caterpillar eats his way through a week’s worth of food before making his glorious.",
        "audience": "2 - 3 years",
        "color": "#27AE60"
      },
      {
        "id": 3,
        "title": "A Wrinkle in Time And Space",
        "author": "Madeleine L’Engle",
        "publisher": "Square Fish",
        "year": 1962,
        "pages": 256,
        "plot": "Back on current bestseller lists, likely thanks to Disney’s recent movie adaptation Back on current bestseller lists before making.",
        "audience": "10 - 14 years",
        "color": "#6FCF97"
      },
      {
        "id": 4,
        "title": "Harold and the Purple Crayon",
        "author": "Crockett Johnson",
        "publisher": "Harper Collins",
        "year": 1955,
        "pages": null,
        "plot": "Imagine if you could create a whole world just with one crayon a week’s worth of food before making his glorious in the room.",
        "audience": "4 - 8 years",
        "color": "#9B51E0"
      },
]

const productsComponent = products.map((product) => {
    return (
    <Product  Product={ product } />
    )
})

function Products () {
    return(
        <div >
          <Header />
          <article className='products-container'>
            { productsComponent }
          </article>
          <button className='homepage__button'>Back to home page</button>
        </div>
    )
}

export default Products