import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { ICart } from "../../../models/cart";
import { useStore } from "../../../stores/store";
import "./ShoppingCart.css";

export default observer(function ShoppingCart() {
  const {
    cartStore: {
      handleRemoveFromCart,
      AddedCartItems,
      totalAmount,
      handleAddToCart,
      removeCompleteProduct,
    },
  } = useStore();

  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Order Summary</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body bg-light">
          {AddedCartItems.length === 0 ? <p>No Items in the cart</p> : null}
          {AddedCartItems.map((item) => (
            <div className="row shadow-lg mt-3" key={item.productId}>
              <div className="col-lg-8">
                <h6 className="p-2 text-start float-start">{item.title}</h6>
              </div>
              <div className="col-lg-4 pt-2">
                <button
                  type="button"
                  onClick={() => removeCompleteProduct(item)}
                  className="btn-close text-end float-end"
                  aria-label="Close"
                ></button>
              </div>
              <div className="col-lg-5 pt-2 pl-3 pb-4">
                <span className="badge text-dark">500mg</span>
                <span
                  className="text-danger fw-bold"
                  style={{ paddingLeft: "10px" }}
                >
                  $ {item.price}
                </span>
              </div>
              <div className="col-lg-7 pt-2 pl-3 pb-4">
                <div className="float-end">
                  <div className="input-group w-50 float-end">
                    <button
                      onClick={() => handleRemoveFromCart(item)}
                      className="btn btn-danger btn-sm text-white rounded-0"
                    >
                      -
                    </button>
                    <input
                      className="form-control text-center"
                      min={1}
                      max="5"
                      defaultValue="0"
                      value={item.quantity}
                    />
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="btn btn-danger btn-sm text-white rounded-0"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {AddedCartItems.length === 0 ? null : (
            <div className="col-lg-12 position-absolute bottom-0 start-0 p-4 bg-white">
              <h6 className="float-start">Total: ${totalAmount.toFixed(2)}</h6>
              <Link to="/checkout" className="btn btn-danger float-end">
                Proceed to Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
});
