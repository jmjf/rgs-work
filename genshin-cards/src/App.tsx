import React from 'react';

export interface AppProps {
  title: string;
}

export const App = ({title}: AppProps) => {
  return (<div className="header">{title}</div>);
};

// Or, class notation, which I got working first
// export class App extends React.Component<AppProps>{
//   render() {
//     return (
//       <div className="header">
//         {this.props.title}
//       </div>
//     );
//   }
// }
