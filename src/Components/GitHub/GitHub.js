import github from "../GitHub/github.png"
const GitHub = () => {
    const GitHubUrl = "https://www.github.com/"
    return ( 
        <a href={GitHubUrl} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="Search icon" />
        </a>
     );
}
 
export default GitHub;