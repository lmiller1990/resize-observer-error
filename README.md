First, install and build it.

```sh
1. `yarn`
yarn build
cd build
```

Run static server (mine is port 8000):

```sh
python3 -m http.server
```

## E2E Repro


1. `yarn cypress open`
2. Run the only spec present (visit.spec.js) 
3. Observer error, fails
4. Go to `http://localhost:8000` and do the spec manually
5. No error

## Component Testing Repro

1. `yarn cypress open-ct`
2. Run Autocomplete spec
3. Observer error, fails
