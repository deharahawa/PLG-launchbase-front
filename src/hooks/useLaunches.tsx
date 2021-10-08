import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface Launch {
  id: string;
  success: boolean;
  details: string;
  name: string;
  date: string;
}

interface LaunchesProviderProps {
  children: ReactNode;
}

interface LaunchesContextData {
  launches: Launch[];
  buttonPressed: string;
  handleLoadData: (path: string) => Promise<void>;
}

const LaunchesContext = createContext<LaunchesContextData>(
  {} as LaunchesContextData
);

export function useLaunches() {
  const context = useContext(LaunchesContext);

  return context;
}

export function LaunchesProvider({ children }: LaunchesProviderProps) {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [buttonPressed, setButtonPressed] = useState("past");

  useEffect(() => {
    async function loadLaunches(buttonPressed: string) {
      const response = await api.get<Launch[]>(`/${buttonPressed}`);
      setLaunches(response.data);
    }

    loadLaunches(buttonPressed);
  }, [buttonPressed]);

  async function handleLoadData(path: string) {
    setButtonPressed(path);
  }

  return (
    <LaunchesContext.Provider
      value={{ launches, buttonPressed, handleLoadData }}
    >
      {children}
    </LaunchesContext.Provider>
  );
}
