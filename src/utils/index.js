export const convertProductObj = (product, quantity, size, sku) => {
  delete product.sizes;

  return {
    ...product,
    quantity,
    size,
    sku,
  };
};

export const convertToTitleCase = (str) => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};
