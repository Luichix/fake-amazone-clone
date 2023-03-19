import React from 'react';
import './Subtotal.css';
// import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../store/StateProvider';
import { getBasketTotal } from '../store/reducer';

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      {/* <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ( {basket.length} items): <strong>{value} </strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // part of the homework
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      /> */}

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
