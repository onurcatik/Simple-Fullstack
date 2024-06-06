import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, fetchItems }) => {
    const [name, setName] = useState(item ? item.name : '');
    const [description, setDescription] = useState(item ? item.description : '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (item) {
            await axios.put(`http://localhost:8000/api/items/${item.id}/`, { name, description });
        } else {
            await axios.post('http://localhost:8000/api/items/', { name, description });
        }
        fetchItems();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <button type="submit">{item ? 'Update' : 'Add'} Item</button>
        </form>
    );
};

export default ItemForm;
