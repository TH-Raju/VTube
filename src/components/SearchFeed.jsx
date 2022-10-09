import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import { Videos } from './';
import { fetchFromApi } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';



const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerms } = useParams();

    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${searchTerms}`)
            .then((data) => setVideos(data.items))
    }, [searchTerms]);

    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
            <Typography variant='h4'
                fontWeight="bold" mb={2} sx={{
                    color: 'white'
                }}>
                Search Result For <span style={{ color: '#F31503' }}>{searchTerms}</span> videos
            </Typography>

            <Videos videos={videos}></Videos>
        </Box>
    );
};


export default SearchFeed;