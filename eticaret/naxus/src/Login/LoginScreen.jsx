import React from "react";
import { Container, Divider, Grid, Segment } from "semantic-ui-react";
import Login from "../Login/Login";
import UyeOlYonlendirme from "../Login/UyeOlYonlendirme";

export default function Dashboard() {
  
  const segmentdisayn=
  {
     backgroundColor:"#E0E0E0",
  }
  return (
    <Segment style={segmentdisayn} >
      <Grid columns={2} relaxed="very">
        <Grid.Column>
           <UyeOlYonlendirme /> 
        </Grid.Column>
        <Grid.Column>
          <Login /> 
        </Grid.Column>
      </Grid>
      <Divider vertical>Or</Divider>
    </Segment>
  );
}
