module.exports = {
  // Added this section from PJRNL 
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "static",
  publicPath: "http://0.0.0.0:8080/",
  // publicPath: "/",

  devServer: {
    port: 8080,
    host: "0.0.0.0",
    watchOptions: {
      aggregateTimeout: 500,
      poll: 1000
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Access-Control-Request-Method",
      "Access-Control-Allow-Credentials": "true"
    }
  },
  // Added above from PJRNL

  // pages: {
  //   index: {
  //     // entry for the page
  //     entry: "src/main.js",
  //     // the source template
  //     template: "public/index.html",
  //     // output as dist/index.html
  //     filename: "index.html",
  //     // when using title option,
  //     // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: "My App"
  //   }
  // }
};
