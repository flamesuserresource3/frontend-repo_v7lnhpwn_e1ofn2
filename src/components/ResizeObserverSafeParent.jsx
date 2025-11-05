import React, { useEffect, useRef, useState } from 'react';
import debounce from '../shims/lodash.debounce';

// This wrapper avoids ESM default export issues by not importing lodash.debounce directly.
// It provides a stable ResizeObserver based parent size tracker without external deps.
export default function ResizeObserverSafeParent({ className = '', children, style }) {
  const ref = useRef(null);
  const [{ width, height }, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      setSize({ width: Math.round(rect.width), height: Math.round(rect.height) });
    };

    update();

    const ro = new ResizeObserver(debounce(update, 100));
    ro.observe(el);
    window.addEventListener('orientationchange', update);

    return () => {
      ro.disconnect();
      window.removeEventListener('orientationchange', update);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      {typeof children === 'function' ? children({ width, height }) : children}
    </div>
  );
}
