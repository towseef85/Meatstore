import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Product/Card";
import { useStore } from "../stores/store";

export default observer(function Category() {
  const { id } = useParams<{ id: string }>();
  const {
    productStore: { loadProductforCategory, ProductForCategory },
  } = useStore();
  console.log("categoryId", id);
  useEffect(() => {
    if (id) loadProductforCategory(id);
  }, [id, loadProductforCategory]);
  return (
    <>
      <div className="container mt-4 gx-5">
        <div className="col-lg-12 text-center mt-2 mb-4">
          <img
            src="/assets/banner.jpg"
            className="img-responsive mb-4 mt-4"
            alt=""
          />
        </div>
        <div className="col=lg-12">
          <div className="row">
            {ProductForCategory?.length !== 0 ? (
              ProductForCategory?.map((p) => (
                <div className="col-lg-4" key={p.id}>
                    <Card product={p} />
                
                </div>
              ))
            ) : (
              <div className="alert alert-success">
                <p className="text-center">
                  No Products found for this category
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
});
