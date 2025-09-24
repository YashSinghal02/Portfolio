import './HeadProject.css';
import Lottie from "lottie-react";
import Projectsanimated from "../../Animations/Projectsanimated.json";
import GitBtn from '../Buttons/GitBtn';

function HeadProject() {
  return (
    <div className="HeadProject-container">
      <div className="HeadProject-flex">
        
        <div className="HeadProject-txt">
          <h2>Explore My Projects</h2>
          <p>
            You can explore all my projects on my GitHub profile. There, you’ll find my activities, contributions, and code across completed and ongoing projects. Feel free to ⭐ star the repos you like, leave comments, or start a discussion. I’m always open to new ideas and collaborations. You can also connect with me through the social media links below.
          </p>
          <GitBtn/>
        </div>

        <div className="HeadProject-img">
          <Lottie animationData={Projectsanimated} loop={true} />
        </div>
      </div>
    </div>
  );
}

export default HeadProject;
