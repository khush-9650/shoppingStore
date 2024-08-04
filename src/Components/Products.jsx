import Container from "./UI/Container";
import products from "../data/products";
import Product from "./Product";
import styles from "./Products.module.css";

function Products() {
  return (
    <Container>
      <h1 className="text-3xl font-bold">Best of ARC</h1>
      <div className={styles.products}>
        {" "}
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </Container>
  );
}

export default Products;
