module.exports = {
    chainWebpack: (config) => {
        config.module
        .rule("vue")
        .use("vue-loader")
        .loader("vue-loader")
        .tap((options) => {
            return options;
        });
    },
};
// module.exports = {
//     outputDir : 'C:\Users\admin\Desktop\WEB\vue-project'
// }
module.exports = {
    configureWebpack : {
        resolve : {
            extensions: [".js", ".vue", ".json"],
        }
    }
}