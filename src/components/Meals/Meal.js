import React, { Fragment } from 'react'
import { MuiCard } from '../Card/MuiCard'
import MealsSummary from './MealsSummary'

 const Meal = () => {
  return (
    <Fragment>
        <MealsSummary/>
        <MuiCard/>
    </Fragment>
  )
}
export default Meal