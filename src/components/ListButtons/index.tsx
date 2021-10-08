import { useEffect, useState } from "react";
import { useLaunches } from "../../hooks/useLaunches";
import { ContainerButton } from "./style";

export function ListButtons() {
  const { handleLoadData } = useLaunches();
  const [type, setType] = useState("past");

  useEffect(() => {
    handleLoadData(type);
  }, [handleLoadData, type]);

  const buttonTypes = {
    PAST: "past",
    UPCOMING: "upcoming",
  };

  return (
    <ContainerButton>
      <button
        className={type === buttonTypes.PAST ? "isPressed" : "notPressed"}
        onClick={() => setType(buttonTypes.PAST)}
      >
        Lançamentos passados
      </button>
      <button
        className={type === buttonTypes.UPCOMING ? "isPressed" : "notPressed"}
        onClick={() => setType(buttonTypes.UPCOMING)}
      >
        Lançamentos futuros
      </button>
    </ContainerButton>
  );
}
