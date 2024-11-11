import React, {useState} from 'react'


export default function About(props) {
    // const [myStyle, setStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",
    //     marginTop: "10px"
    // });

    let myStyle = {
        color: props.mode === `dark` ? `white` : `black`,
        backgroundColor: props.mode === `dark` ? `black` : `white`,
        border: "2px solid",
        borderColor: props.mode === `dark` ? `white` : `black`,
       
    }



    
    return (
        <>
        <h1 text-light className={`container text-${props.mode === `light` ? `dark` : `light`}`}>About Us</h1>
        <div className='container my-3'>
            <div id="accordion">
                <div className="card mx-3 my-3">
                    <div className="card-header" id="headingOne" style={myStyle}>
                        <h5 className="mb-0 my-3">
                            <button className={`btn text-${props.mode === `light` ? `dark` : `light`}`} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                About your Text Analyser
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" className="collapse show my-3" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                        <h4 className='text-muted lead'>This text manipulation tool offers a suite of basic text formatting functions. 
                        Convert text to uppercase or lowercase, copy it to your clipboard for easy transfer, 
                        remove unnecessary extra spaces, or clear the input field to start anew. 
                        Ideal for quick text adjustments and simple text formatting tasks.</h4>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
        </div>
        </>
    )
}
