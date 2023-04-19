import React from "react";

export const RemedyContext = React.createContext({});

export default function RemedyProvider({ children }) {
  const [allMedicines, setAllMedicines] = React.useState([]);
  const [allPrescriptions, setAllPrescriptions] = React.useState([]);

  function medicineAdd(data) {
    setAllMedicines([...allMedicines, data]);
  }

  function deleteMedicine(id) {
    setAllMedicines(allMedicines.filter((item) => item.id !== id));
  }

  function prescriptionAdd(data) {
    setAllPrescriptions([...allPrescriptions, data]);
  }

  function toggleSituation(id, newSituation) {
    const allPrescriptionsInstance = allPrescriptions;
    const index = allPrescriptionsInstance.findIndex((item) => item.id === id);
    allPrescriptionsInstance[index].situation = newSituation;
    setAllPrescriptions([...allPrescriptionsInstance]);
  }

  return (
    <RemedyContext.Provider
      value={{
        allPrescriptions,
        allMedicines,
        medicineAdd,
        deleteMedicine,
        prescriptionAdd,
        toggleSituation,
      }}
    >
      {children}
    </RemedyContext.Provider>
  );
}
