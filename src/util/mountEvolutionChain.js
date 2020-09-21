/* The evolution chain data that we get from the 
pokeapi is a deeply nested structure that's not easy to work with. 
So I made this function that takes this JSON tree and turns into an array of the pokemons, 
that represent the evolution chain a certain pokemon may be in */
/* The evolution chain structure is like this: 
{
    chain : {
        evolves_to: [
            {
                evolves_to: [
                    evolves_to: [], the evolution chain ends here 
                    species: {
                        name: "venusaur",
                        url: venusaurURL
                    }
                ],
                species: {
                    name: "ivysaur",
                    url: ivysaurURL
                }
            }
        ],
        species: {
            name: "bulbasaur",
            url: bulbasaurURL
        }
    }
} 
*/

//This function visits a node of the evolution tree and adds all of its children to the array
function visit(node, array) {
  const childNodes = node.evolves_to;

  if (childNodes === []) return;

  for (let child of childNodes) {
    array.push(child.species);
    visit(child, array);
  }
  return array;
}

export default function mountEvolutionChain(chain) {
  let initialNode = chain;
  return visit(initialNode, [initialNode.species]);
}
