"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DemoModal from "@/components/DemoModal";
import ImpactBar from "@/components/ImpactBar";
import ArchitectureGrid from "@/components/ArchitectureGrid";
import UseCases from "@/components/UseCases";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // Check if ?demo=true query param exists
    const params = new URLSearchParams(window.location.search);
    if (params.get("demo") === "true") {
      openModal();
      // Clean up the URL query parameter without reloading
      const newUrl = window.location.pathname;
      window.history.replaceState({}, "", newUrl);
    }
  }, []);

  return (
    <>
      <Navbar onDemoClick={openModal} />
      <main id="main-content">
        <Hero onDemoClick={openModal} />
        <ImpactBar />
        <ArchitectureGrid />
        <UseCases />
        <FinalCTA onDemoClick={openModal} />
      </main>
      <Footer />
      <DemoModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
