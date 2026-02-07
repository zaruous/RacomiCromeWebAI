import "./models.mjs"; // Importing the models module for LLM interactions

async function rebuildRules(domain) {
  const domains = [domain];
  /** @type {chrome.declarativeNetRequest.Rule[]} */
  const rules = [{
    id: 1,
    condition: {
      requestDomains: domains
    },
    action: {
      type: 'modifyHeaders',
      requestHeaders: [{
        header: 'origin',
        operation: 'set',
        value: `http://${domain}`,
      }],
    },
  }];
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1],
    addRules: rules,
  });
}

// Log to indicate the extension has started
chrome.runtime.onInstalled.addListener(() => {
  console.log("installed");

  // Adding the extension to the browser's context menu
  chrome.contextMenus.create({
    id: 'openSidePanel', // Unique ID for the context menu item
    title: 'Open side panel', // Text shown in the context menu
    contexts: ['all'] // Available in all contexts (pages)
  });
});

rebuildRules('localhost');

// Listener for clicks on the context menu items
chrome.contextMenus.onClicked.addListener((info, tab) => {
  // Check if the clicked menu item is 'openSidePanel'
  if (info.menuItemId === 'openSidePanel') {
    // Opens the side panel in the current window
    chrome.sidePanel.open({ windowId: tab.windowId });
  }

});

// Listener for messages from the web UI (e.g., button clicks)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Check if the message action is 'openSidePanel'
  if (message.action === 'openSidePanel') {
    // Get the current window
    chrome.windows.getCurrent((window) => {
      // Open the side panel for the current window
      chrome.sidePanel.open({ windowId: window.id });
    });
  }
});

// Listener for keyboard shortcuts (e.g., cmd+shift+Left / ctrl+shift+Left)
chrome.commands.onCommand.addListener((command) => {
  // Check if the command is 'open_side_panel'
  if (command === 'open_side_panel') {
    // Get the current window
    chrome.windows.getCurrent((window) => {
      // Open the side panel for the current window
      chrome.sidePanel.open({ windowId: window.id });
    });
  }

  if (command === 'input_selected_text') {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      if (tabs[0]) {
        // 1. First ensure the side panel is open
        await chrome.sidePanel.open({ windowId: tabs[0].windowId });

        // 2. Get the selection
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: () => window.getSelection().toString()
        }, async (results) => {
          if (chrome.runtime.lastError) {
            console.warn('Could not access tab:', chrome.runtime.lastError.message);
            return;
          }
          if (results && results[0] && results[0].result) {
            const selectedText = results[0].result;
            
            // 3. Wait a short moment for the side panel to be ready
            setTimeout(() => {
              chrome.runtime.sendMessage({ type: 'TEXT_SELECTED', text: selectedText });
            }, 500);
          }
        });
      }
    });
  }
});

// Setting side panel behavior to open when the extension action is clicked
chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
  .then(() => console.log('Side panel behavior set successfully.')) // Success message
  .catch(error => console.error('Error setting side panel behavior:', error)); // Error handling