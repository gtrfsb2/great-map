import { useState, useCallback, useRef } from 'react';

interface ZUIState {
  zoom: number;
  panX: number;
  panY: number;
}

const MIN_ZOOM = 0.3;
const MAX_ZOOM = 8;
const ZOOM_SENSITIVITY = 0.15;
const PAN_SPEED = 1;

export function useZUI() {
  const [state, setState] = useState<ZUIState>({
    zoom: 1,
    panX: 0,
    panY: 0,
  });

  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();

    const delta = e.deltaY > 0 ? -1 : 1;
    const zoomFactor = 1 + ZOOM_SENSITIVITY * delta;

    setState((prev) => {
      const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, prev.zoom * zoomFactor));
      const zoomDiff = newZoom - prev.zoom;

      // Зумирование относительно позиции мыши
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const newPanX = prev.panX - mouseX * (zoomDiff / prev.zoom);
      const newPanY = prev.panY - mouseY * (zoomDiff / prev.zoom);

      return {
        zoom: newZoom,
        panX: newPanX,
        panY: newPanY,
      };
    });
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 2) return; // Правая кнопка мыши
    isDragging.current = true;
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      panX: state.panX,
      panY: state.panY,
    };
  }, [state]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;

    const deltaX = (e.clientX - dragStart.current.x) * PAN_SPEED;
    const deltaY = (e.clientY - dragStart.current.y) * PAN_SPEED;

    setState((prev) => ({
      ...prev,
      panX: dragStart.current.panX + deltaX,
      panY: dragStart.current.panY + deltaY,
    }));
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleReset = useCallback(() => {
    setState({
      zoom: 1,
      panX: 0,
      panY: 0,
    });
  }, []);

  const handleZoomIn = useCallback(() => {
    setState((prev) => ({
      ...prev,
      zoom: Math.min(MAX_ZOOM, prev.zoom * 1.3),
    }));
  }, []);

  const handleZoomOut = useCallback(() => {
    setState((prev) => ({
      ...prev,
      zoom: Math.max(MIN_ZOOM, prev.zoom / 1.3),
    }));
  }, []);

  return {
    ...state,
    handleWheel,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleReset,
    handleZoomIn,
    handleZoomOut,
  };
}
