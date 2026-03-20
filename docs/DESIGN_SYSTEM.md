# 🎨 Design System

> _Pastel colors you choose, personality you define._

<!-- IMAGE: Pastel color palette in circles --><!-- GIF: User changing colors and seeing post-its change in real time -->

### Philosophy

StickIt offers **curated freedom**. The user doesn't need to think about color theory, but can express their personality through it.

**How it works:**

- 12 base pastel colors (professional curation)
- User chooses **up to 5 colors** for their personal palette
- Post-its alternate between the chosen colors
- Can change whenever you want

---

### 🎨 Base Palette (Curated)

All colors are **pastel** (low saturation, high brightness) to maintain a soft, pleasant aesthetic.

| Name               | Hex       | RGB              | Vibe                       |
| ------------------ | --------- | ---------------- | -------------------------- |
| **Cloud Blue**     | `#55CDFC` | rgb(85,205,252)  | Calm, clarity              |
| **Cotton Candy Pink** | `#F7A8B8` | rgb(247,168,184) | Sweetness, affection       |
| **Fresh Mint**     | `#A8E6CF` | rgb(168,230,207) | Renewal, balance           |
| **Soft Lavender**  | `#D4B8E0` | rgb(212,184,224) | Creativity, intuition      |
| **Peach**          | `#FFD5B5` | rgb(255,213,181) | Coziness, energy           |
| **Lemon**          | `#FFF4A8` | rgb(255,244,168) | Optimism, focus            |
| **Sage**           | `#C0E0C0` | rgb(192,224,192) | Harmony, growth            |
| **Night Sky**      | `#B8D0E0` | rgb(184,208,224) | Serenity, trust            |
| **Orchid**         | `#E0C0E0` | rgb(224,192,224) | Dream, inspiration         |
| **Sand**           | `#F5E6D3` | rgb(245,230,211) | Stability, simplicity      |
| **Water**          | `#B0E0E6` | rgb(176,224,230) | Fluidity, movement         |
| **Mist**           | `#E0E0E0` | rgb(224,224,224) | Neutrality, balance        |

<!-- IMAGE: Swatches of the 12 colors in cards --><!-- IMAGE: Suggested harmonious combinations -->

---

### 🎚️ Customization System

#### Color Configuration Screen:

<!-- IMAGE: Color selection interface --><!-- GIF: Dragging colors to personal palette -->

#### Distribution Logic:

```typescript
interface UserPalette {
  chosenColors: string[]; // Array with up to 5 hex codes
  distributionMode: 'alternating' | 'category' | 'random';
}
// Distribution modes:
// 1. Alternating: Post-its alternate between chosen colors
// 2. By category: Each category has a fixed color (e.g., study always blue)
// 3. Random: Surprise with each new post-it

<!-- GIF: Toggling between distribution modes -->
```
---

### 📝 Typography

|Element|Font|Weight|Usage|
|---|---|---|---|
|**Post-it (title)**|Caveat / Permanent Marker|400|Handwritten text on post-it|
|**Post-it (details)**|Inter|300|Times, counters|
|**Interface (general)**|Inter|400/600|Buttons, menus, modals|
|**Highlights**|Inter|700|Numbers, progress|

**Rationale:**

- Handwritten font on post-its reinforces the visual metaphor
- Inter ensures readability for important information
- Contrast between handwritten and clean creates visual hierarchy

<!-- IMAGE: Example of post-it with both fonts --><!-- IMAGE: Legibility comparison -->

---

### 🖼️ Icons

|Icon|Usage|Library|
|---|---|---|
|🍅|Pomodoro|Native emoji|
|⏱️|Free Time|Native emoji|
|✅|Check-in|Native emoji|
|💪|Workout|Native emoji|
|📚|Study|Native emoji|
|🥗|Food|Native emoji|
|🧹|House|Native emoji|

**Decision:** Use native system emojis for:

- Lightweight (no heavy libraries)
- Familiarity (everyone knows them)
- Universal support

<!-- IMAGE: Grid of available icons/emojis -->

---

### 🎬 Animations

|Element|Animation|Duration|Easing|
|---|---|---|---|
|**Dragging post-it**|Shadow + scale|100ms|ease-out|
|**Dropping on board**|"Thud" (light bounce)|200ms|cubic-bezier(0.34, 1.56, 0.64, 1)|
|**Configuring**|Horizontal flip|300ms|ease-in-out|
|**Completing task**|Crinkle + fade out|400ms|ease-in|
|**Post-it peeling off**|Tilt + shadow|Continuous|linear|
|**Changing palette**|Color transition|500ms|ease-in-out|

<!-- GIF: Each animation in action --><!-- GIF: Comparison with/without animations -->

---

### 📐 Spacing and Dimensions

|Element|Size (Desktop)|Size (Mobile)|
|---|---|---|
|**Post-it**|180x180px|140x140px|
|**Idea Island**|220px width|Bottom drawer|
|**Main Board**|Flexible|Flexible|
|**Post-it font**|18px|16px|
|**Post-it icon**|32px|28px|
|**Default shadow**|4px 4px 10px rgba(0,0,0,0.1)|2px 2px 8px rgba(0,0,0,0.1)|

<!-- IMAGE: Measurement and proportion guide -->

---

### 🌓 Light / Dark Mode

StickIt automatically adapts to the system theme, but with a unique approach:

|Element|Light|Dark|
|---|---|---|
|**Post-its**|Original pastel colors|Pastel colors with +20% brightness|
|**Board**|Light gray background (#F0F0F0)|Dark gray background (#2C2C2C)|
|**Post-it text**|Black (#2C2C2C)|Near white (#F0F0F0)|
|**Shadows**|Soft black|Soft white (glow)|
|**Idea Island**|White background|Background #3C3C3C|

<!-- IMAGE: Side-by-side light vs dark mode --><!-- GIF: Toggling between modes -->

---

### 🧩 Core Components (with colors)

#### Base Post-It

```html
<div class="post-it" 
     [style.background-color]="color"
     [style.transform]="isPeelingOff ? 'rotate(-2deg)' : 'none'"
     [style.box-shadow]="darkMode ? '0 0 15px rgba(255,255,255,0.2)' : '4px 4px 10px rgba(0,0,0,0.1)'">
  
  <div class="post-it-icon">{{ icon }}</div>
  <div class="post-it-title handwritten-font">{{ title }}</div>
  <div class="post-it-details inter-font">{{ details }}</div>
  
  <div class="post-it-corner" *ngIf="isPeelingOff"></div>
</div>
```
<!-- IMAGE: Post-it component with annotations of parts -->

---

### 🎮 Suggested Palette Examples

To help indecisive users, we offer ready-made combinations:

|Palette|Colors|Mood|
|---|---|---|
|**Beach**|#55CDFC + #A8E6CF + #F5E6D3|Calm, refreshing|
|**Sunset**|#FFD5B5 + #F7A8B8 + #D4B8E0|Cozy, creative|
|**Nature**|#C0E0C0 + #A8E6CF + #F5E6D3|Balance, growth|
|**Focus**|#55CDFC + #B8D0E0 + #E0E0E0|Productivity, clarity|
|**Dream**|#D4B8E0 + #E0C0E0 + #F7A8B8|Imagination, lightness|

<!-- IMAGE: The 5 suggested palettes in cards --><!-- GIF: Applying each palette to the board -->

---

### 📱 Color Responsiveness

On mobile, color selection changes to gestures:

```typescript
// Mobile: Swipe to change post-it color
@HostListener('swipeleft') onSwipeLeft() {
  this.changeToNextColor();
}
@HostListener('swiperight') onSwipeRight() {
  this.changeToPreviousColor();
}
```
<!-- GIF: Changing colors with swipe on mobile -->

---

## 📋 Design System Summary

|Category|Specification|
|---|---|
|**Base colors**|12 curated pastel shades|
|**Personal palette**|Up to 5 colors chosen by the user|
|**Typography**|Caveat (handwritten) + Inter (clean)|
|**Icons**|Native emojis|
|**Animations**|Physical, fun, 200-500ms|
|**Dark mode**|Automatic with adjustments|
|**Mobile**|Swipe to change colors|

---

> _"Your board, your colors, your personality."_

<!-- FINAL GIF: Quick montage showing all customization possibilities -->

---

**Updated:** March 2026

---