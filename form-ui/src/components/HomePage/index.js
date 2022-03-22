import '../../home.css';
import Footer from "../../components/Footer/footer";
import Button from '@mui/material/Button';
import * as React from 'react';
import LandingHeader from "../../components/LandingHeader";
import TopInfoSection from "./components/TopInfoSection";
import data from "./data"
import ChooseUsSection from "./components/ChooseUsSection";
import StorySection from "./components/StorySection";

function Events() {

  const display = data.map(items => {
    return (
      <>
        <div className='events'>
          <div className='loop-events'>
            <div className='events-details' style={{position: 'relative'}}>
              <img alt={""} src={items.photo} style={{
                position: 'relative',
                width: '100%',
                borderRadius: '10px',
                height: '30%',
                marginTop: '0px'
              }}/>
              <p style={{
                position: 'absolute',
                top: '0.3px',
                backgroundColor: 'white',
                fontWeight: '200',
                marginLeft: '20px',
                borderRadius: '10px'
              }}> {items.price}/=</p>
            </div>
            <div className='details'>
              <h4 style={{textAlign: 'center'}}>{items.venue}</h4>
              <p>
                {items.description}
              </p>
              <p>
                {items.date}
              </p>
            </div>
            <Button size="small" variant="contained"
                    style={{marginLeft: '20%', marginRight: '20%', width: '60%', marginBottom: '10px'}}>Join</Button>
          </div>
        </div>
      </>
    )
  })
  return (
    <>
      <div className="events-container">
        <div className='events-wrapper'>
          <div>
            <h3 style={{textAlign: 'center', fontFamily: 'fantasy', padding: '10px', fontSize: '5vh'}}> Upcoming
              Events</h3>
          </div>
          <div className='filter-wrapper'>
            <div className='filter'>
              <select name="days" id="days">
                <option value="Weekdays">--Days--</option>
                <option value="Weekdays">Weekdays</option>
                <option value="Weekends">Weekends</option>
                <option value="holidays">Holidays</option>
              </select>
            </div>
            <div className='filter'>
              <select name="type" id="days" style={{height: '30px'}}>
                <option value="hike">--Events--</option>
                <option value="hike">Hike</option>
                <option value="swimming">swimming</option>
                <option value="road">Road trips</option>
              </select>
            </div>
          </div>
        </div>
        <div className="events-wrapper-container">
          {display}
        </div>
        <div>
          <Button size="small" variant="contained" style={{
            marginLeft: '40%',
            marginRight: '20%',
            marginTop: '20px',
            marginBottom: '10px',
            backgroundColor: 'InfoBackground',
            color: 'black'
          }}>Load More</Button>
        </div>
      </div>
    </>
  )
}


export default function HomePage() {
  return (
    <div>
      <LandingHeader/>
      <TopInfoSection/>
      <ChooseUsSection/>
      <StorySection/>
      <Events/>
      <Footer/>
    </div>

  )

}
