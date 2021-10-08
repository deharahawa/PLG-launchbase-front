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
        {launches &&
          launches.map((launch) => (
            <tbody>
              <tr key={launch.id}>
                <td>{launch.name}</td>
                {buttonPressed === "past" && (
                  <td className={`${launch.success ? "success" : "fail"}`}>
                    {launch.success ? "Sim" : "Não"}
                  </td>
                )}
                {<td>{launch.details || "Sem detalhes"}</td>}
                <td>
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
