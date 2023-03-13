import Avatar from "./Avatar";
function Profile(){
    return(
        <>
        <Avatar
        size={180}
        Person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }} />
        <Avatar
        size={120}
        Person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
        
      />
        <Avatar
        size={120}
        Person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
        
      />
        </>
    )
}
export default Profile;