import React, {Component} from 'react';
import SModal from './SModal';

class App extends Component {
  constructor(props){
    super(props);
    this.state={showModal: false}
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
      }));
  }

  render(){
    return (
      <div className="App">
        <SModal open={this.state.showModal} onClose={this.toggleModal}><div>Hello world</div></SModal>
        <button onClick={this.toggleModal}>
          {this.state.showModal ? 'Close modal' : 'Show modal'}
        </button>
      </div>
    );
  }
}

export default App;
