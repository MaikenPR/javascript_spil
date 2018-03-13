# 2D breakout game using pure JavaScript

In this step-by-step tutorial we create a simple MDN Breakout game written entirely in pure JavaScript and rendered on HTML5 `<canvas>`.

_Kilde: https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript _

### Step 1

**For at være i stand til at overføre grafik til vores canvas element, skal vi først have fat i elementet i javascript:**

```javascript
var canvas = document.getElementById("myCanvas"); 
var ctx = canvas.getContext("2d");
```

* `var canvas = document.getElementById("myCanvas");` - er en reference til canvas-html-elementet som ligges ned i en variabel canvas.
* `var ctx = canvas.getContext("2d");` - der referes til canvas og tilføjer funktionen getContext med parametret 2d der ligges ned i variablen ctx som nu fungere som værktøj der er linket til `<canvas>`.


**Her under oprettes en firkant i vores canvas element:**

```javascript
ctx.beginPath(); 
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000"; 
ctx.fill();
ctx.closePath();
```

* `ctx.beginPath();` - beginPath er en metode til at starte/åbne redigeringen af vores værktøj. Det svare til at vi sætter blyanten på papiret.
* `ctx.rect(20, 40, 50, 50);` - rect er en metode der opretter en rektangel. De første 2 parametre i paranteserne fortæller hvor på x- og y-aksen rektanglen skal placeres, mens de 2 sidste parametre angiver størrelsen på den.
* `ctx.fillStyle = "#FF0000";` - fillStyle er en property som opbevare en farve.
* `ctx.fill();` - fill er en metode der giver/overføre farven til rektanglen.
* `ctx.closePath();` - closePath er en metode der afslutter/lukker redigeringen af værktøjet. Det svare til at vi ligger blyanten fra os igen.


**Dernæst opretter vi en cirkel:**

```javascript
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

* Vi bruger igen `beginPath` og `closePath` til at åbne og lukke redigeringen. Samt `fillStyle` som dog blot har fået farven grøn fremfor en hexa kode, og så `fill`.
* Det vigtigste nye i denne gode er `arc()` som er en metode der bestemmer formen, og i det her tilfælde en cirkel.
* `arc` tager i mod 6 parametre:
    * De første 2 parametre er x og y koordinater der angiver cirklens midte.
    * Det næste er cirklens radius.
    * Fjerde er hvor cirklen starter, hvor man sætter blyanten (0 er i højre side af cirklen).
    * Femte parameter Math.PI*2 fortæller hvor meget af cirklen der skal tegnes - 2 er hele vejen rundt, så det faktisk bliver til en cirkel. Man kan lave det anderledes også. Se: https://www.w3schools.com/tags/canvas_arc.asp 
    * Den sidste bestemmer om cirklen skal tegnes med eller mod uret og er frivillig. Default er false = med uret. (True er så mod uret).

**Vi laver en rektangel uden fyldefarve, men med farvede kanter:**

```javascript
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
```

* Igen briger vi beginPath, rect og closePath - det nye her er strokeStyle og stroke.
* I stedet for fillStyle og fill som udfylder hele figuren med farve, bruger vi i stedet strokeStyle og stroke som blot giver de udvendige kanter farve.
* Kantfarven bliver blå, men er semi gennemsigtig takket være det sidste parameter.


### Step 2 - Make it move!
_Der vil herfra være færre kommentarer, men alt står forklaret på engelsk hvis man følger det link der er angivet som kilde øverst i dokumentet._

