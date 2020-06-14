import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../actions/cart";

import { convertProductObj, convertToTitleCase } from "../../utils";
import { qtyList } from "../../constants";

import { Select, SizeSelector, BuyConfirmBox } from "../../components";

import defaultImg from "../../assets/img/product-image.jpeg";
import "./Product.scss";

const Product = ({ id }) => {
  const [textButton, setTextButton] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [boxVisible, setBoxVisible] = useState(false);
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.all.find((item) => item.id === id)
  );

  useEffect(() => {
    setTextButton(
      size === "" ? "Selecione um tamanho" : "Adicionar ao carrinho"
    );
  }, [size]);

  const handleBuyClick = (e) => {
    e.preventDefault();

    const { sku } = product.sizes.find((item) => item.size === size);
    const cartProduct = convertProductObj({ ...product }, quantity, size, sku);

    dispatch(addToCart(cartProduct));

    setBoxVisible(true);
  };

  const handleSelectQty = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleSelectSize = (e) => {
    setSize(e.target.textContent);
  };

  const handleCloseClick = () => {
    setBoxVisible(false);
  };

  return (
    <>
      <div className="product">
        <h1 className="product__title">{convertToTitleCase(product.name)}</h1>
        <picture className="product__picture">
          <img
            src={product.image ? product.image : defaultImg}
            alt={product.name}
          />
        </picture>
        <div className="product__price">
          {product.on_sale ? (
            <span className="product__price--regular">
              {product.regular_price}
            </span>
          ) : (
            <></>
          )}

          <span className="product__price--actual">{product.actual_price}</span>
          <br />
          <span className="product__price__installments">
            ou em até {product.installments} sem juros no cartão
          </span>
        </div>
        <div className="product__section">
          <h3 className="product__subtitle">Tamanho</h3>
          <div className="product__section-wrapper">
            <SizeSelector
              sizes={product.sizes}
              handleSelect={handleSelectSize}
              selected={size}
            />
          </div>
        </div>
        <div className="product__section">
          <h3 className="product__subtitle">Quantidade</h3>
          <div className="product__section-wrapper">
            <Select
              name="Qty"
              options={qtyList}
              handleChange={handleSelectQty}
            />
          </div>
        </div>
        <div className="product__button">
          <button type="button" onClick={handleBuyClick}>
            {textButton}
          </button>
        </div>
      </div>
      {boxVisible ? <BuyConfirmBox handleClick={handleCloseClick} /> : <></>}
      {/* {boxVisible ? <h1>Texte</h1> : <></>} */}
    </>
  );
};

export default Product;
