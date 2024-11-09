import React, {useState} from 'react'


export default function About() {
    const [myStyle, setStyle] = useState({
        color: "black",
        backgroundColor: "white",
        border: "2px solid black"
    });

    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const handleDarkMode = () => {
        console.log("Dark mode has been enabled");
        // useState("Disable Dark Mode");
        if(myStyle.color === "white"){
            setStyle({
                color: "black",
                backgroundColor: "white"
            });

            setBtnText("Enable Dark Mode");
        }else{
            setStyle({
                color: "white",
                backgroundColor: "black",
                border: "2px solid white"
            });
            setBtnText("Enable Light Mode");
        }

    }

    
    return (
        <>
        <h1 text-light className='container'>About Us</h1>
        <div className='container' style={myStyle}>
            <div id="accordion" style={myStyle}>
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Collapsible Group Item #1
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div className='container my-3'>
                <button type="button" className="btn btn-secondary my-3" onClick={handleDarkMode}>{btnText}</button>
            </div>
        </div>
        </>
    )
}
