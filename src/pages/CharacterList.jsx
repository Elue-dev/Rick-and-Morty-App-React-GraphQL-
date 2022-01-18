import { Link } from 'react-router-dom'
import { useCharacters } from '../hooks/useCharacters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faSpinner);
import '../App.css'

export default function CharacterList() {

    const { error, loading, data } = useCharacters()

    if (loading) return (
        <div className='spinner'>
         <FontAwesomeIcon icon='spinner' size='3x' spin />
      </div>
    )

    if (error) return <h1>Something went wrong: {error.message}</h1>

    return (
        <div className='character_list'>
            {data.characters.results.map(({id, image, name}) => (
                <Link to={`${id}`}>
                    <div className='character_card' key={id}>
                        <img src={image} alt={name} />
                        <h3 className='character_name'>{name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    )
}
