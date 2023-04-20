import { MenuItem, Select } from "@mui/material";
import { useRouter } from "next/router";


export default function LanguajeSelector(data) {

  const router = useRouter();

  const handleChange = (e) => {
    router.push(router.pathname, router.pathname, { locale: e.target.value });
  };

  return (
    <Select
      labelId="demo-select-small-label"
      id="demo-select-small"
      value={data.data === "English" ? "en" : "es"}
      label={data.data === "English" ? "English" : "Español"}
      onChange={handleChange}
      size="small"
      sx={{ 
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 1,
        backgroundColor: "white",
        color: "black",
        border: "1px solid black",
        borderLeft: "none",
        borderRight: "none",
        borderBottom: "none",
        boxShadow: "0 0 10px 0px black",
        padding: "0 10px",
        margin: "10px",
        "&:hover": {
          backgroundColor: "white",
          color: "black",
        },
        "&:focus": {
          backgroundColor: "white",
          color: "black",
        }
        
      }}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="es">Español</MenuItem>
    </Select>
  );
}