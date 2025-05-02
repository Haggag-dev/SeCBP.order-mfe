import OrderGrid from "./components/OrderGrid";

function App() {
  return (
    <div className="mt-30 mb-30 max-w-300 mx-auto px-8">
      <h1 className="text-6xl font-semibold mb-8">My Orders</h1>
      <OrderGrid />
    </div>
  );
}

export default App;
