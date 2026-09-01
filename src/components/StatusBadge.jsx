
export default function StatusBadge({ status }) {
  const styles = {
    aberta: "bg-blue-50 text-blue-700 ring-blue-600/20",
    "em andamento": "bg-violet-50 text-violet-700 ring-violet-600/20",
    planejada: "bg-slate-100 text-slate-700 ring-slate-500/20",
    vencida: "bg-red-50 text-red-700 ring-red-600/20",
    concluida: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  };

  const labels = {
    aberta: "Aberta",
    "em andamento": "Em andamento",
    planejada: "Planejada",
    vencida: "Vencida",
    concluida: "Concluída",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
        styles[status] || "bg-slate-100 text-slate-700 ring-slate-500/20"
      }`}
    >
      {labels[status] || status}
    </span>
  );
}