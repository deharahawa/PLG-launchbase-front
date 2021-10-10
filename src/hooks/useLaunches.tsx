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
  loading: boolean;
  handleLoadData: (path: string) => Promise<void>;
  setLoading: (value: boolean) => void;
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
  const [loading, setLoading] = useState(true);
  const [buttonPressed, setButtonPressed] = useState("past");

  useEffect(() => {
    async function loadLaunches(buttonPressed: string) {
      const response = await api.get<Launch[]>(
        `${process.env.API_BASE_URL}/api/${buttonPressed}`
      );
      setLaunches(response.data);
      setLoading(false);
    }

    loadLaunches(buttonPressed);
  }, [buttonPressed]);

  async function handleLoadData(path: string) {
    setButtonPressed(path);
  }

  return (
    <LaunchesContext.Provider
      value={{ launches, loading, buttonPressed, handleLoadData, setLoading }}
    >
      {children}
    </LaunchesContext.Provider>
  );
}
