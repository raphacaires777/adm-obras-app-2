"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Users,
  DollarSign,
  ShoppingCart,
  FileText,
  Calendar,
  Briefcase,
  Building,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Administrador",
    email: "admin@admobras.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "ADM OBRAS",
      logo: GalleryVerticalEnd,
      plan: "Sistema de Gestão",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Departamento Pessoal",
      url: "/pessoal",
      icon: Users,
      items: [
        {
          title: "Cadastro de Colaboradores",
          url: "/pessoal/cadastro-colaboradores",
        },
        {
          title: "Controle de Ponto",
          url: "/pessoal/controle-ponto",
        },
        {
          title: "Faltas e Ausências",
          url: "/pessoal/faltas-ausencias",
        },
        {
          title: "Horas Extras",
          url: "/pessoal/horas-extras",
        },
        {
          title: "EPI e Equipamentos",
          url: "/pessoal/epi-equipamentos",
        },
        {
          title: "Avaliação de Competências",
          url: "/pessoal/avaliacao-competencias",
        },
        {
          title: "Recibos de Pagamento",
          url: "/pessoal/recibos-pagamento",
        },
        {
          title: "Relatórios",
          url: "/pessoal/relatorios",
        },
      ],
    },
    {
      title: "Controle Financeiro",
      url: "/financeiro",
      icon: DollarSign,
      items: [
        {
          title: "Orçamento",
          url: "/financeiro/orcamento",
        },
        {
          title: "Receitas e Despesas",
          url: "/financeiro/receitas-despesas",
        },
        {
          title: "Relatórios Financeiros",
          url: "/financeiro/relatorios",
        },
        {
          title: "Alertas",
          url: "/financeiro/alertas",
        },
      ],
    },
    {
      title: "Compras de Materiais",
      url: "/compras",
      icon: ShoppingCart,
      items: [
        {
          title: "Fornecedores",
          url: "/compras/fornecedores",
        },
        {
          title: "Produtos",
          url: "/compras/produtos",
        },
        {
          title: "Orçamentos",
          url: "/compras/orcamentos",
        },
        {
          title: "Estoque",
          url: "/compras/estoque",
        },
        {
          title: "Compras",
          url: "/compras/compras",
        },
      ],
    },
    {
      title: "Prestadores de Serviços",
      url: "/prestadores",
      icon: Briefcase,
      items: [
        {
          title: "Cadastro",
          url: "/prestadores/cadastro",
        },
        {
          title: "Avaliações",
          url: "/prestadores/avaliacoes",
        },
        {
          title: "Contratos",
          url: "/prestadores/contratos",
        },
        {
          title: "Pagamentos",
          url: "/prestadores/pagamentos",
        },
        {
          title: "Cronogramas",
          url: "/prestadores/cronogramas",
        },
      ],
    },
    {
      title: "Gestão Fiscal",
      url: "/fiscal",
      icon: FileText,
      items: [
        {
          title: "Notas Fiscais",
          url: "/fiscal/notas",
        },
        {
          title: "Documentos Fiscais",
          url: "/fiscal/documentos",
        },
        {
          title: "Integração Contábil",
          url: "/fiscal/integracao",
        },
        {
          title: "Alertas Fiscais",
          url: "/fiscal/alertas",
        },
      ],
    },
    {
      title: "Gestão de Contratos",
      url: "/contratos",
      icon: BookOpen,
      items: [
        {
          title: "Contratos",
          url: "/contratos/lista",
        },
        {
          title: "Prazos",
          url: "/contratos/prazos",
        },
        {
          title: "Cláusulas",
          url: "/contratos/clausulas",
        },
        {
          title: "Rescisão/Renovação",
          url: "/contratos/rescisao-renovacao",
        },
      ],
    },
    {
      title: "Gerenciamento de Projetos",
      url: "/projetos",
      icon: Building,
      items: [
        {
          title: "Cronogramas",
          url: "/projetos/cronogramas",
        },
        {
          title: "Marcos e Tarefas",
          url: "/projetos/marcos",
        },
        {
          title: "Progresso",
          url: "/projetos/progresso",
        },
        {
          title: "Relatórios",
          url: "/projetos/relatorios",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Obra Residencial Centro",
      url: "#",
      icon: Frame,
    },
    {
      name: "Construção Empresarial",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Reforma Comercial",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}