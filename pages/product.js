const Product = ({ name }) => (
  <div>
    <h1>{name}</h1>
    <p>Welcome to our product page for {name}!</p>
  </div>
)

Product.getInitialProps = async ({ query }) => {
  return { name: query.name }
}

export default Product
