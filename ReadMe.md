# run the server using parcel
npx parcel index.html 

https://parceljs.org/

# Parcel:
--> Dev build.
--> creates a local server.
--> HMR - hot module replacement.
--> Parcel uses a file watching algorithm written in c++
--> faster build(with less time for building) due to caching in parcel cache(binary cache)
--> Image optimization
--> Minification of files
--> Bundling
--> Compressing
--> Consistent hashing
--> code splitting
--> differential bundling - support older browsers
--> Diagnostic and error handling
--> Different bundles for dev and prod

# to buld for prod use,
npx parcel build index.html


--> parcel generate a development build and put in the dist folder.
--> do delete the dist folder
--> and remove app.js from main in package.json
--> after building go and check dist folder you can see 1 html, 1 js and 1 css file which contains all compressed stuff that we have written in out idex.html and app.js files


 <!-- "main": "App.js", -->




https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
go to query compositions from this page above
 # browserlist in package.json

 "browserslist":[
    "last 2 Chrome version",
    "last 2 Firefox version"
  ]


