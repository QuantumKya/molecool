## Devlog #17 - 11/15/2025
# Forever Chemicals

#### Don't worry, these ones won't make your teeth black.

A great piece of feedback I got was that people should be able to save their molecules as a file. I love data and file formats, so I made my own format for molecule files!  
I named it `.mkf`, for "Molecule Kitchen File". I made the format out of text, so it's still readable to a certain extent, but it's very compact.

Don't worry, if that's too scary, you can also just download your molecules as JSON.  
Anyway, here's the...

## Format

Each atom is represented very simply as a symbol and a position:
```mkf
[symbol][x position],[y position]
```
So `C300,300` would be a carbon atom at the position (300, 300) on the canvas.

<br>

Between the atoms and bonds, there's a semicolon to separate sections.

<br>

Then, each bond is represented as a little module like this:
```mkf
[type (c/i)]:[id of atom 1]>[id of atom 2]^[order of bond]
```
So `c0>1^2` would represent a double covalent bond from atom 0 to atom 1.

<br>

Here's an example of a full molecule file with line breaks and comments added for clarity:
```
Na100,300Cl500,300;i0>1^1
```

Can you figure out what molecule this represents? Try recreating it!


## Cleaning Up

In the spirit of letting people save their work, now there's a button to destroy it!

Hit the button to the right to delete ALL of the atoms. Everything. EVERYTHING.

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

Buuuut you can still hit undo to bring your stuff back.  
Anyway, that's all for this update.

<br>
<br>

Spread your compounds across the internet! Don't make a virus, though.

[<-- Previous Devlog](DEVLOG_16.md)<!--   [Next Devlog --\>](DEVLOG_18.md)-->