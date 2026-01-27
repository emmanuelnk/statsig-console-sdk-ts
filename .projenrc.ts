import { typescript, javascript, github, JsonFile } from 'projen';

const project = new typescript.TypeScriptProject({
  name: '@emmanuelnk/statsig-console-sdk-ts',
  description: 'TypeScript/Node.js SDK for Statsig Console API - CRUD operations for console.statsig.com',
  authorName: 'Emmanuel Nsubuga',
  authorEmail: 'emmanuelnk@gmail.com',
  repository: 'https://github.com/emmanuelnk/statsig-console-sdk-ts.git',
  license: 'MIT',

  // Package manager
  packageManager: javascript.NodePackageManager.PNPM,
  npmAccess: javascript.NpmAccess.PUBLIC,

  // Version - managed via release workflow
  defaultReleaseBranch: 'main',
  majorVersion: 0,

  // Prerelease configuration for beta releases
  prerelease: 'beta',

  // Release configuration
  release: true,
  releaseToNpm: true,
  npmDistTag: 'beta', // Publish beta versions to beta tag

  // Keywords for npm discoverability
  keywords: [
    'statsig',
    'console-api',
    'feature-flags',
    'experiments',
    'a/b-testing',
    'axios',
    'typescript',
    'openapi-client',
  ],

  // Node and TypeScript versions
  minNodeVersion: '20.0.0',

  // Source code is at root level (OpenAPI generated)
  srcdir: '.',
  libdir: 'dist',

  // TypeScript compilation options
  tsconfig: {
    compilerOptions: {
      target: 'ES6',
      module: 'commonjs',
      declaration: true,
      noImplicitAny: true,
      moduleResolution: javascript.TypeScriptModuleResolution.NODE,
      rootDir: '.',
      outDir: 'dist',
      // Relax strict checks for generated code
      noUnusedLocals: false,
      noUnusedParameters: false,
      // Include DOM lib for File type used in API
      lib: ['ES2020', 'DOM'],
    },
    exclude: ['dist', 'node_modules', '.projenrc.ts', 'test'],
  },

  // ESM build - handled via custom task
  tsconfigDev: {
    compilerOptions: {
      rootDir: '.',
    },
    include: ['.projenrc.ts'],
  },

  // Dependencies
  deps: ['axios@^1.6.1'],
  devDeps: ['@types/node@^18', 'tsx'],

  // Disable features we don't need for a generated SDK
  jest: false, // No tests for generated SDK
  eslint: false, // Generated code doesn't follow lint rules
  prettier: false, // Generated code has its own formatting
  projenrcTs: true,

  // GitHub configuration
  githubOptions: {
    pullRequestLint: false, // Generated code won't pass lint
  },

  // Don't generate sample code
  sampleCode: false,

  // Git ignore patterns
  gitignore: [
    'dist/',
    'node_modules/',
    '.idea/',
    '.vscode/',
    '*.swp',
    '*.swo',
    '.DS_Store',
    'Thumbs.db',
    '*.log',
    'npm-debug.log*',
    'coverage/',
    '*.tgz',
    'openapi.json',
    '.npmrc',
    '.claude/',
  ],

  // NPM ignore patterns - only publish dist/
  npmignore: [
    '/*.ts',
    '/api/',
    '/models/',
    '.openapi-generator/',
    '.openapi-generator-ignore',
    'openapi.json',
    'openapitools.json',
    'git_push.sh',
    '.claude/',
    '.idea/',
    '.vscode/',
    '*.swp',
    '*.swo',
    'tsconfig.json',
    'tsconfig.esm.json',
    'node_modules/',
    'docs/',
    '.DS_Store',
    'Thumbs.db',
    '.git/',
    '.gitignore',
    '.projenrc.ts',
    '.projen/',
    'test/',
    'CLAUDE.md',
  ],

  // Artifact config
  artifactsDirectory: 'dist',

  // Disable auto-merge for PRs
  autoMerge: false,
});

// Add ESM build configuration
const esmTsConfig = project.tryFindObjectFile('tsconfig.esm.json');
if (!esmTsConfig) {
  // Create ESM tsconfig
  project.addTask('compile:esm', {
    description: 'Compile TypeScript to ESM',
    exec: 'tsc -p tsconfig.esm.json',
  });
}

// Create tsconfig.esm.json for ESM output
new JsonFile(project, 'tsconfig.esm.json', {
  obj: {
    extends: './tsconfig.json',
    compilerOptions: {
      module: 'esnext',
      outDir: 'dist/esm',
    },
    exclude: ['dist', 'node_modules', '.projenrc.ts', 'test'],
  },
});

// Modify compile task to include ESM build
project.compileTask.reset();
project.compileTask.exec('tsc --build');
project.compileTask.exec('tsc -p tsconfig.esm.json');

// Update package.json with module entry points
project.package.addField('main', './dist/index.js');
project.package.addField('module', './dist/esm/index.js');
project.package.addField('typings', './dist/index.d.ts');
project.package.addField('sideEffects', false);

// Use 'files' field to explicitly include dist/ in the npm package
// This is more reliable than .npmignore for ensuring dist is included
project.package.addField('files', ['dist', 'LICENSE', 'README.md']);

// Add exports field for modern bundlers
project.package.addField('exports', {
  '.': {
    types: './dist/index.d.ts',
    import: './dist/esm/index.js',
    require: './dist/index.js',
  },
  './api': {
    types: './dist/api/index.d.ts',
    import: './dist/esm/api/index.js',
    require: './dist/api/index.js',
  },
  './models': {
    types: './dist/models/index.d.ts',
    import: './dist/esm/models/index.js',
    require: './dist/models/index.js',
  },
});

// Add custom release workflow for beta releases on any push to master
const releaseWorkflow = project.github?.tryFindWorkflow('release');
if (releaseWorkflow) {
  // The default release workflow handles beta releases via the prerelease setting
}

// Add a manual beta release workflow
const manualBetaRelease = project.github?.addWorkflow('manual-beta-release');
if (manualBetaRelease) {
  manualBetaRelease.on({
    workflowDispatch: {
      inputs: {
        version: {
          description: 'Version to release (e.g., 0.2.0-beta.1)',
          required: true,
          type: 'string',
        },
      },
    },
  });

  manualBetaRelease.addJob('release', {
    runsOn: ['ubuntu-latest'],
    permissions: {
      contents: github.workflows.JobPermission.WRITE,
      packages: github.workflows.JobPermission.WRITE,
    },
    steps: [
      {
        name: 'Checkout',
        uses: 'actions/checkout@v4',
        with: {
          'fetch-depth': 0,
        },
      },
      {
        name: 'Setup pnpm',
        uses: 'pnpm/action-setup@v4',
        with: {
          version: '10',
        },
      },
      {
        name: 'Setup Node.js',
        uses: 'actions/setup-node@v4',
        with: {
          'node-version': '20.x',
          'registry-url': 'https://registry.npmjs.org',
        },
      },
      {
        name: 'Install dependencies',
        run: 'pnpm install --frozen-lockfile',
      },
      {
        name: 'Build',
        run: 'pnpm run compile',
      },
      {
        name: 'Set version',
        run: 'npm version ${{ github.event.inputs.version }} --no-git-tag-version',
      },
      {
        name: 'Publish to npm (beta)',
        run: 'pnpm publish --access public --tag beta --no-git-checks',
        env: {
          NODE_AUTH_TOKEN: '${{ secrets.NPM_TOKEN }}',
        },
      },
      {
        name: 'Create Git tag',
        run: [
          'git config user.name "github-actions[bot]"',
          'git config user.email "github-actions[bot]@users.noreply.github.com"',
          'git tag -a "v${{ github.event.inputs.version }}" -m "Release v${{ github.event.inputs.version }}"',
          'git push origin "v${{ github.event.inputs.version }}"',
        ].join('\n'),
      },
    ],
  });
}

// Add a stable release workflow (removes beta tag, publishes to latest)
const stableRelease = project.github?.addWorkflow('stable-release');
if (stableRelease) {
  stableRelease.on({
    workflowDispatch: {
      inputs: {
        version: {
          description: 'Stable version to release (e.g., 0.2.0)',
          required: true,
          type: 'string',
        },
      },
    },
  });

  stableRelease.addJob('release', {
    runsOn: ['ubuntu-latest'],
    permissions: {
      contents: github.workflows.JobPermission.WRITE,
      packages: github.workflows.JobPermission.WRITE,
    },
    steps: [
      {
        name: 'Checkout',
        uses: 'actions/checkout@v4',
        with: {
          'fetch-depth': 0,
        },
      },
      {
        name: 'Setup pnpm',
        uses: 'pnpm/action-setup@v4',
        with: {
          version: '10',
        },
      },
      {
        name: 'Setup Node.js',
        uses: 'actions/setup-node@v4',
        with: {
          'node-version': '20.x',
          'registry-url': 'https://registry.npmjs.org',
        },
      },
      {
        name: 'Install dependencies',
        run: 'pnpm install --frozen-lockfile',
      },
      {
        name: 'Build',
        run: 'pnpm run compile',
      },
      {
        name: 'Set version',
        run: 'npm version ${{ github.event.inputs.version }} --no-git-tag-version',
      },
      {
        name: 'Publish to npm (latest)',
        run: 'pnpm publish --access public --no-git-checks',
        env: {
          NODE_AUTH_TOKEN: '${{ secrets.NPM_TOKEN }}',
        },
      },
      {
        name: 'Create Git tag and release',
        run: [
          'git config user.name "github-actions[bot]"',
          'git config user.email "github-actions[bot]@users.noreply.github.com"',
          'git tag -a "v${{ github.event.inputs.version }}" -m "Release v${{ github.event.inputs.version }}"',
          'git push origin "v${{ github.event.inputs.version }}"',
        ].join('\n'),
      },
      {
        name: 'Create GitHub Release',
        uses: 'softprops/action-gh-release@v1',
        with: {
          tag_name: 'v${{ github.event.inputs.version }}',
          name: 'v${{ github.event.inputs.version }}',
          generate_release_notes: true,
        },
      },
    ],
  });
}

// Add SDK regeneration task
project.addTask('sdk:download-spec', {
  description: 'Download the latest OpenAPI spec from Statsig',
  exec: 'curl -sL "https://api.statsig.com/openapi/20240601.json" -o openapi.json',
});

project.addTask('sdk:generate', {
  description: 'Generate SDK from OpenAPI spec (requires Java and openapi-generator-cli)',
  exec: [
    'openapi-generator-cli generate',
    '-i openapi.json',
    '-g typescript-axios',
    '-o .',
    '--additional-properties=npmName=@emmanuelnk/statsig-console-sdk-ts,npmVersion=0.1.0,supportsES6=true,withSeparateModelsAndApi=true,apiPackage=api,modelPackage=models,useSingleRequestParameter=true',
  ].join(' '),
});

project.addTask('sdk:regenerate', {
  description: 'Full SDK regeneration (download spec + generate)',
  steps: [
    { spawn: 'sdk:download-spec' },
    { spawn: 'sdk:generate' },
  ],
});

project.synth();
