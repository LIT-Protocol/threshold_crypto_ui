#!/bin/bash

wasm-pack build --target=web
python3 convert-sdk-only.py 
