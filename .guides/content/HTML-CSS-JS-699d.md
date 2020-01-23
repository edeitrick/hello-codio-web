## Slider

You can create a `slider` element with the `createSlider` command. `createSlider` has four parameters; two of them are required, and two are optional.

![Create Slider](.guides/img/createSlider.png)

## Add a Slider

First create the variable `slider` to represent the slider.

```javascript
let angle, val, slider
```

Then, in the `setup` function, set the value of `slider` to `createSlider`. Since this slider will be used to control the color of the animated lines, the slider needs to go from 0 to 255. We want the actual slider to start in the middle, so set the third parameter to 127.

```javascript
function setup() {
    createCanvas(400, 400)
    angleMode(DEGREES)
    strokeWeight(5)
    colorMode(HSB)
    val = 0
    angle = 0
    slider = createSlider(0, 255, 127)
}
```

## Positioning the Slider

By default, the slider is all the way on the left of the page. Styling for a slider be done in JavaScript. After creating the slider, change the `display` to `block` and set the `margin` to `auto`.

```javascript
function setup() {
    createCanvas(400, 400)
    angleMode(DEGREES)
    strokeWeight(5)
    colorMode(HSB)
    val = 0
    angle = 0
    slider = createSlider(0, 255, 127)
    slider.style("display", "block")
    slider.style("margin", "auto")
}
```