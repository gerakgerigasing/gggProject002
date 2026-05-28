# gggProject002

## Contact form spreadsheet integration

This project includes a contact form that can send messages into a Google Spreadsheet.

### How to connect the form to your spreadsheet

1. Open `google-apps-script.gs` and copy the contents into a new Google Apps Script project.
2. In the Apps Script project, set `SPREADSHEET_ID` to `1KO4okLDtDgNWE3HH092c44F41hYz2fy9ZJzBWGcqoq8`.
3. Deploy as a web app and set access to `Anyone` or `Anyone, even anonymous`.
4. Copy the generated web app URL.
5. Replace `APPS_SCRIPT_URL` in `script.js` with that URL.
6. Save and reload your website.

Messages submitted from the form will then be appended to the spreadsheet.
