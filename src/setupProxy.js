const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        ["/login", "/logout", "/change_password", "/signup", "/home", "/all_sleep", "/all_body", "/all_meditations", "/all_scenes", "/one_sleepstory", "/one_bodytrack", "/one_meditation", "/one_scene", "/upload_single", "/upload_series"],
        createProxyMiddleware({
            target: "http://localhost:2000",
            changeOrigin: true,
        })
    );
};
