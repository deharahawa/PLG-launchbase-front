import { useEffect, useState } from "react";
import { useLaunches } from "../../hooks/useLaunches";
import { ContainerButton } from "./style";

export function ListButtons() {
  const { handleLoadData, setLoading } = useLaunches();
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
        onClick={() => {
          setType(buttonTypes.PAST);
          setLoading(true);
        }}
      >
        Lançamentos passados
      </button>
      <button
        className={type === buttonTypes.UPCOMING ? "isPressed" : "notPressed"}
        onClick={() => {
          setType(buttonTypes.UPCOMING);
          setLoading(true);
        }}
      >
        Lançamentos futuros
      </button>
    </ContainerButton>
  );
}
