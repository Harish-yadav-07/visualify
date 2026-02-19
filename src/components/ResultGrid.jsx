import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setError, setLoading, setResults } from '../redux/features/searchSlice'
import { useEffect } from 'react';
import ResultCard from './ResultCard';

const ResultGrid = () => {
    const dispatch = useDispatch();
    const { query, activeTab, results, loading, error } = useSelector((state) => state.search);

    useEffect(function () {
        const getData = async () => {
            if (!query) return
            try {
                dispatch(setLoading())
                let data = []
                if (activeTab == 'photos') {
                    let response = await fetchPhotos(query)
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.regular,
                        url: item.links.html
                    }))
                }
                if (activeTab == 'videos') {
                    let response = await fetchVideos(query)

                    data = response.videos.map((item) => {

                        // 👇 HLS stream find karo (sabse fast load)
                        const hlsVideo = item.video_files.find(v =>
                            v.file_type === "video/mp4" && v.link.includes(".m3u8")
                        );

                        // 👇 fallback medium mp4
                        const mediumVideo =
                            item.video_files.find(v => v.width >= 960 && v.width <= 1280) ||
                            item.video_files[0];

                        return {
                            id: item.id,
                            type: 'video',
                            title: item.user.name || 'Video',
                            thumbnail: item.image,
                            src: hlsVideo?.link || mediumVideo.link,
                            url: item.url
                        }
                    })
                }


                dispatch(setResults(data))

            } catch (err) {
                dispatch(setError(err.message))
            }
        }
        getData();
    }, [query, activeTab, dispatch])

    if (error)
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-2xl">Error!</h1>
            </div>
        );

    if (loading)
        return (
            <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
                <h1 className="text-2xl">Loading...</h1>
            </div>
        );



    return (
        <div className='grid grid-cols-5 gap-5 justify-items-center p-5'>
            {results.map((item) => (
                <ResultCard key={item.id} item={item} />
            ))}
        </div>
    )
}

export default ResultGrid; 