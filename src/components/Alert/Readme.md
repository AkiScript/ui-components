Alert example

```
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
```