const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const cleanCSS = require('gulp-clean-css');
const cmq = require('gulp-combine-media-queries');
const rename = require('gulp-rename');
const autoprefixer = require("gulp-autoprefixer");
const glob = require('gulp-sass-glob');

let src =  'src/';
let doc =  'docs/';

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', () => {
    gulp.src(src + 'sass/style.scss')
        .pipe(plumber())
        //Errorでも終了しないように
        .pipe(glob())
        //sassのimportを一括化
        .pipe(sass())
        //Scssのコンパイル
        .pipe(autoprefixer({}))
        //ベンダープレフィックスの自動付与
        .pipe(cmq())
        // そのままだとエラーが出るので、
        //node_modules/gulp-combine-media-queries/index.js
        //:152 file.contents = new Buffer(cssJson);
        //この記述を削除
        .pipe(cleanCSS())
        // minify化
        .pipe(rename({
            suffix: '.min'
        }))
        //名前変更
        .pipe(gulp.dest(doc + 'css/'));
});

gulp.task('watch', () => {
    gulp.watch(
        src + '**/*.scss', ['sass']
    );
});
