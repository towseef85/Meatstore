import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { useStore } from "../../stores/store";

interface Props {
  step: any;
}

export default observer(function CartSummary({ step }: Props) {
  const {
    cartStore: { handleRemoveFromCart, AddedCartItems, removeCompleteProduct, handleAddToCart, totalAmount }
  } = useStore();

  return (
    <div className="col-lg-12 p-3">
      <h4 className="p-2">Cart Summary</h4>
        <div className="col-lg-12 p-2 rounded">
        {AddedCartItems.length === 0 ? 
        <div className="alert alert-primary text-center" role="alert">
        No Products available in the cart <Link to="/" className="alert-link">Keep Shopping</Link>.
      </div>
        : null}
          {AddedCartItems.map((item) => (
            <div className="row border border-1 mt-3" key={item.productId}>
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
                      onChange={()=> console.log(item.quantity)}
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
            <div className="col-lg-12 p-4  mt-4 border-top">
              <h6 className="float-end">Total: ${totalAmount.toFixed(2)}</h6>
              
            </div>
          )}
          <div className="col-lg-12 mt-2 mb-4 p-4">
            {AddedCartItems.length === 0  ? null : <button className='btn btn-primary float-end' onClick={() => step(2)}>
              Next <i className="fas fa-chevron-right"></i>
              </button>}
            
          </div>
        </div>
    </div>
  );
});
