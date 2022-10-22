import TextBox from "./components/TextBox/TextBox";
import Grid from "./components/Grid/Grid";

const App = () => (
  <div style={{ position: "relative" }}>
    <Grid container spacing={2}>
      <Grid item>
        <TextBox>1</TextBox>
      </Grid>

      <Grid item skippedScreens={['xs', 'lg']}>
        <TextBox>2</TextBox>
      </Grid>

      <Grid item>
        <TextBox>3</TextBox>
      </Grid>

      <Grid item>
        <TextBox>4</TextBox>
      </Grid>
    </Grid>

    <Grid container spacing={2}>
      <Grid item sizing={{ xs: 6, md: 8 }}>
        <TextBox>1</TextBox>
      </Grid>

      <Grid item sizing={{ xs: 6, md: 4 }}>
        <TextBox>2</TextBox>
      </Grid>

      <Grid item sizing={{ xs: 6, md: 4 }}>
        <TextBox>3</TextBox>
      </Grid>

      <Grid item sizing={{ xs: 6, md: 8 }}>
        <TextBox>4</TextBox>
      </Grid>
    </Grid>
  </div>
);

export default App;
