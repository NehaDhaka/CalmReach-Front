import "./Welcome.scss";
export default function Welcome({ currentUser }) {
  return (
    <div className="welcome">
      <img src="" alt="" />
      <h1>
        Welcome, <span>{currentUser.name}</span>
      </h1>
      <h3>No chats so far</h3>
    </div>
  );
}
