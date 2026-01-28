# Contributing to @emmanuelnk/statsig-console-sdk-ts

Thank you for your interest in contributing to this SDK! This guide will help you get started.

## Getting Started

1. **Fork and clone the repository**

   ```bash
   git clone https://github.com/emmanuelnk/statsig-console-sdk-ts.git
   cd statsig-console-sdk-ts
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Build the project**

   ```bash
   pnpm run compile
   ```

## Development Workflow

### Making Changes

1. Create a new branch for your changes:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and ensure they build successfully:

   ```bash
   pnpm run build
   ```

3. Commit your changes with a clear, descriptive message.

4. Push your branch and open a pull request.

### Project Management

This project uses [Projen](https://projen.io/) for configuration management. **Do not manually edit** files like `package.json`, `tsconfig.json`, or workflow files. Instead:

1. Edit `.projenrc.ts`
2. Run `pnpm exec tsx .projenrc.ts` to regenerate managed files

### SDK Regeneration

This SDK is auto-generated from the Statsig Console API OpenAPI spec. If you need to regenerate the SDK:

1. Ensure you have Java JDK 11+ installed (required by OpenAPI Generator)
2. Run `pnpm run sdk:regenerate`
3. Fix any duplicate enum exports (see CLAUDE.md for details)
4. Restore Projen-managed files with `pnpm exec tsx .projenrc.ts`

## Detailed Instructions

For comprehensive instructions on SDK regeneration, fixing known issues, and the release process, please refer to **[CLAUDE.md](./CLAUDE.md)**.

The CLAUDE.md file contains:

- Prerequisites and environment setup
- Step-by-step SDK regeneration guide
- Known issues and their fixes (e.g., duplicate enum exports)
- Release workflow documentation
- File structure overview
- Common mistakes to avoid

## Pull Request Guidelines

- Keep changes focused and minimal
- Ensure `pnpm run build` passes before submitting
- Provide a clear description of what your PR does
- Reference any related issues

## Reporting Issues

If you encounter bugs or have feature requests, please [open an issue](https://github.com/emmanuelnk/statsig-console-sdk-ts/issues) with:

- A clear description of the problem or feature
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Your environment (Node.js version, OS, etc.)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
