import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";

interface CreateAtivityModalProps {
  closeCreateAtivityModal: () => void;
}

export function CreateAtivityModal({
  closeCreateAtivityModal,
}: CreateAtivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-lg py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button onClick={closeCreateAtivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>
        <form className="space-y-3">
          <div className="bg-zinc-950 h-14 px-4 rounded-xl flex items-center border border-zinc-800 gap-2">
            <Tag className="size-5 text-zinc-400" />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              type="text"
              name="title"
              placeholder="Qual a atividade?"
            />
          </div>
          <div className="bg-zinc-950 h-14 px-4 rounded-xl flex items-center border border-zinc-800 gap-2 flex-1">
            <Calendar className="size-5 text-zinc-400" />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              type="datetime-local"
              name="occurs_at"
              placeholder="Data e horário da atividade"
            />
          </div>
          <Button variant="primary" size="full">Salvar atividade</Button>
        </form>
      </div>
    </div>
  );
}
