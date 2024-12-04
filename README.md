# Next.js 15 App Router: Function Component Page Missing Features

This repository demonstrates a subtle bug in Next.js 15's App Router when using function components as pages.  While the component renders correctly, it lacks certain functionalities expected of a page in the app directory.

## Bug Description

The issue arises when using a simple function component as a page within the `app` directory.  While the component renders without errors, certain features like data fetching middleware might not behave as expected, causing unexpected behavior.

## Steps to Reproduce

1.  Clone this repository.
2.  Run `npm install`.
3.  Run `npm run dev`.
4.  Observe the rendered page; functionality such as data fetching might be missing or behaves incorrectly.

## Expected Behavior

The page should exhibit all functionalities of a standard page component within the app directory.

## Actual Behavior

The page renders, but lacks some page component functionalities, which may be related to the data fetching middleware in the App Router.