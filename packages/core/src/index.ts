/**
 * Minions Scaffolds SDK
 *
 * Project scaffolding templates, tech stack configs, and initial file sets
 *
 * @module @minions-scaffolds/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Scaffolds.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
