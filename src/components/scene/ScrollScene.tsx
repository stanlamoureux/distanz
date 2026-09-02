"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { WheelModel } from "./WheelModel";
import { ScrollBeats } from "./ScrollBeats";

export function ScrollScene() {
  const container = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(container);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(Boolean(entry?.isIntersecting)),
      { rootMargin: "100px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={container} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink">
        {reducedMotion ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/media/wheel-static.png"
            alt="Troisième roue motorisée DISTANZ, clipée à l’avant d’un fauteuil manuel"
            className="h-full w-full object-contain object-center"
          />
        ) : (
          <Canvas
            frameloop={visible ? "always" : "never"}
            camera={{ position: [0.15, 0.45, 4.2], fov: 36 }}
            dpr={[1, 2]}
            gl={{ antialias: true, powerPreference: "high-performance" }}
          >
            <Suspense fallback={null}>
              <color attach="background" args={["#0b0c0e"]} />
              <ambientLight intensity={0.55} />
              <hemisphereLight args={["#f2f4ea", "#1a1a1a", 0.8]} />
              <directionalLight position={[4.2, 6.2, 4]} intensity={3.4} />
              <directionalLight position={[-3.5, 2.4, 3]} intensity={2.1} color="#d8f56a" />
              <directionalLight position={[1.5, -0.6, 5]} intensity={1.1} />
              <WheelModel progress={progress} reducedMotion={reducedMotion} />
              <ContactShadows
                position={[0, -1.2, 0]}
                opacity={0.5}
                blur={2.4}
                far={4}
              />
            </Suspense>
          </Canvas>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/25 to-transparent" />
        <div className="pointer-events-none absolute inset-0">
          <ScrollBeats progress={progress} />
        </div>
      </div>
    </div>
  );
}
