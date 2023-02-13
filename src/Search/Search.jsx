import React, { useState } from 'react';
import {BsSearch} from "react-icons/bs";
import { Cards } from "../Components/Cards";
import { RotatingLines } from "react-loader-spinner";

import {productos} from "../Data/productos";

export const ProductList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(productos);
    const [isLoading, setIsLoading] = useState(false);
  
    const handleSearch = (event) => {
        setIsLoading(true)
        setSearchTerm(event.target.value);
        setTimeout(() => {
          setIsLoading(false)
          setFilteredProducts(
            productos.filter(product =>
              product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              product.id.toLowerCase().includes(searchTerm.toLowerCase())
            )
          );
        }, 3000);
    };
  
    return (
      <div>
          <div className='container'>
            <div className='search'>
              <input className='search-text' type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              <button className='search-button' onClick={handleSearch}>	<BsSearch/> Buscar</button>
            </div>

            <div>

              {isLoading ? 
              (
                <div className='spinner'>
                    <RotatingLines
                      strokeColor="grey"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="96"
                      visible={true}
                    />
                </div>

              ) : (
                <div className='card-box'>
                  {filteredProducts.map(product => (
                    <Cards key={product.id} name={product.name} price={product.price} id={product.id} image={product.img} />
                  ))}
                </div>
              )}
            </div>

            <p className='length'>{filteredProducts.length} {filteredProducts.length === 1 ? 'resultado' : 'resultados'}</p>
            </div>

        
        </div>

    );
}
  