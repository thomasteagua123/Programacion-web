import { React } from "react";
const NombreContext = React.createContext();

export function NombreProvider({ children }) {
  const name = "Thomas";
  //podemos usarlo cuando queramos
  return (
    <NombreProvider.Privider value={name}>{children}</NombreProvider.Privider>
  );
}
