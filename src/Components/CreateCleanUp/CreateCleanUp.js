import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './CreateCleanUp.css'
import axios from 'axios';

class CreateCleanUp extends Component {
    state = {
        county_region: '',
        site_name: '',
        counties: [],
        sites: [],
        locations: [],
        filterLocations: [],
    }

    componentDidMount() {
        this.getCounties()
    }

    getCounties = async() => {
        axios.get('https://api.coastal.ca.gov/ccd/v1/locations')
            .then(res => {
                const allCounties = [...new Set(res.data.map(i => i.county_region))]
                this.setState({
                    locations: res.data,
                    counties: allCounties
                })
            })
    }

    // getSites = async() => {
    //     axios.get('https://api.coastal.ca.gov/ccd/v1/locations')
    //         .then(res => {
    //             const allSites = res.data.filter({county_region: this.state.county_region})
    //             this.setState({
    //                 sites: allSites
    //             })
    //         })
    // }

    handleCountyChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            filterLocations: [...this.state.locations].filter(l => l.county_region === e.target.value)
        })
    }

    handleSiteChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEventSubmit = async(e) => {
        e.preventDefault()
        const event = this.state.filterLocations.filter(location => location.site_name === this.state.site_name)
        const data = {
            county_region: this.state.county_region,
            site_name: this.state.site_name,
            created_by: this.props.currentUser._id,
            event_id: event[0].id
        }
        this.createEvent(data) 
            
    }

    createEvent = (data) => {
        axios.post('https://recyclopedia-backend.herokuapp.com/events', data)
            .then(res => {
                this.props.history.push('/events')
            })
    }

    render() {
        return(
            <div className="createCleanUp">
                <form className="forms" onSubmit={this.handleEventSubmit}>
                    <h1 className="formH1">Create a Beach Clean-Up Event</h1>
                    <div className="selectForms">
                        <div className="county">
                            <label>
                                Select a county:
                            </label>
                            <select name="county_region" size="10" onChange={this.handleCountyChange}>
                                {
                                    this.state.counties.map((county, i) => 
                                        <option value={county} key={i}>{county}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="site">
                            <label>
                                Select a location:
                            </label>
                            <select name="site_name" size="10" onChange={this.handleSiteChange}>
                                {
                                    this.state.filterLocations.map((site, i) => 
                                        <option value={site.site_name} key={i}>{site.site_name}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>    
                    <button type="submit">Select</button>
                </form>
            </div>
        )
    }
}

export default withRouter(CreateCleanUp)