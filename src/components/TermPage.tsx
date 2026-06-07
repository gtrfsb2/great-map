import { useState } from 'react';
import { TermData } from '../hooks/useTerms';

interface TermPageProps {
  term: TermData;
  termIndex: number;
  totalTerms: number;
  onDescriptionChange: (termId: string, newDescription: string) => void;
  onTitleChange: (termId: string, newTitle: string) => void;
  onItemDescriptionChange: (termId: string, itemId: string, newDescription: string) => void;
  onMoveUp: (termId: string) => void;
  onMoveDown: (termId: string) => void;
  onBack: () => void;
}

export function TermPage({
  term,
  termIndex,
  totalTerms,
  onDescriptionChange,
  onTitleChange,
  onItemDescriptionChange,
  onMoveUp,
  onMoveDown,
  onBack,
}: TermPageProps) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  return (
    <div className="term-page">
      <div className="term-header">
        <button className="back-button" onClick={onBack}>
          ← Назад к карте
        </button>
        <div className="term-controls">
          <button
            onClick={() => onMoveUp(term.id)}
            disabled={termIndex === 0}
            title="Переместить вверх"
            className="move-button"
          >
            ↑
          </button>
          <span className="term-position">
            {termIndex + 1} / {totalTerms}
          </span>
          <button
            onClick={() => onMoveDown(term.id)}
            disabled={termIndex === totalTerms - 1}
            title="Переместить вниз"
            className="move-button"
          >
            ↓
          </button>
        </div>
      </div>

      <div className="term-content">
        <div className="color-indicator" style={{ background: `linear-gradient(135deg, var(--${term.color}))` }} />

        {/* Заголовок */}
        <div className="term-title-section">
          {isEditingTitle ? (
            <input
              type="text"
              value={term.title}
              onChange={(e) => onTitleChange(term.id, e.target.value)}
              onBlur={() => setIsEditingTitle(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setIsEditingTitle(false);
              }}
              autoFocus
              className="term-title-input"
            />
          ) : (
            <h1 className="term-title" onClick={() => setIsEditingTitle(true)}>
              {term.title}
              <span className="edit-hint">✎</span>
            </h1>
          )}
        </div>

        {/* Основное описание */}
        <div className="term-description-section">
          <h2>Основное описание</h2>
          {isEditingDesc ? (
            <textarea
              value={term.description}
              onChange={(e) => onDescriptionChange(term.id, e.target.value)}
              onBlur={() => setIsEditingDesc(false)}
              autoFocus
              className="term-description-input"
              rows={6}
            />
          ) : (
            <div className="term-description" onClick={() => setIsEditingDesc(true)}>
              <p>{term.description}</p>
              <span className="edit-hint">✎ Нажмите для редактирования</span>
            </div>
          )}
        </div>

        {/* Связанные элементы */}
        {term.items && term.items.length > 0 && (
          <div className="term-items-section">
            <h2>Связанные элементы</h2>
            <div className="items-list">
              {term.items.map((item) => (
                <div key={item.id} className="item-card">
                  <div className="item-header">
                    <h3 className="item-title">{item.title}</h3>
                    <span className="item-zoom-level">Уровень зума: {item.minZoomLevel}</span>
                  </div>

                  {editingItemId === item.id ? (
                    <textarea
                      value={item.description}
                      onChange={(e) => onItemDescriptionChange(term.id, item.id, e.target.value)}
                      onBlur={() => setEditingItemId(null)}
                      autoFocus
                      className="item-description-input"
                      rows={3}
                    />
                  ) : (
                    <p
                      className="item-description"
                      onClick={() => setEditingItemId(item.id)}
                    >
                      {item.description}
                      <span className="edit-hint">✎</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .term-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          color: #d1d5db;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .term-header {
          position: sticky;
          top: 0;
          background: rgba(20, 20, 40, 0.95);
          border-bottom: 2px solid rgba(139, 92, 246, 0.3);
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          backdrop-filter: blur(10px);
        }

        .back-button {
          background: rgba(139, 92, 246, 0.2);
          border: 1px solid rgba(139, 92, 246, 0.5);
          color: #c4b5fd;
          padding: 10px 16px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s;
          font-weight: 600;
        }

        .back-button:hover {
          background: rgba(139, 92, 246, 0.4);
          border-color: rgba(139, 92, 246, 0.8);
        }

        .term-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .move-button {
          background: rgba(139, 92, 246, 0.2);
          border: 1px solid rgba(139, 92, 246, 0.5);
          color: #c4b5fd;
          width: 36px;
          height: 36px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .move-button:hover:not(:disabled) {
          background: rgba(139, 92, 246, 0.4);
          border-color: rgba(139, 92, 246, 0.8);
          transform: scale(1.1);
        }

        .move-button:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .term-position {
          color: #fbbf24;
          font-weight: 600;
          font-size: 14px;
          min-width: 50px;
          text-align: center;
        }

        .term-content {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 24px;
        }

        .color-indicator {
          width: 100%;
          height: 120px;
          border-radius: 12px;
          margin-bottom: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .term-title-section {
          margin-bottom: 40px;
        }

        .term-title {
          font-size: 42px;
          font-weight: 900;
          margin: 0;
          color: white;
          line-height: 1.2;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: color 0.2s;
        }

        .term-title:hover {
          color: #c4b5fd;
        }

        .term-title-input {
          font-size: 42px;
          font-weight: 900;
          width: 100%;
          padding: 12px;
          background: rgba(139, 92, 246, 0.1);
          border: 2px solid rgba(139, 92, 246, 0.5);
          border-radius: 8px;
          color: white;
          font-family: inherit;
        }

        .edit-hint {
          font-size: 20px;
          opacity: 0;
          transition: opacity 0.2s;
          color: #fbbf24;
        }

        .term-title:hover .edit-hint,
        .term-description:hover .edit-hint,
        .item-description:hover .edit-hint {
          opacity: 1;
        }

        .term-description-section {
          margin-bottom: 40px;
          background: rgba(139, 92, 246, 0.05);
          border: 1px solid rgba(139, 92, 246, 0.2);
          padding: 24px;
          border-radius: 12px;
        }

        .term-description-section h2 {
          margin-top: 0;
          color: #a78bfa;
          font-size: 18px;
          margin-bottom: 16px;
        }

        .term-description {
          cursor: pointer;
          transition: all 0.2s;
        }

        .term-description:hover {
          color: #c4b5fd;
        }

        .term-description p {
          margin: 0 0 12px 0;
          line-height: 1.6;
          font-size: 16px;
        }

        .term-description-input {
          width: 100%;
          padding: 12px;
          background: rgba(139, 92, 246, 0.1);
          border: 2px solid rgba(139, 92, 246, 0.5);
          border-radius: 8px;
          color: white;
          font-family: inherit;
          resize: vertical;
          font-size: 16px;
          line-height: 1.6;
        }

        .term-items-section {
          margin-top: 40px;
        }

        .term-items-section h2 {
          color: #a78bfa;
          font-size: 18px;
          margin-bottom: 20px;
        }

        .items-list {
          display: grid;
          gap: 16px;
        }

        .item-card {
          background: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.2);
          padding: 16px;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .item-card:hover {
          background: rgba(139, 92, 246, 0.12);
          border-color: rgba(139, 92, 246, 0.4);
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .item-title {
          font-size: 16px;
          font-weight: 700;
          margin: 0;
          color: #c4b5fd;
        }

        .item-zoom-level {
          font-size: 12px;
          color: #6b7280;
          background: rgba(139, 92, 246, 0.1);
          padding: 4px 8px;
          border-radius: 4px;
        }

        .item-description {
          margin: 0;
          cursor: pointer;
          line-height: 1.5;
          font-size: 14px;
          color: #d1d5db;
          transition: color 0.2s;
        }

        .item-description:hover {
          color: #f3f4f6;
        }

        .item-description-input {
          width: 100%;
          padding: 12px;
          background: rgba(139, 92, 246, 0.1);
          border: 2px solid rgba(139, 92, 246, 0.5);
          border-radius: 8px;
          color: white;
          font-family: inherit;
          font-size: 14px;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .term-content {
            padding: 20px 16px;
          }

          .term-title {
            font-size: 28px;
          }

          .term-title-input {
            font-size: 28px;
          }

          .term-header {
            flex-direction: column;
            gap: 12px;
            padding: 12px 16px;
          }

          .back-button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
