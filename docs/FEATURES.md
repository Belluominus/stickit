# ⚡ Features

### 1. **Interactive Board**

| Feature                     | Description                                    |
| --------------------------- | ---------------------------------------------- |
| **Native Drag & Drop**      | Drag post-its between island and board         |
| **Persistent positions**    | The app remembers where you left each post-it  |
| **Contextual zoom**         | Double-click to see goal details               |
| **Visual filter**           | Show/hide post-its by category                 |

<!-- IMAGE: Demonstration of post-it positions on the board --><!-- GIF: Drag and drop interaction working -->

### 2. **Post-it Types (Execution Techniques)**

Each post-it can be configured with a different technique:

|Type|Icon|What it's for|Behavior|
|---|---|---|---|
|**Pomodoro**|🍅|Study, focused work|Timer with cycles|
|**Free Time**|⏱️|Workout, walking|Simple stopwatch|
|**Check-in**|✅|Meals, medication|"Completed" button|

<!-- IMAGE: The three types of post-its side by side with their icons --><!-- GIF: Each type being used -->

### 3. **Post-it Configuration**

When dragging a post-it to the board, the configuration modal appears:

<!-- IMAGE: Configuration modal open --><!-- GIF: Filling out and saving a configuration -->

### 4. **Execution and Check-in**

|Moment|Action|Recording|
|---|---|---|
|**Start**|Click on post-it|Saves actual start time|
|**Execute**|Timer/Pomodoro running|Interface adapted to type|
|**Complete**|Click "Complete"|Saves end time|
|**Check-in**|Quick modal appears|Asks: "Did you manage to complete it?" + notes|

<!-- GIF: Complete execution cycle with check-in -->

### 5. **Visual Feedback (Easter Eggs)**

| Situation                 | Visual Effect                                        |
| ------------------------- | ---------------------------------------------------- |
| **Goal not met**          | Post-it starts to "peel off" (corner lifted)         |
| **Success streak**        | Post-it becomes more "stuck" (stronger shadow)       |
| **Dragging over another** | Creates a "stack" of related habits                  |
| **Completing task**       | Post-it slightly "crinkles" and disappears           |

<!-- GIF: Each visual feedback in action -->

---

# 📊 Data Collection

In version 1.0, we will collect everything to implement intelligence in version 2.0:

|Data|Where|Future use|
|---|---|---|
|Planned time|Configuration|Know your intention|
|Actual start time|Execution|Calculate deviation|
|Actual end time|Execution|Calculate duration|
|Check-in "completed?"|Post-execution|Success rate|
|Notes|Post-execution|Qualitative analysis|
|Technique data|During execution|E.g., pomodoros completed|
|Post-it position|Board|Visual preferences|

<!-- IMAGE: Example of how this data will be presented in future charts -->