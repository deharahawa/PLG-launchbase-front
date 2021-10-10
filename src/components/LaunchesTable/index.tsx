import { useLaunches } from "../../hooks/useLaunches";
import { ContainerTable } from "./style";
import Loader from "react-loader-spinner";

export function LaunchesTable() {
  const { launches, loading, buttonPressed, handleLoadData } = useLaunches();

  if (typeof launches === "string") {
    setTimeout(() => handleLoadData("past"), 2000);
  }

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
