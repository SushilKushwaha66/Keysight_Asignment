import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Wireless Noise Cancelling Headphones",
      price: 14999,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
      description: "Experience world-class noise cancellation and premium sound quality.",
      rating: 4.5
    },
    {
      id: 2,
      title: "Smart Led TV 55 Inch",
      price: 45000,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1000&auto=format&fit=crop",
      description: "4K Ultra HD Smart LED TV with vibrant colors and smart features.",
      rating: 4.2
    },
    {
      id: 3,
      title: "Men's Casual Denim Jacket",
      price: 2499,
      category: "Clothing",
      image: "https://images.unsplash.com/photo-1551537482-f2096dc75960?q=80&w=1000&auto=format&fit=crop",
      description: "Stylish and comfortable denim jacket for everyday wear.",
      rating: 4.0
    },
    {
      id: 4,
      title: "Running Shoes For Men",
      price: 3500,
      category: "Clothing",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
      description: "Lightweight and breathable running shoes with excellent cushioning.",
      rating: 4.7
    },
    {
      id: 5,
      title: "Smartphone 12 Pro",
      price: 79999,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop",
      description: "Latest smartphone with pro-grade camera system and superfast chip.",
      rating: 4.9
    }
  ]);

  const [cart, setCart] = useState([]);

  // Product CRUD
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map(p => p.id === parseInt(id) ? { ...updatedProduct, id: parseInt(id) } : p));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== parseInt(id)));
  };

  // Cart Operations
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
     setCart(cart.map(item => {
        if (item.id === productId) {
            const newQuantity = item.quantity + amount;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
     }));
  };
  
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };


  return (
    <ShopContext.Provider value={{ 
      products, 
      cart, 
      addProduct, 
      updateProduct, 
      deleteProduct, 
      addToCart, 
      removeFromCart,
      updateQuantity,
      getCartTotal
    }}>
      {children}
    </ShopContext.Provider>
  );
};
