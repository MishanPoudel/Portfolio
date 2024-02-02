"use client"
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
    const cursorSize = 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothOptions = {damping:20, stiffness:300, mass:0.5}

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }
  
  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize /2)
    mouse.y.set(clientY - cursorSize /2)
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []); 

  console.log(smoothMouse.x, smoothMouse.y)
  return (
    <>
      <motion.div style={{ left: smoothMouse.x, top: smoothMouse.y, background: "#f3f4f6", height: cursorSize, width: cursorSize, position: 'fixed', borderRadius: "50%", pointerEvents: "none" }}>
      </motion.div>
    </>
  );
}
