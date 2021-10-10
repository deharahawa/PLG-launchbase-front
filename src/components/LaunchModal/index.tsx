import Modal from "react-modal";
import { ContainerModal } from "./styles";
import closeImg from "../../assets/close.svg";

interface LaunchInfo {
  success: boolean;
  details: string;
  name: string;
  date: string;
}

interface LaunchDetailModalProps {
  isModalOpen: boolean;
  launchInfo: LaunchInfo;
  onRequestClose: () => void;
}

export function LaunchDetailModal({
  isModalOpen,
  launchInfo,
  onRequestClose,
}: LaunchDetailModalProps) {
  return launchInfo.name ? (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <ContainerModal>
        <div className="inline title">
          <h2>{launchInfo.name}</h2>
          <p>
            {new Intl.DateTimeFormat("pt-BR").format(new Date(launchInfo.date))}
          </p>
        </div>
        <div className="inline">
          <p className="suc-title">Sucesso?</p>
          <p className={`${launchInfo.success ? "success" : "fail"}`}>
            {launchInfo.success ? "Sim" : "Não"}
          </p>
        </div>
        <div className="details">
          <p className="details title">Detalhes do lançamento:</p>
          <p>{launchInfo.details}</p>
        </div>
      </ContainerModal>
    </Modal>
  ) : (
    <></>
  );
}
