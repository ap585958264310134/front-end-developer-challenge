import SelectionProvider from "../../contexts/SelectionContext";
import Path, { type ButtonDefinition } from "../Path/Path";

/* If icon will have "real" ids it could be replaced. */
function generateButtonsData(start: number, end: number = 0): Array<ButtonDefinition> {
  return Array.from(Array(end - start).keys()).map((id) => {
    const newId = id + start;

    return {
      id: `icon${newId}`,
      iconPositionInFile: newId
    }
  });
}

export default function Paths() {
  return (
      <div className="paths">
        <SelectionProvider>
          <Path
            buttonsDefinition={generateButtonsData(0, 4)}
          />
          <Path
            buttonsDefinition={generateButtonsData(4, 8)}
          />
        </SelectionProvider>
      </div>
  )
}
