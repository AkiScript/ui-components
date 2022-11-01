import Alert from "./components/Alert/Alert";
import Typography from "./components/Typography/Typography";
import Button from "./components/Button/Button";
import DropdownButton from "./components/DropdownButton/DropdownButton";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import ArrowIcon from "./icons/arrow-icon";

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
      <div>ALERT</div>
      <div
        style={{
          margin: "30px",
        }}
      >
        <Alert
          title="some title"
          subtitle="some subtitle"
          type="success"
          leftAddons={<ArrowIcon />}
          autodisapearSeconds={3000}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Alert>
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
          <Button>default</Button>
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
            buttons={["Option 1", "Option 2", "Option 3", "Option 4"]}
            variant="block"
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
            buttons={["Option 1", "Option 2", "Option 3", "Option 4"]}
            size="reduced"
            variant="block"
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
            buttons={["Option 1", "Option 2", "Option 3", "Option 4"]}
            size="elevated"
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
        <DropdownButton options={data} title="Some title" />
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
        <Typography inline size={1} fontWeight="900">
          H1 Type Typography Example With Custom Font Weight
        </Typography>
        <Typography size={1} textColor="red">
          H2 Type Typography Example with Text color
        </Typography>
        <Typography size={2}>H3 Type Typography Example</Typography>
        <Typography size={3}>H4 Type Typography Example</Typography>
        <Typography size={4}>H5 Type Typography Example</Typography>
        <Typography className="someClass">
          Without Type Typography Example With className "someClass"
        </Typography>
        <Typography size={5}>Body1 Type Typography Example </Typography>
        <Typography size={6}>Subtitle1 Type Typography Example</Typography>
        <Typography size={7}>Body2 Type Typography Example</Typography>
        <Typography size={8}>Subtitle2 Type Typography Example</Typography>
        <Typography size={9}>Caption Type Typography Example</Typography>
        <Typography size={10}>Overline Type Typography Example</Typography>
        <div>
          <Typography inline>Inline typography example</Typography>
          <Typography inline>inline typography example</Typography>
        </div>
      </div>
    </>
  );
};

export default App;
