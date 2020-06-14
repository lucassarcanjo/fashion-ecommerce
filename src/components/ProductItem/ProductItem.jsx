import React from "react";
import PropTypes from "prop-types";
import { FiTruck, FiMapPin } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { updateQtyCart, removeFromCart } from "../../actions/cart";

import Select from "../Select";
import { qtyList } from "../../constants";

import defaultImg from "../../assets/img/product-image.jpeg";
import "./ProductItem.scss";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleChangeQty = (e) => {
    const qty = parseInt(e.target.value);
    dispatch(updateQtyCart(product.sku, qty));
  };

  const handleClickRemove = () => {
    dispatch(removeFromCart(product.sku, product.quantity));
  };

  return (
    <li className="product__list__item">
      <div className="product__list__thumb">
        <img
          src={product.image ? product.image : defaultImg}
          alt={product.name}
        />
      </div>
      <div className="product__list__info">
        <h3>{product.name}</h3>
        <p>
          Tamanho: {product.size} <br />
          Cor: {product.color.toUpperCase()}
        </p>
        <div className="product__list__price">
          <span> {product.actual_price} </span>
        </div>
        <div className="product__list__qty">
          <Select
            name="Qty"
            options={qtyList}
            defaultValue={product.quantity}
            handleChange={handleChangeQty}
          />
        </div>
        <div className="product__list__shipping">
          <div className="product__list__shipping-icon">
            <FiTruck size={20} />
          </div>
          <div className="product__list__shipping-info">
            <h4>Entrega</h4>
            <p>Ter, 18/06 - Ter, 23/06</p>
          </div>
        </div>
        <div className="product__list__shipping">
          <div className="product__list__shipping-icon">
            <FiMapPin size={20} />
          </div>
          <div className="product__list__shipping-info">
            <h4>Retire na loja</h4>
            <p>Hoje, 13/06</p>
          </div>
        </div>
        <div className="product__list__actions">
          <button type="button" onClick={handleClickRemove}>
            Remover
          </button>
          {/* <button>Salvar para depois</button> */}
        </div>
      </div>
    </li>
  );
};

ProductItem.propTypes = {};

export default ProductItem;
