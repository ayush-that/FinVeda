import os

class Config:
    """Base config class containing general settings."""
    SECRET_KEY = os.getenv('SECRET_KEY', 'your_secret_key_here')  # Secret key for sessions and security
    DEBUG = os.getenv('DEBUG', True)  # Enable or disable debugging mode
    TESTING = os.getenv('TESTING', False)  # Enable or disable testing mode
    CORS_ALLOWED_ORIGINS = os.getenv('CORS_ALLOWED_ORIGINS', '*')  # Allow all origins for CORS by default
    
    # Set up the path for logging
    LOGGING_LEVEL = os.getenv('LOGGING_LEVEL', 'DEBUG')  # Default logging level
    LOG_FILE = os.getenv('LOG_FILE', 'app.log')  # Path to log file

class DevelopmentConfig(Config):
    """Configuration for development environment."""
    ENV = 'development'
    DEBUG = True
    TESTING = False

class ProductionConfig(Config):
    """Configuration for production environment."""
    ENV = 'production'
    DEBUG = False
    TESTING = False

class TestingConfig(Config):
    """Configuration for testing environment."""
    ENV = 'testing'
    DEBUG = False
    TESTING = True
    CORS_ALLOWED_ORIGINS = os.getenv('CORS_ALLOWED_ORIGINS', '*')  # Modify based on your testing needs

# Dictionary to easily access configurations by environment
config_by_name = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'testing': TestingConfig,
}

# Default configuration is development
default_config = config_by_name['development']
