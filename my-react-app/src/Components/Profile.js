function Profile(){
    const Person={
        Name:"abdurraheman",
        imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMD7vv6Z46c_xOVqdEy3I2eNz21Yx-cvddA&usqp=CAU',
        Theme:{
            backgroundColor:'black',
            color:'white',
        }
    }
    return(
        <>
        <h1>{Person.Name}</h1>
        <img src={Person.imgUrl} alt="" />
        </>
    )
}
export default Profile;