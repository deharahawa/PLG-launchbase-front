import { Highlight } from "../Highlight";
import { LaunchesTable } from "../LaunchesTable";
import { ListButtons } from "../ListButtons";
import { Container } from "./style";
import { LaunchesProvider } from "../../hooks/useLaunches";
import { useEffect, useState } from "react";
import { LaunchDetailModal } from "../LaunchModal";

interface LaunchInfo {
  success: boolean;
  details: string;
  name: string;
  date: string;
}

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [launchDetail, setLaunchDetail] = useState({} as LaunchInfo);

  function handleOpenLaunchDetailModal(launchInfo: LaunchInfo) {
    setIsModalOpen(true);
    setLaunchDetail(launchInfo);
  }

  function handleCloseLaunchDetailModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    handleOpenLaunchDetailModal(launchDetail);
    if (!isFirstLoad && typeof launchDetail.name !== "undefined") {
      setIsModalOpen(true);
    }
    setIsFirstLoad(false);
  }, [isFirstLoad, launchDetail]);

  return (
    <Container>
      <Highlight />
      <LaunchesProvider>
        <ListButtons />
        <LaunchesTable
          onRequestOpenLaunchDetailModal={handleOpenLaunchDetailModal}
        />
        <LaunchDetailModal
          launchInfo={launchDetail}
          isModalOpen={isModalOpen}
          onRequestClose={handleCloseLaunchDetailModal}
        />
      </LaunchesProvider>
    </Container>
  );
}
