// src/pages/Shop.jsx
import React, { useEffect, useState, useMemo } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";
import ProductCard from "./ProductCard";
import "./Shop.css";

// Assets (You can replace these with actual image URLs or imports)
const BANNER_1 = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"; // Placeholder for US Polo
const BANNER_2 = "https://images.unsplash.com/photo-1556906781-9a412961d289?auto=format&fit=crop&w=800&q=80"; // Placeholder for Nike

const PAGE_SIZE = 9; // Adjusted for grid layout

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // UI State
  const [search, setSearch] = useState("");
  // Changed to arrays for multi-select capability (checkboxes)
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSports, setSelectedSports] = useState([]);
  
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 12;

  // Data Fetching
  useEffect(() => {
    setLoading(true);
    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, snapshot => {
      const arr = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setProducts(arr);
      setLoading(false);
    }, err => {
      // Fallback if index missing
      if (err.code === 'failed-precondition') {
        const simpleQuery = collection(db, "products");
        onSnapshot(simpleQuery, snapshot => {
            const arr = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            setProducts(arr);
            setLoading(false);
        });
      }
    });
    return () => unsub();
  }, []);

  // Derived Lists
  const brands = useMemo(() => {
    const set = new Set();
    products.forEach(p => p.brand && set.add(p.brand));
    return [...set].sort();
  }, [products]);

  const sports = useMemo(() => {
    const set = new Set();
    products.forEach(p => p.sport && set.add(p.sport));
    return [...set].sort();
  }, [products]);

  // Checkbox Handlers
  const toggleFilter = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
    setPage(1); // Reset to page 1 on filter change
  };

  // Filtering Logic
  const filtered = useMemo(() => {
    let out = products;

    if (search.trim()) {
      const s = search.toLowerCase();
      out = out.filter(p =>
        (p.name?.toLowerCase().includes(s)) ||
        (p.brand?.toLowerCase().includes(s)) ||
        (p.sport?.toLowerCase().includes(s))
      );
    }

    // Multi-select filtering
    if (selectedBrands.length > 0) {
        out = out.filter(p => selectedBrands.includes(p.brand));
    }
    if (selectedSports.length > 0) {
        out = out.filter(p => selectedSports.includes(p.sport));
    }

    if (minPrice) out = out.filter(p => p.price >= Number(minPrice));
    if (maxPrice) out = out.filter(p => p.price <= Number(maxPrice));

    return out;
  }, [products, search, selectedBrands, selectedSports, minPrice, maxPrice]);

  // Pagination
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return (
    <div className="shop-page">
      
      {/* 1. HERO SECTION */}
      <section className="shop-hero">
        <div className="hero-card card-large">
            <div className="hero-content">
                <h3>U.S. POLO ASSN.</h3>
                <p>Lace Up Running Shoes</p>
                <ul>
                    <li>Premium Comfort</li>
                    <li>Durable & Lightweight</li>
                </ul>
                <button className="btn-white">BUY NOW</button>
            </div>
            <img src={BANNER_1} alt="Shoe 1" className="hero-img" />
        </div>
        <div className="hero-card card-small pink-gradient">
            <div className="hero-content">
                <h3>NIKE</h3>
                <p>Men's Quest 4</p>
                <button className="btn-white">BUY NOW</button>
            </div>
            <img src={BANNER_2} alt="Shoe 2" className="hero-img" />
        </div>
      </section>

      <div className="shop-layout">
        
        {/* 2. SIDEBAR FILTERS */}
        <aside className="shop-sidebar">
            {/* Search in Sidebar or Top? Image implies Sidebar controls */}
            <div className="filter-group">
                <h4>Categories</h4>
                <ul className="category-list">
                    <li>All</li>
                    <li>Best Sellers</li>
                    <li>New Arrivals</li>
                    <li>Men's Run</li>
                </ul>
            </div>

            <div className="filter-group">
                <h4>By Price</h4>
                <div className="price-slider-mock">
                    <div className="slider-track"></div>
                    <div className="slider-thumb"></div>
                </div>
                <div className="price-inputs">
                    <input type="number" placeholder="Min" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
                    <span>-</span>
                    <input type="number" placeholder="Max" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
                    <button className="btn-go" onClick={() => setPage(1)}>GO</button>
                </div>
            </div>

            <div className="filter-group">
                <h4>By Brands</h4>
                {brands.map(b => (
                    <label key={b} className="checkbox-label">
                        <input 
                            type="checkbox" 
                            checked={selectedBrands.includes(b)}
                            onChange={() => toggleFilter(b, selectedBrands, setSelectedBrands)}
                        />
                        {b}
                    </label>
                ))}
            </div>

            <div className="filter-group">
                <h4>By Sports</h4>
                {sports.map(s => (
                    <label key={s} className="checkbox-label">
                        <input 
                            type="checkbox" 
                            checked={selectedSports.includes(s)}
                            onChange={() => toggleFilter(s, selectedSports, setSelectedSports)}
                        />
                        {s}
                    </label>
                ))}
            </div>
        </aside>

        {/* 3. MAIN CONTENT GRID */}
        <main className="shop-main">
            <div className="shop-controls-top">
                 <div className="search-bar-wrapper">
                    <input 
                        className="main-search" 
                        placeholder="Search products..." 
                        value={search} 
                        onChange={e => setSearch(e.target.value)} 
                    />
                 </div>
                 <div className="sort-wrapper">
                     <label>Sort By:</label>
                     <select>
                         <option>Newest</option>
                         <option>Price: Low to High</option>
                         <option>Price: High to Low</option>
                     </select>
                 </div>
            </div>

            <div className="shop-grid">
                {loading ? <div className="loader">Loading...</div> :
                    pageItems.length ? pageItems.map(p => <ProductCard key={p.id} p={p} />) :
                    <div className="no-items">No products found.</div>
                }
            </div>

            <div className="pagination">
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</button>
                {(() => {
                    const maxVisible = 10;
                    const startPage = Math.max(1, Math.min(page - Math.floor(maxVisible / 2), pageCount - maxVisible + 1));
                    const endPage = Math.min(pageCount, startPage + maxVisible - 1);
                    
                    return Array.from({length: endPage - startPage + 1}, (_, i) => {
                        const pageNum = startPage + i;
                        return (
                            <button 
                                key={pageNum} 
                                className={page === pageNum ? "active" : ""} 
                                onClick={() => setPage(pageNum)}
                            >
                                {pageNum}
                            </button>
                        );
                    });
                })()}
                <button onClick={() => setPage(p => Math.min(pageCount, p + 1))} disabled={page === pageCount}>Next</button>
            </div>
        </main>

      </div>
    </div>
  );
};

export default Shop;