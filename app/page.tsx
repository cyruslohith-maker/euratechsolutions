"use client";

import { useState } from "react";
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
