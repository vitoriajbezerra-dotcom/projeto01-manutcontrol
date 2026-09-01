export default function CriticalEquipment({ equipments }) {
  const criticalEquipments = equipments.filter(
    (equipment) =>
      equipment.status === "parado" ||
      equipment.status === "em manutencao" ||
      equipment.status === "atencao"
  );

  const statusStyles = {
    parado: "bg-red-50 text-red-700 ring-red-600/20",
    "em manutencao":
      "bg-orange-50 text-orange-700 ring-orange-600/20",
    atencao: "bg-amber-50 text-amber-700 ring-amber-600/20",
  };

  const statusLabels = {
    parado: "Parado",
    "em manutencao": "Em manutenção",
    atencao: "Atenção",
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-5 py-4">
        <h3 className="font-semibold text-slate-900">
          Equipamentos críticos
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Máquinas que precisam de acompanhamento.
        </p>
      </div>

      <div className="divide-y divide-slate-100">
        {criticalEquipments.map((equipment) => (
          <div
            key={equipment.id}
            className="px-5 py-4 transition hover:bg-slate-50"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-semibold text-slate-900">
                  {equipment.codigo}
                </p>

                <p className="mt-1 text-sm font-medium text-slate-700">
                  {equipment.nome}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Setor: {equipment.setor}
                </p>
              </div>

              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
                  statusStyles[equipment.status]
                }`}
              >
                {statusLabels[equipment.status]}
              </span>
            </div>
          </div>
        ))}

        {criticalEquipments.length === 0 && (
          <div className="px-5 py-10 text-center text-sm text-slate-500">
            Nenhum equipamento crítico no momento.
          </div>
        )}
      </div>
    </section>
  );
}