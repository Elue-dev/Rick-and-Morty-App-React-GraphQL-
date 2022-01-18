import { gql, useLazyQuery } from '@apollo/client'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faSpinner);

const GET_CHARACTER_LOCATIONS = gql`
    query GetCharacterLocations ($name: String!) {
        characters(filter: {name: $name}) {
            results {
            location {
                name
            }
          }
        }
     }
`

export default function Search() {

    const [ name, setName ] = useState('')

    const [ getLocations, { loading, error, data } ] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name
        }
    })

    return (
        <div className='search_location'>
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Add a character...'
                className='search_character_location'
                required
             />
            <button onClick={() => getLocations()}>Search Locations</button>
            {loading && ( 
                <div className='search_spinner'>
                    <FontAwesomeIcon icon='spinner' size='2x' spin />
                </div>
            )}
            {data && (
                <div>
                    {data && <h2>Locations:</h2>}
                    {data?.characters?.results.map(({id, location: { name } }) => (
                        <div key={id} className='character_location'>
                            &rarr; {name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
