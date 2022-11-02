import Alert from "./components/Alert/Alert";
import Typography from "./components/Typography/Typography";
import Button from "./components/Button/Button";
import DropdownButton from "./components/DropdownButton/DropdownButton";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import ArrowIcon from "./icons/arrow-icon";
import Grid from "./components/Grid/Grid";
import TextBox from "./components/TextBox/TextBox";

const App = () => {
  const data = [
    {
      id: "123",
      text: "One",
      onClick: () => null,
    },
    {
      id: "456",
      text: "Two",
      onClick: () => null,
    },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <TextBox>1</TextBox>
        </Grid>

        <Grid item skippedScreens={["xs", "lg"]}>
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
      <Grid>
        <Grid item></Grid>
      </Grid>
      <Grid container>
        <Grid item sizing={{ lg: 12 }}>
          <Alert
            title="some title"
            subtitle="some subtitle"
            type="success"
            leftAddons={<ArrowIcon />}
            autodisapearSeconds={3000}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Alert>
        </Grid>
      </Grid>
      <>
        <Grid container spacing={2}>
          <Grid item>
            <Button>default</Button>
          </Grid>
          <Grid item>
            <Button color="primary">primary</Button>
          </Grid>
          <Grid item>
            <Button color="secondary">secondary</Button>
          </Grid>
          <Grid item>
            <Button color="neutral">neutral</Button>
          </Grid>
          <Grid item>
            <Button color="danger">danger</Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="block">default</Button>
          </Grid>
          <Grid item>
            <Button color="primary" variant="block">
              primary
            </Button>
          </Grid>
          <Grid item>
            <Button color="secondary" variant="block">
              secondary
            </Button>
          </Grid>
          <Grid item>
            <Button color="neutral" variant="block">
              neutral
            </Button>
          </Grid>
          <Grid item>
            <Button color="danger" variant="block">
              danger
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <Button size="elevated">elevated</Button>
          </Grid>
          <Grid item>
            <Button size="reduced">reduced</Button>
          </Grid>
          <Grid item>
            <Button color="tertiary" variant="block">
              tertiary
            </Button>
          </Grid>
        </Grid>
      </>

      <Grid container spacing={2}>
        <Grid item>
          <ButtonGroup
            buttons={["Option 1", "Option 2", "Option 3", "Option 4"]}
            variant="block"
            isOutlined={true}
            onClick={() => null}
          />
        </Grid>
        <Grid item>
          <ButtonGroup
            buttons={["Option 1", "Option 2", "Option 3", "Option 4"]}
            size="reduced"
            variant="block"
            onClick={() => null}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item>
          <DropdownButton options={data} title="Some title" />
        </Grid>
      </Grid>

      <Grid container sizing={{ lg: 12 }} direction="column">
        <Grid item>
          <Typography inline size={1} fontWeight="900">
            Typography size 10 example
          </Typography>
        </Grid>
        <Grid item>
          <Typography size={10}>Typography size 10 example</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
