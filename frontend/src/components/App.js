import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ItemForm from './ItemForm';
import Login from './Login';
import { AuthContext } from '../contexts/AuthContext';

function App() {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const { user, authTokens, logoutUser } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            fetchItems();
        }
    }, [user]);

    const fetchItems = async () => {
        const response = await axios.get('http://localhost:8000/api/items/', {
            headers: {
                Authorization: `Bearer ${authTokens.access}`
            }
        });
        setItems(response.data);
    };

    const deleteItem = async (id) => {
        await axios.delete(`http://localhost:8000/api/items/${id}/`, {
            headers: {
                Authorization: `Bearer ${authTokens.access}`
            }
        });
        fetchItems();
    };

    return (
        <div>
            <h1>Items</h1>
            {user ? (
                <div>
                    <p>Welcome, {user.username}</p>
                    <button onClick={logoutUser}>Logout</button>
                    <ItemForm item={selectedItem} fetchItems={fetchItems} />
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.name}: {item.description}
                                <button onClick={() => setSelectedItem(item)}>Edit</button>
                                <button onClick={() => deleteItem(item.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <Login />
            )}
        </div>
    );
}

export default App;
