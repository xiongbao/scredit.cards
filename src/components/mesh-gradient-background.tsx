"use client"
import React, { useEffect } from "react"
import { Gradient } from "@/lib/gradient.jsx"

// 扩展 Gradient 类型
declare module "@/lib/gradient.js" {
  interface Gradient {
    initGradient(selector: string): void;
  }
}
function MeshGradientBackground() {
  useEffect(() => {
    // Initialize the gradient after the component mounts
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <canvas
      id="gradient-canvas"
      className="fixed inset-0 h-dvh w-full -z-[1]"
    />
  );
}

export default MeshGradientBackground;