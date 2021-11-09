import {WaterForm} from '@mono-repo-demo/common';
import './App.css';

function App() {
    const onChangeWaterForm = (v) =>{
        console.log(v,'我是光宇通页面输出');
    }
  return (
    <div className="App">
      <h1>我是光宇通页面</h1>
      <WaterForm
          onChangeWaterForm={(v)=>{onChangeWaterForm(v)}}
      />
    </div>
  );
}

export default App;
