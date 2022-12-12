const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.unsplash.com/photo-1618911392289-cd9dd8890860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="https://images.unsplash.com/photo-1509119993276-d691aff73209?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
