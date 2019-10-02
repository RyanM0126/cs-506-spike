import React from "react";
import { Button, Link } from "@material-ui/core";

function SignedOutLinks() {
  return (
    <div>
      <Button color="inherit">
        <Link
          component="button"
          variant="body2"
          color="inherit"
          onClick={() => {
            alert("Sign In Click");
          }}
        >
          Sign In
        </Link>
      </Button>

      <Button color="inherit">
        <Link
          component="button"
          variant="body2"
          color="inherit"
          onClick={() => {
            alert("Sign Up Click");
          }}
        >
          Sign Up
        </Link>
      </Button>
    </div>
  );
}

export default SignedOutLinks;
