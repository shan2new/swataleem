import React from 'react'
import BannerCarousal from './BannerCarousal'
import Pitch from './Pitch'
import OngoingProject from './OngoingProject'
import Feed from './Feed'
import Testimonials from './Testimonials'
import EventPhotos from './EventPhotos'

const Home = props => (
  <div>
    <BannerCarousal />
    <Pitch />
    <OngoingProject />
    <Feed />
    <Testimonials />
    <EventPhotos />
  </div>
)

export default Home
