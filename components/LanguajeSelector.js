import { MenuItem, Select } from "@mui/material";
import styles from "@/styles/LanguajeSelector.module.css";
import { useState } from "react";

export default function LanguajeSelector({changeLange, lang}) {

  const [label, setLabel] = useState(lang);

  const handleChange = (e) => {
    setLabel(e.target.value);
    changeLange(e.target.value);
  };

  return (
    <Select
      className={styles.selectIdiom}
      labelId="demo-select-small-label"
      id="demo-select-small"
      value={label}
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
        margin: "10px 20px 16px 16px",
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
      <MenuItem value="English">English</MenuItem>
      <MenuItem value="Español">Español</MenuItem>
    </Select>
  );
}