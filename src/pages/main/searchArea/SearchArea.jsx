import './searcharea.scss';
import { FormControlLabel, Checkbox, RadioGroup, Radio, Card } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlaces } from '../../../store/actions';
import { useEffect, useState } from 'react';

const SearchArea = ({ query, placeSearchHandle, country, setCountry, handleFulltime }) => {


    const dispatch = useDispatch();
    const places = useSelector(state => state.data.places)

    //const [allCountry, setAllCountry] = useState([]);
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setCountry(event.target.value);

    };

    const handledataChange = (event) => {
        setChecked(event.target.checked)
        const change = event.target.checked ? true : false;
        handleFulltime(change);
    }

    useEffect(() => {
        if (query.length > 0) {

            dispatch(fetchPlaces(query))
            //   setAllCountry(places)

        }

    }, [query]);

    return (
        <div className="searchAreaContainer">
            <FormControlLabel className="checkboxBtn" control={<Checkbox checked={checked} onChange={handledataChange} size="small" />} label="Full Time" />
            <p>For Hiring</p>
            <span>This Job Portal is made for those who are looking to hiring some new telants.</span>
            <p>For Candidates</p>
            <span>All the Jobs are well refined and posted by reputed companies. If You are Looking for Better opportunity in the future</span>
            {/* <p>Location</p>
            <Card>
                <div className="searchArea">
                    <PublicIcon fontSize="small" className="icon" />
                    <input type="text" placeholder="City, state, zip code or country" value={query} onChange={(e) => placeSearchHandle(e.target.value)} />
                </div>
            </Card> */}

            {/* <div className="searchList">
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="america"
                    name="radio-buttons-group"
                    value={country}
                    onChange={handleChange}
                >
                    {allCountry.length > 0 && query.length > 2
                        ?
                        allCountry.map((item, index) => {
                            return <FormControlLabel key={index} value={`${item}`} control={<Radio size="small" />} label={`${item}`} />
                        })
                        : <>
                            <FormControlLabel value="england" control={<Radio size="small" />} label="England" />
                            <FormControlLabel value="ireland" control={<Radio size="small" />} label="Ireland" />
                            <FormControlLabel value="japan" control={<Radio size="small" />} label="Japan" />
                            <FormControlLabel value="belarus" control={<Radio size="small" />} label="Belarus" />
                        </>}
                </RadioGroup>
                <p className="clearfilter" onClick={() => setCountry("")}>clear filters</p>
            </div> */}
        </div>
    )
}

export default SearchArea