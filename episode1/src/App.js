import './App.css';
import { User } from './Users';
import { planets } from './Planets';

const age = 15;

age >= 18 ? console.log('A') : console.log('B');

function App() {
    // const users = [
    //     { name: 'Pedro', age: 21 },
    //     { name: 'Jake', age: 25 },
    //     { name: 'Jessica', age: 45 },
    // ];
    // return (
    //     <div className="App">
    //         {users.map((user, key) => {
    //             return <User name={user.name} age={user.age} />;
    //         })}
    //     </div>
    // );

    return (
        <div className="App">
            {planets.map((planet) => {
                return <div>{planet.isGasPlanet ? planet.name : ''}</div>;
            })}
        </div>
    );
}

export default App;

// function App() {
//     return <div className='App'></div>;
// }
