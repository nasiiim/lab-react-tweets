import User from "./User";
import ProfileImage from "./ProfileImage";
import Actions from "./Actions";
import Message from "./Message";
import Timestamp from "./Timestamp";



function Tweet(props) {

  return (
    <div className="tweet">
      <ProfileImage src={props.tweet.user.image}/>
      
      <div className="body">
        <div className="top">
          <span className="user">
            <User  user={props.tweet.user} />
          </span>

          <Timestamp timestamp={props.tweet.timestamp} />
        </div>
        <Message message={props.tweet.message}/>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
