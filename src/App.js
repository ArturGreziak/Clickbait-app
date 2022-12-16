import './App.css';


function Post(id, title, intro) {
  //const { id, title, intro } = props;
  return (
    <div>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <p>{intro}</p>
    </div>
  );
}

const posts = [
  { 'id': 1, 'title': 'Pilne: Co to był za dzień!', 'intro': 'Tego świat jeszcze nie widział' },
  { 'id': 2, 'title': 'Wszyscy zazdroszą Polakom!', 'intro': 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił' },
  {
    'id': 3, 'title': 'Adam Małysz Zgolił wąs',
    'intro': 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
]

function App() {

  

  return (
    <div className="App">
      {posts.map((elem, index) => (<Post key={`pos-${index}`} id={elem.id} title={elem.title} intro={elem.intro} /> ))}
      
    </div>
  );
}

export default App;
