import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import c_icon from "../../assets/c.svg";
import cpp_icon from "../../assets/c++.svg";
import java_icon from "../../assets/java.svg";
import python_icon from "../../assets/python.svg";
import js_icon from "../../assets/javascript.svg";
import { makeStyles } from "@mui/styles";
import Theme from "../Theme/Theme";

import "./right.css";

const useStyles = makeStyles({
  editor: {
    background: "#1976d2",
    padding: [10, "!important"],
    color: "#fff",
    borderRadius: "5px",
  },
});

export default function SelectAutoWidth() {
  const classes = useStyles();
  const [language, setlanguage] = useState("c");

  const handleChange = (event) => {
    setlanguage(event.target.value);
  };

  return (
    <div className="rightHeader">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Theme />
      </div>
      <div>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel
            id="demo-simple-select-autowidth-label"
            style={{ color: "white" }}
          >
            Language
          </InputLabel>
          <Select
            value={language}
            onChange={handleChange}
            autoWidth
            classeName={classes.select}
            label="language"
            style={{ color: "white" }}
          >
            <MenuItem value={"c"}>
              <img className="lang-icon" src={c_icon} alt="lang" />
            </MenuItem>
            <MenuItem value={"cpp"}>
              <img className="lang-icon" src={cpp_icon} alt="lang" />
            </MenuItem>
            <MenuItem value={"java"}>
              <img className="lang-icon" src={java_icon} alt="lang" />
            </MenuItem>
            <MenuItem value={"python"}>
              <img className="lang-icon" src={python_icon} alt="lang" />
            </MenuItem>
            <MenuItem value={"javascript"}>
              <img className="lang-icon" src={js_icon} alt="lang" />
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
