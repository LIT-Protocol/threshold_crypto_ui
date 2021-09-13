#!/bin/bash

export CC=emcc
wasm-pack build --target=web
python3 convert-sdk-only.py 
