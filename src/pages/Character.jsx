import { useParams } from "react-router-dom"
import { useCharacter } from "../hooks/useCharacter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faSpinner);
import '../App.css'

export default function Character() {

    const { id } = useParams()

    const { data, error, loading } = useCharacter(id)

    if (loading) return (
        <div className='spinner'>
            <FontAwesomeIcon icon='spinner' size='3x' spin />
        </div>
    )
    
    if (error) return <h1>Something went wrong: {error.message}</h1>
    return (
        <div className="character">
            <img src={data.character.image} alt="" />
            <div className="character_content">
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>
                <div className="character_episode">
                    <h2>Episodes featured in:</h2>
                    {data.character.episode.map(({ id, name, episode }) => (
                        <div key={id} className="episodes">
                            &rarr; {name} - <b>{episode}</b>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
