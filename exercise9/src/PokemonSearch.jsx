import { useState, useEffect } from "react";

const PokemonSearch = ()=>{
    const [pokemonName, setpokemonName] = useState("");
    const [pokemanData, setPokemanData ] = useState(null);
    const [loading, setLoading]=  useState(false);
    const [error, setError]= useState("")

    useEffect(()=>{
        if(error){
            console.error("error" ,error);
        }
    },[error]);

    const handleSearch = async() => {
        if(!pokemonName) return
        setLoading(true)
        setError("")
        setPokemanData(null)

        try {
            const response = await fetch(`https://api.github.com/users/${pokemonName.toLocaleLowerCase()}`);

            if(!response.ok){
                throw new Error("github not found");
                
            }
            const data = await response.json()
            console.log(data);
            setPokemanData(data)
            

        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }

    }
    return(
        <div>
            <h1>Github User Search</h1>
            <input type="text" value={pokemonName} placeholder="enter github user" onChange={(e)=> setpokemonName(e.target.value)}/>
            <button onClick={handleSearch}>search</button>

            {loading && <p>Loading...</p> }
            {error && <p>Error:{error}</p> }
            {
                pokemanData && (
                    <div>
                        <h3>{pokemanData.name || pokemanData.login}</h3>
                        <img 
                        src={pokemanData.avatar_url}
                         alt={pokemanData.login} 
                         width="100px"
                         />
                          <p>Location: {pokemanData.location || 'N/A'}</p>
                        <p>Public Repos: {pokemanData.public_repos}</p>
                    </div>
                )
            }

        </div>
    )
}
export default PokemonSearch;