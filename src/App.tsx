import React, {PureComponent, Fragment} from 'react';
import ReactDOM from 'react-dom';
import SEO from '@component/SEO';
import '@style/index.css';

class App extends PureComponent {
	render() {
		return (
      <Fragment>
        <SEO />
        <div>
          <h1>Hello World!</h1>
        </div>
      </Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));