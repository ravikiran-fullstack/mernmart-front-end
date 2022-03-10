import data from "./data";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <a href='/'>MERNMART</a>
      </header>
      <main>
        <h1>Featured products</h1>
        <div className='products'>
          {data.products.map((product) => {
            return (
              <div className='product' key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className='productInfo'>
                  <a href={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </a>
                  <p>
                    <strong>${product.price}</strong>
                  </p>
                  <button>Add to Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
