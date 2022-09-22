# Nintendo Game Boy Advance

I do not know the file extension limits for this system.

## Code example

```html
<div style='width:640px;height:480px;max-width:100%'>
    <div id='game'></div>
</div>

<script type='text/javascript'>

    EJS_player = '#game';
    EJS_core = 'gba';

    // URL to Bios file

    EJS_biosUrl = '';
    
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

## BIOS

You can search for the BIOS you need by utilizing the **MD5** checksum.

| Type | MD5 Checksum |
|------|--------------|
| Game Boy Advance | `a860e8c0b6d573d191e4ec7db1b1e4f6`
| Game Boy | `32fbbd84168d3482956eb3c5051637f5`
| Game Boy Color | `dbfce9db9deaa2567f6a84fde55f9680`
| Super Game Boy | `d574d4f9c12f305074798f54c091a8b4`

