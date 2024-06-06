"use client";

import Toast from '@/components/Toast';
import { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);
    const [toastPosition, setToastPosition] = useState('top-right');




    // toastsFade='animate-fade-in-down'
    const addToast = useCallback((type, message, position = 'top-right', toastsFade = 'animate-fade-in-down', toast_id) => {
        let positionClass = '';
        switch (position) {
            case 'top-left':
                positionClass = 'top-5 left-5';
                break;
            case 'top-right':
                positionClass = 'top-5 right-5';
                break;
            case 'bottom-right':
                positionClass = 'bottom-5 right-5';
                break;
            case 'bottom-left':
                positionClass = 'bottom-5 left-5';
                break;
            default:
                positionClass = 'top-5 right-5';
        }

        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, type, message, position, toastsFade, toast_id }], setToastPosition(positionClass));
        setTimeout(() => {
            setToasts((prev) => prev.map((toast) => toast.id === id ? { ...toast, toastsFade: 'animate-fade-out-up' } : toast));
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 40000);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.map((toast) => toast.id === id ? { ...toast, toastsFade: 'animate-fade-out-up' } : toast));
        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 300);
    }, []);

    console.log({ toastPosition });
    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            <div className={`m-5 fixed top-5 right-5 ${toastPosition}`}>
                {toasts.map((toast) => (
                    <>
                        <Toast type={toast.type} message={toast.message} onClose={() => removeToast(toast.id)} key={toast.message} toastsFade={toast.toastsFade} toast_id={toast.toast_id} />
                    </>
                ))}
            </div>
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    return useContext(ToastContext);
};
