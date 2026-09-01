export default function PriorityBadge({ priority }) {
  const styles = {
    baixa: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    media: "bg-amber-50 text-amber-700 ring-amber-600/20",
    alta: "bg-orange-50 text-orange-700 ring-orange-600/20",
    urgente: "bg-red-50 text-red-700 ring-red-600/20",
  };

  const labels = {
    baixa: "Baixa",
    media: "Média",
    alta: "Alta",
    urgente: "Urgente",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
        styles[priority] || "bg-slate-100 text-slate-700 ring-slate-500/20"
      }`}
    >
      {labels[priority] || priority}
    </span>
  );
}