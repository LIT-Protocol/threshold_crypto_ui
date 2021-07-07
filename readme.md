# How to build the project

```bash
$ wasm-pack build --target=web; python convert.py
```

This will create bls-standalone.html which you can double click to use the tool.

# Developers

Add new wasm functions to `src/lib.rs`.

These wasm functions can be called from javascript, usually by adding a function
to `html/js/index.js` under the `threshold_crypto wasm calls` section.

If you change the rust, you need to update the standalone html file:

```
$ wasm-pack build --target=web; python convert.py
```

If you only change the javascript or html or css, you can update the
standalone page without rebuilding the wasm library.

```
$ python convert.py
```

After every change you will need to rebuild the standalone html file.

Once generated, bls-standalone.html (in the root of the repo) can be double
clicked to open in your browser.

```
(Note from Chris when building on a mac) First, run export CC=`which cc` because by default wasm-pack will try to use clang and it can't find the stdlib.h library in clang for some reason.

```