/**
 * @module @minions-scaffolds/sdk/schemas
 * Custom MinionType schemas for Minions Scaffolds.
 */

import type { MinionType } from 'minions-sdk';

export const scaffoldtemplateType: MinionType = {
  id: 'scaffolds-scaffold-template',
  name: 'Scaffold template',
  slug: 'scaffold-template',
  description: 'A project scaffolding template with its tech stack and file structure.',
  icon: '🏗️',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'techStack', type: 'string', label: 'techStack' },
    { name: 'framework', type: 'string', label: 'framework' },
    { name: 'language', type: 'string', label: 'language' },
    { name: 'packageManager', type: 'select', label: 'packageManager' },
    { name: 'initCommand', type: 'string', label: 'initCommand' },
    { name: 'postInitSteps', type: 'string', label: 'postInitSteps' },
    { name: 'version', type: 'string', label: 'version' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const techstackconfigType: MinionType = {
  id: 'scaffolds-tech-stack-config',
  name: 'Tech stack config',
  slug: 'tech-stack-config',
  description: 'Tech stack choices and dependency versions for a scaffold.',
  icon: '⚡',
  schema: [
    { name: 'scaffoldTemplateId', type: 'string', label: 'scaffoldTemplateId' },
    { name: 'category', type: 'select', label: 'category' },
    { name: 'name', type: 'string', label: 'name' },
    { name: 'version', type: 'string', label: 'version' },
    { name: 'purpose', type: 'string', label: 'purpose' },
    { name: 'isRequired', type: 'boolean', label: 'isRequired' },
  ],
};

export const initialfileType: MinionType = {
  id: 'scaffolds-initial-file',
  name: 'Initial file',
  slug: 'initial-file',
  description: 'A file to be included in every scaffolded project.',
  icon: '📄',
  schema: [
    { name: 'scaffoldTemplateId', type: 'string', label: 'scaffoldTemplateId' },
    { name: 'path', type: 'string', label: 'path' },
    { name: 'content', type: 'string', label: 'content' },
    { name: 'isTemplate', type: 'boolean', label: 'isTemplate' },
    { name: 'templateVariables', type: 'string', label: 'templateVariables' },
  ],
};

export const customTypes: MinionType[] = [
  scaffoldtemplateType,
  techstackconfigType,
  initialfileType,
];

