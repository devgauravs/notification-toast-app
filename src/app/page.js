"use client";

import { useToast } from '../hooks/useToast';

export default function Home() {
  const { addToast } = useToast();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Toast Notification App</h1>
      <div className="space-x-4">
        <button onClick={() => addToast('success', 'Success Message', 'top-left', 'animate-fade-in-down', 'toast-success')} className="px-4 py-2 bg-green-500 text-white rounded">
          Show Success
        </button>
        <button onClick={() => addToast('error', 'Error Message', 'top-right', 'animate-fade-in-down', 'toast-danger')} className="px-4 py-2 bg-red-500 text-white rounded">
          Show Error
        </button>
        <button onClick={() => addToast('warning', 'Warning Message', 'bottom-right', 'animate-fade-in-down', 'toast-warning')} className="px-4 py-2 bg-yellow-500 text-white rounded">
          Show Warning
        </button>
        <button onClick={() => addToast('info', 'Info Message', 'bottom-left', 'animate-fade-in-down', 'toast-warning')} className="px-4 py-2 bg-blue-500 text-white rounded">
          Show Info
        </button>
      </div>
    </div>
  );
}
