import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCustomersAction,
  removeCustomersAction,
} from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  // console.log("cash", cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomers = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomersAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomersAction(customer.id));
  };

  return (
    <div className="App">
      <h1>Баланс: {cash}</h1>
      <div>
        <button onClick={() => addCash(+prompt())}>Пополнить счет</button>
        <button onClick={() => getCash(+prompt())}> Снять со счета</button>
        <button onClick={() => addCustomers(prompt("Введите имя", ""))}>
          Добавить клиента
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              onClick={() => removeCustomer(customer)}
              style={{
                fontSize: "2rem",
                border: "1px solid black",
                padding: "10px",
                marginTop: 5,
              }}
              key={customer.id}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "2rem", marginTop: 20 }}>
          Клиенты отсутствуют
        </div>
      )}
    </div>
  );
}

export default App;
