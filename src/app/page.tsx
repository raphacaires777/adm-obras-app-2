"use client";

import { useState } from "react";
import {
  Users,
  DollarSign,
  ShoppingCart,
  FileText,
  Briefcase,
  FolderKanban,
  Menu,
  X,
  Plus,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Building2,
  Calendar,
  Receipt,
  UserPlus,
  Package,
  ClipboardList,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  const [activeModule, setActiveModule] = useState("dashboard");

  const modules = [
    { id: "dashboard", name: "Dashboard", icon: Building2 },
    { id: "pessoal", name: "Departamento Pessoal", icon: Users },
    { id: "financeiro", name: "Financeiro", icon: DollarSign },
    { id: "compras", name: "Compras", icon: ShoppingCart },
    { id: "prestadores", name: "Prestadores", icon: Briefcase },
    { id: "fiscal", name: "Fiscal", icon: Receipt },
    { id: "contratos", name: "Contratos", icon: FileText },
    { id: "projetos", name: "Projetos", icon: FolderKanban },
  ];

  const stats = [
    { title: "Colaboradores Ativos", value: "48", change: "+3", icon: Users, color: "from-blue-500 to-cyan-500" },
    { title: "Orçamento Mensal", value: "R$ 285k", change: "78%", icon: DollarSign, color: "from-emerald-500 to-teal-500" },
    { title: "Compras Pendentes", value: "12", change: "-5", icon: ShoppingCart, color: "from-orange-500 to-amber-500" },
    { title: "Projetos Ativos", value: "6", change: "+2", icon: FolderKanban, color: "from-purple-500 to-pink-500" },
  ];

  const recentActivities = [
    { type: "success", message: "Pagamento aprovado - João Silva", time: "5 min atrás" },
    { type: "warning", message: "Orçamento próximo do limite", time: "1 hora atrás" },
    { type: "info", message: "Nova compra registrada - Cimento", time: "2 horas atrás" },
    { type: "success", message: "Contrato assinado - Eletricista", time: "3 horas atrás" },
  ];

  const projects = [
    { name: "Edifício Residencial Centro", progress: 75, status: "Em andamento", deadline: "30/06/2024" },
    { name: "Reforma Comercial Zona Sul", progress: 45, status: "Em andamento", deadline: "15/07/2024" },
    { name: "Construção Galpão Industrial", progress: 90, status: "Finalização", deadline: "10/05/2024" },
  ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  ADM OBRAS
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">Gestão Completa</p>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
            {/* Main Content */}
            <main className="flex-1 p-4 sm:p-6 lg:p-8">
              {activeModule === "dashboard" && (
                <div className="space-y-6">
                  {/* Stats Grid */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <Card key={index} className="border-0 shadow-xl bg-white dark:bg-slate-900 overflow-hidden">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                                {stat.title}
                              </CardTitle>
                              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                                <Icon className="h-5 w-5 text-white" />
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-baseline gap-2">
                              <span className="text-3xl font-bold">{stat.value}</span>
                              <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                                {stat.change}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  {/* Projects and Activities */}
                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* Projects */}
                    <Card className="border-0 shadow-xl bg-white dark:bg-slate-900">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <FolderKanban className="h-5 w-5 text-orange-500" />
                          Projetos em Andamento
                        </CardTitle>
                        <CardDescription>Acompanhamento de obras ativas</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {projects.map((project, index) => (
                          <div key={index} className="space-y-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-sm">{project.name}</h4>
                              <Badge variant="outline" className="text-xs">
                                {project.status}
                              </Badge>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                            <div className="flex items-center justify-between text-xs text-slate-500">
                              <span>{project.progress}% concluído</span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {project.deadline}
                              </span>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    {/* Recent Activities */}
                    <Card className="border-0 shadow-xl bg-white dark:bg-slate-900">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-pink-500" />
                          Atividades Recentes
                        </CardTitle>
                        <CardDescription>Últimas movimentações do sistema</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {recentActivities.map((activity, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                            {activity.type === "success" && <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />}
                            {activity.type === "warning" && <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />}
                            {activity.type === "info" && <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5" />}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium">{activity.message}</p>
                              <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Quick Actions */}
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-500 to-pink-600 text-white">
                    <CardHeader>
                      <CardTitle>Ações Rápidas</CardTitle>
                      <CardDescription className="text-white/80">
                        Acesso rápido às funcionalidades mais usadas
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        <Button variant="secondary" className="justify-start h-auto py-4 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm">
                          <UserPlus className="h-5 w-5 mr-2" />
                          Novo Colaborador
                        </Button>
                        <Button variant="secondary" className="justify-start h-auto py-4 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm">
                          <Package className="h-5 w-5 mr-2" />
                          Registrar Compra
                        </Button>
                        <Button variant="secondary" className="justify-start h-auto py-4 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm">
                          <FileText className="h-5 w-5 mr-2" />
                          Novo Contrato
                        </Button>
                        <Button variant="secondary" className="justify-start h-auto py-4 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm">
                          <ClipboardList className="h-5 w-5 mr-2" />
                          Relatório
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeModule === "pessoal" && (
                <Card className="border-0 shadow-xl bg-white dark:bg-slate-900">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-6 w-6 text-blue-500" />
                      Departamento Pessoal
                    </CardTitle>
                    <CardDescription>Gestão de colaboradores e prestadores de serviços</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="colaboradores" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="colaboradores">Colaboradores</TabsTrigger>
                        <TabsTrigger value="ponto">Controle de Ponto</TabsTrigger>
                        <TabsTrigger value="folha">Folha de Pagamento</TabsTrigger>
                      </TabsList>
                      <TabsContent value="colaboradores" className="space-y-4 mt-4">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold">48 Colaboradores Ativos</h3>
                          <Button className="bg-gradient-to-r from-blue-500 to-cyan-500">
                            <Plus className="h-4 w-4 mr-2" />
                            Adicionar
                          </Button>
                        </div>
                        <div className="grid gap-3">
                          {["João Silva - Pedreiro", "Maria Santos - Engenheira", "Carlos Oliveira - Eletricista"].map((name, i) => (
                            <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold">
                                  {name.charAt(0)}
                                </div>
                                <div>
                                  <p className="font-medium">{name}</p>
                                  <p className="text-xs text-slate-500">Ativo</p>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">Ver Detalhes</Button>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent value="ponto" className="mt-4">
                        <p className="text-slate-500">Sistema de controle de ponto e horas trabalhadas</p>
                      </TabsContent>
                      <TabsContent value="folha" className="mt-4">
                        <p className="text-slate-500">Cálculo de folha de pagamento e benefícios</p>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              )}

              {activeModule === "financeiro" && (
                <Card className="border-0 shadow-xl bg-white dark:bg-slate-900">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-6 w-6 text-emerald-500" />
                      Controle Financeiro
                    </CardTitle>
                    <CardDescription>Orçamento, receitas e despesas da obra</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20">
                          <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Receitas</p>
                          <p className="text-2xl font-bold mt-2">R$ 450.000</p>
                        </div>
                        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20">
                          <p className="text-sm text-red-600 dark:text-red-400 font-medium">Despesas</p>
                          <p className="text-2xl font-bold mt-2">R$ 285.000</p>
                        </div>
                        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20">
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Saldo</p>
                          <p className="text-2xl font-bold mt-2">R$ 165.000</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Últimas Transações</h3>
                        <div className="space-y-2">
                          {[
                            { desc: "Pagamento - Fornecedor ABC", value: "- R$ 15.000", type: "expense" },
                            { desc: "Recebimento - Cliente XYZ", value: "+ R$ 50.000", type: "income" },
                            { desc: "Compra de Materiais", value: "- R$ 8.500", type: "expense" },
                          ].map((transaction, i) => (
                            <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 flex justify-between items-center">
                              <span className="text-sm">{transaction.desc}</span>
                              <span className={`font-semibold ${transaction.type === "income" ? "text-emerald-600" : "text-red-600"}`}>
                                {transaction.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeModule === "compras" && (
                <Card className="border-0 shadow-xl bg-white dark:bg-slate-900">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="h-6 w-6 text-orange-500" />
                      Compras de Materiais
                    </CardTitle>
                    <CardDescription>Gestão de fornecedores, orçamentos e estoque</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">12 Compras Pendentes</h3>
                        <Button className="bg-gradient-to-r from-orange-500 to-amber-500">
                          <Plus className="h-4 w-4 mr-2" />
                          Nova Compra
                        </Button>
                      </div>
                      <div className="grid gap-3">
                        {[
                          { item: "Cimento - 50 sacos", supplier: "Fornecedor A", status: "Pendente", value: "R$ 1.250" },
                          { item: "Tijolos - 5000 unidades", supplier: "Fornecedor B", status: "Aprovado", value: "R$ 3.500" },
                          { item: "Areia - 10m³", supplier: "Fornecedor C", status: "Entregue", value: "R$ 800" },
                        ].map((purchase, i) => (
                          <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="font-semibold">{purchase.item}</p>
                                <p className="text-xs text-slate-500">{purchase.supplier}</p>
                              </div>
                              <Badge variant={purchase.status === "Entregue" ? "default" : "secondary"}>
                                {purchase.status}
                              </Badge>
                            </div>
                            <div className="flex justify-between items-center mt-3">
                              <span className="text-lg font-bold text-orange-600">{purchase.value}</span>
                              <Button variant="outline" size="sm">Ver Detalhes</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeModule === "prestadores" && (
                <Card className="border-0 shadow-xl bg-white dark:bg-slate-900">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-6 w-6 text-purple-500" />
                      Prestadores de Serviços
                    </CardTitle>
                    <CardDescription>Cadastro e gestão de prestadores</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-500">Módulo de gestão de prestadores de serviços em desenvolvimento</p>
                  </CardContent>
                </Card>
              )}

              {activeModule === "fiscal" && (
                <Card className="border-0 shadow-xl bg-white dark:bg-slate-900">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Receipt className="h-6 w-6 text-indigo-500" />
                      Gestão Fiscal
                    </CardTitle>
                    <CardDescription>Controle de notas fiscais e obrigações</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-500">Módulo de gestão fiscal em desenvolvimento</p>
                  </CardContent>
                </Card>
              )}

              {activeModule === "contratos" && (
                <Card className="border-0 shadow-xl bg-white dark:bg-slate-900">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-6 w-6 text-cyan-500" />
                      Gestão de Contratos
                    </CardTitle>
                    <CardDescription>Contratos com fornecedores e prestadores</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-500">Módulo de gestão de contratos em desenvolvimento</p>
                  </CardContent>
                </Card>
              )}

              {activeModule === "projetos" && (
                <Card className="border-0 shadow-xl bg-white dark:bg-slate-900">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FolderKanban className="h-6 w-6 text-pink-500" />
                      Gerenciamento de Projetos
                    </CardTitle>
                    <CardDescription>Cronogramas, marcos e acompanhamento</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {projects.map((project, index) => (
                        <div key={index} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold">{project.name}</h4>
                              <p className="text-xs text-slate-500 mt-1">Prazo: {project.deadline}</p>
                            </div>
                            <Badge>{project.status}</Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progresso</span>
                              <span className="font-semibold">{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-3" />
                          </div>
                          <Button variant="outline" size="sm" className="w-full">
                            Ver Cronograma Completo
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </main>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}