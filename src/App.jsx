import Header from "products_app/Header";
import OrderCard from "./components/OrderCard";

function App() {
  return (
    <div>
      <header>
        <Header rightNav="View Products" />
      </header>
      <div className="mt-30 mb-30">
        <OrderCard />
      </div>
    </div>
  );
}

export default App;
