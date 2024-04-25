import '../Asset/css/bai1.css'
import style from '../Asset/css/bai1.module.css'
import logo from '../Asset/images/logo192.png'
function Bai1(){
    const data = {
        name: "React",
        items:["item 1","item 2", "item 3"],
    }
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };
    return(
        <div>
            <h1 style={{color:"red"}}>Hello, {data.name}</h1>
            <p style={{backgroundColor:"yellow"}}>This is an example of JSX</p>
            <ul style={myStyle}>
                {data.items.map((item, index)=>{
                    return (<li key={index}>{item}</li>)
                })}
            </ul>
            <div className="StyleCss">
                <h1>This is content's style is in a css file</h1>
                <img src="logo192.png"/>
                <img src={require('../Asset/images/logo192.png')}/>
                <img src={logo}/>

            </div>
            <div className={style.StyleModule}>
                <h2>This is content's style is in a css module file</h2>
            </div>
        </div>
    );
}
export default Bai1;