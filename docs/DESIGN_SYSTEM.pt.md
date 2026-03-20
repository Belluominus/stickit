# 🎨Design System

> _Cores pastel que você escolhe, personalidade que você define._

<!-- IMAGEM: Paleta de cores pastel em círculos --><!-- GIF: Usuário alterando as cores e vendo os post-its mudarem em tempo real -->

### Filosofia

O StickIt oferece **liberdade com curadoria**. O usuário não precisa pensar em teoria das cores, mas pode expressar sua personalidade através delas.

**Como funciona:**

- 12 cores pastel base (curadoria profissional)
- Usuário escolhe **até 5 cores** para sua paleta pessoal
- Post-its alternam entre as cores escolhidas
- Pode mudar quando quiser

---

### 🎨 Paleta Base (Curadoria)

Todas as cores são **pastel** (baixa saturação, alto brilho) para manter a estética suave e agradável.

| Nome              | Hex       | RGB              | Vibração                   |
| ----------------- | --------- | ---------------- | -------------------------- |
| **Azul Nuvem**    | `#55CDFC` | rgb(85,205,252)  | Calma, clareza             |
| **Rosa Algodão**  | `#F7A8B8` | rgb(247,168,184) | Doçura, carinho            |
| **Menta Fresca**  | `#A8E6CF` | rgb(168,230,207) | Renovação, equilíbrio      |
| **Lavanda Suave** | `#D4B8E0` | rgb(212,184,224) | Criatividade, intuição     |
| **Pêssego**       | `#FFD5B5` | rgb(255,213,181) | Aconchego, energia         |
| **Limão**         | `#FFF4A8` | rgb(255,244,168) | Otimismo, foco             |
| **Sálvia**        | `#C0E0C0` | rgb(192,224,192) | Harmonia, crescimento      |
| **Céu Noturno**   | `#B8D0E0` | rgb(184,208,224) | Serenidade, confiança      |
| **Orquídea**      | `#E0C0E0` | rgb(224,192,224) | Sonho, inspiração          |
| **Areia**         | `#F5E6D3` | rgb(245,230,211) | Estabilidade, simplicidade |
| **Água**          | `#B0E0E6` | rgb(176,224,230) | Fluidez, movimento         |
| **Névoa**         | `#E0E0E0` | rgb(224,224,224) | Neutralidade, equilíbrio   |

<!-- IMAGEM: Amostras das 12 cores em cards --><!-- IMAGEM: Combinações harmoniosas sugeridas -->

---

### 🎚️ Sistema de Personalização

#### Tela de Configuração de Cores:

<!-- IMAGEM: Interface de seleção de cores --><!-- GIF: Arrastando cores para a paleta pessoal -->

#### Lógica de Distribuição:

```typescript
interface PaletaUsuario {
  coresEscolhidas: string[]; // Array com até 5 hex codes
  modoDistribuicao: 'alternado' | 'categoria' | 'aleatorio';
}
// Modos de distribuição:
// 1. Alternado: Post-its alternam entre as cores escolhidas
// 2. Por categoria: Cada categoria tem uma cor fixa (ex: estudos sempre azul)
// 3. Aleatório: Surpresa a cada novo post-it

<!-- GIF: Alternando entre os modos de distribuição -->
```
---

### 📝 Tipografia

|Elemento|Fonte|Peso|Uso|
|---|---|---|---|
|**Post-it (título)**|Caveat / Permanent Marker|400|Texto manuscrito no post-it|
|**Post-it (detalhes)**|Inter|300|Horários, contadores|
|**Interface (geral)**|Inter|400/600|Botões, menus, modais|
|**Destaques**|Inter|700|Números, progresso|

**Justificativa:**

- Fonte manuscrita nos post-its reforça a metáfora visual
- Inter garante legibilidade para informações importantes
- Contraste entre manuscrito e limpo cria hierarquia visual

<!-- IMAGEM: Exemplo de post-it com as duas fontes --><!-- IMAGEM: Comparação de legibilidade -->

---

### 🖼️ Ícones

|Ícone|Uso|Biblioteca|
|---|---|---|
|🍅|Pomodoro|Emoji nativo|
|⏱️|Tempo Livre|Emoji nativo|
|✅|Check-in|Emoji nativo|
|💪|Academia|Emoji nativo|
|📚|Estudo|Emoji nativo|
|🥗|Alimentação|Emoji nativo|
|🧹|Casa|Emoji nativo|

**Decisão:** Usar emojis nativos do sistema para:

- Leveza (sem bibliotecas pesadas)
- Familiaridade (todo mundo conhece)
- Suporte universal

<!-- IMAGEM: Grid de ícones/emojis disponíveis -->

---

### 🎬 Animações

|Elemento|Animação|Duração|Easing|
|---|---|---|---|
|**Arrastar post-it**|Sombra + escala|100ms|ease-out|
|**Sol tar no quadro**|"Thud" (leve salto)|200ms|cubic-bezier(0.34, 1.56, 0.64, 1)|
|**Configurar**|Flip horizontal|300ms|ease-in-out|
|**Concluir tarefa**|Amassar + fade out|400ms|ease-in|
|**Post-it descolando**|Inclinação + sombra|Contínua|linear|
|**Mudar paleta**|Transição de cores|500ms|ease-in-out|

<!-- GIF: Cada animação em ação --><!-- GIF: Comparação com/sem animações -->

---

### 📐 Espaçamento e Dimensões

|Elemento|Tamanho (Desktop)|Tamanho (Mobile)|
|---|---|---|
|**Post-it**|180x180px|140x140px|
|**Ilha de Ideias**|220px largura|Gaveta inferior|
|**Quadro Principal**|Flexível|Flexível|
|**Fonte post-it**|18px|16px|
|**Ícone post-it**|32px|28px|
|**Sombra padrão**|4px 4px 10px rgba(0,0,0,0.1)|2px 2px 8px rgba(0,0,0,0.1)|

<!-- IMAGEM: Guia de medidas e proporções -->

---

### 🌓 Modo Claro / Escuro

O StickIt se adapta automaticamente ao tema do sistema, mas com uma abordagem única:

|Elemento|Claro|Escuro|
|---|---|---|
|**Post-its**|Cores pastel originais|Cores pastel com +20% brilho|
|**Quadro**|Fundo cinza claro (#F0F0F0)|Fundo cinza escuro (#2C2C2C)|
|**Texto post-it**|Preto (#2C2C2C)|Quase branco (#F0F0F0)|
|**Sombras**|Preta suave|Branca suave (glow)|
|**Ilha de Ideias**|Fundo branco|Fundo #3C3C3C|

<!-- IMAGEM: Side-by-side modo claro vs escuro --><!-- GIF: Alternando entre modos -->

---

### 🧩 Componentes Core (com cores)

#### Post-It Base

```html
<div class="post-it" 
     [style.background-color]="cor"
     [style.transform]="estaDescolando ? 'rotate(-2deg)' : 'none'"
     [style.box-shadow]="modoEscuro ? '0 0 15px rgba(255,255,255,0.2)' : '4px 4px 10px rgba(0,0,0,0.1)'">
  
  <div class="post-it-icone">{{ icone }}</div>
  <div class="post-it-titulo fonte-manuscrita">{{ titulo }}</div>
  <div class="post-it-detalhes fonte-inter">{{ detalhes }}</div>
  
  <div class="post-it-cantinho" *ngIf="estaDescolando"></div>
</div>
```
<!-- IMAGEM: Componente post-it com anotações das partes -->

---

### 🎮 Exemplos de Paletas Sugeridas

Para ajudar usuários indecisos, oferecemos combinações prontas:

|Paleta|Cores|Mood|
|---|---|---|
|**Praia**|#55CDFC + #A8E6CF + #F5E6D3|Calma, refrescante|
|**Pôr do Sol**|#FFD5B5 + #F7A8B8 + #D4B8E0|Aconchegante, criativo|
|**Natura**|#C0E0C0 + #A8E6CF + #F5E6D3|Equilíbrio, crescimento|
|**Foco**|#55CDFC + #B8D0E0 + #E0E0E0|Produtividade, clareza|
|**Sonho**|#D4B8E0 + #E0C0E0 + #F7A8B8|Imaginação, leveza|

<!-- IMAGEM: As 5 paletas sugeridas em cards --><!-- GIF: Aplicando cada paleta no quadro -->

---

### 📱 Responsividade das Cores

No mobile, a seleção de cores muda para gestos:

```typescript
// Mobile: Swipe para trocar cor do post-it
@HostListener('swipeleft') onSwipeLeft() {
  this.mudarCorProxima();
}
@HostListener('swiperight') onSwipeRight() {
  this.mudarCorAnterior();
}
```
<!-- GIF: Trocando cores com swipe no celular -->

---

## 📋 Resumo do Design System

|Categoria|Especificação|
|---|---|
|**Cores base**|12 tons pastel curados|
|**Paleta pessoal**|Até 5 cores escolhidas pelo usuário|
|**Tipografia**|Caveat (manuscrita) + Inter (limpa)|
|**Ícones**|Emojis nativos|
|**Animações**|Físicas, divertidas, 200-500ms|
|**Modo escuro**|Automático com ajustes|
|**Mobile**|Swipe para trocar cores|

---

> _"Seu quadro, suas cores, sua personalidade."_

<!-- GIF FINAL: Montagem rápida mostrando todas as possibilidades de personalização -->

---

**Atualizado:** Março 2026

---
