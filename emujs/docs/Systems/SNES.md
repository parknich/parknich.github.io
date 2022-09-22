# SNES

There is no bios for this system.

## Code example

```html
<div style='width:640px;height:480px;max-width:100%'>
    <div id='game'></div>
</div>

<script type='text/javascript'>

    EJS_player = '#game';
    EJS_core = 'snes';

    // SNES Mouse
    
    EJS_mouse = false; 

    // SNES Multitap

    EJS_multitap = false; 

    // URL to Game rom
     
    EJS_gameUrl = '';
    
    /*
     *  Path to the WASM / JS files
     *  HAS TO BE in the same directory.
     */
    
    EJS_pathtodata = 'data/';
    
</script>

<script src='data/loader.js'></script>
```

## ROM Type

Your **ROM** can have the following types:
- `smc`
- `fig`
- `sfc`
- `gd3`
- `gd7`
- `dx2`
- `bsx`
- `swc`

