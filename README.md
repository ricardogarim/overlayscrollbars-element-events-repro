# OverlayScrollbars `update.elementEvents` listener repro

`update.elementEvents` (default `[['img', 'load']]`) adds a new listener to an element each time the element moves inside the content. The old listeners stay attached.

Open in StackBlitz: https://stackblitz.com/github/ricardogarim/overlayscrollbars-element-events-repro

Or run it locally:

```sh
npm install
npm run dev
```

The page moves the rows ten times with `insertBefore` and logs the live `load` listeners on one image. Each time the image row moves, the image gets one more listener:

```
after initialization: 1 load listener(s) on the image of row a
after move 1: 1 load listener(s) on the image of row a
after move 2: 2 load listener(s) on the image of row a
...
after move 10: 6 load listener(s) on the image of row a
```

Expected: the image keeps one listener.
