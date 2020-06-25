---
layout: default
---

## Supported Tags

Our configuration supports the following latex tags:

### Inline Latex
**Input:** \\\\( x^2 \\\\)

**Output:** \\( x^2 \\)

### Display Latex
**Input:** \$$ x^2 \$$

**Output:** $$ x^2 $$

**Input:** \\\\[ x^2 \\\\]

**Output:** \\[ x^2 \\]

### Environments
**Input:**
<p class="mathjax_ignore">
\begin{bmatrix} <br>
1 & 2 & 3\\\ <br>
a & b & c <br>
\end{bmatrix} <br>
</p>

**Output:**
\begin{bmatrix}
1 & 2 & 3\\\
a & b & c
\end{bmatrix}

### Asymptote
#### Compiling
Compile your Asymptote code with `asy -f html myasymptote.asy`. This will produce an html file, add this to the repository under `assets/asymptote` and add it to the page using:
```html
<iframe src="assets/asymptote/myasymptote.html"></iframe>
```

**Input:**
```python
import tube;
import graph3;
import palette;
currentlight=White;

size(0,8cm);
currentprojection=perspective(1,1,1,up=-Y);

int e=1;
real x(real t) {return cos(t)+2*cos(2t);}
real y(real t) {return sin(t)-2*sin(2t);}
real z(real t) {return 2*e*sin(3t);}

path3 p=scale3(2)*graph(x,y,z,0,2pi,50,operator ..)&cycle;

pen[] pens=Gradient(6,red,blue,purple);
pens.push(yellow);
for (int i=pens.length-2; i >= 0 ; --i)
  pens.push(pens[i]);

path sec=scale(0.25)*texpath("$\pi$")[0];
coloredpath colorsec=coloredpath(sec, pens,colortype=coloredNodes);
draw(tube(p,colorsec),render(merge=true));
```
**Output:**
<iframe src="assets/asymptote/trefoilknot.html" class="asymptote"></iframe>
#### Controls
Clicking and dragging rotates the shape. The scroll wheel can be used to zoom in and out. Pressing the control key and clicking and dragging pans the screen.