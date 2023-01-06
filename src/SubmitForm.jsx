import React, { useState } from "react";
import URLDisplay from "./URLDisplay";


const SubmitForm = () => {
    const [artist, setArtist] = useState("")
    const [title, setTitle] = useState("")
    const [lyrics, setLyrics] = useState("")
    const [pngURL, setPngURL] = useState("")
    const [svgURL, setSvgURL] = useState("")

    const makeGraph = () => {
        console.log("makeGraph");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"artist": artist, "title": title}),
        };
        fetch('https://lgweb.devopstom.com/rest/api/v1/graph', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                console.log(data.filename)
                setPngURL("https://lgweb.devopstom.com/graphs/imagefiles/" + data.png_filename)
                setSvgURL("https://lgweb.devopstom.com/graphs/imagefiles/" + data.svg_filename)
                }
                )
            .catch(error => console.log(error));
    };
  
    const useLyrics = () => {
        console.log("useLyrics");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"artist": artist, "title": title, "lyrics": lyrics}),
        };
        fetch('https://lgweb.devopstom.com/rest/api/v1/accept', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                console.log(data.filename)
                setPngURL("https://lgweb.devopstom.com/graphs/imagefiles/" + data.png_filename)
                setSvgURL("https://lgweb.devopstom.com/graphs/imagefiles/" + data.svg_filename)
                }
                )
            .catch(error => console.log(error));
    };
  

    const changeArtist = (e) => {
        setArtist(e.target.value)
    };

    const changeTitle = (e) => {
        setTitle(e.target.value)
    };
    const changeLyrics = (e) => {
        setLyrics(e.target.value)
    };


    return (
        <div className="flex h-screen">
            <div className="flex-row">
                <div className="m-auto">
                    <div className="text-6xl text-red-600">Artist and Title</div>
                    <input className="w-full px-3 py-2 my-2  border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" type="text" placeholder="Artist" onChange={changeArtist} />
                    <input className="w-full px-3 py-2 my-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" type="text" placeholder="Title" onChange={changeTitle}/>
                
                    <button className="my-2 px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white" type="button" onClick={makeGraph}>
                        Make Graph
                    </button>

                    
                </div>
                <div className="m-auto">
                    <div className="text-6xl text-red-600">Use Your Own Lyrics</div>
                    <input className="w-full px-3 py-2 my-2  border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" type="text" placeholder="Artist (optional)" onChange={changeArtist} />
                    <input className="w-full px-3 py-2 my-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" type="text" placeholder="Title (optional)" onChange={changeTitle}/>
                    <textarea rows="6" className="w-full px-3 py-2 my-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500" type="text" placeholder="Paste Lyrics Here" onChange={changeLyrics}/>
                    <button className="my-2 px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white" type="button" onClick={useLyrics}>
                        Use These Lyrics
                    </button>

                    
                </div>
                <div className="m-auto" id="ImageViewerDiv">
                <div><URLDisplay url={pngURL} /></div>
                <div><URLDisplay url={svgURL}/></div>
                
            </div>
            </div>
            
        </div>
    )
};
export default SubmitForm;