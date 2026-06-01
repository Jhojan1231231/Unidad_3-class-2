import { useState } from 'react';
import './App.css';

function App () {
    const [tareas, setTareas] = useState([]);
    const [texto, setTexto] = useState('');

function agregarTarea() {
    if (texto.trim() === '') return;
    const nueva = {
        id: Date.now(),
        titulo: texto,
        hecha: false,
    };
    setTareas([...tareas, nueva]);
    setTexto('');
}
<button onClick={agregarTarea}>agregar</button>

    return (
        <div className="App">
            <h1>Mi lista de tareas</h1>

            <div className='entrada'>
            <ul>
                {tareas.map((t) => (
                    <li key={t.id}>
                        <span>{t.titulo}</span>
                    </li>
                ))}
            </ul>
                <input
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    placeholder='Escribe una tarea'
                />
                <button>agregar</button>  
            </div>    
        </div>

    );
}

export default App; 

