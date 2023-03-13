import {getImageUrl} from './Utils'
function Avatar (props){
    const {Person,size} = props;
    let thumbnailSize = 's';
    if (size > 90) {
      thumbnailSize = 'b';
    }
    return(
        <>
        <img src={getImageUrl(Person,thumbnailSize)}
         alt={Person.name}
         height = {size}
         width = {size} />
        </>
    )
}

export default Avatar;