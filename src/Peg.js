
export default function Peg({color,x="-10",y="-100"}){

    return(
        <circle cx={x} cy={y} r={10} stroke="black" 
               strokeWidth="2" fill={color} /> 
    )
}