"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[579],{

/***/ 9579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getServerSideConfig)
/* harmony export */ });
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5045);
/* harmony import */ var spark_md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spark_md5__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7736);
/* harmony import */ var _utils_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(413);



const ACCESS_CODES = function getAccessCodes() {
    const code = process.env.CODE;
    try {
        const codes = (code?.split(",") ?? []).filter((v)=>!!v).map((v)=>spark_md5__WEBPACK_IMPORTED_MODULE_0___default().hash(v.trim()));
        return new Set(codes);
    } catch (e) {
        return new Set();
    }
}();
function getApiKey(keys) {
    const apiKeyEnvVar = keys ?? "";
    const apiKeys = apiKeyEnvVar.split(",").map((v)=>v.trim());
    const randomIndex = Math.floor(Math.random() * apiKeys.length);
    const apiKey = apiKeys[randomIndex];
    if (apiKey) {
        console.log(`[Server Config] using ${randomIndex + 1} of ${apiKeys.length} api key - ${apiKey}`);
    }
    return apiKey;
}
const getServerSideConfig = ()=>{
    if (typeof process === "undefined") {
        throw Error("[Server Config] you are importing a nodejs-only module outside of nodejs");
    }
    const disableGPT4 = !!process.env.DISABLE_GPT4;
    let customModels = process.env.CUSTOM_MODELS ?? "";
    let defaultModel = process.env.DEFAULT_MODEL ?? "";
    let visionModels = process.env.VISION_MODELS ?? "";
    if (disableGPT4) {
        if (customModels) customModels += ",";
        customModels += _constant__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_MODELS */ .Fv.filter((m)=>(0,_utils_model__WEBPACK_IMPORTED_MODULE_2__/* .isGPT4Model */ .vi)(m.name)).map((m)=>"-" + m.name).join(",");
        if (defaultModel && (0,_utils_model__WEBPACK_IMPORTED_MODULE_2__/* .isGPT4Model */ .vi)(defaultModel)) {
            defaultModel = "";
        }
    }
    const isStability = !!process.env.STABILITY_API_KEY;
    const isAzure = !!process.env.AZURE_URL;
    const isGoogle = !!process.env.GOOGLE_API_KEY;
    const isAnthropic = !!process.env.ANTHROPIC_API_KEY;
    const isTencent = !!process.env.TENCENT_API_KEY;
    const isBaidu = !!process.env.BAIDU_API_KEY;
    const isBytedance = !!process.env.BYTEDANCE_API_KEY;
    const isAlibaba = !!process.env.ALIBABA_API_KEY;
    const isMoonshot = !!process.env.MOONSHOT_API_KEY;
    const isIflytek = !!process.env.IFLYTEK_API_KEY;
    const isDeepSeek = !!process.env.DEEPSEEK_API_KEY;
    const isXAI = !!process.env.XAI_API_KEY;
    const isChatGLM = !!process.env.CHATGLM_API_KEY;
    const isSiliconFlow = !!process.env.SILICONFLOW_API_KEY;
    // const apiKeyEnvVar = process.env.OPENAI_API_KEY ?? "";
    // const apiKeys = apiKeyEnvVar.split(",").map((v) => v.trim());
    // const randomIndex = Math.floor(Math.random() * apiKeys.length);
    // const apiKey = apiKeys[randomIndex];
    // console.log(
    //   `[Server Config] using ${randomIndex + 1} of ${apiKeys.length} api key`,
    // );
    const allowedWebDavEndpoints = (process.env.WHITE_WEBDAV_ENDPOINTS ?? "").split(",");
    return {
        baseUrl: process.env.BASE_URL,
        apiKey: getApiKey(process.env.OPENAI_API_KEY),
        openaiOrgId: process.env.OPENAI_ORG_ID,
        isStability,
        stabilityUrl: process.env.STABILITY_URL,
        stabilityApiKey: getApiKey(process.env.STABILITY_API_KEY),
        isAzure,
        azureUrl: process.env.AZURE_URL,
        azureApiKey: getApiKey(process.env.AZURE_API_KEY),
        azureApiVersion: process.env.AZURE_API_VERSION,
        isGoogle,
        googleApiKey: getApiKey(process.env.GOOGLE_API_KEY),
        googleUrl: process.env.GOOGLE_URL,
        isAnthropic,
        anthropicApiKey: getApiKey(process.env.ANTHROPIC_API_KEY),
        anthropicApiVersion: process.env.ANTHROPIC_API_VERSION,
        anthropicUrl: process.env.ANTHROPIC_URL,
        isBaidu,
        baiduUrl: process.env.BAIDU_URL,
        baiduApiKey: getApiKey(process.env.BAIDU_API_KEY),
        baiduSecretKey: process.env.BAIDU_SECRET_KEY,
        isBytedance,
        bytedanceApiKey: getApiKey(process.env.BYTEDANCE_API_KEY),
        bytedanceUrl: process.env.BYTEDANCE_URL,
        isAlibaba,
        alibabaUrl: process.env.ALIBABA_URL,
        alibabaApiKey: getApiKey(process.env.ALIBABA_API_KEY),
        isTencent,
        tencentUrl: process.env.TENCENT_URL,
        tencentSecretKey: getApiKey(process.env.TENCENT_SECRET_KEY),
        tencentSecretId: process.env.TENCENT_SECRET_ID,
        isMoonshot,
        moonshotUrl: process.env.MOONSHOT_URL,
        moonshotApiKey: getApiKey(process.env.MOONSHOT_API_KEY),
        isIflytek,
        iflytekUrl: process.env.IFLYTEK_URL,
        iflytekApiKey: process.env.IFLYTEK_API_KEY,
        iflytekApiSecret: process.env.IFLYTEK_API_SECRET,
        isDeepSeek,
        deepseekUrl: process.env.DEEPSEEK_URL,
        deepseekApiKey: getApiKey(process.env.DEEPSEEK_API_KEY),
        isXAI,
        xaiUrl: process.env.XAI_URL,
        xaiApiKey: getApiKey(process.env.XAI_API_KEY),
        isChatGLM,
        chatglmUrl: process.env.CHATGLM_URL,
        chatglmApiKey: getApiKey(process.env.CHATGLM_API_KEY),
        cloudflareAccountId: process.env.CLOUDFLARE_ACCOUNT_ID,
        cloudflareKVNamespaceId: process.env.CLOUDFLARE_KV_NAMESPACE_ID,
        cloudflareKVApiKey: getApiKey(process.env.CLOUDFLARE_KV_API_KEY),
        cloudflareKVTTL: process.env.CLOUDFLARE_KV_TTL,
        isSiliconFlow,
        siliconFlowUrl: process.env.SILICONFLOW_URL,
        siliconFlowApiKey: getApiKey(process.env.SILICONFLOW_API_KEY),
        gtmId: process.env.GTM_ID,
        gaId: process.env.GA_ID || _constant__WEBPACK_IMPORTED_MODULE_1__/* .DEFAULT_GA_ID */ .Mq,
        needCode: ACCESS_CODES.size > 0,
        code: process.env.CODE,
        codes: ACCESS_CODES,
        proxyUrl: process.env.PROXY_URL,
        isVercel: !!process.env.VERCEL,
        hideUserApiKey: !!process.env.HIDE_USER_API_KEY,
        disableGPT4,
        hideBalanceQuery: !process.env.ENABLE_BALANCE_QUERY,
        disableFastLink: !!process.env.DISABLE_FAST_LINK,
        customModels,
        defaultModel,
        visionModels,
        allowedWebDavEndpoints,
        enableMcp: process.env.ENABLE_MCP === "true"
    };
};


/***/ }),

/***/ 7736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BJ: () => (/* binding */ CHATGLM_BASE_URL),
/* harmony export */   Bi: () => (/* binding */ OPENAI_BASE_URL),
/* harmony export */   FR: () => (/* binding */ BAIDU_OATUH_URL),
/* harmony export */   Fv: () => (/* binding */ DEFAULT_MODELS),
/* harmony export */   Hm: () => (/* binding */ GEMINI_BASE_URL),
/* harmony export */   L: () => (/* binding */ ApiPath),
/* harmony export */   Mo: () => (/* binding */ TENCENT_BASE_URL),
/* harmony export */   Mq: () => (/* binding */ DEFAULT_GA_ID),
/* harmony export */   NU: () => (/* binding */ internalAllowedWebDavEndpoints),
/* harmony export */   TW: () => (/* binding */ ACCESS_CODE_PREFIX),
/* harmony export */   UT: () => (/* binding */ ServiceProvider),
/* harmony export */   Uf: () => (/* binding */ STORAGE_KEY),
/* harmony export */   YU: () => (/* binding */ Anthropic),
/* harmony export */   Z_: () => (/* binding */ DEEPSEEK_BASE_URL),
/* harmony export */   bP: () => (/* binding */ MOONSHOT_BASE_URL),
/* harmony export */   eE: () => (/* binding */ XAI_BASE_URL),
/* harmony export */   ik: () => (/* binding */ BYTEDANCE_BASE_URL),
/* harmony export */   jT: () => (/* binding */ SILICONFLOW_BASE_URL),
/* harmony export */   k8: () => (/* binding */ ModelProvider),
/* harmony export */   mX: () => (/* binding */ OpenaiPath),
/* harmony export */   n9: () => (/* binding */ BAIDU_BASE_URL),
/* harmony export */   pG: () => (/* binding */ IFLYTEK_BASE_URL),
/* harmony export */   rT: () => (/* binding */ STABILITY_BASE_URL),
/* harmony export */   x5: () => (/* binding */ ALIBABA_BASE_URL),
/* harmony export */   y3: () => (/* binding */ ANTHROPIC_BASE_URL)
/* harmony export */ });
/* unused harmony exports OWNER, REPO, REPO_URL, PLUGINS_REPO_URL, ISSUE_URL, UPDATE_URL, RELEASE_URL, FETCH_COMMIT_URL, FETCH_TAG_URL, RUNTIME_CONFIG_DOM, CACHE_URL_PREFIX, UPLOAD_URL, Path, SlotID, FileName, StoreKey, DEFAULT_SIDEBAR_WIDTH, MAX_SIDEBAR_WIDTH, MIN_SIDEBAR_WIDTH, NARROW_SIDEBAR_WIDTH, LAST_INPUT_KEY, UNFINISHED_INPUT, REQUEST_TIMEOUT_MS, REQUEST_TIMEOUT_MS_FOR_THINKING, EXPORT_MESSAGE_CLASS_NAME, GoogleSafetySettingsThreshold, Stability, Azure, Google, Baidu, ByteDance, Alibaba, Tencent, Moonshot, Iflytek, DeepSeek, XAI, ChatGLM, SiliconFlow, DEFAULT_INPUT_TEMPLATE, DEFAULT_SYSTEM_TEMPLATE, MCP_TOOLS_TEMPLATE, MCP_SYSTEM_TEMPLATE, SUMMARIZE_MODEL, GEMINI_SUMMARIZE_MODEL, DEEPSEEK_SUMMARIZE_MODEL, KnowledgeCutOffDate, DEFAULT_TTS_ENGINE, DEFAULT_TTS_ENGINES, DEFAULT_TTS_MODEL, DEFAULT_TTS_VOICE, DEFAULT_TTS_MODELS, DEFAULT_TTS_VOICES, VISION_MODEL_REGEXES, EXCLUDE_VISION_MODEL_REGEXES, CHAT_PAGE_SIZE, MAX_RENDER_MSG_COUNT, SAAS_CHAT_URL, SAAS_CHAT_UTM_URL */
const OWNER = "ChatGPTNextWeb";
const REPO = "ChatGPT-Next-Web";
const REPO_URL = (/* unused pure expression or super */ null && (`https://github.com/${OWNER}/${REPO}`));
const PLUGINS_REPO_URL = (/* unused pure expression or super */ null && (`https://github.com/${OWNER}/NextChat-Awesome-Plugins`));
const ISSUE_URL = (/* unused pure expression or super */ null && (`https://github.com/${OWNER}/${REPO}/issues`));
const UPDATE_URL = (/* unused pure expression or super */ null && (`${REPO_URL}#keep-updated`));
const RELEASE_URL = (/* unused pure expression or super */ null && (`${REPO_URL}/releases`));
const FETCH_COMMIT_URL = (/* unused pure expression or super */ null && (`https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`));
const FETCH_TAG_URL = (/* unused pure expression or super */ null && (`https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`));
const RUNTIME_CONFIG_DOM = "danger-runtime-config";
const STABILITY_BASE_URL = "https://api.stability.ai";
const OPENAI_BASE_URL = "https://api.openai.com";
const ANTHROPIC_BASE_URL = "https://api.anthropic.com";
const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/";
const BAIDU_BASE_URL = "https://aip.baidubce.com";
const BAIDU_OATUH_URL = `${BAIDU_BASE_URL}/oauth/2.0/token`;
const BYTEDANCE_BASE_URL = "https://ark.cn-beijing.volces.com";
const ALIBABA_BASE_URL = "https://dashscope.aliyuncs.com/api/";
const TENCENT_BASE_URL = "https://hunyuan.tencentcloudapi.com";
const MOONSHOT_BASE_URL = "https://api.moonshot.cn";
const IFLYTEK_BASE_URL = "https://spark-api-open.xf-yun.com";
const DEEPSEEK_BASE_URL = "https://api.deepseek.com";
const XAI_BASE_URL = "https://api.x.ai";
const CHATGLM_BASE_URL = "https://open.bigmodel.cn";
const SILICONFLOW_BASE_URL = "https://api.siliconflow.cn";
const CACHE_URL_PREFIX = "/api/cache";
const UPLOAD_URL = (/* unused pure expression or super */ null && (`${CACHE_URL_PREFIX}/upload`));
var Path;
(function(Path) {
    Path["Home"] = "/";
    Path["Chat"] = "/chat";
    Path["Settings"] = "/settings";
    Path["NewChat"] = "/new-chat";
    Path["Masks"] = "/masks";
    Path["Plugins"] = "/plugins";
    Path["Auth"] = "/auth";
    Path["Sd"] = "/sd";
    Path["SdNew"] = "/sd-new";
    Path["Artifacts"] = "/artifacts";
    Path["SearchChat"] = "/search-chat";
    Path["McpMarket"] = "/mcp-market";
})(Path || (Path = {}));
var ApiPath;
(function(ApiPath) {
    ApiPath["Cors"] = "";
    ApiPath["Azure"] = "/api/azure";
    ApiPath["OpenAI"] = "/api/openai";
    ApiPath["Anthropic"] = "/api/anthropic";
    ApiPath["Google"] = "/api/google";
    ApiPath["Baidu"] = "/api/baidu";
    ApiPath["ByteDance"] = "/api/bytedance";
    ApiPath["Alibaba"] = "/api/alibaba";
    ApiPath["Tencent"] = "/api/tencent";
    ApiPath["Moonshot"] = "/api/moonshot";
    ApiPath["Iflytek"] = "/api/iflytek";
    ApiPath["Stability"] = "/api/stability";
    ApiPath["Artifacts"] = "/api/artifacts";
    ApiPath["XAI"] = "/api/xai";
    ApiPath["ChatGLM"] = "/api/chatglm";
    ApiPath["DeepSeek"] = "/api/deepseek";
    ApiPath["SiliconFlow"] = "/api/siliconflow";
})(ApiPath || (ApiPath = {}));
var SlotID;
(function(SlotID) {
    SlotID["AppBody"] = "app-body";
    SlotID["CustomModel"] = "custom-model";
})(SlotID || (SlotID = {}));
var FileName;
(function(FileName) {
    FileName["Masks"] = "masks.json";
    FileName["Prompts"] = "prompts.json";
})(FileName || (FileName = {}));
var StoreKey;
(function(StoreKey) {
    StoreKey["Chat"] = "chat-next-web-store";
    StoreKey["Plugin"] = "chat-next-web-plugin";
    StoreKey["Access"] = "access-control";
    StoreKey["Config"] = "app-config";
    StoreKey["Mask"] = "mask-store";
    StoreKey["Prompt"] = "prompt-store";
    StoreKey["Update"] = "chat-update";
    StoreKey["Sync"] = "sync";
    StoreKey["SdList"] = "sd-list";
    StoreKey["Mcp"] = "mcp-store";
})(StoreKey || (StoreKey = {}));
const DEFAULT_SIDEBAR_WIDTH = 300;
const MAX_SIDEBAR_WIDTH = 500;
const MIN_SIDEBAR_WIDTH = 230;
const NARROW_SIDEBAR_WIDTH = 100;
const ACCESS_CODE_PREFIX = "nk-";
const LAST_INPUT_KEY = "last-input";
const UNFINISHED_INPUT = (id)=>"unfinished-input-" + id;
const STORAGE_KEY = "chatgpt-next-web";
const REQUEST_TIMEOUT_MS = 60000;
const REQUEST_TIMEOUT_MS_FOR_THINKING = REQUEST_TIMEOUT_MS * 5;
const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";
var ServiceProvider;
(function(ServiceProvider) {
    ServiceProvider["OpenAI"] = "OpenAI";
    ServiceProvider["Azure"] = "Azure";
    ServiceProvider["Google"] = "Google";
    ServiceProvider["Anthropic"] = "Anthropic";
    ServiceProvider["Baidu"] = "Baidu";
    ServiceProvider["ByteDance"] = "ByteDance";
    ServiceProvider["Alibaba"] = "Alibaba";
    ServiceProvider["Tencent"] = "Tencent";
    ServiceProvider["Moonshot"] = "Moonshot";
    ServiceProvider["Stability"] = "Stability";
    ServiceProvider["Iflytek"] = "Iflytek";
    ServiceProvider["XAI"] = "XAI";
    ServiceProvider["ChatGLM"] = "ChatGLM";
    ServiceProvider["DeepSeek"] = "DeepSeek";
    ServiceProvider["SiliconFlow"] = "SiliconFlow";
})(ServiceProvider || (ServiceProvider = {}));
var GoogleSafetySettingsThreshold;
(function(GoogleSafetySettingsThreshold) {
    GoogleSafetySettingsThreshold["BLOCK_NONE"] = "BLOCK_NONE";
    GoogleSafetySettingsThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
    GoogleSafetySettingsThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
    GoogleSafetySettingsThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
})(GoogleSafetySettingsThreshold || (GoogleSafetySettingsThreshold = {}));
var ModelProvider;
(function(ModelProvider) {
    ModelProvider["Stability"] = "Stability";
    ModelProvider["GPT"] = "GPT";
    ModelProvider["GeminiPro"] = "GeminiPro";
    ModelProvider["Claude"] = "Claude";
    ModelProvider["Ernie"] = "Ernie";
    ModelProvider["Doubao"] = "Doubao";
    ModelProvider["Qwen"] = "Qwen";
    ModelProvider["Hunyuan"] = "Hunyuan";
    ModelProvider["Moonshot"] = "Moonshot";
    ModelProvider["Iflytek"] = "Iflytek";
    ModelProvider["XAI"] = "XAI";
    ModelProvider["ChatGLM"] = "ChatGLM";
    ModelProvider["DeepSeek"] = "DeepSeek";
    ModelProvider["SiliconFlow"] = "SiliconFlow";
})(ModelProvider || (ModelProvider = {}));
const Stability = {
    GeneratePath: "v2beta/stable-image/generate",
    ExampleEndpoint: "https://api.stability.ai"
};
const Anthropic = {
    ChatPath: "v1/messages",
    ChatPath1: "v1/complete",
    ExampleEndpoint: "https://api.anthropic.com",
    Vision: "2023-06-01"
};
const OpenaiPath = {
    ChatPath: "v1/chat/completions",
    SpeechPath: "v1/audio/speech",
    ImagePath: "v1/images/generations",
    UsagePath: "dashboard/billing/usage",
    SubsPath: "dashboard/billing/subscription",
    ListModelPath: "v1/models"
};
const Azure = {
    ChatPath: (deployName, apiVersion)=>`deployments/${deployName}/chat/completions?api-version=${apiVersion}`,
    // https://<your_resource_name>.openai.azure.com/openai/deployments/<your_deployment_name>/images/generations?api-version=<api_version>
    ImagePath: (deployName, apiVersion)=>`deployments/${deployName}/images/generations?api-version=${apiVersion}`,
    ExampleEndpoint: "https://{resource-url}/openai"
};
const Google = {
    ExampleEndpoint: "https://generativelanguage.googleapis.com/",
    ChatPath: (modelName)=>`v1beta/models/${modelName}:streamGenerateContent`
};
const Baidu = {
    ExampleEndpoint: BAIDU_BASE_URL,
    ChatPath: (modelName)=>{
        let endpoint = modelName;
        if (modelName === "ernie-4.0-8k") {
            endpoint = "completions_pro";
        }
        if (modelName === "ernie-4.0-8k-preview-0518") {
            endpoint = "completions_adv_pro";
        }
        if (modelName === "ernie-3.5-8k") {
            endpoint = "completions";
        }
        if (modelName === "ernie-speed-8k") {
            endpoint = "ernie_speed";
        }
        return `rpc/2.0/ai_custom/v1/wenxinworkshop/chat/${endpoint}`;
    }
};
const ByteDance = {
    ExampleEndpoint: "https://ark.cn-beijing.volces.com/api/",
    ChatPath: "api/v3/chat/completions"
};
const Alibaba = {
    ExampleEndpoint: ALIBABA_BASE_URL,
    ChatPath: "v1/services/aigc/text-generation/generation"
};
const Tencent = {
    ExampleEndpoint: TENCENT_BASE_URL
};
const Moonshot = {
    ExampleEndpoint: MOONSHOT_BASE_URL,
    ChatPath: "v1/chat/completions"
};
const Iflytek = {
    ExampleEndpoint: IFLYTEK_BASE_URL,
    ChatPath: "v1/chat/completions"
};
const DeepSeek = {
    ExampleEndpoint: DEEPSEEK_BASE_URL,
    ChatPath: "chat/completions"
};
const XAI = {
    ExampleEndpoint: XAI_BASE_URL,
    ChatPath: "v1/chat/completions"
};
const ChatGLM = {
    ExampleEndpoint: CHATGLM_BASE_URL,
    ChatPath: "api/paas/v4/chat/completions",
    ImagePath: "api/paas/v4/images/generations",
    VideoPath: "api/paas/v4/videos/generations"
};
const SiliconFlow = {
    ExampleEndpoint: SILICONFLOW_BASE_URL,
    ChatPath: "v1/chat/completions",
    ListModelPath: "v1/models?&sub_type=chat"
};
const DEFAULT_INPUT_TEMPLATE = (/* unused pure expression or super */ null && (`{{input}}`)); // input / time / model / lang
// export const DEFAULT_SYSTEM_TEMPLATE = `
// You are ChatGPT, a large language model trained by {{ServiceProvider}}.
// Knowledge cutoff: {{cutoff}}
// Current model: {{model}}
// Current time: {{time}}
// Latex inline: $x^2$
// Latex block: $$e=mc^2$$
// `;
const DEFAULT_SYSTEM_TEMPLATE = (/* unused pure expression or super */ null && (`
You are ChatGPT, a large language model trained by {{ServiceProvider}}.
Knowledge cutoff: {{cutoff}}
Current model: {{model}}
Current time: {{time}}
Latex inline: \\(x^2\\) 
Latex block: $$e=mc^2$$
`));
const MCP_TOOLS_TEMPLATE = (/* unused pure expression or super */ null && (`
[clientId]
{{ clientId }}
[tools]
{{ tools }}
`));
const MCP_SYSTEM_TEMPLATE = (/* unused pure expression or super */ null && (`
You are an AI assistant with access to system tools. Your role is to help users by combining natural language understanding with tool operations when needed.

1. AVAILABLE TOOLS:
{{ MCP_TOOLS }}

2. WHEN TO USE TOOLS:
   - ALWAYS USE TOOLS when they can help answer user questions
   - DO NOT just describe what you could do - TAKE ACTION immediately
   - If you're not sure whether to use a tool, USE IT
   - Common triggers for tool use:
     * Questions about files or directories
     * Requests to check, list, or manipulate system resources
     * Any query that can be answered with available tools

3. HOW TO USE TOOLS:
   A. Tool Call Format:
      - Use markdown code blocks with format: \`\`\`json:mcp:{clientId}\`\`\`
      - Always include:
        * method: "tools/call"（Only this method is supported）
        * params: 
          - name: must match an available primitive name
          - arguments: required parameters for the primitive

   B. Response Format:
      - Tool responses will come as user messages
      - Format: \`\`\`json:mcp-response:{clientId}\`\`\`
      - Wait for response before making another tool call

   C. Important Rules:
      - Only use tools/call method
      - Only ONE tool call per message
      - ALWAYS TAKE ACTION instead of just describing what you could do
      - Include the correct clientId in code block language tag
      - Verify arguments match the primitive's requirements

4. INTERACTION FLOW:
   A. When user makes a request:
      - IMMEDIATELY use appropriate tool if available
      - DO NOT ask if user wants you to use the tool
      - DO NOT just describe what you could do
   B. After receiving tool response:
      - Explain results clearly
      - Take next appropriate action if needed
   C. If tools fail:
      - Explain the error
      - Try alternative approach immediately

5. EXAMPLE INTERACTION:

  good example:

   \`\`\`json:mcp:filesystem
   {
     "method": "tools/call",
     "params": {
       "name": "list_allowed_directories",
       "arguments": {}
     }
   }
   \`\`\`"


  \`\`\`json:mcp-response:filesystem
  {
  "method": "tools/call",
  "params": {
    "name": "write_file",
    "arguments": {
      "path": "/Users/river/dev/nextchat/test/joke.txt",
      "content": "为什么数学书总是感到忧伤？因为它有太多的问题。"
    }
  }
  }
\`\`\`

   follwing is the wrong! mcp json example:

   \`\`\`json:mcp:filesystem
   {
      "method": "write_file",
      "params": {
        "path": "NextChat_Information.txt",
        "content": "1"
    }
   }
   \`\`\`

   This is wrong because the method is not tools/call.
   
   \`\`\`{
  "method": "search_repositories",
  "params": {
    "query": "2oeee"
  }
}
   \`\`\`

   This is wrong because the method is not tools/call.!!!!!!!!!!!

   the right format is:
   \`\`\`json:mcp:filesystem
   {
     "method": "tools/call",
     "params": {
       "name": "search_repositories",
       "arguments": {
         "query": "2oeee"
       }
     }
   }
   \`\`\`
   
   please follow the format strictly ONLY use tools/call method!!!!!!!!!!!
   
`));
const SUMMARIZE_MODEL = "gpt-4o-mini";
const GEMINI_SUMMARIZE_MODEL = "gemini-pro";
const DEEPSEEK_SUMMARIZE_MODEL = "deepseek-chat";
const KnowledgeCutOffDate = {
    default: "2021-09",
    "gpt-4-turbo": "2023-12",
    "gpt-4-turbo-2024-04-09": "2023-12",
    "gpt-4-turbo-preview": "2023-12",
    "gpt-4o": "2023-10",
    "gpt-4o-2024-05-13": "2023-10",
    "gpt-4o-2024-08-06": "2023-10",
    "gpt-4o-2024-11-20": "2023-10",
    "chatgpt-4o-latest": "2023-10",
    "gpt-4o-mini": "2023-10",
    "gpt-4o-mini-2024-07-18": "2023-10",
    "gpt-4-vision-preview": "2023-04",
    "o1-mini-2024-09-12": "2023-10",
    "o1-mini": "2023-10",
    "o1-preview-2024-09-12": "2023-10",
    "o1-preview": "2023-10",
    "o1-2024-12-17": "2023-10",
    o1: "2023-10",
    "o3-mini-2025-01-31": "2023-10",
    "o3-mini": "2023-10",
    // After improvements,
    // it's now easier to add "KnowledgeCutOffDate" instead of stupid hardcoding it, as was done previously.
    "gemini-pro": "2023-12",
    "gemini-pro-vision": "2023-12",
    "deepseek-chat": "2024-07",
    "deepseek-coder": "2024-07"
};
const DEFAULT_TTS_ENGINE = "OpenAI-TTS";
const DEFAULT_TTS_ENGINES = (/* unused pure expression or super */ null && ([
    "OpenAI-TTS",
    "Edge-TTS"
]));
const DEFAULT_TTS_MODEL = "tts-1";
const DEFAULT_TTS_VOICE = "alloy";
const DEFAULT_TTS_MODELS = (/* unused pure expression or super */ null && ([
    "tts-1",
    "tts-1-hd"
]));
const DEFAULT_TTS_VOICES = (/* unused pure expression or super */ null && ([
    "alloy",
    "echo",
    "fable",
    "onyx",
    "nova",
    "shimmer"
]));
const VISION_MODEL_REGEXES = (/* unused pure expression or super */ null && ([
    /vision/,
    /gpt-4o/,
    /claude-3/,
    /gemini-1\.5/,
    /gemini-exp/,
    /gemini-2\.0/,
    /learnlm/,
    /qwen-vl/,
    /qwen2-vl/,
    /gpt-4-turbo(?!.*preview)/,
    /^dall-e-3$/,
    /glm-4v/,
    /vl/i
]));
const EXCLUDE_VISION_MODEL_REGEXES = (/* unused pure expression or super */ null && ([
    /claude-3-5-haiku-20241022/
]));
const openaiModels = [
    // As of July 2024, gpt-4o-mini should be used in place of gpt-3.5-turbo,
    // as it is cheaper, more capable, multimodal, and just as fast. gpt-3.5-turbo is still available for use in the API.
    "gpt-3.5-turbo",
    "gpt-3.5-turbo-1106",
    "gpt-3.5-turbo-0125",
    "gpt-4",
    "gpt-4-0613",
    "gpt-4-32k",
    "gpt-4-32k-0613",
    "gpt-4-turbo",
    "gpt-4-turbo-preview",
    "gpt-4o",
    "gpt-4o-2024-05-13",
    "gpt-4o-2024-08-06",
    "gpt-4o-2024-11-20",
    "chatgpt-4o-latest",
    "gpt-4o-mini",
    "gpt-4o-mini-2024-07-18",
    "gpt-4-vision-preview",
    "gpt-4-turbo-2024-04-09",
    "gpt-4-1106-preview",
    "dall-e-3",
    "o1-mini",
    "o1-preview",
    "o3-mini"
];
const googleModels = [
    "gemini-1.0-pro",
    "gemini-1.5-pro-latest",
    "gemini-1.5-pro",
    "gemini-1.5-pro-002",
    "gemini-1.5-pro-exp-0827",
    "gemini-1.5-flash-latest",
    "gemini-1.5-flash-8b-latest",
    "gemini-1.5-flash",
    "gemini-1.5-flash-8b",
    "gemini-1.5-flash-002",
    "gemini-1.5-flash-exp-0827",
    "learnlm-1.5-pro-experimental",
    "gemini-exp-1114",
    "gemini-exp-1121",
    "gemini-exp-1206",
    "gemini-2.0-flash",
    "gemini-2.0-flash-exp",
    "gemini-2.0-flash-lite-preview-02-05",
    "gemini-2.0-flash-thinking-exp",
    "gemini-2.0-flash-thinking-exp-1219",
    "gemini-2.0-flash-thinking-exp-01-21",
    "gemini-2.0-pro-exp",
    "gemini-2.0-pro-exp-02-05"
];
const anthropicModels = [
    "claude-instant-1.2",
    "claude-2.0",
    "claude-2.1",
    "claude-3-sonnet-20240229",
    "claude-3-opus-20240229",
    "claude-3-opus-latest",
    "claude-3-haiku-20240307",
    "claude-3-5-haiku-20241022",
    "claude-3-5-haiku-latest",
    "claude-3-5-sonnet-20240620",
    "claude-3-5-sonnet-20241022",
    "claude-3-5-sonnet-latest",
    "claude-3-7-sonnet-20250219",
    "claude-3-7-sonnet-latest"
];
const baiduModels = [
    "ernie-4.0-turbo-8k",
    "ernie-4.0-8k",
    "ernie-4.0-8k-preview",
    "ernie-4.0-8k-preview-0518",
    "ernie-4.0-8k-latest",
    "ernie-3.5-8k",
    "ernie-3.5-8k-0205",
    "ernie-speed-128k",
    "ernie-speed-8k",
    "ernie-lite-8k",
    "ernie-tiny-8k"
];
const bytedanceModels = [
    "Doubao-lite-4k",
    "Doubao-lite-32k",
    "Doubao-lite-128k",
    "Doubao-pro-4k",
    "Doubao-pro-32k",
    "Doubao-pro-128k"
];
const alibabaModes = [
    "qwen-turbo",
    "qwen-plus",
    "qwen-max",
    "qwen-max-0428",
    "qwen-max-0403",
    "qwen-max-0107",
    "qwen-max-longcontext"
];
const tencentModels = [
    "hunyuan-pro",
    "hunyuan-standard",
    "hunyuan-lite",
    "hunyuan-role",
    "hunyuan-functioncall",
    "hunyuan-code",
    "hunyuan-vision"
];
const moonshotModes = [
    "moonshot-v1-8k",
    "moonshot-v1-32k",
    "moonshot-v1-128k"
];
const iflytekModels = [
    "general",
    "generalv3",
    "pro-128k",
    "generalv3.5",
    "4.0Ultra"
];
const deepseekModels = [
    "deepseek-chat",
    "deepseek-coder",
    "deepseek-reasoner"
];
const xAIModes = [
    "grok-beta",
    "grok-2",
    "grok-2-1212",
    "grok-2-latest",
    "grok-vision-beta",
    "grok-2-vision-1212",
    "grok-2-vision",
    "grok-2-vision-latest"
];
const chatglmModels = [
    "glm-4-plus",
    "glm-4-0520",
    "glm-4",
    "glm-4-air",
    "glm-4-airx",
    "glm-4-long",
    "glm-4-flashx",
    "glm-4-flash",
    "glm-4v-plus",
    "glm-4v",
    "glm-4v-flash",
    "cogview-3-plus",
    "cogview-3",
    "cogview-3-flash"
];
const siliconflowModels = [
    "Qwen/Qwen2.5-7B-Instruct",
    "Qwen/Qwen2.5-72B-Instruct",
    "deepseek-ai/DeepSeek-R1",
    "deepseek-ai/DeepSeek-R1-Distill-Llama-70B",
    "deepseek-ai/DeepSeek-R1-Distill-Llama-8B",
    "deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B",
    "deepseek-ai/DeepSeek-R1-Distill-Qwen-14B",
    "deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
    "deepseek-ai/DeepSeek-R1-Distill-Qwen-7B",
    "deepseek-ai/DeepSeek-V3",
    "meta-llama/Llama-3.3-70B-Instruct",
    "THUDM/glm-4-9b-chat",
    "Pro/deepseek-ai/DeepSeek-R1",
    "Pro/deepseek-ai/DeepSeek-V3"
];
let seq = 1000; // 内置的模型序号生成器从1000开始
const DEFAULT_MODELS = [
    ...openaiModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "openai",
                providerName: "OpenAI",
                providerType: "openai",
                sorted: 1
            }
        })),
    ...openaiModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "azure",
                providerName: "Azure",
                providerType: "azure",
                sorted: 2
            }
        })),
    ...googleModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "google",
                providerName: "Google",
                providerType: "google",
                sorted: 3
            }
        })),
    ...anthropicModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "anthropic",
                providerName: "Anthropic",
                providerType: "anthropic",
                sorted: 4
            }
        })),
    ...baiduModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "baidu",
                providerName: "Baidu",
                providerType: "baidu",
                sorted: 5
            }
        })),
    ...bytedanceModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "bytedance",
                providerName: "ByteDance",
                providerType: "bytedance",
                sorted: 6
            }
        })),
    ...alibabaModes.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "alibaba",
                providerName: "Alibaba",
                providerType: "alibaba",
                sorted: 7
            }
        })),
    ...tencentModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "tencent",
                providerName: "Tencent",
                providerType: "tencent",
                sorted: 8
            }
        })),
    ...moonshotModes.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "moonshot",
                providerName: "Moonshot",
                providerType: "moonshot",
                sorted: 9
            }
        })),
    ...iflytekModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "iflytek",
                providerName: "Iflytek",
                providerType: "iflytek",
                sorted: 10
            }
        })),
    ...xAIModes.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "xai",
                providerName: "XAI",
                providerType: "xai",
                sorted: 11
            }
        })),
    ...chatglmModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "chatglm",
                providerName: "ChatGLM",
                providerType: "chatglm",
                sorted: 12
            }
        })),
    ...deepseekModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "deepseek",
                providerName: "DeepSeek",
                providerType: "deepseek",
                sorted: 13
            }
        })),
    ...siliconflowModels.map((name)=>({
            name,
            available: true,
            sorted: seq++,
            provider: {
                id: "siliconflow",
                providerName: "SiliconFlow",
                providerType: "siliconflow",
                sorted: 14
            }
        }))
];
const CHAT_PAGE_SIZE = 15;
const MAX_RENDER_MSG_COUNT = 45;
// some famous webdav endpoints
const internalAllowedWebDavEndpoints = [
    "https://dav.jianguoyun.com/dav/",
    "https://dav.dropdav.com/",
    "https://dav.box.com/dav",
    "https://nanao.teracloud.jp/dav/",
    "https://bora.teracloud.jp/dav/",
    "https://webdav.4shared.com/",
    "https://dav.idrivesync.com",
    "https://webdav.yandex.com",
    "https://app.koofr.net/dav/Koofr"
];
const DEFAULT_GA_ID = "G-89WN60ZK2E";
const SAAS_CHAT_URL = "https://nextchat.club";
const SAAS_CHAT_UTM_URL = "https://nextchat.club?utm=github";


/***/ }),

/***/ 413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   En: () => (/* binding */ getModelProvider),
/* harmony export */   f8: () => (/* binding */ isModelNotavailableInServer),
/* harmony export */   vi: () => (/* binding */ isGPT4Model)
/* harmony export */ });
/* unused harmony exports collectModelTable, collectModelTableWithDefaultModel, collectModels, collectModelsWithDefaultModel, isModelAvailableInServer */
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7736);

const CustomSeq = {
    val: -1000,
    cache: new Map(),
    next: (id)=>{
        if (CustomSeq.cache.has(id)) {
            return CustomSeq.cache.get(id);
        } else {
            let seq = CustomSeq.val++;
            CustomSeq.cache.set(id, seq);
            return seq;
        }
    }
};
const customProvider = (providerName)=>({
        id: providerName.toLowerCase(),
        providerName: providerName,
        providerType: "custom",
        sorted: CustomSeq.next(providerName)
    });
/**
 * Sorts an array of models based on specified rules.
 *
 * First, sorted by provider; if the same, sorted by model
 */ const sortModelTable = (models)=>models.sort((a, b)=>{
        if (a.provider && b.provider) {
            let cmp = a.provider.sorted - b.provider.sorted;
            return cmp === 0 ? a.sorted - b.sorted : cmp;
        } else {
            return a.sorted - b.sorted;
        }
    });
/**
 * get model name and provider from a formatted string,
 * e.g. `gpt-4@OpenAi` or `claude-3-5-sonnet@20240620@Google`
 * @param modelWithProvider model name with provider separated by last `@` char,
 * @returns [model, provider] tuple, if no `@` char found, provider is undefined
 */ function getModelProvider(modelWithProvider) {
    const [model, provider] = modelWithProvider.split(/@(?!.*@)/);
    return [
        model,
        provider
    ];
}
function collectModelTable(models, customModels) {
    const modelTable = {};
    // default models
    models.forEach((m)=>{
        // using <modelName>@<providerId> as fullName
        modelTable[`${m.name}@${m?.provider?.id}`] = {
            ...m,
            displayName: m.name
        };
    });
    // server custom models
    customModels.split(",").filter((v)=>!!v && v.length > 0).forEach((m)=>{
        const available = !m.startsWith("-");
        const nameConfig = m.startsWith("+") || m.startsWith("-") ? m.slice(1) : m;
        let [name, displayName] = nameConfig.split("=");
        // enable or disable all models
        if (name === "all") {
            Object.values(modelTable).forEach((model)=>model.available = available);
        } else {
            // 1. find model by name, and set available value
            const [customModelName, customProviderName] = getModelProvider(name);
            let count = 0;
            for(const fullName in modelTable){
                const [modelName, providerName] = getModelProvider(fullName);
                if (customModelName == modelName && (customProviderName === undefined || customProviderName === providerName)) {
                    count += 1;
                    modelTable[fullName]["available"] = available;
                    // swap name and displayName for bytedance
                    if (providerName === "bytedance") {
                        [name, displayName] = [
                            displayName,
                            modelName
                        ];
                        modelTable[fullName]["name"] = name;
                    }
                    if (displayName) {
                        modelTable[fullName]["displayName"] = displayName;
                    }
                }
            }
            // 2. if model not exists, create new model with available value
            if (count === 0) {
                let [customModelName, customProviderName] = getModelProvider(name);
                const provider = customProvider(customProviderName || customModelName);
                // swap name and displayName for bytedance
                if (displayName && provider.providerName == "ByteDance") {
                    [customModelName, displayName] = [
                        displayName,
                        customModelName
                    ];
                }
                modelTable[`${customModelName}@${provider?.id}`] = {
                    name: customModelName,
                    displayName: displayName || customModelName,
                    available,
                    provider,
                    sorted: CustomSeq.next(`${customModelName}@${provider?.id}`)
                };
            }
        }
    });
    return modelTable;
}
function collectModelTableWithDefaultModel(models, customModels, defaultModel) {
    let modelTable = collectModelTable(models, customModels);
    if (defaultModel && defaultModel !== "") {
        if (defaultModel.includes("@")) {
            if (defaultModel in modelTable) {
                modelTable[defaultModel].isDefault = true;
            }
        } else {
            for (const key of Object.keys(modelTable)){
                if (modelTable[key].available && getModelProvider(key)[0] == defaultModel) {
                    modelTable[key].isDefault = true;
                    break;
                }
            }
        }
    }
    return modelTable;
}
/**
 * Generate full model table.
 */ function collectModels(models, customModels) {
    const modelTable = collectModelTable(models, customModels);
    let allModels = Object.values(modelTable);
    allModels = sortModelTable(allModels);
    return allModels;
}
function collectModelsWithDefaultModel(models, customModels, defaultModel) {
    const modelTable = collectModelTableWithDefaultModel(models, customModels, defaultModel);
    let allModels = Object.values(modelTable);
    allModels = sortModelTable(allModels);
    return allModels;
}
function isModelAvailableInServer(customModels, modelName, providerName) {
    const fullName = `${modelName}@${providerName}`;
    const modelTable = collectModelTable(DEFAULT_MODELS, customModels);
    return modelTable[fullName]?.available === false;
}
/**
 * Check if the model name is a GPT-4 related model
 *
 * @param modelName The name of the model to check
 * @returns True if the model is a GPT-4 related model (excluding gpt-4o-mini)
 */ function isGPT4Model(modelName) {
    return (modelName.startsWith("gpt-4") || modelName.startsWith("chatgpt-4o") || modelName.startsWith("o1")) && !modelName.startsWith("gpt-4o-mini");
}
/**
 * Checks if a model is not available on any of the specified providers in the server.
 *
 * @param {string} customModels - A string of custom models, comma-separated.
 * @param {string} modelName - The name of the model to check.
 * @param {string|string[]} providerNames - A string or array of provider names to check against.
 *
 * @returns {boolean} True if the model is not available on any of the specified providers, false otherwise.
 */ function isModelNotavailableInServer(customModels, modelName, providerNames) {
    // Check DISABLE_GPT4 environment variable
    if (process.env.DISABLE_GPT4 === "1" && isGPT4Model(modelName.toLowerCase())) {
        return true;
    }
    const modelTable = collectModelTable(_constant__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_MODELS */ .Fv, customModels);
    const providerNamesArray = Array.isArray(providerNames) ? providerNames : [
        providerNames
    ];
    for (const providerName of providerNamesArray){
        // if model provider is bytedance, use model config name to check if not avaliable
        if (providerName === _constant__WEBPACK_IMPORTED_MODULE_0__/* .ServiceProvider */ .UT.ByteDance) {
            return !Object.values(modelTable).filter((v)=>v.name === modelName)?.[0]?.available;
        }
        const fullName = `${modelName}@${providerName.toLowerCase()}`;
        if (modelTable?.[fullName]?.available === true) return false;
    }
    return true;
}


/***/ })

}]);
//# sourceMappingURL=579.js.map