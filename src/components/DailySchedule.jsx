export default function DailySchedule({ orders }) {
  const scheduledOrders = orders
    .filter((order) => order.horarioAgendado)
    .sort((a, b) =>
      a.horarioAgendado.localeCompare(b.horarioAgendado)
    );

  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-5 py-4">
        <h3 className="font-semibold text-slate-900">
          Agenda do dia
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Atividades programadas para os técnicos.
        </p>
      </div>

      <div className="divide-y divide-slate-100">
        {scheduledOrders.map((order) => (
          <div
            key={order.id}
            className="flex gap-4 px-5 py-4 transition hover:bg-slate-50"
          >
            <div className="w-14 shrink-0">
              <p className="text-sm font-bold text-blue-600">
                {order.horarioAgendado}
              </p>
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-medium text-slate-900">
                {order.descricao}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {order.equipamento.codigo} ·{" "}
                {order.equipamento.nome}
              </p>

              <p className="mt-2 text-xs font-medium text-slate-600">
                Técnico: {order.tecnico}
              </p>
            </div>
          </div>
        ))}

        {scheduledOrders.length === 0 && (
          <div className="px-5 py-10 text-center text-sm text-slate-500">
            Nenhuma atividade agendada.
          </div>
        )}
      </div>
    </section>
  );
}