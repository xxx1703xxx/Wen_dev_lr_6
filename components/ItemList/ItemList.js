import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './list.css';

const ItemList = () => {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, `Item ${items.length + 1}`]);
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <TransitionGroup component="ul">
                {items.map((item, index) => (
                    <CSSTransition key={index} timeout={500} classNames="item">
                        <li>
                            {item} <button onClick={() => removeItem(index)}>Remove</button>
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default ItemList;