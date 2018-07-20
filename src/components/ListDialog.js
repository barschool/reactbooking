import React from "react"
import { Dialog, DialogTitle, List, ListItem, ListItemText } from "@material-ui/core"

export default class ListDialog extends React.Component {
  handleClose = () => {
    this.props.handleSelect(this.props.selectedValue)
  }

  handleListItemClick = value => {
    this.props.handleSelect(value)
  }

  render() {
    const { classes, onClose, handleSelect, selectedValue, items, ...other } = this.props

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Change Language</DialogTitle>
        <div>
          <List>
            {items.map(item => (
              <ListItem button onClick={() => this.handleListItemClick(item.key)} key={item.key}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    )
  }
}
