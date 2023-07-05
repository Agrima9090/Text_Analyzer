// import React, { useState } from 'react'




export default function About() {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btntext, setbtntext] = useState("Enable dark mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setbtntext("Enable light mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //     }
    //     setbtntext("Enable dark mode")
    // }



    return (
        
        <div className='container' >
            <h1 className='my-3'><i>About Us!</i></h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <b>TextMania- An Analyzing tool!</b> 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                        A text analyzer is a software tool or algorithm that processes and analyzes textual data to extract meaningful insights and information. It applies various techniques, algorithms, and linguistic rules to analyze the structure, content, and context of the text. The goal of a text analyzer is to uncover patterns, characteristics, and relationships within the text, enabling users to gain a deeper understanding of the text's properties and extract valuable information from it.</div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
