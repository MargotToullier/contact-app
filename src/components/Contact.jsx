import "./Contact.css";

const name = "Margot";
const online = false;
const avatar =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png";

const Contact = () => {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} />
      <div>
        <h3 className="name">{name}</h3>
        <div className="status">
          <p className="status-text">{online ? "Online" : "Offline"}</p>
          <div className={online ? "status-online" : "status-offline"}> </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;