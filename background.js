
let user_note = 'Hello i am Mahdi';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ user_note });
  console.log('new log >> ', `NOTE: ${user_note}`);
});