"""
Minions Scaffolds Python SDK

Project scaffolding templates, tech stack configs, and initial file sets
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Scaffolds.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
