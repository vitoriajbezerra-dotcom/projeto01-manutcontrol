export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 flex-col border-r border-slate-200 bg-white lg:flex">
      <div className="border-b border-slate-200 p-6">
        <h1 className="text-xl font-bold text-slate-900">
          ManutControl
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Indústria Atlas
        </p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <button className="w-full rounded-lg bg-blue-50 px-4 py-3 text-left text-sm font-medium text-blue-700">
              Visão geral
            </button>
          </li>

          <li>
            <button className="w-full rounded-lg px-4 py-3 text-left text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
              Ordens de serviço
            </button>
          </li>

          <li>
            <button className="w-full rounded-lg px-4 py-3 text-left text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
              Equipamentos
            </button>
          </li>

          <li>
            <button className="w-full rounded-lg px-4 py-3 text-left text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
              Técnicos
            </button>
          </li>
        </ul>
      </nav>

      <div className="border-t border-slate-200 p-4">
        <button className="w-full rounded-lg px-4 py-3 text-left text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
          Sair
        </button>
      </div>
    </aside>
  );
}