import 'react-app-polyfill/ie11'
import 'normalize.css'
import './css/loader.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useBackgroundImage } from '../src'

const Loader = () => (
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate3d(-50%,-50%,0)',
    }}>
    <div className="loader" />
  </div>
)

const App = () => {
  const { src, isLoading, hasError } = useBackgroundImage({
    src: 'https://www.cornify.com/assets/cornify-the-experience.jpg',
  })

  if (isLoading) return <Loader />

  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        fontFamily: 'Arial, Verdana',
        height: '100vh',
      }}>
      <div
        style={{
          width: '500px',
          position: 'relative',
          top: '20vmin',
          margin: 'auto',
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.3)',
        }}>
        <h1>This is a Hero with a Background Image</h1>
        <ol>
          <li>
            The image is loading? <strong>{isLoading}</strong>
          </li>
          <li>
            The image has the following src: <strong>{src}</strong>
          </li>
          <li>
            The image has error? <strong>{hasError}</strong>
          </li>
        </ol>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
