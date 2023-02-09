import './Product.css'
import { useParams } from 'react-router-dom'


function Product(props) {
  const params = useParams();
  const { Product } = props;
  return(
    <div>
      <article className='book'>
        <h2 className='product__title'> { Product.title } </h2>
        <h3 className='product__author'> { Product.author } </h3>
        <p className='product__plot'> { Product.plot } </p>
        <button className='buy__button'><a href={`/Products/${Product.id}`}>More Details</a></button>
      </article>
    </div>
  )
}

/*function ProductView (props) {
  const { Product } = props.Product;
  return (
    <div>
      <article className='book'>
        <h2 className='product__title'> { Product.title } </h2>
        <h3 className='product__author'> { Product.author } </h3>
        <p className='product__plot'> { Product.plot } </p>
        <button className='buy__button'><a href={`/Products/${Product.id}`}>More Details</a></button>
      </article>
    </div>
  )
}*/

export default Product;