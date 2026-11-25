import { useEffect, useRef, type RefObject } from "react";

type SwipeHandlers = { onLeft?: () => void; onRight?: () => void };

export function useSwipe<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handlers: SwipeHandlers,
  threshold = 50,
) {
  // handlers in een ref, zodat we niet elke render opnieuw subscriben
  const h = useRef(handlers);
  h.current = handlers;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x0 = 0,
      y0 = 0,
      t0 = 0,
      tracking = false;

    const down = (e: PointerEvent) => {
      if (e.pointerType === "mouse") return; // muis heeft al keyboard/klik
      tracking = true;
      x0 = e.clientX;
      y0 = e.clientY;
      t0 = e.timeStamp;
    };

    const up = (e: PointerEvent) => {
      if (!tracking) return;
      tracking = false;
      const dx = e.clientX - x0;
      const dy = e.clientY - y0;
      if (Math.abs(dx) < threshold) return; // te kort
      if (Math.abs(dx) < Math.abs(dy) * 1.5) return; // te schuin, eerder scrollen
      if (e.timeStamp - t0 > 600) return; // te traag, eerder slepen
      if (dx < 0) h.current.onLeft?.();
      else h.current.onRight?.();
    };

    const cancel = () => {
      tracking = false;
    };

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", cancel);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", cancel);
    };
  }, [ref, threshold]);
}
