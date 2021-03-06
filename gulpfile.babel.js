import gulp from 'gulp';
import runSequence from 'run-sequence';
import del from 'del';
import eslint from 'gulp-eslint';
import pngquant from 'imagemin-pngquant';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import babel from 'babelify';
import buffer from 'vinyl-buffer';
import loadPlugins from 'gulp-load-plugins';
import watchify from 'watchify';
import files from './files';
import plato from './helpers/plato';
var plugins = loadPlugins();


/**
 * Get the current [hrs:min:sec] timestamp used in the console
 *
 * @returns {string}
 */
function getTimestamp() {
    let date = new Date();
    return '[' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ']  ';
}

function compile(watch) {
    let bundler = browserify(files.src.entry, { debug: true }).transform(babel);

    function rebundle() {
        bundler.bundle()
            .on('error', function (err) {
                console.error(err);
                this.emit('end');
            })
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(plugins.sourcemaps.init({ loadMaps: true }))
            .pipe(gulp.dest(files.dest.js))
            .pipe(plugins.uglify())
            .pipe(plugins.rename('app.min.js'))
            .pipe(plugins.sourcemaps.write('./'))
            .pipe(gulp.dest(files.dest.js));
    }

    if (watch) {
        watchify(bundler.on('update', function () {
            rebundle();
        }));
    }

    rebundle();
}

/**
 * ASSETS
 */
gulp.task('fonts', () => {
    return gulp.src(files.src.fonts)
        .pipe(gulp.dest(files.dest.fonts));
});

gulp.task('images', () => {
    return gulp.src(files.src.images)
        .pipe(plugins.plumber())
        .pipe(plugins.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(files.dest.images));
});


/**
 * HTML
 */

gulp.task('html', () => {
    return gulp.src(files.src.html)
        .pipe(plugins.plumber())
        .pipe(plugins.angularHtmlify())
        .pipe(gulp.dest(files.dest.dir));
});

gulp.task('template-cache', () => {
    return gulp.src(files.src.partials)
        .pipe(plugins.angularTemplatecache({
            standalone: true,
            moduleSystem: 'ES6'
        }))
        .pipe(gulp.dest(files.dest.tmp));
});


/**
 * JS
 */

gulp.task('js', () => {
    compile();
});

gulp.task('size', () => {
    return gulp.src(files.src.size)
        .pipe(plugins.sizereport({
            gzip: true
        }));
});

gulp.task('eslint', () => {
    return gulp.src(files.src.js)
        .pipe(plugins.plumber())
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('jscs', () => {
    return gulp.src(files.src.js)
        .pipe(plugins.plumber())
        .pipe(plugins.jscs())
        .pipe(plugins.jscs.reporter());
});


/**
 * STYLES
 */

gulp.task('styles', () => {
    return plugins.rubySass(files.src.sass)
        .pipe(plugins.sourcemaps.init())
        .on('error', plugins.rubySass.logError)
        .pipe(plugins.concat('app.css'))
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest(files.dest.css))
        .pipe(plugins.rename('app.min.css'))
        .pipe(plugins.cssnano())
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest(files.dest.css));
});

gulp.task('scsslint', () => {
    return gulp.src(files.src.sassIgnoreReset)
        .pipe(plugins.scssLint({
            config: files.configs.scssLint
        }));
});


/**
 * DOCS
 *
 *
 */

gulp.task('jsdoc', plugins.shell.task([
    'jsdoc app -r -d docs/jsdoc -R README.md -c jsdoc.json'
]));

gulp.task('todo', () => {
    return gulp.src(files.src.allJs)
        .pipe(plugins.todo())
        .pipe(gulp.dest('./'));
});

gulp.task('metrics', (cb) => {
    plato(cb);
});


/**
 * CLEANUP
 */

gulp.task('clean', () => {
    return del(files.dest.dir);
});

gulp.task('clean-docs', () => {
    return del(files.dest.docs);
});


/**
 *  WATCHES
 */
gulp.task('watch', () => {
    var jsWatch = gulp.watch(files.src.appJs);
    var htmlWatch = gulp.watch(files.src.html);
    var scssWatch = gulp.watch(files.src.sass);

    compile(true);

    jsWatch.on('change', function (event) {
        runSequence('eslint', 'jscs', 'docs', () => {
            console.log(getTimestamp() + ' ------  JS WATCH FINISHED ------');
        });

    });

    htmlWatch.on('change', event => {
        runSequence('html', 'template-cache', 'js', () => {
            console.log(getTimestamp() + ' ------  HTML WATCH FINISHED ------');
        });
    });

    scssWatch.on('change', event => {
        runSequence('scsslint', 'styles', () => {
            console.log(getTimestamp() + ' ------  STYLES WATCH FINISHED ------');
        });
    });
});


/**
 * WRAPPERS
 */
gulp.task('assets', cb => {
    runSequence(['images', 'fonts'], cb);
});

gulp.task('qa', ['jscs', 'scsslint', 'eslint']);

gulp.task('docs', cb => {
    runSequence('clean-docs', 'jsdoc', cb);
});

gulp.task('sample', () => {
    return gulp.src('app/services/api/sample.json')
        .pipe(gulp.dest('dist/sample'));
});


/**
 *  BUILD IT ALL!!!
 */
gulp.task('build', [], cb => {
    runSequence('clean', 'template-cache', ['sample', 'assets', 'html', 'js', 'styles'], ['qa', 'docs'], cb);
});


/**
 *  default task executed when using cli 'gulp'
 */
gulp.task('default', ['build']);
