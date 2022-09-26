# Welcome to Vi-Thrill (**Vite + Mithril**)

> **Vite + Mithril** Together.

## **Frontend** Applications

This is just a simple example of how to use **Vite** and **Mithril** together to create **Frontend Applications**.

## **Download**

[Vi-Thrill](https://github.com/hlop3z/vite-mithril/releases/download/v0.1.0/app.zip)

## **Install**

```sh
npm install &&\
npm run dev
```

## Project **Layout**

```
root/
|-- public/
|      `-- vite.svg         -> (For Demo inside `./index.html`)
|-- src/
|      |-- components       -> App Components
|      |-- plugins          -> App Plugins (Global Functions)
|      |-- store            -> App Store (Global Variables)
|      |-- views            -> App Views
|      |-- app.js           -> Automatically Loads (Components, Store, Views)
|      |-- main.js          -> App Main File.
|      `-- style.css        -> (For Demo inside `@/src/main.js`)
|-- static/
|      `-- javascript.svg   -> (For Demo inside `@/src/views/home`)
|-- etc...
`--  index.html             -> HTML File
```
