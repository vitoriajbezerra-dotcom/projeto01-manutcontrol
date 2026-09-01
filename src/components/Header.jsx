export default function Header({ empresa, usuario }) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="flex flex-col gap-4 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium text-blue-600">
            {empresa}
          </p>

          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Visão geral
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Acompanhe as manutenções que precisam de atenção.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-slate-900">
              {usuario}
            </p>

            <p className="text-xs text-slate-500">
              Responsável pela manutenção
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
            {usuario?.charAt(0) || "U"}
          </div>

          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            + Nova ordem
          </button>
        </div>
      </div>
    </header>
  );
}