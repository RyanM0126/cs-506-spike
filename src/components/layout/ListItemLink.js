import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { ListItem, ListItemText } from "@material-ui/core";

function ListItemLink(props) {
  const { primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} {...itemProps} innerRef={ref} />
      )),
    [to]
  );

  return (
    <div>
      <ListItem button component={renderLink}>
        <ListItemText primary={primary} />
      </ListItem>
    </div>
  );
}

export default ListItemLink;
