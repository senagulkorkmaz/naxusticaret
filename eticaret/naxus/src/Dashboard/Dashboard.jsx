import React from "react";
import { Route } from "react-router-dom";
import { Container, Divider, Grid, Segment } from "semantic-ui-react";
import LoginScreen from "../Login/LoginScreen";
import brands from "../pages/brands";
import help from "../pages/help";
import naxusClub from "../pages/naxusClub";
import services from "../pages/services";
import opportunityOfTheDay from "../pages/opportunityOfTheDay";
import SignUp from "../Login/SignUp";
import myFavorite from "../pages/myFavorite";
import Cart from "../pages/Cart";
import home from "../pages/home";
import allCampaings from "../pages/allCampaings";
import birlikteAlKampanyasi from "../pages/birlikteAlKampanyasi";
import clubKampanyalari from "../pages/clubKampanyalari";
import artiHizmetler from "../pages/Hizmetler/artiHizmetler";

export default function Dashboard() {
  const segmentdisayn = {
    backgroundColor: "#E0E0E0",
  };
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Grid.Column>
            <Route exact path="/loginscreen" component={LoginScreen} />
            <Route exact path="/help" component={help} />
            <Route exact path="/brands" component={brands} />
            <Route exact path="/naxusclub" component={naxusClub} />
            <Route exact path="/opportunityoftheday"component={opportunityOfTheDay}/>
            <Route exact path="/artihizmetler" component={artiHizmetler} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/myfavorites" component={myFavorite} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/home" component={home} />
            <Route exact path="/" component={home} />
            <Route exact path="/tumkampanyalar" component={allCampaings} />
            <Route exact path="/birliktealkampanyalari" component={birlikteAlKampanyasi} />
            <Route exact path="/clubkampanyalari" component={clubKampanyalari} />
          </Grid.Column>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
