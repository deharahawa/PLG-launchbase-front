import { useLaunches } from "../../hooks/useLaunches";
import { ContainerTable } from "./style";
import Loader from "react-loader-spinner";
import { LaunchInfo } from "../../types";

interface LaunchesTableProps {
  onRequestOpenLaunchDetailModal: (launchInfo: LaunchInfo) => void;
}

export function LaunchesTable({
  onRequestOpenLaunchDetailModal,
}: LaunchesTableProps) {
  const { launches, loading, buttonPressed } = useLaunches();

  return loading ? (
    <Loader
      type="Rings"
      color="#43C1CD"
      height={80}
      width={80}
      timeout={2000}
    />
  ) : (
    <ContainerTable>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            {buttonPressed === "past" && <th>Sucesso?</th>}
            <th>Detalhes</th>
            <th>Data</th>
          </tr>
        </thead>
        {launches &&
          typeof launches !== "string" &&
          launches?.map((launch) => (
            <tbody>
              <tr
                key={launch.id}
                onClick={() => onRequestOpenLaunchDetailModal(launch)}
              >
                <td className="name">{launch.name}</td>
                {buttonPressed === "past" && (
                  <td className={`${launch.success ? "success" : "fail"}`}>
                    {launch.success ? "Sim" : "Não"}
                  </td>
                )}
                {
                  <td className="details">
                    {launch.details || "Sem detalhes"}
                  </td>
                }
                <td className="date">
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(launch.date)
                  )}
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </ContainerTable>
  );
}
