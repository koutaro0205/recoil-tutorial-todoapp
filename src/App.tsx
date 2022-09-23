import './App.css'
import { RecoilRoot } from 'recoil'
import InputTask from './components/InputTask';
import AddTask from './components/AddTask';

const App: React.FC = () => {

  return (
    // RecoilTaskCでラップすることによって、配下のCで状態変数を使える
    <RecoilRoot>
      <div className='task'>
        <InputTask />
        <AddTask />
      </div>
    </RecoilRoot>
  )
}

export default App;
