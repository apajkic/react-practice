import React, { Component } from 'react'

class Life extends Component {
    render() {
        return (
            <div>
                <div className="col-3 home-3" id="kartica1">
                    <h3>Life in different countries</h3>
                    <div className="content-1">
                        <h4>Select country</h4>
                        <form >
                            <label htmlFor="Continent">Continent</label>
                            <select id="continent">
                                <option value="1">America</option>
                                <option value="2">Europe</option>
                                <option value="3">Asia</option>
                            </select>
                            <br></br>
                            <label htmlFor="Country">Country</label>
                            <select id="country">
                                <option value="1">France</option>
                                <option value="2">Germany</option>
                                <option value="3">Serbia</option>
                            </select>
                            <br></br>
                            <label htmlFor="City">City</label>
                            <select id="city">
                                <option value="1">Belgrade</option>
                                <option value="2">Oman</option>
                                <option value="3">Tundra</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Life;