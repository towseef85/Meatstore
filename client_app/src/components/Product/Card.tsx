import { Link } from "react-router-dom"
import { IProduct } from "../../models/Product"
import AddToCartButton from "../Controls/AddToCartButton"

interface Props{
    product: IProduct;

}

function Card({product}:Props) {
    return (
        <div className="card shadow-sm   bg-body rounded-3">
                    {product.photos &&
                      product.photos?.map((i) => (
                        <img
                          key={i.id}
                          src={i.url}
                          className="card-img-top"
                          alt={product.title}
                          style={{ maxHeight: "260px" }}
                        />
                      ))}
                    <div className="card-body">
                      <h6 className="card-title">
                        <Link
                          to={`/Product/${product.id}`}
                          className="text-decoration-none text-dark"
                        >
                          {product.title}
                        </Link>
                      </h6>
                      <p
                        className="card-text text-muted"
                        style={
                            product.subTitle
                            ? { padding: "0px" }
                            : { padding: "12.5px" }
                        }
                      >
                        {product.subTitle}
                      </p>
                      <p className="card-text text-truncate fw-light">
                        {product.description}
                      </p>
                      <p className="card-text text-bold fs-6">
                        Min Quantity: {product.minQuantity}
                      </p>
                      <h6 className="text-danger fs-5 float-start pt-1">
                        MRP: ${product.price}
                      </h6>
                      <AddToCartButton product={product}/>
                    </div>
                  </div>
    )
}

export default Card
