// Node modules
import { createContext, useContext } from "react";

// Properties
const LicenceContext = createContext();

// Methods
export function LicenceProvider({ children }) {
  // State
  const [licences, setLicences] = useState([]);

  return (
    <LicenceContext.Provider value={{ licences, setLicences }}>
      {children}
    </LicenceContext.Provider>
  );
}

export function useLicence() {
  return useContext(LicenceContext);
}
