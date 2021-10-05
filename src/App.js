// import Button from "@mui/material/Button";
// import CustomEditor from "./components/CustomEditor";
import NavBar from "./components/NavBar";
// import { Grid } from "@mui/material";
// import LeftText from "./components/LeftText";
import Splitter from "./components/splitter/Splitter";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({});
function App() {
  // const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Splitter />
      {/* <Button variant="contained">Hello World</Button>; */}

      {/* <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={6}>
          <LeftText />
        </Grid>
        <Grid item xs={6}>
          <CustomEditor />
        </Grid>
      </Grid> */}
    </div>
  );
}

export default App;
