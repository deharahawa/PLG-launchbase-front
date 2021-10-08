import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContainerHighlight } from "./style";

interface Launch {
  id: string;
  success: boolean;
  details: string;
  name: string;
  date: string;
}

export function Highlight() {
  const [previousLaunch, setPreviousLaunch] = useState({} as Launch);
  const [nextLaunch, setNextLaunch] = useState({} as Launch);

  useEffect(() => {
    async function loadPreviousLaunch() {
      const response = await api.get<Launch>("/previous");
      const data = response.data;
      setPreviousLaunch(data);
    }

    async function loadNextLaunch() {
      const response = await api.get<Launch>("/next");
      const data = response.data;
      setNextLaunch(data);
    }

    loadPreviousLaunch();
    loadNextLaunch();
  }, []);

  return (
    <ContainerHighlight>
      <div>
        <header>
          <p>Último lançamento</p>
          <p>
            {previousLaunch.date &&
              new Intl.DateTimeFormat("pt-BR").format(
                new Date(previousLaunch.date)
              )}
          </p>
        </header>
        <span>{previousLaunch.name}</span>
      </div>
      <div className="highlight-background">
        <header>
          <p>Próximo lançamento</p>
          <p>
            {nextLaunch.date &&
              new Intl.DateTimeFormat("pt-BR").format(
                new Date(nextLaunch.date)
              )}
          </p>
        </header>
        <strong>{nextLaunch.name}</strong>
      </div>
    </ContainerHighlight>
  );
}
