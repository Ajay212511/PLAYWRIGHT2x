interface Point{
    readonly x:number,
    readonly y:number
}

const point:Point={
    x:10,y:20  
}
//point.x=5  can't reassing this values because this is ready only

//Readonly array
interface Data {
    readonly items:readonly number[];
}