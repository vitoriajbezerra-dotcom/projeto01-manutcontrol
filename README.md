# ManutControl

Dashboard web para gerenciamento de manutenção industrial da empresa Indústria Atlas.

## Identificação

- Aluno: Vitória de Jesus Bezerra
- Projeto: ManutControl
- Repositório: projeto01-manutcontrol

## Descrição

O ManutControl é um dashboard desenvolvido para auxiliar no acompanhamento de equipamentos e ordens de serviço de manutenção industrial.

A aplicação apresenta informações dos equipamentos, ordens de serviço, prioridades, status, agenda e equipamentos críticos.

Os dados utilizados pela aplicação são armazenados em um arquivo JSON.

## Tecnologias utilizadas

- Next.js
- React
- JavaScript
- Tailwind CSS
- JSON
- Git
- GitHub

## Como executar o projeto

### 1. Instalar as dependências

```bash
npm install
```

### 2. Executar o projeto

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

### 3. Gerar a versão de produção

```bash
npm run build
```

## Funcionalidades

- Dashboard de manutenção industrial
- Indicadores de ordens abertas
- Indicadores de ordens vencidas
- Indicador de equipamentos parados
- Busca de ordens de serviço
- Pesquisa por código, descrição, equipamento e técnico
- Filtro por status
- Filtro por prioridade
- Botão para limpar os filtros
- Listagem completa das ordens de serviço
- Destaque visual para ordens vencidas
- Identificação visual das prioridades
- Agenda do dia
- Ordenação da agenda por horário
- Equipamentos críticos
- Identificação visual dos estados dos equipamentos
- Layout responsivo para diferentes tamanhos de tela

## Ordens de serviço

A aplicação apresenta as ordens de serviço com as seguintes informações:

- Código da ordem
- Descrição
- Equipamento
- Prioridade
- Técnico responsável
- Vencimento
- Status

As ordens vencidas recebem destaque visual para facilitar sua identificação e acompanhamento.

## Agenda do dia

A agenda apresenta as atividades que possuem horário agendado.

As atividades são organizadas em ordem crescente de horário e apresentam:

- Horário
- Descrição da atividade
- Código do equipamento
- Nome do equipamento
- Técnico responsável

## Equipamentos críticos

A aplicação apresenta os equipamentos que estão em situações que exigem acompanhamento:

- Parado
- Em manutenção
- Atenção

Cada estado possui identificação visual própria.

## Requisitos opcionais

### 1. Busca textual

Foi implementada busca textual nas ordens de serviço, permitindo pesquisar por código da ordem, descrição, equipamento e técnico.

### 2. Filtros

Foram implementados filtros por status e prioridade para facilitar a localização e o acompanhamento das ordens de serviço.

## Componentização

O projeto foi organizado utilizando componentes reutilizáveis, com responsabilidades separadas.

Principais componentes:

- `Header`
- `Sidebar`
- `IndicatorCard`
- `SearchFilters`
- `WorkOrderList`
- `PriorityBadge`
- `StatusBadge`
- `DailySchedule`
- `CriticalEquipment`
- `InnovationPanel`

## Dados

Os dados utilizados pelo dashboard estão armazenados no arquivo:

```text
src/data/manutcontrol_dados.json
```

O arquivo contém os dados da empresa, usuário, equipamentos e ordens de serviço utilizados pela aplicação.

## Estrutura principal do projeto

```text
projeto01/
├── public/
│   └── logo.png
├── src/
│   ├── app/
│   │   ├── manutcontrol/
│   │   │   └── page.jsx
│   │   ├── unbounce/
│   │   │   └── page.jsx
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── components/
│   │   ├── CriticalEquipment.jsx
│   │   ├── DailySchedule.jsx
│   │   ├── Header.jsx
│   │   ├── IndicatorCard.jsx
│   │   ├── InnovationPanel.jsx
│   │   ├── PriorityBadge.jsx
│   │   ├── SearchFilters.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatusBadge.jsx
│   │   └── WorkOrderList.jsx
│   └── data/
│       └── manutcontrol_dados.json
├── package.json
├── README.md
└── .gitignore
```

## Git e GitHub

O projeto foi versionado utilizando Git e disponibilizado no GitHub.

Repositório:

https://github.com/vitoriajbezerra-dotcom/projeto01-manutcontrol