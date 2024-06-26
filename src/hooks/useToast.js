"use client";

import { createContext, useContext, useState, useCallback } from 'react';
import Toast from '@/components/Toast';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);
    const [getPosition, setGetPosition] = useState('top-right');

    const addToast = useCallback((type, message, position = 'top-right', toastsFade = 'animate-fade-in-down') => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, type, message, position, toastsFade }], setGetPosition(position));

        setTimeout(() => {
            setToasts((prev) => prev.map((toast) => toast.id === id ? { ...toast, toastsFade: 'animate-fade-out-up' } : toast));
            setTimeout(() => {
                setToasts((prev) => prev.filter((toast) => toast.id !== id));
            }, 300); // match the fade-out animation duration
        }, 40000);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.map((toast) => toast.id === id ? { ...toast, toastsFade: 'animate-fade-out-up' } : toast));
        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 300); // match the fade-out animation duration
    }, []);

    const getPositionClass = (position) => {
        switch (position) {
            case 'top-left':
                return 'top-5 left-5';
            case 'top-right':
                return 'top-5 right-5';
            case 'bottom-right':
                return 'bottom-5 right-5';
            case 'bottom-left':
                return 'bottom-5 left-5';
            default:
                return 'top-5 right-5';
        }
    };

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            <div key={getPosition} className={`fixed z-50 flex flex-col space-y-2 ${getPositionClass(getPosition)}`}>
                {toasts.map((toast) => (
                    <Toast
                        key={toast.id}
                        type={toast.type}
                        message={toast.message}
                        onClose={() => removeToast(toast.id)}
                        toastsFade={toast.toastsFade}
                        toast_id={toast.id}
                    />
                ))}
            </div>
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    return useContext(ToastContext);
};
