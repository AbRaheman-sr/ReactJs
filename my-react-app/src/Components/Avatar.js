import Card from "./Card";

function Avatar (props){
    const {Person}=props;
    return(
        // passing jsx directly through custom component 
        <>
        <Card>
        <img src={Person.imgUrl} alt={Person.name} 
        width={Person.size}
        height={Person.size}
        />
        <h1>{Person.name}</h1>
        </Card>
        </>
    )
}

export default Avatar;
