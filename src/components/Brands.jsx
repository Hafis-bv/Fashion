import React from "react";

const Brands = () => {
  const brands = [
    {
      id: 1,
      image: "/hm.svg",
      title: "hm",
    },
    {
      id: 2,
      image: "/obey.svg",
      title: "obey",
    },
    {
      id: 3,
      image: "/shopify.svg",
      title: "shopify",
    },
    {
      id: 4,
      image: "/lacoste.svg",
      title: "lacoste",
    },
    {
      id: 5,
      image: "/levis.svg",
      title: "levis",
    },
    {
      id: 6,
      image: "/amazon.svg",
      title: "amazon",
    },
  ];

  return (
    <div>
      {brands.map((brand) => (
        <img key={brand.id} src={brand.image} alt={brand.title} />
      ))}
    </div>
  );
};

export default Brands;
