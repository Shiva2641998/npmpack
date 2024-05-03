import './App.css';

function Chat({titile}) {
  return (
    <div className="Chat">
      {titile || "shiva"}
    </div>
  );
}

export default Chat;
