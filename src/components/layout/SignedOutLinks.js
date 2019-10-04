import React from "react";
import { Button } from "@material-ui/core";
import ListItemLink from "./ListItemLink";

function SignedOutLinks() {
  return (
    <div>
      <Button color="inherit">
        <ListItemLink to="/signin" primary="Sign In" />
      </Button>
      <Button color="inherit">
        <ListItemLink to="/signup" primary="Sign Up" />
      </Button>
    </div>
  );
}

export default SignedOutLinks;
