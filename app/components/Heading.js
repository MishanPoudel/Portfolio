"use client";
import { useState, useEffect } from "react";

const Heading = ({ heading }) => {
  const greetings = [
    "hi", // English (United States)
    "hola", // Spanish (Spain)
    "bonjour", // French (France)
    "hallo", // German (Germany)
    "ciao", // Italian (Italy)
    "oi", // Portuguese (Brazil)
    "你好", // Chinese (Simplified) (China)
    "こんにちは", // Japanese (Japan)
    "안녕하세요", // Korean (South Korea)
    "مرحبا", // Arabic (Saudi Arabia)
    "नमस्ते", // Hindi (India)
    "konnichiwa", // Japanese (Japan)
    "namaste", // Sanskrit (India)
    "salaam", // Urdu (Pakistan)
    "sawubona", // Zulu (South Africa)
    "sawatdee", // Thai (Thailand)
    "xin chào", // Vietnamese (Vietnam)
    "selamat", // Malay (Malaysia)
    "Բարեւ", // Armenian (Armenia)
    "नमस्कार", // Nepali (Nepal)
  ];

  const [currentGreeting, setCurrentGreeting] = useState(getRandomGreeting());
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setShowComponent(true);

    const intervalId = setInterval(() => {
      setCurrentGreeting(getRandomGreeting());
    }, 3000);

    if (heading !== "Mishan") {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [heading, getRandomGreeting]);

  function getRandomGreeting() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
  }

  return (
    <main className="mb-8">
      {heading === "Mishan" && showComponent && (
        <h1 className="font-medium text-2xl text-selection">
          {currentGreeting}, I&apos;m {heading} 👋
        </h1>
      )}
      {heading !== "Mishan" && (
        <h1 className="font-medium text-2xl text-selection">{heading}</h1>
      )}
    </main>
  );
};

export default Heading;
