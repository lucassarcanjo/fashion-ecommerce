import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../actions/cart";

import { qtyList } from "../../constants";
import { convertProductObj } from "../../utils";

import "./Product.scss";

import defaultImg from "../../assets/img/product-image.jpeg";
import Select from "../../components/Select";
import SizeSelector from "../../components/SizeSelector/SizeSelector";

const Product = ({ id }) => {
  const { all } = useSelector((state) => state.products);
  const product = all.find((item) => item.id === id);

  const { selectedSize } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [textButton, setTextButton] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  useEffect(() => {
    setTextButton(
      selectedSize === "" ? "Selecione um tamanho" : "Adicionar ao carrinho"
    );
  }, [selectedSize]);

  const handleBuyClick = (e) => {
    e.preventDefault();

    const { sku } = product.sizes.find((item) => item.size === size);
    const cartProduct = convertProductObj(product, quantity, size, sku);
    dispatch(addToCart(cartProduct));
  };

  const handleSelectQty = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleSelectSize = (e) => {
    setSize(e.target.textContent);
  };

  return (
    <div className="product">
      <h1 className="product__title">{product.name}</h1>
      <picture className="product__picture">
        <img
          src={product.image ? product.image : defaultImg}
          alt={product.name}
        />
      </picture>
      <div className="product__price">
        <span>{product.actual_price}</span>
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
          <Select name="Qty" options={qtyList} handleChange={handleSelectQty} />
        </div>
      </div>
      <div className="product__button">
        <button type="button" onClick={handleBuyClick}>
          {textButton}
        </button>
      </div>
    </div>
  );
};

export default Product;
