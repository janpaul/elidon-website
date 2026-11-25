import { useEffect, useEffectEvent, type RefObject } from "react";

type SwipeHandlers = { onLeft?: () => void; onRight?: () => void };

export function useSwipe<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handlers: SwipeHandlers,
  threshold = 50,
) {
  const onSwipe = useEffectEvent((dir: "left" | "right") => {
    if (dir === "left") handlers.onLeft?.();
    else handlers.onRight?.();
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x0 = 0,
      y0 = 0,
      t0 = 0,
      tracking = false;

    const down = (e: PointerEvent) => {
      if (e.pointerType === "mouse") return;
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
      if (Math.abs(dx) < threshold) return;
      if (Math.abs(dx) < Math.abs(dy) * 1.5) return;
      if (e.timeStamp - t0 > 600) return;
      onSwipe(dx < 0 ? "left" : "right");
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
