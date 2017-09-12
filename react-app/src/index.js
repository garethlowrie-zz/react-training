import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import MountUnmount from './MountUnmount';
import ClockApp from './ClockApp';
import CreateComponentsFromArrays from './CreateComponentsFromArrays';
import HigherOrderComponents from './HigherOrderComponents';
import JSXCompiler from './JSXCompiler';
import Children from './Children';
import CloneElements from './CloneElements';
import ReusableComponents from './ReusableComponents';

ReactDOM.render(
    <App cat={5} txt="Hello World Prop Title" />,
    document.getElementById('root')
);

ReactDOM.render(
    <App2 />,
    document.getElementById('events')
);


ReactDOM.render(
    <MountUnmount />,
    document.getElementById('lifecycle')
);

ReactDOM.render(
    <ClockApp />,
    document.getElementById('clock')
);

ReactDOM.render(
    <HigherOrderComponents />,
    document.getElementById('higherorder')
);

ReactDOM.render(
    <CreateComponentsFromArrays />,
    document.getElementById('arrays')
);

ReactDOM.render(
    <JSXCompiler />,
    document.getElementById('jsxcompiler')
);

ReactDOM.render(
    <Children />,
    document.getElementById('children')
);

ReactDOM.render(
    <CloneElements />,
    document.getElementById('cloneElements')
);

ReactDOM.render(
    <ReusableComponents />,
    document.getElementById('reusableComponents')
);





