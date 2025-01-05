{/* <div id='parent'>
    <div id='child'>
        <h1 id='heading'>I am an h1 tag</h1>
    </div>
</div> */}


const parent = React.createElement('div', {id: 'parent'}, 
    React.createElement('div', {id: 'child'},  
        React.createElement('h1', {id: 'heading'}, 'I am an h1 tag'
)))

const heading = React.createElement("h1", {id: 'heading', className: 'heading'}, "Hello world from react");
const root = ReactDOM.createRoot(document.getElementById('root'));


console.log(parent);
root.render(parent);