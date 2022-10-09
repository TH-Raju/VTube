import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../utils/fetchFromApi';
import { Videos, ChannelCard } from './';

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos,] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchFromApi(`channels?part="snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]));
        fetchFromApi(`search?channelId=${id}&part=snippet&order=data`)
            .then((data) => setChannelDetail(data?.items[0]));
    }, [id])
    return (
        <div>
            <Box minHeight="95vh">
                <Box>
                    <div
                        style={{
                            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1)100%)',
                            zIndex: 10,
                            height: '300px'
                        }}
                    />
                    <ChannelCard channelDetail={channelDetail}
                        marginTop="-110px" />
                </Box>
                <Box display="flex" p="2">
                    <Box sx={{ mr: { sm: '100px' } }} />
                    <Videos videos={videos}></Videos>

                </Box>

            </Box>
        </div>
    );
};

export default ChannelDetail;