import SelectionProvider from "../../contexts/SelectionContextProvider";
import Path, { type ButtonDefinition } from "../Path/Path";
import TalentPath from "../TalentPath/TalentPath";

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
        <TalentPath title="Talent path 1">
          <Path
            buttonsDefinition={generateButtonsData(0, 4)}
          />
        </TalentPath>
        <TalentPath title="Talent path 2">
          <Path
            buttonsDefinition={generateButtonsData(4, 8)}
          />
        </TalentPath>
    </div>
  )
}
