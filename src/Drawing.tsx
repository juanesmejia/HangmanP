const Head = (
    <div style = {{
        width: "50px", height: "50px", borderRadius: "100%",
        border: "10px solid black", position: "absolute", top: "50px",
        right: "-30px"
    }}/>
)
const Body = (
    <div style = {{
        width: "10px", height: "100px", background: "black",
        position: "absolute", top: "120px",
        right: 0
    }}/>
)
const R_arm = (
    <div style = {{
        width: "100px", height: "10px", background: "black",
        position: "absolute", top: "150px",
        right: "-100px", rotate: "-30deg",
        transformOrigin: "left bottom"
    }}/>
)
const L_arm = (
    <div style = {{
        width: "100px", height: "10px", background: "black",
        position: "absolute", top: "150px",
        right: "10px", rotate: "30deg",
        transformOrigin: "right bottom"
    }}/>
)
const R_leg = (
    <div style = {{
        width: "100px", height: "10px", background: "black",
        position: "absolute", top: "210px",
        right: "-90px", rotate: "60deg",
        transformOrigin: "left bottom"
    }}/>
)
const L_leg = (
    <div style = {{
        width: "100px", height: "10px", background: "black",
        position: "absolute", top: "210px",
        right: "0px", rotate: "-60deg",
        transformOrigin: "right bottom"
    }}/>
)



export function Drawing(){
    return <div style = {{ position: "relative"}}>
        {Head}
        {Body}
        {R_arm}
        {L_arm}
        {R_leg}
        {L_leg}
        <div style = {{height:"50px", width: "10px", background: "black",
            position: "absolute", top: 0, right: 0}}/>
        <div style = {{height:"10px", width: "200px", background: "black",
            marginLeft: "120px"}}/>
        <div style = {{height:"400px", width: "10px", background: "black",
            marginLeft: "120px"}}/>
        <div style = {{height: "10px", width: "250px", background: "black"}}>
        </div>

    </div>
}