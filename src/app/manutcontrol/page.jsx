"use client";

import { useMemo, useState } from "react";

import dados from "../../data/manutcontrol_dados.json";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import IndicatorCard from "../../components/IndicatorCard";
import SearchFilters from "../../components/SearchFilters";
import WorkOrderList from "../../components/WorkOrderList";
import DailySchedule from "../../components/DailySchedule";
import CriticalEquipment from "../../components/CriticalEquipment";
import InnovationPanel from "../../components/InnovationPanel";

export default function ManutControl() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("todos");
  const [priority, setPriority] = useState("todas");

  const equipmentById = useMemo(() => {
    return Object.fromEntries(
      dados.equipamentos.map((equipment) => [
        equipment.id,
        equipment,
      ])
    );
  }, []);

  const ordersWithEquipment = useMemo(() => {
    return dados.ordensServico.map((order) => ({
      ...order,
      equipamento:
        equipmentById[order.equipamentoId] || {
          codigo: "N/A",
          nome: "Equipamento não encontrado",
        },
    }));
  }, [equipmentById]);

  const ordensAbertas = dados.ordensServico.filter(
    (order) => order.status !== "concluida"
  ).length;

  const ordensVencidas = dados.ordensServico.filter(
    (order) => order.status === "vencida"
  ).length;

  const equipamentosParados = dados.equipamentos.filter(
    (equipment) => equipment.status === "parado"
  ).length;

  const filteredOrders = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return ordersWithEquipment.filter((order) => {
      const matchesSearch =
        searchTerm === "" ||
        order.codigo.toLowerCase().includes(searchTerm) ||
        order.descricao.toLowerCase().includes(searchTerm) ||
        order.tecnico.toLowerCase().includes(searchTerm) ||
        order.equipamento.codigo
          .toLowerCase()
          .includes(searchTerm) ||
        order.equipamento.nome
          .toLowerCase()
          .includes(searchTerm);

      const matchesStatus =
        status === "todos" || order.status === status;

      const matchesPriority =
        priority === "todas" ||
        order.prioridade === priority;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [ordersWithEquipment, search, status, priority]);

  function handleClearFilters() {
    setSearch("");
    setStatus("todos");
    setPriority("todas");
  }

  return (
    <div className="min-h-screen bg-slate-50 lg:flex">
      <Sidebar />

      <div className="min-w-0 flex-1">
        <Header
          empresa={dados.empresa}
          usuario={dados.usuario}
        />

        <main className="space-y-6 p-5 sm:p-8">
          <section className="grid gap-4 md:grid-cols-3">
            <IndicatorCard
              title="Ordens abertas"
              value={ordensAbertas}
              description="Ordens ainda não concluídas"
              icon="☷"
              variant="blue"
            />

            <IndicatorCard
              title="Ordens vencidas"
              value={ordensVencidas}
              description="Precisam de atenção imediata"
              icon="!"
              variant="red"
            />

            <IndicatorCard
              title="Equipamentos parados"
              value={equipamentosParados}
              description="Máquinas atualmente paradas"
              icon="▣"
              variant="amber"
            />
          </section>

          <SearchFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            priority={priority}
            setPriority={setPriority}
            onClear={handleClearFilters}
          />

          <WorkOrderList orders={filteredOrders} />

          <div className="grid gap-6 xl:grid-cols-2">
            <DailySchedule orders={ordersWithEquipment} />

            <CriticalEquipment
              equipments={dados.equipamentos}
            />
          </div>

          <InnovationPanel equipments={dados.equipamentos} />
          
        </main>
      </div>
    </div>
  );
}