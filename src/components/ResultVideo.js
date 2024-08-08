import { useEffect, useState, useRef } from "react";
import SparklesIcon from "./SparklesIcon";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import { transcriptionItemsToSrt } from "@/libs/awsTranscriptionHelpers";

export default function ResultVideo({filename, transcriptionItems}){
    const videoUrl = ""+filename;
    // const [videoSrc, setVideoSrc] = useState('');
    const [loaded, setLoaded] = useState(false);
    const ffmpegRef = useRef(new FFmpeg());
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.src= videoUrl;
        load();
    }, []);

    const load = async () => {
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'
        const ffmpeg = ffmpegRef.current;

        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
        });
        setLoaded(true);
    }

    const transcode = async () => {
        const ffmpeg = ffmpegRef.current;
        await ffmpeg.writeFile(filename, await fetchFile(videoUrl));
        const srt = transcriptionItemsToSrt(transcriptionItems);
        ffmpeg.on('log', ({ message }) => {
            console.log(message);
        });
        await ffmpeg.exec(['-i', filename, 'output.mp4']);
        const data = await ffmpeg.readFile('output.mp4');
        videoRef.current.src =
            URL.createObjectURL(new Blob([data.buffer], {type: 'video/mp4'}));
    }

    return(
        <>
        <div className="mb-4">
            <button 
            onClick={transcode}
            className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50 cursor pointer">
            <SparklesIcon />
            <span>Apply Captions</span>
            </button>
        </div>
        <div className="rounded-xl overflow-hidden">
            <video 
            data-video={0}
            ref={videoRef}
            controls>

            </video>
        </div>
        </>
    )
}