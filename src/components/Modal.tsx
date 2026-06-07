interface ModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onClose: () => void;
}

export function Modal({ isOpen, title, description, onClose }: ModalProps) {
  if (!isOpen) return null;

  const handleGoogleSearch = () => {
    const searchQuery = `${title} архив предиктора раскрытие`;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(googleSearchUrl, '_blank');
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 rounded-lg shadow-2xl max-w-2xl w-full mx-4 border border-purple-500/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-purple-600/30 to-indigo-600/30 px-6 py-4 border-b border-purple-500/30 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <button
            onClick={handleGoogleSearch}
            className="p-2 hover:bg-purple-500/40 rounded-lg transition-colors group"
            title="Поиск в Google"
          >
            <svg
              className="w-5 h-5 text-gray-300 group-hover:text-yellow-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
        </div>
        <div className="px-6 py-4 bg-slate-800/50 rounded-b-lg flex justify-between">
          <button
            onClick={handleGoogleSearch}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Google
          </button>
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
