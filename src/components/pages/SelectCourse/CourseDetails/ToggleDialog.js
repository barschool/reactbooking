import React, { Fragment } from "react"
import { inject, observer } from "mobx-react"
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, withStyles, Typography } from "@material-ui/core"

const styles = {
  button: {
    textTransform: "none",
    width: "32%",
    marginBottom: "2%",
    "&:not(:nth-of-type(3n-2))": {
      marginLeft: "2%",
    },
    display: "inline",
  },
}

@inject("store")
@observer
class ToggleDialog extends React.Component {
  handleClose = () => {
    this.props.handleSelect2(this.props.selectedValue)
  }

  handleListItemClick = value => {
    this.props.handleSelect(value)
  }

  render() {
    const {
      classes,
      dialogkey,
      funcname,
      store: { CourseStore },
      selectedValue,
      items,
      title,
      choose,
      maxSelected,
      ...other
    } = this.props

    return (
      <Dialog onClose={() => CourseStore.toggleDialog(dialogkey)} aria-labelledby="simple-dialog-title" {...other}>
        <Fragment>
          <DialogContent style={{ padding: 10 }}>
            <DialogTitle id="simple-dialog-title" style={{ paddingBottom: 5 }}>
              {title}
            </DialogTitle>
            <Typography style={{ paddingLeft: 24, paddingBottom: 24 }}>{choose}</Typography>
            {items.map(item => {
              const selected = CourseStore["selected" + dialogkey].indexOf(item.key) !== -1
              const numSelected = CourseStore["selected" + dialogkey].length
              return (
                <Button
                  key={item.key}
                  disabled={!selected && numSelected == maxSelected}
                  color={selected ? "primary" : "default"}
                  onClick={() => CourseStore[funcname](item.key)}
                  variant="contained"
                  className={classes.button}
                >
                  {item.value}
                </Button>
              )
            })}
          </DialogContent>

          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={() => CourseStore.toggleDialog(dialogkey)}
              color="primary"
            >
              Continue
            </Button>
          </DialogActions>
        </Fragment>
      </Dialog>
    )
  }
}

export default withStyles(styles)(ToggleDialog)
