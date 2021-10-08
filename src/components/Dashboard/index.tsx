import { Highlight } from "../Highlight";
import { LaunchesTable } from "../LaunchesTable";
import { ListButtons } from "../ListButtons";
import { Container } from "./style";
import { LaunchesProvider } from "../../hooks/useLaunches";

export function Dashboard() {
  return (
    <Container>
      <Highlight />
      <LaunchesProvider>
        <ListButtons />
        <LaunchesTable />
      </LaunchesProvider>
    </Container>
  );
}
