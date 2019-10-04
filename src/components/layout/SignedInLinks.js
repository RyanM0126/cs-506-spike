import React from "react";
import { Button, Link, Fab } from "@material-ui/core";

function SignedInLinks() {
  return (
    <div>
      <Button color="inherit">
        <Link
          component="button"
          variant="body2"
          color="inherit"
          onClick={() => {
            alert("Sign Out Click");
          }}
        >
          Sign Out
        </Link>
      </Button>
      <Button color="inherit">
        <Link
          component="button"
          variant="body2"
          color="inherit"
          onClick={() => {
            alert("Add Houses Click");
          }}
        >
          Add Houses
        </Link>
      </Button>
      <Fab size="medium" color="secondary">
          RM
      </Fab>
    </div>
  );
}

export default SignedInLinks;
