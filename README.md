# 3D Programming Environment – Cell Types Overview

Welcome to the **3D Programming** ecosystem, where **AI** isn’t just abstract intelligence but a practical tool for seamlessly interacting with **digital and physical worlds**. Below, you’ll learn about **Cell Types**, how they enable flexible AI-driven workflows, and how you can start building or customizing your own cells.

---

## The “Fridge” Analogy

> “I see AI as a refrigerator—everyone has one, but each person stocks it differently.  
> We haven’t yet found the Pepsi or Coca-Cola brand for AI—the definitive product that everyone wants in their fridge.  
> **3D Programming** aims to become that brand, letting AI do far more than just chat—by hooking into real-world devices, triggers, and interactive components.”

With **3D Programming**, we integrate AI not only into **digital** tasks (like text or image generation) but also into **physical** tasks (like wearable tech or IoT devices)—enabling all of us to become “mini cyborgs,” bridging the gap between daily life and advanced AI workflows.

---

## What Are Cell Types?

In **3D Programming**, each **Cell** is like a **modular block** within a bigger 2D or 3D grid. Now, we’re adding a **layer** of customization: the **Cell Type**. A cell type:

- Defines **UI & logic** for a specific function or workflow.
- Can incorporate **front-end** (React-based) rendering + **optional** backend execution logic.
- Lets you tie into AI watchers, triggers, or any external system.

By mixing different cell types (imagine “fridge items”), you create entire **predefined workflows** that seamlessly merge AI, IoT, web services, and more.

---

## Why Cell Types Matter

1. **Rapid Prototyping**  
   - You can quickly spin up specialized cells for tasks like image generation, API fetching, or time-based triggers.
2. **Community-Driven**  
   - Anyone can build new cell types, fueling an expanding “brand” of AI-driven blocks.  
3. **Physical-Digital Bridge**  
   - These cells can connect with wearables, sensors, or other physical devices for real-time automation—like the “telekinesis” examples you may have seen in our demos.
4. **Infinite Customization**  
   - If the default logic doesn’t suit your needs, you can embed your own front-end/React UI and optional backend function.

---

## Setting Up and Building a Cell Type

### 1. Cloning the Boilerplate

We provide a minimal **Cell Boilerplate** that any front-end dev can clone and modify. Typically, it includes:

- **`specialConfig`**: An object holding your cell’s configuration (e.g. `title`, `description`, user inputs).  
- **`handleSpecialConfigChange(field, value)`**: A callback to update that configuration and propagate changes back to the main environment.  
- **(Optional)**: A **backend** or server logic that executes once the cell is triggered or executed.

**Example Folder Structure**:

```bash
my-cell-library
• CellSelector.jsx
• ExampleCell.jsx
• MyAIImageCell.jsx
• (any-other-cells).jsx
• (optional) index.js for exporting or aggregating all cells
```

### 2. Creating Your Own Cell File

> **Example:** `MyAIImageCell.jsx`

1. **Import** React, define props:

```jsx
   import React, { useState } from 'react';

   function MyAIImageCell({
     specialConfig = {},
     handleSpecialConfigChange = () => {}
   }) {
     // local states or derived from specialConfig
     const [prompt, setPrompt] = useState(specialConfig.prompt || '');

     const onPromptChange = (e) => {
       const val = e.target.value;
       setPrompt(val);
       handleSpecialConfigChange('prompt', val);
     };

     return (
       <div>
         <h3>AI Image Cell</h3>
         <input
           type="text"
           value={prompt}
           onChange={onPromptChange}
           placeholder="Enter an image prompt"
         />
         {/* Additional UI or triggers */}
       </div>
     );
   }
   export default MyAIImageCell;

```

1. Register the cell you created into our Google spreadsheet so we can have an index of all available cell types. Keeping track of the owner of each cell type. (Plugin system will be adopted soon)

2. Adding Optional Backend Logic
If your cell needs a server-side operation (e.g., calling DALL·E API), create a small endpoint or function in the environment’s backend code:

```js
   function myCellsFunction (cellData) {
     console.log("Cell data is an object " , cellData)
     // You have full control over the function thats gets ran
     // This can be for ANY use case your heart desires. But try not to be redundant. Quality over quanitity when it comes to crafting cells will go a very long way. 
   }
```

## Syntax & Rules for Cell Types

### Use `specialConfig` for All Custom Fields

- Ensures the main environment can load/save your cell’s data seamlessly.
- Avoid persisting crucial states solely in local `useState`. Use `specialConfig` to store them so the parent grid knows about changes.

### Implement `handleSpecialConfigChange(fieldName, newValue)`

- Whenever a user modifies a setting, call `handleSpecialConfigChange(...)`.
- This preserves changes in the parent grid, ensuring the cell’s config is consistent.

### Keep the UI Minimal or Highly Focused

- A cell is typically a single-page component; avoid overcomplicating it with too many nested sections.
- Focus on one primary function or workflow per cell.

### Optional: Reference Other Cells

- If your cell needs data from a neighbor, accept props like `availableCells` or `cellsMap`.
- Look up references to fetch or share data among cells.

### Backend Execution

- If you need advanced logic on the server side, define how your environment calls that endpoint (e.g., a named route).
- If no custom backend is specified, the system will simply parse the cell’s config by default when executed.

---

## Ideas for New Cells

### Markdown Documentation Cell

- Renders user-provided Markdown to annotate or document a grid.

### Image/Video Recorder Cell

- Captures webcam or screen footage, storing results in the environment for later use.

### Time-Based Trigger Cell

- Runs tasks at set intervals or specific times.

### IoT Device Controller

- Bridges AI with physical hardware, like turning lights on/off or reading sensor data.

### Social Media Poster

- Takes text and images from `specialConfig` and posts them to platforms like Twitter or Instagram.

### AI Nudger

- Interprets outputs from other cells, then nudges the user with suggestions on what to do next.

### E-Commerce Watcher

- Monitors sales or inventory data, triggers reorders if stock dips below a threshold.

---

## README: The Grand Vision

> “Because of 3D Programming, AI can now interact with any system—digital or physical.  
> Each of us stocks our ‘AI fridge’ with the brand we trust. We believe 3D Programming is on track to be that Pepsi or Coke for AI, bridging wearable devices, daily tasks, e-commerce, and more to truly augment everyday life.”

By building custom cell types, you directly shape that ecosystem. Whether you’re creating daily T-shirt designs, hooking up a telekinetic-like EEG interface, or orchestrating a suite of AI tasks—your cells form the core building blocks of tomorrow’s real-world AI automations.
