(function() {
  function filterDateCompleted() {
    return function(tasks) {
      var now = new Date();
      var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
      now_utc = now_utc.setDate(now_utc.getDate() - 7);

      var filtered = [];
      for(var i=0; i<tasks.length; i++) {
        var task = tasks[i];
        if(task.completed == true || task.created_at < now_utc) {
          filtered.push(task);
        }
      }
      return filtered;
    }
  }

  angular
  .module('blocitoff')
  .filter('filterDateCompleted', filterDateCompleted);
})();
