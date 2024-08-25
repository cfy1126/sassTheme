let mix = require("laravel-mix");

mix.js("src/app.js", "dist/")
    .sass("src/app.scss", "dist/")
    .options({
        processCssUrls: true  // 默认已经启用，确保处理 SCSS 中的 url() 引用
    })
    .copyDirectory('src/images', 'dist/images');  // 复制图片目录到输出目录
