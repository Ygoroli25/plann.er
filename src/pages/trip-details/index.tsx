import {
  Plus
} from "lucide-react";
import { useState } from "react";
import { CreateAtivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Ativities } from "./activities";
import { HeaderDestination } from "./header-destination";

export function TripDetailsPage() {
  const [isCreateAtivityModalOpen, setIsCreateAtivityModalOpen] =
    useState(false);

  function openCreateAtivityModal() {
    setIsCreateAtivityModalOpen(true);
  }

  function closeCreateAtivityModal() {
    setIsCreateAtivityModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <HeaderDestination />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              onClick={openCreateAtivityModal}
              className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex gap-2 items-center hover:bg-lime-400"
            >
              <Plus className="size-5" />
              Cadastrar atividade
            </button>
          </div>

          <Ativities />
        </div>
        <div className="w-80 space-y-6">
          <ImportantLinks />
          <div className="w-full h-px bg-zinc-800"></div>
         <Guests />
        </div>
      </main>

      {isCreateAtivityModalOpen && (
        <CreateAtivityModal 
        closeCreateAtivityModal={closeCreateAtivityModal}
        />
      )}
    </div>
  );
}
