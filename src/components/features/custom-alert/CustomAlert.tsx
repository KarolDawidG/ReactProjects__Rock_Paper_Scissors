import React, { useState, useEffect } from 'react';
import './CustomAlert.css';

interface CustomAlertInterface {
    message: string;
    type: string;
    onClose: any;
 }

export const CustomAlert: React.FC<CustomAlertInterface> = ({ message, type, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
            onClose();
        }, 3000); // usunie alert po n sekundach

        return () => clearTimeout(timeout);
    }, [onClose]);

    return visible ? (
        <div className={`custom-alert ${type}`}>
            <span>{message}</span>
        </div>
    ) : null;
};


