import facebook from "../FaceBook/facebook.png";
const FaceBook = () => {
    const FaceBookUrl = "https://www.facebook.com/"
    return ( 
        <a href={FaceBookUrl} target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Search icon"/>
        </a>
     );
}
 
export default FaceBook;