---
title: Quick Start
description: Get up and running with Minions Scaffolds in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-scaffolds/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_scaffolds import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
scaffolds info
```
