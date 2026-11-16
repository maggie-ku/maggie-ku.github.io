(function () {
  'use strict';
  var box = document.querySelector('.commentbox');
  var status = document.getElementById('comments-status');
  if (!box || !status) return;
  var failed = function () {
    status.hidden = false;
    status.textContent = 'Comments could not load. Please try refreshing, or check back later.';
  };
  var timeout = window.setTimeout(failed, 15000);
  var script = document.createElement('script');
  script.src = 'https://unpkg.com/commentbox.io@2.1.0/dist/commentBox.min.js';
  script.async = true;
  script.onerror = function () { window.clearTimeout(timeout); failed(); };
  script.onload = function () {
    try {
      window.commentBox(box.dataset.projectId, {
        sortOrder: 'newest',
        // Canonical URLs keep each thread stable across preview hosts and query strings.
        createBoxUrl: function (boxId) {
          return box.dataset.pageUrl + '#' + boxId;
        },
        onCommentCount: function () {
          window.clearTimeout(timeout);
          status.hidden = true;
        }
      });
    } catch (error) {
      window.clearTimeout(timeout);
      failed();
    }
  };
  document.head.appendChild(script);
}());
