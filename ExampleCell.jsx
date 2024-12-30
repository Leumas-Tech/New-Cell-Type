import React, { useState, useEffect } from 'react';

/**
 * ExampleCell
 * -----------
 * A boilerplate cell component for a 3D Programming environment.
 *
 * PROPS:
 *  @param {object}   specialConfig              - A config object storing this cell’s data.
 *  @param {function} handleSpecialConfigChange  - A callback to update config fields (fieldName, newValue).
 *  @param {array}    availableCells             - (Optional) An array of other cell references, if needed.
 *  @param {object}   cellsMap                   - (Optional) A map of cellRef -> cellData, if referencing other cells.
 *
 * EXAMPLE USAGE:
 *  <ExampleCell
 *    specialConfig={cellData.specialConfig}
 *    handleSpecialConfigChange={(fieldName, val) => {
 *      // update the parent or grid state with new config
 *    }}
 *    availableCells={["default.A1", "default.B2", ...]}
 *    cellsMap={{ "default.A1": {...}, ...}}
 *  />
 */
function ExampleCell({
  specialConfig = {},
  handleSpecialConfigChange = () => {},
  availableCells = [],
  cellsMap = {}
}) {
  // Local state derived from specialConfig fields
  const [title, setTitle] = useState(specialConfig.title || '');
  const [description, setDescription] = useState(specialConfig.description || '');

  // Whenever user changes something, we call handleSpecialConfigChange
  const handleTitleChange = (e) => {
    const newVal = e.target.value;
    setTitle(newVal);
    handleSpecialConfigChange('title', newVal);
  };

  const handleDescriptionChange = (e) => {
    const newVal = e.target.value;
    setDescription(newVal);
    handleSpecialConfigChange('description', newVal);
  };

  // An optional effect to log or do something on mount
  useEffect(() => {
    console.log("ExampleCell mounted. specialConfig:", specialConfig);
  }, [specialConfig]);

  // RENDER
  return (
    <div className="border p-3 rounded bg-white">
      <h3 className="font-bold text-lg mb-2">Example Cell</h3>
      <label className="block text-sm font-semibold mb-1">Title:</label>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        className="border px-2 py-1 mb-3 w-full"
        placeholder="e.g., My Special Cell"
      />

      <label className="block text-sm font-semibold mb-1">Description:</label>
      <textarea
        rows={2}
        value={description}
        onChange={handleDescriptionChange}
        className="border px-2 py-1 w-full"
        placeholder="Describe your cell..."
      />

      {/* Optional usage of availableCells / cellsMap */}
      {availableCells.length > 0 && (
        <div className="mt-4 text-sm">
          <p className="font-semibold">Available Cells:</p>
          <ul className="list-disc ml-4">
            {availableCells.map((cellRef) => (
              <li key={cellRef}>{cellRef}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ExampleCell;
