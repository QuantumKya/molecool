## Devlog #20 - 12/29/2025
# Analysis Catalysis

#### For real this time!!!

I decided that before making a tutorial, I'd work on an algorithm for identifying functional groups in a molecule.

## Code

I started by making a class for a functional group template that could be used to check for them. Here it is.  
```js
class FunctionalGroupMolecule {
    constructor(atomStrs, bondStrs) {
        this.atoms = atomStrs;
        this.bonds = bondStrs;
    }

    isTheSame(otherOne) {
        if (!haveSameContents(this.atoms, otherOne.atoms)) return false;
        
        if (haveSameContents(this.bonds, otherOne.bonds)) return true;

        const duplicates = {};
        this.atoms.forEach((atom, i) => {
            if (duplicates[atom] === undefined) duplicates[atom] = [i];
            else duplicates[atom].push(i);
        });

        Object.entries(duplicates).filter(ent => ent[1].length !== 1).forEach(ent => {
            for (let i = 0; i < ent[1].length; i++) {
                for (let j = i; j < ent[1].length; j++) {
                    const numCycle = s => s.replaceAll(/\d+(?<!:)/g, match => {
                        const number = parseInt(match, 10);
                        if (number === i) return j.toString();
                        if (number === j) return i.toString();
                    });

                    if (haveSameContents(this.bonds, otherOne.bonds.map(numCycle))) return true;
                }
            }
        });

        return false;
    }
}
```  
The function there is for comparing, hence its name.

Then, I tried to make the actual molecule-searching algorithm. At first, I tried reusing the Breadth-First Search algorithm from the shortest path code, but that ended up being really not the best for the job; i.e., I got frustrated and quit to try something else.  
Instead, I ended up using a method where I first find all of the atoms that could be part of a functional group, then try all of their permutations to see if they work.  
Now, I have an algorithm that works! Check it out in [molecule.js](../molecule.js).

## On the Website

I've added a button that lets you see which functional groups exist in your molecule. It's called "Find Functional Groups". When you click it, it highlights the atoms involved. The atoms in the group are highlighted in yellow, and those outside of it (typically labeled R on a functional group diagram) in green.  
I'll add more functional groups to the list that it searches for. Here are the ones present as of this devlog's release.

- Hydroxy
- Carboxyl
- Amino
- Phosphate
- Methyl
- Alkene
- Alkyne
- Benzene Ring
- Sulphate
- Aldehyde
- Carboxylic Acid
- Alkyl Halides

You may notice that some important ones are missing. That's because, sadly, my code doesn't work for groups with more than one R group (distinct or symmetric).  I'll try to add that soon, but for now it works great for what it can do!

<br>
<br>

Have fun not being confused, and see you next time!

[<-- Previous Devlog](DEVLOG_19.md)<!--   [Next Devlog --\>](DEVLOG_21.md)-->