import { ContainerTable } from "./style";

export function LaunchesTable() {
  return (
    <ContainerTable>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sucesso?</th>
            <th>Detalhes</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr key="trocar">
            <td>FalconSat</td>
            <td className="sucesso">{"false"}</td>
            <td>{"Engine failure at 33 seconds and loss of vehicle"}</td>
            <td>
              {new Intl.DateTimeFormat("pt-BR").format(
                new Date("2006-03-24T22:30:00.000Z")
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </ContainerTable>
  );
}
