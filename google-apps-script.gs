Sheet1/**
 * Google Apps Script for receiving form messages and appending them to a Google Sheet.
 *
 * To use:
 * 1. Open script.google.com and create a new project.
 * 2. Replace SPREADSHEET_ID with your own sheet ID.
 * 3. Save the project and deploy it as a Web App.
 * 4. Set access to "Anyone" or "Anyone, even anonymous".
 * 5. Copy the deployment URL and paste it into the APPS_SCRIPT_URL constant in script.js.
 */

const SPREADSHEET_ID = '1KO4okLDtDgNWE3HH092c44F41hYz2fy9ZJzBWGcqoq8';
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const payload = parseRequestBody(e);
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    if (!sheet) {
      return jsonResponse({ success: false, message: `Sheet \"${SHEET_NAME}\" not found.` });
    }

    sheet.appendRow([
      new Date(),
      payload.name || '',
      payload.email || '',
      payload.service || '',
      payload.message || ''
    ]);

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ success: false, message: error.message || 'Unknown error' });
  }
}

function doGet() {
  return jsonResponse({ success: true, message: 'Apps Script is reachable.' });
}

function parseRequestBody(e) {
  if (e.postData && e.postData.type === 'application/json') {
    return JSON.parse(e.postData.contents || '{}');
  }
  return JSON.parse(e.postData.contents || '{}');
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
