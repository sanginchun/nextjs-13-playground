# Next.js 13 playground

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Changes are made to the default project, to test new features of Next.js 13 and React 18; `app` routing files, server components, streaming (SSR), transitions.

## Features

_For better demonstration, API fetches are delayed and NOT cached._

- `/posts` page demonstrates the component hierarchy and the usage of `Suspense`, `Fallback` and streaming.

  1. The common `layout` is in view, while posts are loading with the `loading` component.
  2. Posts are in view, while the `UserInfo` and the `Comments` are loading with their own `fallback`s.
  3. `UserInfo` is in view, and `Comments` is in view.

- `/todos` page demonstrates an example of client-side state change causing a refetch to the data source while still making use of SSR.
  1. By clicking the buttons: `ALL`, `DONE`, `NOT DONE`, url changes. (`router.push`)
  2. Next.js performs client-side navigation to the url, while data fetches are made by the server.
  3. Notice that the button colors change immediately, while the `TodoList` changes slowly. Also dimmed effect is shown, using `isPending`, `startTransition`. Try `router.push` without them to compare.
