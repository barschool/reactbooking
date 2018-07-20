import React, { Fragment } from "react"
import { inject, observer } from "mobx-react"
import { compose } from "recompose"
import { withRouter, Link } from "react-router-dom"
import { IconButton, Dialog, Slide, withStyles, Grid, Typography, MenuList, MenuItem, Button } from "@material-ui/core"
import { Close, Menu as MenuIcon, Phone } from "@material-ui/icons"

import ListDialog from "./ListDialog"
import Logo from "../images/ebs-logo-inverted.svg"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    position: "relative",
  },
  flex: {
    flex: 1,
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  menuItem: {
    padding: 5,
    "&:focus": {
      backgroundColor: "#eee",
      "& $primary, & $icon": {
        color: theme.palette.common.white,
      },
    },
  },
  button: {
    marginBottom: 20,
    textTransform: "none",
    width: "100%",
  },
})

function Transition(props) {
  return <Slide direction="left" {...props} />
}

@inject("store")
@observer
class Menu extends React.Component {
  state = {
    open: false,
    languageDiagOpen: false,
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleSelect = value => {
    this.setState({ languageDiagOpen: false })
    if (value) this.props.store.setLanguage(value)
  }

  openLanguageDialog = () => this.setState({ languageDiagOpen: true })

  render() {
    const {
      classes,
      location: { pathname },
      store,
    } = this.props

    const {
      strings: { menu: menuStrings },
    } = store

    return (
      <Fragment>
        <ListDialog
          open={this.state.languageDiagOpen}
          onClose={this.toggleLanguageDialog}
          handleSelect={this.handleSelect}
          items={store.selectableLanguages}
        />
        <IconButton color="inherit" onClick={this.handleClickOpen}>
          <MenuIcon />
        </IconButton>
        <Dialog fullScreen open={this.state.open} TransitionComponent={Transition}>
          <IconButton
            color="inherit"
            size="small"
            onClick={this.handleClose}
            style={{ position: "absolute", top: 0, right: 0 }}
          >
            <Close />
          </IconButton>
          <Grid container style={{ marginTop: 20 }} align="center" justify="center">
            <Grid item xs={12}>
              <img src={Logo} alt="logo" style={{ maxWidth: 150, width: "20%" }} />
            </Grid>
            <Grid item xs={6} sm={4}>
              <MenuList>
                {store.menuItems.map((path, index) => (
                  <MenuItem
                    component={Link}
                    to={path}
                    key={index}
                    className={classes.menuItem}
                    onClick={this.handleClose}
                    selected={path === pathname}
                  >
                    <Typography variant="subheading" style={{ fontWeight: 600 }} className={classes.flex}>
                      {menuStrings.links[path.slice(1)]}
                    </Typography>
                  </MenuItem>
                ))}
              </MenuList>
              <hr style={{ border: 0, borderBottom: "1px solid #ddd" }} />
              <Button
                onClick={this.openLanguageDialog}
                className={classes.button}
                style={{ marginBottom: 0, marginTop: 12 }}
              >
                Change language
              </Button>
              <Button style={{ marginTop: 0 }} className={classes.button}>
                {menuStrings.studentAccount}
              </Button>
            </Grid>
            <Grid item xs={10}>
              <Button
                variant="contained"
                component={Link}
                to={"/select-course"}
                style={{ backgroundColor: "#ffcd00" }}
                className={classes.button}
                location={this.props.location}
              >
                <Typography variant="body1">{menuStrings.book}</Typography>
              </Button>
              <Button variant="contained" className={classes.button} style={{ backgroundColor: "#16a57b" }}>
                <Typography variant="body1">{menuStrings.courseGuide}</Typography>
              </Button>
              <Button>
                <Phone style={{ color: "#d44a49" }} />
                <Typography style={{ marginLeft: 10, fontWeight: "bold" }}>{menuStrings.phone.number}</Typography>
              </Button>
              <Typography variant="caption" className={classes.flex}>
                {menuStrings.phone.hours}
              </Typography>
            </Grid>
          </Grid>
        </Dialog>
      </Fragment>
    )
  }
}

export default compose(
  withRouter,
  withStyles(styles)
)(Menu)
