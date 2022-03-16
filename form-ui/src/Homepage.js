
import './home.css';
import Footer from "./components/Footer/footer";
import Button from '@mui/material/Button';
import * as React from 'react';
import Travel from './assets/Trip.png';
import Add from './assets/add.png';
import Travellers from './assets/travellers.png';
import Research from './assets/Research.png';
import Karura from './assets/karura.jpg';
import Giraffe from './assets/girraffe.jpg';
import Ngong from './assets/ngong.jpg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className='header-wrapper'>
                <div className='header-container'>
                    <div className='logo-icon'>
                        FormBuzz
                    </div>
                    <div className='login'>
                        <Link exact to='/login' style={{ textDecoration: 'none' }}>
                            <Button size="small" >Login</Button>
                        </Link>
                        <Button size="small" variant="contained" style={{ marginLeft: '20px' }}>Signup</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
function Events() {
    const database = [
        {
            Theme: ' Tour',
            venue: 'Ngong Hills',
            date: '20/05/2022',
            price: 300,
            photo: Karura,
            description: 'Ideal place to escape from the crowdy city on a weekend for relaxation',

        },
        {
            Theme: 'Tour',
            venue: 'Giraffe Centre',
            date: '3/08/2022',
            price: 200,
            photo: Giraffe,
            description: 'Ideal place to escape from the crowdy city on a weekend for relaxation',


        },
        {
            Theme: 'Tour',
            venue: 'Karura Forest',
            date: '1/10/2022',
            price: '500',
            photo: Ngong,
            description: 'Ideal place to escape from the crowdy city on a weekend for relaxation',


        },
        {
            Theme: 'Tour',
            venue: ' Camp Ndunda',
            date: '12/12/2022',
            price: 1500,
            photo: Giraffe,
            description: 'Ideal place to escape from the crowdy city on a weekend for relaxation',


        },
        {
            Theme: 'Tour',
            venue: 'Karura Forest',
            date: '1/10/2022',
            price: '500',
            photo: Ngong,
            description: 'Ideal place to escape from the crowdy city on a weekend for relaxation',


        },
        {
            Theme: ' Tour',
            venue: 'Ngong Hills',
            date: '20/05/2022',
            price: 300,
            photo: Karura,
            description: 'Ideal place to escape from the crowdy city on a weekend for relaxation',

        },
    ];
    const display = database.map(items => {
        return (
            <>
                <div className='events'>
                    <div className='loop-events'>
                        <div className='events-details' style={{ position: 'relative' }}>
                            <img src={items.photo} style={{ position: 'relative', width: '100%', borderRadius: '10px', height: '30%', marginTop: '0px' }} />
                            <p style={{ position: 'absolute', top: '0.3px', backgroundColor: 'white', fontWeight: '200', marginLeft: '20px', borderRadius: '10px' }}> {items.price}/=</p>
                        </div>
                        <div className='details'>
                            <h4 style={{ textAlign: 'center' }}>{items.venue}</h4>
                            <p>
                                {items.description}
                            </p>
                            <p>
                                {items.date}
                            </p>
                        </div>
                        <Button size="small" variant="contained" style={{ marginLeft: '20%', marginRight: '20%', width: '60%', marginBottom: '10px' }}>Join</Button>
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
                        <h3 style={{ textAlign: 'center', fontFamily: 'fantasy', padding: '10px', fontSize: '5vh' }}> Upcoming Events</h3>
                    </div>
                    <div className='filter-wrapper'>
                        <div className='filter'>
                            <select name="days" id="days" >
                                <option value="Weekdays">--Days--</option>
                                <option value="Weekdays">Weekdays</option>
                                <option value="Weekends">Weekends</option>
                                <option value="holidays">Holidays</option>
                            </select>
                        </div>
                        <div className='filter'>
                            <select name="type" id="days" style={{ height: '30px' }}>
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
                    <Button size="small" variant="contained" style={{ marginLeft: '40%', marginRight: '20%', marginTop: '20px', marginBottom: '10px', backgroundColor: 'InfoBackground', color: 'black' }}>Load More</Button>
                </div>
            </div>
        </>
    )
}

function TopInfo() {
    return (
        <>
            <div className="info-container" style={{ padding: '20px', }}>
                <div className='info-wrapper'>
                    <div>
                        <h1 style={{ fontWeight: 'bold' }}>
                            Lets Discover The World together
                        </h1>
                        <p style={{ fontSize: 'medium' }}>
                            Explore Beautiful places as a group and make the best out of it
                        </p>

                        <Button size="small" variant="contained" style={{ marginLeft: '40%', width: 'auto', height: '40px', marginRight: '20%', marginTop: '20px', marginBottom: '10px', borderRadius: '10px', backgroundColor: 'InfoBackground', color: 'black' , }}>Explore Now</Button>

                        <div className="moreDetails">
                            <div className="more" style={{ display: 'flex', marginTop: '10px' }}>
                                <img src="https://img.icons8.com/external-others-zulfa-mahendra/40/000000/external-hiking-winter-outdoor-others-zulfa-mahendra.png" style={{ borderRadius: '50%', backgroundColor: 'lightgrey' , height:'40%'}} />
                                <p id = "small" style={{ marginTop: '-10px'}}>
                                   1000+ Hiking
                                </p>
                            </div>
                            <div className="more" style={{ display: 'flex', marginTop: '10px' }}>
                                <img src="https://img.icons8.com/windows/40/000000/swimming.png" style={{ borderRadius: '50%', backgroundColor: 'lightgrey', height:'40%' }} />
                                <p id = "small" style={{ marginTop: '-10px'}}>
                                   500+ swimming
                                </p>
                            </div>
                            <div className="more" style={{ display: 'flex', marginTop: '10px' }}>
                                <img src="https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/40/000000/external-cars-transportation-smashingstocks-hand-drawn-black-smashing-stocks.png" style={{ borderRadius: '50%', backgroundColor: 'lightgrey', height:'40%' }} />
                                <p id = "small" style={{ marginTop: '-10px'}}>
                                    500+ Road Trips
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img id="storyset" src={Travel} style={{ width: '100%', marginLeft: '10%' }} />
                    </div>

                </div>
            </div>
        </>
    )
}

function Choice() {
    return (
        <>
            <div className='choice-container'>
                <div className='choice-wrapper'>
                    <h3 id='center'> Why Choose Us</h3>
                    <p id='center' style={{ fontSize: 'small', marginTop: '-20px' }}> We offer you a platform to create, invite and share events and tours that you would like to attend to with groups of friends and plan with ease</p>
                </div>
                <div className="choice-options">
                    <div>
                        <h5>Unique Destinations</h5>
                        <p> Looking for unique destinations? Then maybe a trip to one of the areas you've not been to before</p>
                    </div>
                    <div>
                        <h5>Worth of Money</h5>
                        <p> Plan an event with a group of friends share the cost and plan effeciently</p>
                    </div>
                    <div>
                        <h5>Make new friends</h5>
                        <p> Invite people to the events you create and get to make new friends</p>
                    </div>
                </div>
            </div>
        </>
    )
}
function Story() {
    return (
        <>
            <div className='story-details'>
                <div className='story-container'>
                    <div>
                        <h4 id='center'>
                            Find Your Perfect Destination
                        </h4>
                        <p id='center'>
                            Find your next destination from the list of destinations in the explore page
                        </p>
                        <Button size="small" variant="contained" style={{ marginLeft: '40%', marginRight: '20%', marginTop: '20px', marginBottom: '10px', borderRadius: '10px', backgroundColor: 'aqua', color: 'black' }}>Explore</Button>


                    </div>
                    <div id="storyset">
                        <img src={Travellers} style={{ width: '100%' }} />
                    </div>
                </div>
                <div></div>
                <div className='story-container'>
                    <div id='storyset'>
                        <img src={Add} style={{ width: '100%' }} />
                    </div>
                    <div>
                        <h4 id='center'>
                            Create And Add Friends
                        </h4>
                        <p id='center'>
                            Share your link across all platform and invite people to tour together.
                        </p>
                        <Button size="small" variant="contained" style={{ marginLeft: '40%', marginRight: '20%', marginTop: '20px', marginBottom: '10px', borderRadius: '10px', backgroundColor: 'InfoBackground', color: 'black' }}>Explore </Button>


                    </div>

                </div>
                <div></div>
                <div className='story-container'>
                    <div>
                        <h4 id='center'>
                            Plan for the event
                        </h4>
                        <p id='center'>
                            Plan and manage the event easily, by getting reports on the people attending, the money raised, in order to plan effeciently
                        </p>
                        <Button size="small" variant="contained" style={{ marginLeft: '40%', marginRight: '20%', marginTop: '20px', marginBottom: '10px', borderRadius: '10px', backgroundColor: 'InfoBackground', color: 'black' }}>Explore </Button>


                    </div>
                    <div id='storyset'>
                        <img src={Research} style={{ width: '100%' }} />
                    </div>


                </div>
            </div>
        </>
    )
}

export default function Home() {
    return (
        <body>
            <div>


                <Header />
                <TopInfo />
                <Choice />
                <Story />
                <Events />
                <Footer />
            </div>
        </body>

    )

}