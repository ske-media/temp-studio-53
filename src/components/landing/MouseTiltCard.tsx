"use client";

import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";

type MouseTiltCardProps = {
  children: ReactNode;
  className?: string;
};

export function MouseTiltCard({ children, className = "" }: MouseTiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducePref = useReducedMotion();
  const reduce = reducePref === true;

  const rotateX = useSpring(0, { stiffness: 280, damping: 28, mass: 0.4 });
  const rotateY = useSpring(0, { stiffness: 280, damping: 28, mass: 0.4 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rotateX.set(-py * 11);
    rotateY.set(px * 14);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const transform = useMotionTemplate`perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={
        reduce
          ? undefined
          : {
              transform,
              transformStyle: "preserve-3d",
            }
      }
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}
