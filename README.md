# L.Control.Display
___
Check out the [Demo](http://puniha.github.io/L.Control.Display/example/).
## source code
```javascript
// remain this default
var disp = L.control.display().addTo(map);

// When you want to change this default, set up options here.
// var disp = L.control.display({backgroundColor: "#ff0"}).addTo(map);

// Default display is displayed. (No notation)
disp.show();

// Default display is displayed. (With notation)
// disp.show("test");

// Default display is customed temporarily, and displayed. (※Default has not changed.)
// disp.show("test2", {backgroundColor: "#f30"});

```
## Creation
| Factory                                         | Description  |
| :---------------------------------------------- | :----------- |
| `L.control.display(<display options> options?)` | Instantiates a display object |
## Options
| Option            | Type        | Default                      | Description  |
| :---------------- | :---------- | :--------------------------- | :----------- |
| `backgroundColor` | String      | `'rgba(255, 255, 255, 0.8)'` | Display's backgroundColor. |
| `borderColor`     | String      | `'rgb(100, 100, 100)'`       | Display's borderColor. |
| `fontSize`        | String      | `'14px'`                     | Notation's fontSize. |
## Methods
| Methods                                                   | returns     | Description  |
| :-------------------------------------------------------- | :---------- | :----------- |
| `hidden()`                                                | `undefined` | Display is hidden. |
| `show(<String> htmlContent?, <display options> options?)` | `undefined` | Display is shown.  |
| `setStyle(<display options> options?)`                    | `undefined` | Display's style is changed temporarily. |
