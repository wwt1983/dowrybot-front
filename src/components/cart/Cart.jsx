import "./Cart.css";
import Button from "../button/Button";

function Cart({ order, onCheckout }) {
  return (
    <div className="cart__container">
      <br /> <span className="">Ваша разадча: {order.title}</span>
      {!order ? (
        "Раздача не выбрана"
      ) : (
        <Button title="Продолжить" type={"checkout"} disabled={false} onClick={onCheckout}/>
      )}
    </div>
  );
}

export default Cart;
