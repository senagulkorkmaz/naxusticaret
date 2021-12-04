import React from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Dropdown,
  Image,
  Menu,
  Input,
  Icon,
  Divider,
  Container,
} from "semantic-ui-react";

function Navbar() {
  const search = {
    width: "50px",
  };

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Image
            as={NavLink}
            to="/home"
            src="images/naxusicon.PNG"
            size="small"
          />
        </Container>

        <Menu.Item position="right">
          <Input
            action={{ content: "Ara" }}
            icon="laptop"
            iconPosition="left"
            placeholder="Aramak istediğiniz ürün.."
          />
        </Menu.Item>

        <Menu.Item>
          <Menu.Item></Menu.Item>
          <Button
            size="small"
            backgroundcolor="grey"
            color="black"
            as={NavLink}
            to="/myfavorites"
          >
            <Icon name="heart outline" />
            Favorilerim
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button backgroundcolor="grey" color="black" as={NavLink} to="/cart">
            <Icon name="shopping cart" />
            Sepetim
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Icon name="user outline" size="large" />
          <Dropdown item text="Hesabım">
            <Dropdown.Menu>
              <Dropdown.Item
                as={NavLink}
                to="/LoginScreen"
                style={{ color: "black" }}
                text="Giriş Yap"
                icon="sign-in"
              />
              <Dropdown.Item
                as={NavLink}
                to="/signup"
                style={{ color: "black" }}
                text="Kayıt Ol"
                icon="signup"
              />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
      <Divider />
    </div>
  );
}
export default Navbar;
