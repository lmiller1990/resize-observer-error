1. `yarn`
2. `yarn cypress open-ct`
3. Run Autocomplete spec
4. Observer error, fails

Does not happen in prod:

```sh
yarn build
cd build
python3 -m http.server
```

Visit http://localhost:8000, no error - component works fine.
