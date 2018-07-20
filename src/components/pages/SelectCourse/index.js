import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { inject, observer } from "mobx-react"

import CourseType from "./CourseType"
import CourseDetails from "./CourseDetails"
import CourseAddons from "./CourseAddons"

import { IconButton } from "@material-ui/core"
import { Close } from "@material-ui/icons"

const SelectCourse = inject("store")(
  observer(({ history, store: { CourseStore } }) => {
    return (
      <Fragment>
        <IconButton
          color="inherit"
          size="small"
          component={Link}
          to="/"
          onClick={history.goBack}
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          <Close />
        </IconButton>
        {CourseStore.step === "" ? <CourseType /> : null}
        {CourseStore.step === "course-details" ? <CourseDetails /> : null}
        {CourseStore.step === "course-addons" ? <CourseAddons /> : null}
      </Fragment>
    )
  })
)

export default SelectCourse
