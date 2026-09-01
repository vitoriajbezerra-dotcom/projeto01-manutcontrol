export default function InnovationPanel({ equipments }) {
  const highRiskEquipments = equipments.filter(
    (equipment) =>
      equipment.criticidade === "alta" &&
      equipment.status !== "operando"
  );

  return (
    <section className="rounded-xl border border-red-200 bg-white shadow-sm">
      <div className="border-b border-red-100 bg-red-50 px-5 py-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600">
            ⚠
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Risco operacional
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Equipamentos de alta criticidade que precisam de
              atenção.
            </p>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="text-sm text-slate-500">
              Equipamentos em risco
            </p>

            <p className="mt-1 text-3xl font-bold text-red-600">
              {highRiskEquipments.length}
            </p>
          </div>

          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
            Alta criticidade
          </span>
        </div>

        <div className="space-y-3">
          {highRiskEquipments.map((equipment) => (
            <div
              key={equipment.id}
              className="rounded-lg border border-slate-200 p-4"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-900">
                    {equipment.codigo}
                  </p>

                  <p className="text-sm text-slate-600">
                    {equipment.nome}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Setor: {equipment.setor}
                  </p>
                </div>

                <span className="w-fit rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
                  {equipment.status === "parado"
                    ? "Parado"
                    : equipment.status === "em manutencao"
                    ? "Em manutenção"
                    : "Atenção"}
                </span>
              </div>
            </div>
          ))}

          {highRiskEquipments.length === 0 && (
            <p className="rounded-lg bg-emerald-50 p-4 text-sm font-medium text-emerald-700">
              Nenhum equipamento de alta criticidade está
              fora de operação.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}