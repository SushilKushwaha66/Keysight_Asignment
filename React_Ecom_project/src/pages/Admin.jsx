import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';

const Admin = () => {
    const { products, addProduct, updateProduct, deleteProduct } = useContext(ShopContext);
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        category: 'Electronics',
        image: '',
        description: ''
    });
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);

    const categories = ['Electronics', 'Clothing', 'Home', 'Beauty'];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            updateProduct(editId, { ...formData, price: Number(formData.price) });
            setEditMode(false);
            setEditId(null);
        } else {
            addProduct({ ...formData, price: Number(formData.price) });
        }
        setFormData({ title: '', price: '', category: 'Electronics', image: '', description: '' });
    };

    const handleEdit = (product) => {
        setFormData(product);
        setEditMode(true);
        setEditId(product.id);
    };

    return (
        <div className="admin-page">
            <h2>Product Management</h2>

            <div className="admin-container">
                <form className="admin-form" onSubmit={handleSubmit}>
                    <h3>{editMode ? 'Update Product' : 'Add New Product'}</h3>
                    <input
                        type="text"
                        name="title"
                        placeholder="Product Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                    <select name="category" value={formData.category} onChange={handleChange}>
                        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={handleChange}
                    />
                    <textarea
                        name="description"
                        placeholder="Product Description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" className="admin-btn">{editMode ? 'Update' : 'Add Product'}</button>
                    {editMode && <button type="button" className="admin-btn cancel" onClick={() => {
                        setEditMode(false);
                        setFormData({ title: '', price: '', category: 'Electronics', image: '', description: '' });
                    }}>Cancel</button>}
                </form>

                <div className="admin-product-list">
                    <h3>Current Products</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td><img src={product.image} alt={product.title} className="table-img" /></td>
                                    <td>{product.title}</td>
                                    <td>₹{product.price}</td>
                                    <td>
                                        <button onClick={() => handleEdit(product)} className="action-btn edit">Edit</button>
                                        <button onClick={() => deleteProduct(product.id)} className="action-btn delete">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Admin;
