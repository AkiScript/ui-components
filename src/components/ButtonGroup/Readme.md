Button Group example

```
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
  ```