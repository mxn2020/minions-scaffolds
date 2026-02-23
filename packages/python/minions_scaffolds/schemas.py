"""
Minions Scaffolds SDK — Type Schemas
Custom MinionType schemas for Minions Scaffolds.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

scaffold_template_type = MinionType(
    id="scaffolds-scaffold-template",
    name="Scaffold template",
    slug="scaffold-template",
    description="A project scaffolding template with its tech stack and file structure.",
    icon="🏗️",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="techStack", type="string", label="techStack"),
        FieldDefinition(name="framework", type="string", label="framework"),
        FieldDefinition(name="language", type="string", label="language"),
        FieldDefinition(name="packageManager", type="select", label="packageManager"),
        FieldDefinition(name="initCommand", type="string", label="initCommand"),
        FieldDefinition(name="postInitSteps", type="string", label="postInitSteps"),
        FieldDefinition(name="version", type="string", label="version"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

tech_stack_config_type = MinionType(
    id="scaffolds-tech-stack-config",
    name="Tech stack config",
    slug="tech-stack-config",
    description="Tech stack choices and dependency versions for a scaffold.",
    icon="⚡",
    schema=[
        FieldDefinition(name="scaffoldTemplateId", type="string", label="scaffoldTemplateId"),
        FieldDefinition(name="category", type="select", label="category"),
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="version", type="string", label="version"),
        FieldDefinition(name="purpose", type="string", label="purpose"),
        FieldDefinition(name="isRequired", type="boolean", label="isRequired"),
    ],
)

initial_file_type = MinionType(
    id="scaffolds-initial-file",
    name="Initial file",
    slug="initial-file",
    description="A file to be included in every scaffolded project.",
    icon="📄",
    schema=[
        FieldDefinition(name="scaffoldTemplateId", type="string", label="scaffoldTemplateId"),
        FieldDefinition(name="path", type="string", label="path"),
        FieldDefinition(name="content", type="string", label="content"),
        FieldDefinition(name="isTemplate", type="boolean", label="isTemplate"),
        FieldDefinition(name="templateVariables", type="string", label="templateVariables"),
    ],
)

custom_types: list[MinionType] = [
    scaffold_template_type,
    tech_stack_config_type,
    initial_file_type,
]

