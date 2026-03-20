# 📋 STICKIT

**[Português 🇧🇷|🇵🇹](README.pt.md)** | **[English 🇬🇧|🇺🇸](README.md)**

> _"Stick to what matters."_  
> Version 1.0 - MVP

![Version](https://img.shields.io/badge/version-1.0--MVP-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Stack](https://img.shields.io/badge/stack-Angular%20%7C%20NestJS-red)

## 🎯 About the Project

**StickIt** is a personal productivity assistant that transforms goal management into a visual and intuitive experience. Inspired by post-its, the app allows you to organize your habits naturally: dragging, configuring, and sticking goals onto your personal board.

<!-- IMAGE: Mockup of the main interface showing the post-it board --><!-- GIF: Quick demonstration of the post-it drag-and-drop flow -->

---

## 🖼️ Visual Concept

StickIt is built on a strong visual metaphor: **the post-it board**.

### The two fundamental spaces:

|Space|Function|Analogy|
|---|---|---|
|**Idea Island**|Blank post-its for new habits|"Loose ideas that haven't yet become commitments"|
|**Main Board**|Configured and active goals|"Commitments already stuck in your routine"|

<!-- IMAGE: Illustration highlighting the two spaces --><!-- GIF: Transition between island and board during use -->

### Main interactions:

1. **Drag** → Grab a post-it from the island and take it to the board
2. **Configure** → When dropped on the board, opens the configuration modal
3. **Stick** → Configured post-it remains on the board with all information
4. **Complete** → Clicking on the post-it completes the task (with animation)

<!-- GIF: Complete sequence: drag → configure → stick → complete -->

---

## ⚡ Features - Version 1.0 (MVP)

Interactive board, 3 types of post-it (Pomodoro, Free Time, Check-in), execution with check-in and visual feedback.

📖 **[Full details →](docs/FEATURES.md)**

---

## 📊 Data Collection (For Future Insights)

We collect times, check-ins, and post-it positions to generate insights in version 2.0.

📖 **[Full details →](docs/FEATURES.md#-data-collection)**

---

## 🛠️ Tech Stack

| Frontend | Backend | Database |
|:---|:---|:---|
| Angular 17+ | NestJS | PostgreSQL + Prisma |

📖 **[Full details →](docs/TECH_STACK.md)**

---

## 📁 Folder Structure

```text
stickit/
├── frontend/                 # Angular app
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/        # Global services, guards
│   │   │   ├── shared/      # Reusable components
│   │   │   │   ├── post-it/     # Base post-it component
│   │   │   │   ├── board/       # Board layout
│   │   │   │   └── modal/       # Configuration modal
│   │   │   ├── features/    # Functional modules
│   │   │   │   ├── board/       # Main board
│   │   │   │   ├── execution/   # Timers and check-in
│   │   │   │   └── history/     # Visualization
│   │   │   └── app.config.ts
│   │   └── assets/
│   │       ├── images/       # App images
│   │       └── gifs/         # Animated tutorials
│   └── package.json
│
├── backend/                   # NestJS API
│   ├── src/
│   │   ├── modules/
│   │   │   ├── goals/        # CRUD for goals
│   │   │   ├── execution/    # Execution records
│   │   │   ├── auth/         # Authentication
│   │   │   └── prisma/       # Prisma service
│   │   └── main.ts
│   ├── prisma/
│   │   └── schema.prisma     # Database model
│   └── package.json
│
├── docs/                      # Documentation
│   ├── FEATURES.md           # Feature details
│   ├── DATA_MODEL.md         # Explained schema
│   ├── API.md                # Routes and endpoints
│   └── DECISIONS.md          # Why each technology
│
└── README.md                  # Overview (this file)
```
---
## 🗓️ Development Roadmap

**Current phase:** Foundation (NestJS + Prisma + PostgreSQL)

📖 **[Full details →](docs/ROADMAP.md)**

---

## 🎨 Design System (Summary)

Customizable pastel colors, handwritten typography + Inter, physical animations.

📖 **[Full details →](docs/DESIGN_SYSTEM.md)**

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 15+
- Angular CLI: `npm install -g @angular/cli`
- NestJS CLI: `npm install -g @nestjs/cli`

### Installation

```bash
# Clone
git clone https://github.com/Belluominus/stickit
cd stickit

# Backend
cd backend
cp .env.example .env
# Edit .env with your credentials
npm install
npx prisma migrate dev --name init
npm run start:dev

# Frontend
cd ../frontend
npm install
ng serve
# Access: http://localhost:4200
```
### Environment Variables

**.env (backend)**

```env
DATABASE_URL="postgresql://user:password@localhost:5432/stickit"
JWT_SECRET="your-super-secret-key"
PORT=3000
```

---
## 🧠 Why StickIt is Different

|Aspect|Other Apps|StickIt|
|---|---|---|
|**Interface**|Boring lists|Interactive post-it board|
|**Interaction**|Clicking buttons|Drag, stick, organize|
|**Techniques**|Only Pomodoro|3 adaptable types|
|**Feedback**|Notifications|Visual (post-it peeling off)|
|**Data**|Only execution|Check-in + times + positions|
|**Personality**|Robotic|Fun, memorable|

<!-- GIF: Comparison showing StickIt vs traditional app -->

---
## 💡 Final Observations

- **Focus on experience:** The magic of StickIt is in the interaction, not just the features
- **Mobile first:** Think about gestures from the start
- **Living documentation:** Keep docs updated with prints and GIFs
- **Have fun:** If you're not having fun using it, neither will the user

---
## 📝 Complementary Documentation

| Document         | Description                  | Link                          |
| ----------------- | -------------------------- | ----------------------------- |
| Features          | Complete specification     | [View](docs/FEATURES.md) |
| Design System     | Explained Prisma schema    | [View](docs/DESIGN_SYSTEM.md) |
| Tech Stack        | Why each technology        | [View](docs/TECH_STACK.md) |
| Roadmap           | Development roadmap        | [View](docs/ROADMAP.md) |
| API Endpoints     | Routes and examples        | [View]() |

---

> _"A post-it is just a piece of paper. A stack of them is a commitment."_

**Last updated:** March 2026

---

## 📎 Links

- [GitHub Repository](https://github.com/Belluominus/stickit)

---