const searchFor = async (query) => {
  const data = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
  );
  const { results } = await data.json();
  return results.map((product) => {
    return {
      id: product.id,
      title: product.title,
      image: product.thumbnail,
      price: product.price,
      location: product.address.state_name,
    };
  });
};

const get = async (prodID) => {
  console.log("HOLIS");
  const res = await fetch(`https://api.mercadolibre.com/items/${prodID}`);
  const data = await res.json();

  if (data.error) return null;

  const {
    id,
    title,
    price,
    thumbnail,
    condition,
    pictures,
    sold_quantity,
    shipping: { free_shipping },
    category_id,
  } = data;

  const rawCategory = await fetch(
    `https://api.mercadolibre.com/categories/${category_id}`
  );
  const { path_from_root }   = await rawCategory.json();
  

  
  const rawDesc = await fetch(
    `https://api.mercadolibre.com/items/${prodID}/description`
  );
  const { plain_text } = await rawDesc.json();

  return {
    id,
    title,
    price,
    thumbnail,
    condition,
    pictures,
    sold_quantity,
    plain_text,
    free_shipping,
    path_from_root,
  };
};

export { searchFor, get };
