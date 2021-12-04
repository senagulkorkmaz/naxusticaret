import { purple } from "@material-ui/core/colors";
import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu, Button, Dropdown,Grid } from "semantic-ui-react";
import SimpleMenu from "../pages/simpleMenu";

export default function Navi() {
  const containerstyle = {
    backgroundColor: "#800080",
  };

  return (
    <div>
      
      <Grid columns={2} relaxed="very">
        <Grid.Column  width={2}>
        <Menu position="left">
            <Dropdown
              text="TÜM MARKALAR"
              pointing
              className="link item"
              style={{ color: "white", backgroundColor: "black" }}
            >
              <Dropdown.Menu>
                <Dropdown.Header>Categories</Dropdown.Header>
                <Dropdown.Item>
                  <Dropdown text="Clothing">
                    <Dropdown.Menu>
                      <Dropdown.Header>Mens</Dropdown.Header>
                      <Dropdown.Item>Shirts</Dropdown.Item>
                      <Dropdown.Item>Pants</Dropdown.Item>
                      <Dropdown.Item>Jeans</Dropdown.Item>
                      <Dropdown.Item>Shoes</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Header>Womens</Dropdown.Header>
                      <Dropdown.Item>Dresses</Dropdown.Item>
                      <Dropdown.Item>Shoes</Dropdown.Item>
                      <Dropdown.Item>Bags</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>Home Goods</Dropdown.Item>
                <Dropdown.Item>Bedroom</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Order</Dropdown.Header>
                <Dropdown.Item>Status</Dropdown.Item>
                <Dropdown.Item>Cancellations</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </Grid.Column>
        <Grid.Column  width={14} centered>
        <Button.Group  size="large" widths="6">
        <Button   color="purple" className="containerstyle" as={NavLink} to="/naxusclub">
        NAXUS CLUB
        </Button>
        <Button  color="purple" as={NavLink} to="/tumkampanyalar">
        KAMPANYALAR
        </Button>
        <Button  color="purple" as={NavLink} to="/brands" >
        MARKALAR
        </Button>
        <Button  color="purple" as={NavLink} to="/artihizmetler">
        HİZMETLER
        </Button>
       
        <Button  color="purple" as={NavLink} to="/help">
        YARDIM
        </Button>
      </Button.Group> 
        </Grid.Column>
      </Grid>
       

        {/* 
        <Menu size="massive" widths="6" style={containerstyle}>
          <Menu.Item>
            <Button as={NavLink} to="/naxusclub" inverted>
              NAXUS CLUB
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button as={NavLink} to="/tumkampanyalar" inverted>
              KAMPANYALAR
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button as={NavLink} to="/brands" inverted>
              MARKALAR
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button as={NavLink} to="/artihizmetler" inverted>
              HİZMETLER
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button as={NavLink} to="/opportunityoftheday" inverted>
              GÜNÜN FIRSATI
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Button as={NavLink} to="/help" inverted>
              YARDIM
            </Button>
          </Menu.Item>
        </Menu> */}
    </div>
  );
}
