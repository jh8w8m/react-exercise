import React, {useEffect} from "react";

export default function createLazyRender() {
  const renderQueue = [];

  return function LazyRenderHoc(Component) {
    function RenderRealComponent({renderNext, ...rest}) {
      useEffect(() => {
        renderNext(); // when this is done, render next one
      }, [])
      return <Component {...rest}/>
    }

    function RenderLoadingComponent() {
      return <div className={".component-d"}>Loading...</div>
    }

    return class Wrapper extends React.Component{
      constructor(props) {
        super(props);
        console.log('constructor')
        this.state = {
          isRendered: false
        };
        const tryRender = () => {
          // maybe every render takes some time
          setTimeout(() => {
            this.setState({isRendered: true});
          }, 1000);
        }
        this.isQueueFirst = renderQueue.length === 0;
        renderQueue.push(tryRender);
      }

      renderNextComponent() {
        if (renderQueue.length > 0) {
          renderQueue.shift()();
        }
      }

      componentDidMount() {
        // first child in queue call renderNext first
        this.isQueueFirst && this.renderNextComponent();
      }

      render() {
        return this.state.isRendered ? <RenderRealComponent renderNext={this.renderNextComponent} {...this.props}/> : <RenderLoadingComponent />;
      }
    }
  }
}
