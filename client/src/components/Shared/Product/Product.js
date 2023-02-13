import { useEffect, useState } from "react";
import { IoBagHandleSharp } from "react-icons/io5";
import ReactImageAppear from "react-image-appear";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Product = ({ product, getItem, updateItemQuantity, language }) => {
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [productId, setProductId] = useState("");

  const { items } = useCart();
  const { addItem } = useCart();

  const handleAddToCart = (event, product) => {
    event.preventDefault();
    addItem(product);
    setProductId(product.id);
  };

  useEffect(() => {
    const hasProduct = items.find((pd) => pd.id == productId);
    if (hasProduct) {
      setIsProductInCart(true);
    }
  }, [productId, items]);

  return (
    <div class="col-md-3 make__border">
      <Link
        to={"/product-details/" + product.product_slug}
        className="new__product"
      >
        <div className="new__product__img__wrapper">
          <div className="new__product__img">
            <ReactImageAppear
              src={`/${product.product_image}`}
              alt={product.image_alt}
            />
          </div>
        </div>
        <div className="new__product__content">
          <h2 className="new__product__title">
            {language ? product.en_product_name : product.bn_product_name}
          </h2>
          <p className="mt-2" style={{ fontSize: "14px" }}>
            {language ? product.en_short_desc : product.bn_short_desc}
          </p>
          <div className="new__product__tk">
            <span className="new__product__price">৳{product.price}</span>
            {product.prev_price && (
              <span className="new__product__prevPrice">
                ৳{product.prev_price}
              </span>
            )}
          </div>
          {isProductInCart ? (
            <div
              className="new__product__count"
              onClick={(event) => event.preventDefault()}
            >
              {getItem(product.id) ? (
                <button
                  className="new__product__minus"
                  onClick={() =>
                    updateItemQuantity(
                      product.id,
                      getItem(product.id) ? (
                        getItem(product.id).quantity - 1
                      ) : (
                        <div>0</div>
                      )
                    )
                  }
                >
                  -
                </button>
              ) : (
                <button className="new__product__minus">-</button>
              )}
              <span className="new__product__quantity">
                {getItem(product.id) ? (
                  getItem(product.id).quantity
                ) : (
                  <div>0</div>
                )}
              </span>
              <button
                className="new__product__plus"
                onClick={() => addItem(product)}
              >
                +
              </button>
            </div>
          ) : (
            <div className="product__cart__btn__wrapper">
              <button
                className="product__cart__btn"
                onClick={(event) => handleAddToCart(event, product)}
              >
                Add To Bag
                <IoBagHandleSharp className="product__bag__icon" />
              </button>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Product;
