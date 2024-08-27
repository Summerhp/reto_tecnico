import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import Filters from '../../components/filters';
import ProductGrid from '../../components/productGrid';
import SortSelect from '../../components/sortProduct';
import SearchForm from '../../components/searchProduct';
import data from '../../utils/data.json';
import Carrusel from '../../components/carousel';
import carousel from '../../assets/img/Carousel.png'
import ProductsOften from '../../components/productsOften';

interface Product {
  id: string;
  nombre: string;
  marca: string;
  precio: number;
  reviews: number;
  imagen: string;
  categoria: string;
  informacion: any;
}

interface Brand {
  name: string;
}

const getAllBrands = (products: Product[]): Brand[] => {
  const brands = products.map(product => product.marca);
  return Array.from(new Set(brands)).map(name => ({ name }));
};

const Products: React.FC = () => {
  const allProducts: Product[] = data;
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all-categories');
  const [sortOrder, setSortOrder] = useState<string>('review');
  const [allBrands, setAllBrands] = useState<Brand[]>(getAllBrands(allProducts));
  const [selectedFilters, setSelectedFilters] = useState({
    brands: [],
    reviews: 0,
    priceRange: { min: 0, max: 999999 },
  });

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    setFavorites(storedFavorites);
  }, []);
  useEffect(() => {
    let filtered = allProducts.filter((product) => {
      const fullName = `${product.marca.toLowerCase()} ${product.nombre.toLowerCase()}`;
      const matchesSearchTerm = fullName.includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'all-categories' || product.categoria.toLowerCase() === selectedCategory.toLowerCase();
      const matchesBrands = selectedFilters.brands.length === 0 || selectedFilters.brands.map(brand => brand.name).includes(product.marca);

      const matchesReviews = product.reviews >= selectedFilters.reviews;

      const matchesPrice =
        product.precio >= (selectedFilters.priceRange.min ?? 0) &&
        product.precio <= (selectedFilters.priceRange.max ?? Infinity);

      return matchesSearchTerm && matchesCategory && matchesBrands && matchesReviews && matchesPrice;
    });

    if (sortOrder === 'asc') {
      filtered = filtered.sort((a, b) => a.precio - b.precio);
    } else if (sortOrder === 'desc') {
      filtered = filtered.sort((a, b) => b.precio - a.precio);
    } else if (sortOrder === 'review') {
      filtered = filtered.sort((a, b) => b.reviews - a.reviews);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, sortOrder, selectedFilters, allProducts]);

  useEffect(() => {
    if (selectedCategory === 'all-categories') {
      setAllBrands(getAllBrands(allProducts));
    } else {
      const filteredByCategory = allProducts.filter(
        (product) => product.categoria.toLowerCase() === selectedCategory.toLowerCase()
      );
      setAllBrands(getAllBrands(filteredByCategory));
    }
  }, [selectedCategory, allProducts]);

  const handleFiltersChange = (filters) => {
    setSelectedFilters(filters);
  };

  const toggleFavorite = (id: string) => {
    const updatedFavorites = {
      ...favorites,
      [id]: !favorites[id],
    };
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
  const images = [carousel, carousel, carousel];

  return (
    <>
      <Row align={'middle'}>
        <Col span={8}>
          <SortSelect setSortOrder={setSortOrder} />
        </Col>
        <Col span={10}>
          <SearchForm setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} />
        </Col>
      </Row>
      <Row>
        <Col span={6} offset={2}>
          <Filters brands={allBrands} onFiltersChange={handleFiltersChange} />
        </Col>
        <Col className='col-productgrid' span={16} offset={0}>
          <ProductGrid favorites={favorites} products={filteredProducts} toggleFavorite={toggleFavorite} />
        </Col>
      </Row>
      <Carrusel images={images}></Carrusel>
      <ProductsOften></ProductsOften>
    </>
  );
};

export default Products;