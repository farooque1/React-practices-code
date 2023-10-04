import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Api = () => {
//   const [products, setProducts] = useState([]);
//   const [colors, setColors] = useState([]);
//   const [materials, setMaterials] = useState([]);
//   const [featuredProducts, setFeaturedProducts] = useState([]);

const [products, setProducts] = useState([]);
const [colors, setColors] = useState([]);
const [materials, setMaterials] = useState([]);
const [selectedColor, setSelectedColor] = useState('All');
const [selectedMaterial, setSelectedMaterial] = useState('All');
const [featuredOnly, setFeaturedOnly] = useState(false);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products', {
//           headers: {
//             'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
//           },
//         });
//         setProducts(response.data.products); console.log(response.data.products);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     const fetchColors = async () => {
//       try {
//         const response = await axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors', {
//           headers: {
//             'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
//           },
//         });
//         setColors(response.data.colors);console.log(response.data.colors);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     const fetchMaterials = async () => {
//       try {
//         const response = await axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material', {
//           headers: {
//             'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
//           },
//         });
//         setMaterials(response.data.material);console.log(response.data.material);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     const fetchFeaturedProducts = async () => {
//       try {
//         const response = await axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured', {
//           headers: {
//             'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
//           },
//         });
//         setFeaturedProducts(response.data.featured);console.log(response.data.featured);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProducts();
//     fetchColors();
//     fetchMaterials();
//     fetchFeaturedProducts();
//   }, []);

  useEffect(() => {
    axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products', {
      headers: {
        Authorization: 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
      },
    })
      .then(response =>{setProducts(response.data.products); console.log("list of product",response.data.products)})
      .catch(error => console.error(error))
    
    axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors', {
      headers: {
        Authorization: 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
      },
    })
      .then(response => {setColors(response.data.colors); console.log("color",response.data.colors)}) 
      .catch(error => console.error(error));
    
    axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material', {
      headers: {
        Authorization: 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
      },
    })
      .then(response => {setMaterials(response.data.material); console.log("material",response.data.material) } )
      .catch(error => console.error(error));
  }, []);
  
  function getFilteredProducts() {
    if (featuredOnly) {
      return products.filter(product => product.featured);
    } else {
      return products;
    }
  }

  function getFilteredProducts() {
    let filteredProducts = products;
    
    if (featuredOnly) {
      filteredProducts = filteredProducts.filter(product => product.featured);
    }
    
    if (selectedColor !== 'All') {
      filteredProducts = filteredProducts.filter(product => product.color === selectedColor);
    }
    
    if (selectedMaterial !== 'All') {
      filteredProducts = filteredProducts.filter(product => product.material === selectedMaterial);
    }
    
    return filteredProducts;
  }

  console.log(colors);
  console.log(materials);
  const filteredProducts = getFilteredProducts();


  return (
  <div>
    {filteredProducts.map(product => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>Color: {colors.find(color => color.id === product.colorId)?.name}</p>
        <p>Material: {materials.find(material => material.id === product.materialId)?.name}</p>
        <button>Add to Cart</button>
      </div>
    ))}
  </div>
)
};


  // Here you can use the data fetched from the APIs and render it in your component

//   return (
//     <div>
//     </div>
    // Render your component
//   );
// };

export default Api;
