rm -r dist

echo "Copying gpt-researcher"
mkdir -p dist/gpt-researcher
cp -r gpt-researcher/frontend/nextjs/out dist/gpt-researcher/out
cp -r gpt-researcher/backend dist/gpt-researcher/backend
cp -r gpt-researcher/gpt_researcher dist/gpt-researcher/gpt_researcher
cp -r gpt-researcher/multi_agents dist/gpt-researcher/multi_agents
cp gpt-researcher/main.py dist/gpt-researcher/main.py
cp gpt-researcher/README.md dist/gpt-researcher/README.md
cp gpt-researcher/LICENSE dist/gpt-researcher/LICENSE

echo "Copying AgentGPT"
mkdir -p dist/AgentGPT
cp -r AgentGPT/next/.next/standalone dist/AgentGPT/standalone
cp -r AgentGPT/platform/reworkd_platform dist/AgentGPT/reworkd_platform
cp AgentGPT/README.md dist/AgentGPT/README.md
cp AgentGPT/LICENSE dist/AgentGPT/LICENSE

echo "Copying NextChat"
mkdir -p dist/NextChat
cp -r NextChat/.next/standalone dist/NextChat/standalone
cp NextChat/README.md dist/NextChat/README.md
cp NextChat/LICENSE dist/NextChat/LICENSE

find dist -type d -name "__pycache__" -exec rm -rf {} +

rm -r win64/dist
mkdir win64/dist
cp -r dist win64