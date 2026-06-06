import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onClose: () => void;
}

export function Modal({ isOpen, title, description, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 rounded-lg shadow-2xl max-w-2xl w-full mx-4 border border-purple-500/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-purple-600/30 to-indigo-600/30 px-6 py-4 border-b border-purple-500/30">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
        </div>
        <div className="px-6 py-4 bg-slate-800/50 rounded-b-lg flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
