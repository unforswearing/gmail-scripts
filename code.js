function archiveInbox() {
  // Every thread in your Inbox that is read, older than one hour.
  var threads = GmailApp.search('label:inbox is:read');
    for (var i = 0; i < threads.length; i++) {
      threads[i].moveToArchive();
  }
}

function markArchivedAsRead () {
  var threads = GmailApp.search('is:unread -label:inbox');
  GmailApp.markThreadsRead(threads);
}

function deleteSpamDaily () {
  var threads = GmailApp.search('in:spam older_than:1d');
  for (var i = 0; i < threads.length; i++) {
    threads[i].markRead();
    threads[i].moveToTrash();
  }
}

function markTrashedAsRead () {
  var threads = GmailApp.search('in:trash label:unread');
  for (var i = 0; i < threads.length; i++) {
    var trashThread = threads[i];
    GmailApp.markThreadRead(trashThread);
    trashThread = '';
  }
}