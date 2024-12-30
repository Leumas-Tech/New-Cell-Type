# Quick Start: Building & Contributing Cell Types

1. **Create a New React Project**  
   Set up a standard React environment (for instance, using a create-react-app command). This ensures you have all the needed dependencies to run and develop UI components.

2. **Paste In the Cell Selector and Example Cell**  
   Copy the “CellSelector” and “ExampleCell” files into your project’s `src` folder (or any folder where you keep components). These files act as your core boilerplate and local testing harness:
   - **CellSelector**: Provides a small UI for selecting and rendering cell types, along with a straightforward way to manage each cell’s configuration.
   - **ExampleCell**: Demonstrates how a cell can manage its `specialConfig` data and update it via `handleSpecialConfigChange`.

3. **Style & Update as Needed**  
   Open each file and adapt the UI or logic to your own requirements. You can:
   - Rename or add fields within `specialConfig`.
   - Change how the layout and inputs appear.
   - Remove or expand references to any data you do or do not need.

4. **Decide if You Need Backend Logic**  
   By default, each cell simply passes JSON data when executed. If your cell needs additional logic—such as calling an API or interacting with hardware—you can:
   - Add a custom backend route or function to handle “execute cell” requests.
   - Reference that route from the cell so the environment knows what to run when triggered.
   If you don’t need server tasks, the JSON data alone can carry all relevant config and state for your cell.

5. **Start Creating Cells**  
   With the boilerplate in place, you’re set to build new cells for any purpose:
   - E-commerce watchers
   - AI image generators
   - Markdown documentation
   - IoT device controllers  
   Focus each cell on its unique UI and data. Test changes by loading the updated cell in `CellSelector`.

6. **Learn More or Ask for Help**  
   Refer to the main `README.md` for deeper integration instructions about plugging your cell into the broader 3D Programming environment. If you need assistance, post in the community channel or DM the maintainers—they’ll be happy to help.

Following these steps will let you quickly build, customize, and share your own cell types, broadening the 3D Programming ecosystem and enabling new creative workflows.
