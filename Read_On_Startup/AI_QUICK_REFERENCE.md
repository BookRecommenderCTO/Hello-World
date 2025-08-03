# 🤖 AI ASSISTANT QUICK REFERENCE - Hello-World

## 🚨 FIRST COMMAND IN EVERY SESSION:
```powershell
cd "C:\Users\BookR\OneDrive\Documents\Warp\Projects\Hello-World"; $env:HOME = $env:USERPROFILE; if (!(Test-Path ".\render.exe")) { Copy-Item "..\..\render.exe" ".\render.exe" }
```

## 🎯 PROJECT CONTEXT:
- **Name**: Hello-World
- **Type**: Demonstration Project
- **Warp Root**: `C:\Users\BookR\OneDrive\Documents\Warp`
- **Project Location**: `C:\Users\BookR\OneDrive\Documents\Warp\Projects\Hello-World`
- **Purpose**: Test Warp structure and validate workflows

## 🔧 ESSENTIAL COMMANDS:
```powershell
# Navigate to project
cd "C:\Users\BookR\OneDrive\Documents\Warp\Projects\Hello-World"

# Set environment (always required)
$env:HOME = $env:USERPROFILE

# Initialize Node.js project (if needed)
npm init -y

# Install dependencies
npm install express

# Start development server
npm start

# Copy Render CLI if needed
if (!(Test-Path ".\render.exe")) { Copy-Item "..\..\render.exe" ".\render.exe" }
```

## ⚠️ CRITICAL REQUIREMENTS:
1. **Always** be in the Hello-World project directory
2. **Always** have `$env:HOME = $env:USERPROFILE` set
3. **Follow** global Warp standards (see `/Warp/Read_On_Startup/`)
4. **Use** shared tools from Warp root directory
5. **Test** that global workflows work with this new project

## 🎯 PROJECT GOALS:
- Create simple "Hello World" web application
- Validate Warp project structure
- Test global tooling integration
- Demonstrate complete development workflow

## 🔍 TROUBLESHOOTING:
If anything fails, check:
1. Current directory: `Get-Location`
2. HOME variable: `$env:HOME`
3. Global tools available: `Test-Path "..\..\render.exe"`
4. Node.js installed: `node --version`

## 📁 KEY FILES:
- `server.js` - Main application file
- `package.json` - Project configuration
- `README.md` - Project documentation
- `Read_On_Startup/` - This directory with project context

## 🚀 DEVELOPMENT WORKFLOW:
1. **Setup**: Initialize Node.js project
2. **Develop**: Create simple Express server
3. **Test**: Verify application works locally
4. **Deploy**: Test Render.com deployment (optional)
5. **Validate**: Confirm Warp structure works correctly

## 📋 SUCCESS CRITERIA:
- ✅ Project follows Warp conventions
- ✅ Global tooling works seamlessly
- ✅ Development workflow is smooth
- ✅ Can be used as template for future projects
