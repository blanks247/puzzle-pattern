const fs = require('fs');
function replaceFile(path, search, replace) {
    if (fs.existsSync(path)) {
        let content = fs.readFileSync(path, 'utf8');
        content = content.split(search).join(replace);
        fs.writeFileSync(path, content);
    }
}
replaceFile('android/app/src/main/res/values/strings.xml', 'WindingArrows', 'PuzzlePattern');
replaceFile('manifest.json', 'Winding Arrows: Puzzle Escape', 'Puzzle Pattern');
replaceFile('manifest.json', 'Winding Arrows', 'Puzzle Pattern');
replaceFile('manifest.json', 'Solve winding polyline arrow puzzles and dodge looping trains in this cozy logic escape game!', 'A beautiful edge-matching puzzle game.');
replaceFile('dist/manifest.json', 'Winding Arrows: Puzzle Escape', 'Puzzle Pattern');
replaceFile('dist/manifest.json', 'Winding Arrows', 'Puzzle Pattern');
replaceFile('dist/manifest.json', 'Solve winding polyline arrow puzzles and dodge looping trains in this cozy logic escape game!', 'A beautiful edge-matching puzzle game.');
replaceFile('package-lock.json', '"name": "winding-arrows"', '"name": "puzzle-pattern"');
replaceFile('privacy-policy.md', 'Winding Arrows: Puzzle Escape', 'Puzzle Pattern');
replaceFile('sw.js', 'winding-arrows', 'puzzle-pattern');
replaceFile('dist/sw.js', 'winding-arrows', 'puzzle-pattern');
replaceFile('src/js/admob_service.js', 'Winding Arrows', 'Puzzle Pattern');
replaceFile('dist/src/js/admob_service.js', 'Winding Arrows', 'Puzzle Pattern');
replaceFile('.github/workflows/android-build.yml', 'windingkey', 'puzzlepatternkey');
replaceFile('.github/workflows/android-build.yml', 'windingpassword', 'puzzlepassword');
replaceFile('.github/workflows/android-build.yml', 'WindingArrows', 'PuzzlePattern');
console.log('Done!');
