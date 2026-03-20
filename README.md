# 📋 STICKIT - Documentação do Projeto

> _"Grude no que importa."_  
> Versão 1.0 - MVP

![Version](https://img.shields.io/badge/version-1.0--MVP-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Stack](https://img.shields.io/badge/stack-Angular%20%7C%20NestJS-red)

## 🎯 Sobre o Projeto

**StickIt** é um assistente pessoal de produtividade que transforma a gestão de metas em uma experiência visual e intuitiva. Inspirado em post-its, o app permite que você organize seus hábitos de forma natural: arrastando, configurando e grudando metas no seu quadro pessoal.

<!-- IMAGEM: Mockup da interface principal mostrando o quadro de post-its --><!-- GIF: Demonstração rápida do fluxo de arrastar post-it -->

---

## 🖼️ Conceito Visual

O StickIt é construído sobre uma metáfora visual forte: **o quadro de post-its**.

### Os dois espaços fundamentais:

|Espaço|Função|Analogia|
|---|---|---|
|**Ilha de Ideias**|Post-its em branco para novos hábitos|"Ideias soltas que ainda não viraram compromisso"|
|**Quadro Principal**|Metas configuradas e ativas|"Compromissos que já grudaram na sua rotina"|

<!-- IMAGEM: Ilustração destacando os dois espaços --><!-- GIF: Transição entre ilha e quadro durante o uso -->

### Interações principais:

1. **Arrastar** → Pega um post-it da ilha e leva até o quadro
2. **Configurar** → Ao soltar no quadro, abre o modal de configuração
3. **Grudar** → Post-it configurado permanece no quadro com todas as informações
4. **Concluir** → Click no post-it conclui a tarefa (com animação)

<!-- GIF: Sequência completa: arrastar → configurar → grudar → concluir -->

---

## ⚡ Funcionalidades - Versão 1.0 (MVP)

Quadro interativo, 3 tipos de post-it (Pomodoro, Tempo Livre, Check-in), execução com check-in e feedbacks visuais.

📖 **[Detalhamento completo →](docs/FEATURES.md)**

---

## 📊 Coleta de Dados (Para Futuros Insights)

Coletamos horários, check-ins e posições dos post-its para gerar insights na versão 2.0.

📖 **[Detalhamento completo →](docs/FEATURES.md#-coleta-de-dados)**

---

## 🛠️ Stack Tecnológica

| Frontend | Backend | Banco |
|:---|:---|:---|
| Angular 17+ | NestJS | PostgreSQL + Prisma |

📖 **[Detalhamento completo →](docs/TECH_STACK.md)**

---

## 📁 Estrutura de Pastas

```text
stickit/
├── frontend/                 # Angular app
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/        # Serviços globais, guards
│   │   │   ├── shared/      # Componentes reutilizáveis
│   │   │   │   ├── post-it/     # Componente base do post-it
│   │   │   │   ├── quadro/      # Layout do quadro
│   │   │   │   └── modal/       # Modal de configuração
│   │   │   ├── features/    # Módulos funcionais
│   │   │   │   ├── board/       # Quadro principal
│   │   │   │   ├── execucao/    # Timers e check-in
│   │   │   │   └── historico/   # Visualização
│   │   │   └── app.config.ts
│   │   └── assets/
│   │       ├── images/       # Imagens do app
│   │       └── gifs/         # Tutoriais animados
│   └── package.json
│
├── backend/                   # NestJS API
│   ├── src/
│   │   ├── modules/
│   │   │   ├── metas/        # CRUD de metas
│   │   │   ├── execucao/     # Registro de execuções
│   │   │   ├── auth/         # Autenticação
│   │   │   └── prisma/       # Serviço Prisma
│   │   └── main.ts
│   ├── prisma/
│   │   └── schema.prisma     # Modelo do banco
│   └── package.json
│
├── docs/                      # Documentação
│   ├── FUNCIONALIDADES.md    # Detalhamento das features
│   ├── MODELO_DADOS.md       # Schema explicado
│   ├── API.md                # Rotas e endpoints
│   └── DECISOES.md           # Por que cada tecnologia
│
└── README.md                  # Visão geral (este arquivo)
```
---
## 🗓️ Roadmap de Desenvolvimento

**Fase atual:** Fundação (NestJS + Prisma + PostgreSQL)

📖 **[Detalhamento completo →](docs/ROADMAP.md)**

---

## 🎨 Design System (Resumo)

Cores pastel personalizáveis, tipografia manuscrita + Inter, animações físicas.

📖 **[Detalhamento completo →](docs/DESIGN_SYSTEM.md)**

---

## 🚀 Primeiros Passos

### Pré-requisitos

- Node.js 18+
- PostgreSQL 15+
- Angular CLI: `npm install -g @angular/cli`
- NestJS CLI: `npm install -g @nestjs/cli`

### Instalação

```bash
# Clone
git clone https://github.com/Belluominus/stickit
cd stickit

# Backend
cd backend
cp .env.example .env
# Edite .env com suas credenciais
npm install
npx prisma migrate dev --name init
npm run start:dev

# Frontend
cd ../frontend
npm install
ng serve
# Acesse: http://localhost:4200
```
### Variáveis de Ambiente

**.env (backend)**

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/stickit"
JWT_SECRET="sua-chave-super-secreta"
PORT=3000
```

---
## 🧠 Por que StickIt é diferente?

|Aspecto|Outros Apps|StickIt|
|---|---|---|
|**Interface**|Listas chatas|Quadro de post-its interativo|
|**Interação**|Clicar em botões|Arrastar, grudar, organizar|
|**Técnicas**|Só Pomodoro|3 tipos adaptáveis|
|**Feedback**|Notificações|Visuais (post-it descolando)|
|**Dados**|Só execução|Check-in + horários + posições|
|**Personalidade**|Robótico|Divertido, memorável|

<!-- GIF: Comparativo mostrando StickIt vs app tradicional -->

---
## 💡 Observações Finais

- **Foco na experiência:** A mágica do StickIt está na interação, não só nas funcionalidades
- **Mobile primeiro:** Pensar em gestos desde o início
- **Documentação viva:** Manter docs atualizados com prints e GIFs
- **Divirta-se:** Se você não estiver se divertindo usando, o usuário também não vai

---
## 📝 Documentação Complementar

| Documento         | Descrição                  | Link                          |
| ----------------- | -------------------------- | ----------------------------- |
| Funcionalidades   | Especificação completa     | [Ver](docs/FEATURES.md) |
| Design System     | Schema Prisma explicado    | [Ver](docs/DESIGN_SYSTEM.md) |
| Stack Tecnológica | Por que cada tecnologia    | [Ver](docs/TECH_STACK.md) |
| Roadmap           | Roadmap de desenvolvimento | [Ver](docs/ROADMAP.md) |
| API Endpoints     | Rotas e exemplos           | [Ver]() |

---

> _"Um post-it é só um papel. Uma pilha deles é um compromisso."_

**Última atualização:** Março 2026

---

## 📎 Links

- [Repositório GitHub](https://github.com/Belluominus/stickit)

---
