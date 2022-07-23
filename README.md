# Svelte + TS + Vite VSCode Custom Editor Extension

This is a minimal template to get started developing VSCode extensions using typescript, svelte, and vite.

## Basic Structure
The `extension` and `webview` are treated as two separate projects.

`extension` is a simpler version of the [custom-editor-example](https://github.com/microsoft/vscode-extension-samples/tree/main/custom-editor-sample) and is where all of the `vscode` extension logic lives.

`webview` is the [svelte-ts](https://stackblitz.com/edit/vitejs-vite-1uvmrg?file=index.html&terminal=dev) template updated
to be a library that can be loaded by the `extension` iframe template instead of the default `index.html`. Everything in
the webview is expected to run within the iframe initialized by vscode when a custom editor is initialized.

They are connected by an html template created in the editor provider.

## Setup
Make sure your system has:
* NodeJS
* pnpm
* vscode
* git

With those in place you can clone this repo and run:
```sh
pnpm install
```

## Building and running
1. `extension` and `webview` have different build processes, to run both using `concurrently` you can do:
    ```sh
    pnpm run build
    ```
2. If you haven't already, open this repo in vscode. To debug hit `F5` or go to the debug tab and use the
`Launch Extension` option for `Run and Debug`.
3. Open a `.txt` file in the window with your extension.
4. Run the `View: Reopen Editor With...` command and select `Custom Edit`.

After that you should see the Svelte demo page!

## Notes + caveats
- This project is set up with a minimal build process, you should alter things for a proper production build.
- `tsc` is used to compile `extension` for simplicity. Setting a different build pipeline may scale better for larger
- extensions.
- User beware, I am relatively new to vite + svelte + vscode extension development. I suspect this repo will change as I
learn more.
