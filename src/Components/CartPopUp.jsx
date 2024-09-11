import React, { useEffect } from 'react';

const Popup = ({ message, visible, closePopup }) => {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                closePopup();
            }, 3000); // Hide the popup after 3 seconds
            return () => clearTimeout(timer); // Clear the timeout if the popup closes early
        }
    }, [visible, closePopup]);

    return (
        visible && (
            <div className="popup">
                <div className="popup-message">
                    {message}
                </div>
            </div>
        )
    );
};

export default Popup;
