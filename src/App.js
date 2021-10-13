import CustomEditor from "./components/rightSide/CustomEditor";
import NavBar from "./components/NavBar";
import { Grid } from "@mui/material";
import LeftText from "./components/leftSide/LeftText";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({});
function App() {
  // const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <LeftText />
        </Grid>
        <Grid item xs={6}>
          <CustomEditor />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
