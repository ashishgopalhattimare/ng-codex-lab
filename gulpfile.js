'use strict';

const libraryExport = './exports';

const {
    task, src, dest, parallel
} = require('gulp');

/**
 * @Description : Publish single library to exports folder
 * @Task : publish
 */
function publishLibrary(source, path, destination) {
    return src(source, { base: path })
    .pipe(dest(destination));
}

const folders = ['utility'];

/**
 * @Description : Publish all the libraries to exports folder parallely
 * @Task : publish
 */
async function publish(done) {

    
    const source = './dist/';
    const libraryRegex = 'ng-codex-lab-*.tgz';

    const tasks = folders.map(folder => {
        const path = `${source}${folder}`;
        return publishLibrary(`${path}/${libraryRegex}`, path, libraryExport);
    });
    return parallel(task);
}

/**
 * @Description : Publish all the libraries to exports folder
 * @Task : publish
 */
task('task:publish', () => {
    console.log('start publish');

    const promise = new Promise(publishDone => {
        const source = './dist/';
        const libraryRegex = 'ng-codex-lab-*.tgz';
        
        const subtasks = folders.map(folder => {
            const path = `${source}${folder}`;
            return new Promise(done => {
                src(`${path}/${libraryRegex}`, { base: path })
                .pipe(dest(libraryExport))
                .on('end', done);
            });
        });

        Promise.all(subtasks).then(resolve => publishDone(resolve));
    });
    return promise;
});

/**
 * @Description : Default Task
 * @Task : default
 */
// exports.default = publish;

exports.publish = publish;