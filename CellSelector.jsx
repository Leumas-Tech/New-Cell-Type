import React, { useState, useEffect } from 'react';

/**
 * EXAMPLE: A dictionary of cell types (your "cell library").
 * In a real project, this might come from a separate file or registry.
 */
import ExampleCell from './ExampleCell'; // The boilerplate cell or your custom cell
// import AnotherCell from './AnotherCell'; // Additional cells, etc.

const defaultCellTypes = {
  // The key is a short name for the cell type
  example: ExampleCell,
  // another: AnotherCell,
};

/**
 * CellSelector
 * ------------
 * A standalone component for selecting and rendering a cell type from a given library.
 *
 * PROPS:
 *  - cellTypes: Object mapping keys to cell components, e.g. { example: ExampleCell, ... }
 *  - initialCellType: Which cell type to show by default (string key).
 *  - initialSpecialConfig: An object that will be passed to the cell as "specialConfig."
 *
 * USAGE:
 *  <CellSelector
 *    cellTypes={{ example: ExampleCell, myFancy: MyFancyCell }}
 *    initialCellType="example"
 *    initialSpecialConfig={{ title: "Hello from initial config" }}
 *  />
 *
 * If none of these props are provided, the component uses dummy defaults.
 */
function CellSelector({
  cellTypes = defaultCellTypes,
  initialCellType,
  initialSpecialConfig,
}) {
  // Provide dummy defaults if nothing was passed
  const dummyCellTypeKeys = Object.keys(cellTypes);
  const defaultType = initialCellType || (dummyCellTypeKeys[0] || 'example');

  // Keep track of current selected cell type in local state
  const [selectedCellType, setSelectedCellType] = useState(defaultType);

  // We store the "specialConfig" that will be passed to the active cell
  // This allows us to handle the cell's config changes locally
  const defaultConfig = initialSpecialConfig || {
    title: 'Dummy Title',
    description: 'Some default text from CellSelector',
  };

  const [specialConfig, setSpecialConfig] = useState(defaultConfig);

  // This is the callback we’ll provide to the cell to handle config changes
  const handleSpecialConfigChange = (fieldName, newValue) => {
    setSpecialConfig((prev) => ({
      ...prev,
      [fieldName]: newValue,
    }));
  };

  // Dynamically get the cell component from the dictionary
  const ActiveCellComponent = cellTypes[selectedCellType] || null;

  // If no valid cell type is found, we can display a fallback
  if (!ActiveCellComponent) {
    return (
      <div className="p-4 border rounded bg-red-50 text-red-600">
        <p>
          <strong>Error:</strong> No valid cell type found for "
          {selectedCellType}".
        </p>
      </div>
    );
  }

  return (
    <div className="border p-4 rounded bg-gray-50">
      <h2 className="text-xl font-bold mb-2">Cell Selector</h2>

      {/* Dropdown to select among the available cell types */}
      <label className="block text-sm font-semibold mb-1">
        Select Cell Type:
      </label>
      <select
        className="border px-2 py-1 mb-4"
        value={selectedCellType}
        onChange={(e) => setSelectedCellType(e.target.value)}
      >
        {Object.keys(cellTypes).map((typeKey) => (
          <option key={typeKey} value={typeKey}>
            {typeKey}
          </option>
        ))}
      </select>

      {/* Display current config for debugging */}
      <div className="mb-4 text-sm text-gray-700 bg-white p-2 rounded">
        <strong>Current specialConfig:</strong>
        <pre className="whitespace-pre-wrap">
          {JSON.stringify(specialConfig, null, 2)}
        </pre>
      </div>

      {/* Render the active cell type */}
      <div className="bg-white border p-2 rounded shadow-sm">
        <ActiveCellComponent
          specialConfig={specialConfig}
          handleSpecialConfigChange={handleSpecialConfigChange}
        />
      </div>
    </div>
  );
}

export default CellSelector;
