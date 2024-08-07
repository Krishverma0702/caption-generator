import SparklesIcon from "./SparklesIcon";

export default function ResultVideo(){
    return(
        <>
        <div className="mb-4">
            <button className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50 cursor pointer">
            <SparklesIcon />
            <span>Apply Captions</span>
            </button>
        </div>
        <div className="rounded-xl overflow-hidden">
            <video controls src={""+ __filename}>

            </video>
        </div>
        </>
    )
}