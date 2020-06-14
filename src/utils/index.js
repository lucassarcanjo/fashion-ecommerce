export const convertProductObj = (product, quantity, size, sku) => {
  delete product.sizes;

  return {
    ...product,
    quantity,
    size,
    sku,
  };
};
