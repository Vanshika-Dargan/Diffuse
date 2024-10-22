const fs = require('fs');
const path = require('path');

const cmd = process.argv[2];

// Check if a command is provided
if (!cmd) {
    throw new Error('No command provided. Use: init');
}

switch(cmd){
    case 'init':
        createDiffuseDir();
        break;
    default:
        throw new Error(`Unknown command: ${cmd}`);
}

function createDiffuseDir() {
    const basePath = process.cwd();
    const diffusePath = path.join(basePath, '.diffuse');
    
    // Create the required directories
    fs.mkdirSync(path.join(diffusePath), { recursive: true });
    fs.mkdirSync(path.join(diffusePath, 'objects'), { recursive: true });
    fs.mkdirSync(path.join(diffusePath, 'refs'), { recursive: true });

    // Write the HEAD file
    fs.writeFileSync(path.join(diffusePath, 'HEAD'), 'ref: refs/heads/main\n');

    console.log('Initialized an empty diffuse repository');
}
