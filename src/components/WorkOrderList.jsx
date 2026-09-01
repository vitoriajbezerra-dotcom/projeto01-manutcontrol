import PriorityBadge from "./PriorityBadge";
import StatusBadge from "./StatusBadge";

function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");

  return `${day}/${month}/${year}`;
}

export default function WorkOrderList({ orders }) {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div>
          <h3 className="font-semibold text-slate-900">
            Ordens de serviço
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Serviços que precisam de acompanhamento.
          </p>
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {orders.length} {orders.length === 1 ? "ordem" : "ordens"}
        </span>
      </div>

      {orders.length === 0 ? (
        <div className="px-5 py-12 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-400">
            ?
          </div>

          <h4 className="mt-4 font-semibold text-slate-900">
            Nenhuma ordem encontrada
          </h4>

          <p className="mt-1 text-sm text-slate-500">
            Tente alterar a busca ou os filtros.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-[1050px] w-full text-left">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Código
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Descrição
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Equipamento
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Prioridade
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Técnico
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Vencimento
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {orders.map((order) => {
                const isOverdue = order.status === "vencida";

                return (
                  <tr
                    key={order.id}
                    className={`transition hover:bg-slate-50 ${
                      isOverdue ? "bg-red-50/40" : ""
                    }`}
                  >
                    <td className="whitespace-nowrap px-5 py-4">
                      <span className="font-semibold text-slate-900">
                        {order.codigo}
                      </span>

                      {isOverdue && (
                        <span className="mt-1 block text-xs font-medium text-red-600">
                          ⚠ Vencida — exige atenção
                        </span>
                      )}
                    </td>

                    <td className="max-w-xs px-5 py-4">
                      <p className="font-medium text-slate-900">
                        {order.descricao}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {order.tipo}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <p className="font-medium text-slate-800">
                        {order.equipamento.codigo}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {order.equipamento.nome}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <PriorityBadge priority={order.prioridade} />
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-700">
                      {order.tecnico}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4">
                      <span
                        className={`text-sm font-medium ${
                          isOverdue
                            ? "text-red-700"
                            : "text-slate-700"
                        }`}
                      >
                        {formatDate(order.vencimento)}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <StatusBadge status={order.status} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}