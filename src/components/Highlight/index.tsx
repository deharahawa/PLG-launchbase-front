import { ContainerHighlight } from "./style";

export function Highlight() {
  return (
    <>
      <ContainerHighlight>
        <div>
          <header>
            <p>Último lançamento</p>
            <p>30/05/2020</p>
          </header>
          <span>CCtCap Demo Mission 2</span>
        </div>
        <div className="highlight-background">
          <header>
            <p>Próximo lançamento</p>
            <p>30/05/2020</p>
          </header>
          <strong>CCtCap Demo Mission 3</strong>
        </div>
      </ContainerHighlight>
    </>
  );
}
