import { Header } from "../Header";
import { Highlight } from "../Highlight";
import { LaunchesTable } from "../LaunchesTable";
import { ListButtons } from "../ListButtons";
import { Container } from "./style";

export function Dashboard() {
  return (
    <Container>
      <Highlight />
      <ListButtons />
      <LaunchesTable />
    </Container>
  );
}
