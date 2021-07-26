import {useState} from 'react'
import {APIKEY} from "../config";
import RepresentativesSearchResults from './RepresentativeSearchResults';

function RepresentativesSearch (){
const [address,setAddress] = useState('')
const [offices,setOffices] =useState([])
const [officials,setOfficials] = useState([])

const searchRepresentatives = () => {
    console.log('searching...')
fetch(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}&key=${APIKEY}`)
.then(response => response.json())
.then (json => {
    setOffices(json.offices)
    setOfficials(json.officials)
        return
    })
.catch(error => console.log(error))  
}


    return (
        <div className="search-container">
            <input
             name="addressSearch" 
             type="text"
             className="search-bar"
             value={address}
             onChange={e => setAddress(e.target.value)}
        />
        <div>

        <button className="search-btn"
         onClick={() => searchRepresentatives()}
        >
            Submit
        </button>
        </div>
        <RepresentativesSearchResults offices={offices} officials={officials} /> 
        </div>
    )
}



export default RepresentativesSearch