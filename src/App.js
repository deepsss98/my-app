import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Displayname
        name="Deepika"
        url="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Displayname name="Kumar" url="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
     />
      <Displayname
        name="Amutha"
        url="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </div>
  );
}

function Displayname(props) {
  return (
    <div className="App1" style={{ color: "brown", textAlign: "center" }}>
      <h1>Hello {props.name}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <br />
      <img className="profile-pic" src={props.url} alt="" />
    </div>
  );
}
