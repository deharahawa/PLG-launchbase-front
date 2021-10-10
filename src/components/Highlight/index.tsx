import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ContainerHighlight } from "./style";
import Loader from "react-loader-spinner";
import { Launch, LaunchInfo } from "../../types";

interface LaunchHighlightProps {
  onRequestOpenLaunchDetailModal: (launchInfo: LaunchInfo) => void;
}

export function Highlight({
  onRequestOpenLaunchDetailModal,
}: LaunchHighlightProps) {
  const [previousLaunch, setPreviousLaunch] = useState({} as Launch);
  const [nextLaunch, setNextLaunch] = useState({} as Launch);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPreviousLaunch() {
      const response = await api.get<Launch>("/api/previous");
      const data = response.data;
      setPreviousLaunch(data);
      setIsLoading(false);
    }

    async function loadNextLaunch() {
      const response = await api.get<Launch>("/api/next");
      const data = response.data;
      setNextLaunch(data);
      setIsLoading(false);
    }

    loadPreviousLaunch();
    loadNextLaunch();
  }, []);

  return isLoading ? (
    <Loader
      type="Rings"
      color="#43C1CD"
      height={80}
      width={80}
      timeout={2000}
    />
  ) : (
    <ContainerHighlight>
      <div onClick={() => onRequestOpenLaunchDetailModal(previousLaunch)}>
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
      <div
        className="highlight-background"
        onClick={() => onRequestOpenLaunchDetailModal(nextLaunch)}
      >
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
