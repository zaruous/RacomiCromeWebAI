# 🌐 Racomi (Ollama WebUI)

## Overview 🔍📊🗂️📋
**Racomi** (Ollama WebUI) is a Chrome extension that provides quick access to your favorite local Language Model (LLM) directly from your browser. It's designed to enhance your browsing experience with AI capabilities like open-source chat integration and mail reply suggestions.

**Racomi**는 브라우저에서 선호하는 로컬 언어 모델(Ollama)에 빠르게 접근할 수 있도록 돕는 크롬 확장 프로그램입니다. 오픈 소스 채팅 연동, 메일 답장 제안 등 다양한 AI 기능을 통해 브라우징 경험을 혁신합니다.

---

원본 작성된 코드를 수정하여 개편하였습니다.  
Refactored and improved the original source code.  
🔗 Original: https://github.com/KarthikeyaKollu/browserAI.01

---

## 미리보기
<img width="400" height="600" alt="image" src="https://github.com/user-attachments/assets/97659b39-1f24-4fa7-bde1-e78f7b8a890d" />

## 🛠️ Getting Started (시작하기)

### 1. Ollama Setup (Ollama 설정)
- **Install Ollama**: Download and install from [ollama.com](https://ollama.com/).
- **Run Ollama**: Ensure Ollama is running on your machine (default: `http://localhost:11434`).
- **Pull a Model (모델 다운로드)**: Open your terminal and run a model. For example, to use **Kimi k2**:
  ```bash
  # Kimi k2 모델 다운로드 예시
  ollama pull kimi:k2
  ```
  *(Note: You can also use other models like `llama3`, `mistral`, `gemma`, etc.)*

### 2. Extension Installation (확장 프로그램 설치)
- **Load Unpacked**:
  1. Open Chrome and navigate to `chrome://extensions/`.
  2. Toggle **Developer mode** (top right).
  3. Click **Load unpacked** and select the `RacomiCromeWebAI` project folder.

### 3. Usage (사용법)
- **Open Panel**: Use the shortcut `Ctrl+Shift+Left` or click the extension icon to open the side panel.
- **Select Model**: Choose `kimi:k2` from the model dropdown list. If it doesn't appear, click the **Refresh** icon.

---

## 🚀 Key Features (주요 기능)

### 1. Local AI Integration (로컬 AI 연동)
- **EN**: Connects seamlessly with Ollama (`http://localhost:11434`) to run models locally for enhanced privacy and speed.
- **KO**: Ollama와 원활하게 연결되어 개인정보를 보호하고 빠른 속도로 로컬 모델을 실행합니다.

### 2. Multimodal Support (멀티모달 지원)
- **EN**: Attach and analyze images using vision-enabled models like `llava`.
- **KO**: `llava`와 같은 비전 지원 모델을 사용하여 이미지를 첨부하고 분석할 수 있습니다.

### 3. Document Analysis (문서 분석)
- **EN**: Upload PDF or text files to chat with your documents directly.
- **KO**: PDF 또는 텍스트 파일을 업로드하여 문서 내용에 대해 직접 질문하고 대화할 수 있습니다.

### 4. Smart Web Interaction (스마트 웹 상호작용)
- **Contextual Search (문맥 기반 검색)**: 
  - AI-powered summaries integrated directly into Google Search results.
  - 구글 검색 결과에 직접 통합된 AI 기반 요약 정보를 제공합니다.
- **Chat with Webpage (웹페이지 채팅)**: 
  - Instant context extraction from the current active tab.
  - 현재 활성화된 탭의 내용을 즉시 분석하여 대화에 활용합니다.

### 5. Seamless UI/UX (직관적인 사용자 경험)
- **Shortcut**: Side panel access via `Ctrl+Shift+Left`. (`Ctrl+Shift+Left` 단축키로 사이드 패널 호출)
- **Monitoring**: Real-time CPU and RAM usage monitoring. (실시간 CPU 및 RAM 사용량 모니터링)
- **Model Management**: Quick model switching and list refreshing. (빠른 모델 교체 및 목록 새로고침 기능)

### 6. Multilingual Support (다국어 지원)
- **EN**: Fully localized in English and Korean.
- **KO**: 한국어와 영어를 완벽하게 지원합니다.

---

## License
By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Racomi (Ollama WebUI)! Your help is greatly appreciated. 😊  
Racomi 프로젝트에 기여해 주셔서 감사합니다! 여러분의 도움이 큰 힘이 됩니다. 😊
