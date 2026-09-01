export default function SearchFilters({
  search,
  setSearch,
  status,
  setStatus,
  priority,
  setPriority,
  onClear,
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid gap-4 lg:grid-cols-[1fr_180px_180px_auto]">
        <div>
          <label
            htmlFor="search"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Buscar ordem
          </label>

          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              ⌕
            </span>

            <input
              id="search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Código, descrição, equipamento ou técnico..."
              className="w-full rounded-lg border border-slate-300 bg-white px-10 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="status"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Status
          </label>

          <select
            id="status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="todos">Todos</option>
            <option value="aberta">Aberta</option>
            <option value="em andamento">Em andamento</option>
            <option value="planejada">Planejada</option>
            <option value="vencida">Vencida</option>
            <option value="concluida">Concluída</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="priority"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Prioridade
          </label>

          <select
            id="priority"
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="todas">Todas</option>
            <option value="baixa">Baixa</option>
            <option value="media">Média</option>
            <option value="alta">Alta</option>
            <option value="urgente">Urgente</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="button"
            onClick={onClear}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 lg:w-auto"
          >
            Limpar
          </button>
        </div>
      </div>
    </div>
  );
}