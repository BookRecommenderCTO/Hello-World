# Hello-World - Project Read_On_Startup

## Purpose
This directory contains **project-specific** AI context files for the Hello-World project. This is a simple demonstration project to test the Warp project structure and workflows.

## Project Overview
**Hello-World** is a basic demonstration project designed to:
- Test the Warp project structure
- Demonstrate the global and project-specific context system
- Provide a simple template for future projects
- Validate the development workflow

## Directory Contents

### AI Context Files
- **README.md** - This file, explaining the project context system
- **AI_QUICK_REFERENCE.md** - Quick reference for Hello-World AI interactions
- **AI_SESSION_MEMORY.md** - Session startup protocol specific to this project
- **PROJECT_OVERVIEW.md** - High-level overview of the Hello-World project
- **BUSINESS_REQUIREMENTS.md** - Simple requirements for the demo project

## How This Works with Global Context

### Two-Level Context System
1. **Global Level** (`/Warp/Read_On_Startup/`): Universal standards and tools
2. **Project Level** (this directory): Hello-World specific context

### AI Context Loading Order
When starting work on Hello-World, the AI should load context in this order:
1. **Global Read_On_Startup** - Universal standards and practices
2. **Project Read_On_Startup** (this directory) - Hello-World specific context
3. Project files and code - Current implementation

## Project Goals
- **Primary**: Create a simple "Hello World" application
- **Secondary**: Test the Warp project structure
- **Tertiary**: Validate development workflows and tooling

## Technology Stack
- **Language**: Node.js / JavaScript (simple and familiar)
- **Framework**: Basic Express.js server
- **Deployment**: Render.com (using existing CLI setup)
- **Structure**: Follows Warp conventions

## Project Structure
```
Hello-World/
├── Read_On_Startup/           # This directory - project-specific context
├── package.json               # Project configuration
├── server.js                  # Main application
├── public/                    # Static assets (if needed)
└── README.md                  # Project documentation
```

## Development Phases
1. **Phase 1**: Basic setup and "Hello World" response
2. **Phase 2**: Simple HTML page with styling
3. **Phase 3**: Deploy to Render.com
4. **Phase 4**: Test complete workflow

## Success Criteria
- ✅ Project follows Warp structure conventions
- ✅ Global tooling works correctly with new project
- ✅ Render CLI setup works from project directory
- ✅ Simple application deploys successfully
- ✅ Demonstrates complete development workflow
