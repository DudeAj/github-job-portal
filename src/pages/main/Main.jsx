import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { fetchDataAsync } from '../../store/actions';
import Search from '../../components/search/Search';
import './main.scss';
import SearchArea from './searchArea/SearchArea';
import JobCards from '../../components/jobCards/jobCards';
import Spinner from '../../components/UI/Spinner/Spinner';

const Main = () => {

    const dispatch = useDispatch();

    const data = useSelector(state => state.data.data);
    const error = useSelector(state => state.data.error);
    const loading = useSelector(state => state.data.loading);
    const userToken = useSelector(state => state.user.token);

    const [page, setPage] = useState(1);
    const [placeSearch, setPlaceSearch] = useState('');
    const [search, setSearch] = useState('');
    const [countryFilter, setCountryFilter] = useState("");
    const [fullTime, setFulltime] = useState(false);
    const totalCount = useSelector(state => state.data.totalResult);


    useEffect(() => {

        if (countryFilter.length > 0) {
            console.log(countryFilter)
            const filter = `&country=${countryFilter}`;
            dispatch(fetchDataAsync(search, page, filter));
        }
        else {
            dispatch(fetchDataAsync(search, page, ""));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, page, countryFilter]);


    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleSearch = (query) => {
        setPage(1);
        setSearch(query)
    }
    const handlePlaceSearch = (value) => {
        setPlaceSearch(value);
    }

    if (!userToken) {
        return <Spinner />;
    }

    return (
        <div className="main">
            <Search handleChange={handleSearch} />
            <div className="container-main">
                <div className="leftContainer">
                    <SearchArea
                        handleFulltime={setFulltime}
                        query={placeSearch}
                        placeSearchHandle={handlePlaceSearch}
                        country={countryFilter}
                        setCountry={setCountryFilter}
                    />
                </div>
                <div className="rightContainer">
                    {loading
                        ? <Spinner />
                        : data.length > 0 ? <>
                            {data.map(item => {
                                if (fullTime) {
                                    if (item.type === "Full-Time") {
                                        return <JobCards key={item.id} data={item} />
                                    }
                                }
                                else {
                                    return <JobCards key={item.id} data={item} />
                                }
                            })}
                            <div className="pagination">
                                { }
                                <Pagination count={Math.ceil(totalCount / 5)} page={page} onChange={handleChange} variant="outlined" shape="rounded" color="primary" />
                            </div>
                        </> : <p className="noJob">No jobs available for the given location</p>}
                </div>
            </div>
        </div>
    )
}

export default Main