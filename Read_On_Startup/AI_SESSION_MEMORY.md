# 🤖 AI ASSISTANT SESSION MEMORY - Hello-World

## 🚨 CRITICAL SESSION STARTUP PROTOCOL

**MANDATORY FIRST ACTION IN EVERY NEW SESSION:**

Before performing ANY operations on the Hello-World project, the AI assistant MUST execute this startup sequence:

### REQUIRED STARTUP COMMAND:
```powershell
cd "C:\Users\BookR\OneDrive\Documents\Warp\Projects\Hello-World"; $env:HOME = $env:USERPROFILE; if (!(Test-Path ".\render.exe")) { Copy-Item "..\..\render.exe" ".\render.exe" }
```

## 🎯 WHY THIS IS CRITICAL:
1. **Windows Environment**: `$env:HOME = $env:USERPROFILE` is required for CLI tools
2. **Project Context**: Must be in the Hello-World project directory
3. **Tool Access**: Copies shared tools from Warp root when needed
4. **Consistency**: Follows established Warp project patterns

## 📋 SESSION CONTEXT DATA:
- **Warp Root**: `C:\Users\BookR\OneDrive\Documents\Warp`
- **Project Path**: `C:\Users\BookR\OneDrive\Documents\Warp\Projects\Hello-World`
- **Project Type**: Demonstration/Test Project
- **Technology**: Node.js + Express.js
- **Purpose**: Validate Warp structure and workflows

## 🔄 WORKFLOW FOR AI ASSISTANT:
1. **Session Start**: ALWAYS run the startup command first
2. **Verify Setup**: Confirm in correct directory and environment set
3. **Load Context**: Apply both global and project-specific context
4. **Then Proceed**: With any requested Hello-World operations

## ⚠️ FAILURE INDICATORS:
- Wrong directory errors
- Environment variable not set
- Missing tool access
- Permission errors

## ✅ SUCCESS INDICATORS:
- Successfully navigated to Hello-World directory
- Environment variables properly set
- Tools available when needed
- Can proceed with development tasks

## 🎯 PROJECT-SPECIFIC NOTES:
- This is a **test/demo project** to validate the Warp structure
- Focus on **simplicity** and **workflow validation**
- Should demonstrate that **global tooling works** with new projects
- Can serve as a **template** for future projects

## 🚀 DEVELOPMENT PHASES:
1. **Phase 1**: Basic project setup and "Hello World" response
2. **Phase 2**: Simple web interface
3. **Phase 3**: Test deployment workflow (optional)
4. **Phase 4**: Validate complete Warp integration

---
**AI RULE: Never attempt Hello-World operations without running startup sequence first!**
