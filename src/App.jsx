import Alert from "./components/Alert/Alert";
import Typography from "./components/Typography/Typography";
import Button from "./components/Button/Button";
import DropdownButton from "./components/DropdownButton/DropdownButton";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";

const App = () => (
  <>
    <div>ALERT</div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "600px",
        marginBottom: "30px",
        marginTottom: "30px",
      }}
    >
      <Alert title="Some title">default</Alert>
      <Alert view="error">error</Alert>
      <Alert view="info">info</Alert>
      <Alert view="success">success</Alert>
      <Alert view="warning">warning</Alert>
    </div>
    <>
      <div>BUTTON</div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "600px",
          marginBottom: "30px",
          marginTottom: "30px",
        }}
      >
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="neutral">neutral</Button>
        <Button color="danger">danger</Button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "600px",
          marginBottom: "30px",
          marginTottom: "30px",
        }}
      >
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="neutral">neutral</Button>
        <Button color="danger">danger</Button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "1200px",
          marginBottom: "30px",
          marginTottom: "30px",
        }}
      >
        <Button color="primary" variant="block">
          primary
        </Button>
        <Button color="secondary" variant="block">
          secondary
        </Button>
        <Button color="neutral" variant="block">
          neutral
        </Button>
        <Button color="danger" variant="block">
          danger
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "1200px",
          marginBottom: "30px",
          marginTottom: "30px",
        }}
      >
        <Button color="primary" variant="block" disabled>
          primary
        </Button>
        <Button color="secondary" variant="block" disabled>
          secondary
        </Button>
        <Button color="neutral" variant="block" disabled>
          neutral
        </Button>
        <Button color="danger" variant="block" disabled>
          danger
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "1200px",
          marginBottom: "30px",
          marginTottom: "30px",
        }}
      >
        <Button size="elevated">elevated</Button>
        <Button size="reduced">reduced</Button>
        <Button color="tertiary" variant="block">
          tertiary
        </Button>
      </div>
    </>
    <>
      <div>BUTTON GROUP</div>

      <div
        style={{
          width: "600px",
          marginBottom: "30px",
          marginTottom: "30px",
        }}
      >
        <ButtonGroup
          buttons={["One", "Two", "Three", "Four"]}
          onClick={() => null}
        />
      </div>
      <div
        style={{
          width: "600px",
          marginBottom: "30px",
          marginTottom: "30px",
        }}
      >
        <ButtonGroup
          buttons={["One", "Two", "Three", "Four"]}
          variant="block"
          onClick={() => null}
        />
      </div>
    </>
    <div>DROPDOWN BUTTON</div>
    <div
      style={{
        width: "200px",
        marginTop: "20px",
        marginBottom: "30px",
        marginTottom: "30px",
      }}
    >
      <DropdownButton options={["Pdf", "Open in preview", "Save as Pdf"]} />
    </div>
    <div>TYPOGRAPHY</div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "30px",
        marginTottom: "30px",
      }}
    >
      <Typography inline type="h1" fontWeight="900">
        H1 Type Typography Example With Custom Font Weight
      </Typography>
      <Typography type="h2" textColor="red">
        H2 Type Typography Example with Text color
      </Typography>
      <Typography type="h3">H3 Type Typography Example</Typography>
      <Typography type="h4">H4 Type Typography Example</Typography>
      <Typography type="h5">H5 Type Typography Example</Typography>
      <Typography className="someClass">
        Without Type Typography Example With className "someClass"
      </Typography>
      <Typography type="body1">Body1 Type Typography Example </Typography>
      <Typography type="subtitle1">
        Subtitle1 Type Typography Example
      </Typography>
      <Typography type="body2">Body2 Type Typography Example</Typography>
      <Typography type="subtitle2">
        Subtitle2 Type Typography Example
      </Typography>
      <Typography type="caption">Caption Type Typography Example</Typography>
      <Typography type="overline">Overline Type Typography Example</Typography>
      <div>
        <Typography inline>Inline typography example</Typography>
        <Typography inline>inline typography example</Typography>
      </div>
    </div>
  </>
);

export default App;
