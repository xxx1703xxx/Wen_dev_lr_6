import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './dialog.css';

const Dialog = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle Dialog</button>
            <CSSTransition in={show} timeout={300} classNames="dialog" unmountOnExit>
                <div className="dialog-box">
                    <h2>Dialog Box</h2>
                    <p>This is a sample dialog.</p>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Dialog;
