import {useContext} from 'react'
import { stateContext } from '../App'

function NoteList() {
   const {data, isPending} = useContext(stateContext);

    return (
        <main className='container grid-cols-4 bg-red-700'>
            {isPending && <p>Loading ...</p>}
            {data.map((notes) => (
                <section className="display-wrapper" key={notes.id}>
                    <section className="display-box">
                        <h3>{notes.title}</h3>
                        <p>{notes.content}</p>
                    </section>
                </section>
            ))}
        </main>
    )
}

export default NoteList