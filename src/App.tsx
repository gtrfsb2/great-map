import { useState } from 'react';
import { useZUI } from './hooks/useZUI';
import { Modal } from './components/Modal';
import { archiveData, ClusterData, ClusterItem } from './data/archiveData';

export default function App() {
  const zui = useZUI();
  const [modalData, setModalData] = useState<{ title: string; description: string } | null>(null);

  const handleClusterClick = (cluster: ClusterData) => {
    setModalData({
      title: cluster.title,
      description: cluster.description,
    });
  };

  const handleItemClick = (item: ClusterItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setModalData({
      title: item.title,
      description: item.description,
    });
  };

  const getVisibleItems = (cluster: ClusterData): ClusterItem[] => {
    return cluster.items.filter((item) => item.minZoomLevel <= Math.floor(zui.zoom * 2));
  };

  const getVisibleClusters = (): ClusterData[] => {
    // На малом зуме показываем только крупные кластеры
    if (zui.zoom < 0.6) {
      return archiveData.filter((c) => c.radius > 55);
    }
    return archiveData.filter((cluster) => cluster.minZoomLevel <= Math.floor(zui.zoom * 2));
  };

  return (
    <div className="archive-container">
      <div
        className="zui-viewport"
        onWheel={(e) => zui.handleWheel(e as unknown as WheelEvent)}
        onMouseDown={zui.handleMouseDown}
        onMouseMove={zui.handleMouseMove}
        onMouseUp={zui.handleMouseUp}
        onMouseLeave={zui.handleMouseUp}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div
          className="zui-canvas"
          style={{
            transform: `translate(${zui.panX}px, ${zui.panY}px) scale(${zui.zoom})`,
            transformOrigin: '0 0',
          }}
        >
          {getVisibleClusters().map((cluster) => {
            const visibleItems = getVisibleItems(cluster);
            const showDetails = zui.zoom >= 2;
            const showTitle = zui.zoom >= 1;

            return (
              <div key={cluster.id} className="cluster-wrapper">
                <div
                  className={`cluster bg-gradient-to-br ${cluster.color} cursor-pointer transition-all duration-300 hover:shadow-xl`}
                  style={{
                    left: `${cluster.x}%`,
                    top: `${cluster.y}%`,
                    width: `${cluster.radius * 2}px`,
                    height: `${cluster.radius * 2}px`,
                    marginLeft: `${-cluster.radius}px`,
                    marginTop: `${-cluster.radius}px`,
                    opacity: 0.85,
                  }}
                  onClick={() => handleClusterClick(cluster)}
                >
                  {showTitle && (
                    <div className="cluster-title">
                      <h2>{cluster.title}</h2>
                    </div>
                  )}

                  {showDetails && visibleItems.length > 0 && (
                    <div className="cluster-items">
                      {visibleItems.map((item) => (
                        <div
                          key={item.id}
                          className="cluster-item"
                          onClick={(e) => handleItemClick(item, e)}
                        >
                          <span className="item-title">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="zui-controls">
        <button onClick={zui.handleZoomOut} title="Уменьшить">
          −
        </button>
        <span className="zoom-level">{(zui.zoom * 100).toFixed(0)}%</span>
        <button onClick={zui.handleZoomIn} title="Увеличить">
          +
        </button>
        <button onClick={zui.handleReset} title="Сброс">
          ↺
        </button>
      </div>

      {/* Info */}
      <div className="zui-info">
        <p>🖱️ Скролл для зума | Правая кнопка + движение для панорамы</p>
        <p>Уровень деталей: {zui.zoom < 1.5 ? '①' : zui.zoom < 3 ? '②' : '③'}</p>
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!modalData}
        title={modalData?.title || ''}
        description={modalData?.description || ''}
        onClose={() => setModalData(null)}
      />

      <style>{`
        * {
          box-sizing: border-box;
        }

        body, html {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }

        .archive-container {
          width: 100vw;
          height: 100vh;
          background: linear-gradient(135deg, #2d1b4e 0%, #1a1a2e 50%, #0f3460 100%);
          position: relative;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .zui-viewport {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
          cursor: grab;
          cursor: -webkit-grab;
        }

        .zui-viewport:active {
          cursor: grabbing;
          cursor: -webkit-grabbing;
        }

        .zui-canvas {
          position: absolute;
          width: 300%;
          height: 300%;
          transition: transform 0.05s ease-out;
        }

        .cluster-wrapper {
          position: absolute;
        }

        .cluster {
          position: absolute;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          border: 3px solid rgba(255, 255, 255, 0.3);
          box-shadow:
            0 0 40px rgba(139, 92, 246, 0.4),
            inset 0 0 40px rgba(255, 255, 255, 0.1),
            0 10px 40px rgba(0, 0, 0, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cluster:hover {
          border-color: rgba(255, 255, 255, 0.6);
          box-shadow:
            0 0 60px rgba(139, 92, 246, 0.6),
            inset 0 0 40px rgba(255, 255, 255, 0.15),
            0 15px 50px rgba(0, 0, 0, 0.6);
          transform: scale(1.05);
        }

        .cluster-title {
          text-align: center;
          color: white;
          font-weight: 800;
          font-size: 13px;
          line-height: 1.3;
          text-shadow:
            0 2px 8px rgba(0, 0, 0, 0.8),
            0 0 10px rgba(255, 255, 255, 0.2);
          padding: 12px 8px;
          letter-spacing: 0.5px;
        }

        .cluster-items {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 85%;
          max-height: 60%;
          overflow-y: auto;
        }

        .cluster-item {
          background: rgba(0, 0, 0, 0.5);
          padding: 5px 6px;
          border-radius: 3px;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.4);
          transition: all 0.2s;
          backdrop-filter: blur(5px);
        }

        .cluster-item:hover {
          background: rgba(139, 92, 246, 0.4);
          border-color: rgba(255, 255, 255, 0.8);
          transform: translateX(2px);
        }

        .item-title {
          color: white;
          font-size: 10px;
          font-weight: 700;
          display: block;
          text-align: center;
          line-height: 1.2;
        }

        .zui-controls {
          position: absolute;
          bottom: 30px;
          right: 30px;
          background: rgba(20, 20, 40, 0.8);
          border: 2px solid rgba(139, 92, 246, 0.5);
          border-radius: 12px;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 40;
          backdrop-filter: blur(15px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .zui-controls button {
          background: none;
          border: none;
          color: #c4b5fd;
          font-size: 20px;
          padding: 12px 14px;
          cursor: pointer;
          transition: all 0.2s;
          border-radius: 6px;
          font-weight: bold;
        }

        .zui-controls button:hover {
          background: rgba(139, 92, 246, 0.4);
          color: #fbbf24;
          transform: scale(1.1);
        }

        .zoom-level {
          color: #fbbf24;
          font-size: 12px;
          font-weight: 700;
          min-width: 45px;
          text-align: center;
          border-left: 1px solid rgba(139, 92, 246, 0.3);
          border-right: 1px solid rgba(139, 92, 246, 0.3);
          padding: 0 8px;
        }

        .zui-info {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(20, 20, 40, 0.8);
          border: 2px solid rgba(139, 92, 246, 0.4);
          border-radius: 10px;
          padding: 16px 20px;
          color: #d1d5db;
          font-size: 12px;
          z-index: 40;
          backdrop-filter: blur(15px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .zui-info p {
          margin: 5px 0;
          line-height: 1.4;
        }

        .zui-info p:first-child {
          color: #a78bfa;
          font-weight: 600;
        }

        .zui-info p:last-child {
          color: #fbbf24;
          font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .zui-controls {
            bottom: 20px;
            right: 20px;
            gap: 4px;
          }

          .zui-controls button {
            padding: 10px 10px;
            font-size: 16px;
          }

          .zoom-level {
            font-size: 10px;
            min-width: 35px;
          }

          .zui-info {
            top: 10px;
            left: 10px;
            font-size: 11px;
            padding: 12px 15px;
          }

          .cluster-title {
            font-size: 11px;
          }

          .item-title {
            font-size: 9px;
          }
        }
      `}</style>
    </div>
  );
}
