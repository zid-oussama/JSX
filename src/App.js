
import './App.css';
import wall2 from "./wall2.png"

function App() {
  return (
    <div className="App">
{/* EXTRA WORK FRONTEND */}
<div className= 'container'>
<div className="container_content">
<div className="container_content_inner">
<div className="title">
<h1>Hello </h1>
</div>
<div className="par">
<p>
THIS IS MY WORLD
</p>
</div>

</div>
</div>
<div className="container_outer_img">
<div className="img-inner">
<img src={'https://careerfoundry.com/en/wp-content/uploads/2021/01/web_dev_pillar_page.jpg'}  alt="web-dev" className="container_img"/>
</div>
</div>
</div>
<div className="overlay"></div>

{/* CHECKPOINT TASK */}
        <div className='mymain'>
          <div style={{border:'solid 1px white',maxWidth:'100vw'}}>
            <h1 className="title red">Oussama Zid</h1>
            <br />
            <img className="wall-images" src={"./wall1.png"} alt='first-wallpaper'></img>
            <br />
            <img className="wall-images" src={wall2} alt='second-wallpaper'></img>
          </div>
          <video width={320} height={240} controls="controls" autoplay="true" src={'./Learn web development as an absolute beginner.mkv'}  />
        </div>   



    </div>
    
  );
}

export default App;
