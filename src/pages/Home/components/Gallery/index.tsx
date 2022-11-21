import { products } from "./products";

export function Gallery() {
  return (
    <main>
      {products.map((product) => {
        return (
          <>
            <div key={product.id}>
              <img src={product.image} />
              {product.flags.map((flag, index) => {
                return <span key={index}>{flag}</span>;
              })}
              <h1>{product.name}</h1>
              <span>{product.description}</span>
            </div>
            <div>
              <strong>{product.price}</strong>
            </div>
          </>
        );
      })}
    </main>
  );
}
