import { useLaunches } from "../../hooks/useLaunches";
import { ContainerTable } from "./style";

export function LaunchesTable() {
  const { launches, buttonPressed } = useLaunches();

  return (
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
        {launches.length > 0 &&
          launches.map((launch) => (
            <tbody>
              <tr key={launch.id}>
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
