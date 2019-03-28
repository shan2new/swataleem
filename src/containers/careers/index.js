import React from 'react'
import Banner from './Banner'
import JobQuery from './JobQuery'
import HiringProcess from './HiringProcess'
import JobOpenings from './JobOpenings'
import Pitch from './Pitch'
import TempRoles from './TempRoles'

const Careers = props => (
  <div>
    <Banner />
    <Pitch />
    <HiringProcess />
    <JobOpenings />
    <JobQuery />
    <TempRoles />
  </div>
)

export default Careers
