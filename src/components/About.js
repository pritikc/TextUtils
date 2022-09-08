import React,{useState} from 'react'

export default function About(props) {

    let myStyle = {
        color : props.mode === 'dark'?'white':'#042743',
        backgroundColor  : props.mode === 'dark'?'rgb(11 67 112)':'white',
        // border : '2px solid ', 
        // boderColor
    }

    // const [myStyle, setMyStyle] = useState({
    //         color : 'black',
    //         backgroundColor: 'white',
    //     }
    // )
    // const [btntext, setBtnText] = useState("Enable Dark Mode")

//    const toggleStyle = ()=>{
//         if(myStyle.color === 'black'){
//             setMyStyle({
//                 color : 'white',
//                 backgroundColor: 'black'
//             })
//             setBtnText("Enable Light Mode")
//         }
//         else
//         {
//             setMyStyle({
//                 color : 'black',
//                 backgroundColor: 'white'
//             })
//             setBtnText("Enable Dark Mode");
//         }
//     }
   
  return (
    <div className="container my-3" >
    <h2 className="my-3" style={{color : props.mode === 'dark'?'white':'#042743'}}>About US</h2>
    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Beowser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.            </div>
            </div>
        </div>
    </div>
    
    {/* <div className="Container my-3">
        <button className="btn btn-success" onClick={toggleStyle}>{btntext}</button>
    </div> */}

    </div>
  )
}
