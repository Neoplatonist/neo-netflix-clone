import { useState } from 'react';
import './styles.css';

function Modal() {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);
    const leave = () => window.location.href = 'https://google.com';

    return (
        <div className="modal" style={{ display: isOpen ? "absolute" : "none" }}>
            <article className="content">
                <h1 className="content-title">I understand</h1>

                <p className="content-body">
                    This site is in no way affiliated with Netflix, Inc. or any of its subsidiaries or affiliates.
                    This is just a demo site built for the purpose of learning.
                </p>

                <footer className="content-footer">
                    <button className="content-footer__accept" onClick={toggle}>
                        Accept
                    </button>{' '}

                    <button className="content-footer__leave" onClick={leave}>
                        Leave
                    </button>
                </footer>
            </article>
        </div>
    );
}

export default Modal;
