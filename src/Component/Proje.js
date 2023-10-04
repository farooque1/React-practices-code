import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Proje() {
  const [products, setProducts] = useState([]);
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [selectedColor, setSelectedColor] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [featuredOnly, setFeaturedOnly] = useState(false);
  
  // Fetch data from APIs using axios
  useEffect(() => {
    axios.all([
      axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products'),
      axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors'),
      axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material'),
      axios.get('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured')
    ])
    .then(axios.spread((productsRes, colorsRes, materialsRes, featuredRes) => {
      setProducts(productsRes.data.products);
      setColors(colorsRes.data.colors);
      setMaterials(materialsRes.data.material);
      setFeaturedOnly(featuredRes.data.featured);
    }))
    .catch(error => console.log(error));
  }, []);
  
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
  
  // Render product list
  return (
    <div>
      <div>
        <label htmlFor="color-select">Color:</label>
        <select id="color-select" value={selectedColor} onChange={event => setSelectedColor(event.target.value)}>
          <option value="All">All</option>
          {colors.map(color => (
            <option key={color.id} value={color.name}>{color.name}</option>
          ))}
        </select>
        <label htmlFor="material-select">Material:</label>
        <select id="material-select" value={selectedMaterial} onChange={event => setSelectedMaterial(event.target.value)}>
          <option value="All">All</option>
          {materials.map(material => (
            <option key={material.id} value={material.name}>{material.name}</option>
          ))}
        </select>
        <label>
          <input type="checkbox" checked={featuredOnly} onChange={event => setFeaturedOnly(event.target.checked)} />
          Featured only
        </label>
      </div>
      
      <div>
        {getFilteredProducts().map(product => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>{product.name}</div>
            <div>{product.color}</div>
            </div>
        ))}
    </div>
    </div>
  )}

  export default Proje;
    
