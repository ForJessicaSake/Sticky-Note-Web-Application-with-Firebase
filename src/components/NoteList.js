import { useContext } from 'react'
import { stateContext } from '../App'

function NoteList() {
    const { data, isPending } = useContext(stateContext);

    return (
        <main className='container grid grid-cols-3 '>

                {isPending && <p>Loading ...</p>}
                {data.map((notes) => (
                    <div className="display-wrapper" key={notes.id}>
                        <section className="display-box border even:bg-gray-100 border-l-8 p-8 rounded-lg w-96	 mt-6">
                            <h3>{notes.title}</h3>
                            <p>{notes.body}</p>
                        </section>
                    </div>
                ))}
        </main>
    )
}

export default NoteList