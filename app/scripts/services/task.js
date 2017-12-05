(function() {
  function Task($firebaseArray) {
    //var Task = {};
    var ref = firebase.database().ref().child('tasks');
    var list = $firebaseArray(ref);

    var addItem = function(newItem) {
      console.log(newItem);
      newItem.created_at = firebase.database.ServerValue.TIMESTAMP;
      list.$add(newItem);
    }

    var markCompleted = function(id) {
      console.log(id);
      var task = list.$getRecord(id);
      console.log(task)
      task.completed = true;
      console.log(task)
      list.$save(task);
    }

    var currentList = function() {
      var now = new Date();
      var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
      now_utc = now_utc.setDate(now_utc.getDate() - 7);
      return $firebaseArray(ref.orderByChild("created_at").startAt(now_utc));
    }

    //Task.list = list;

    //remove an item
    //list.$remove(2);

    Task.getByCreated_at = function(created_at) {
      return
    }

    return {
      list: list,
      addItem: addItem,
      currentList: currentList(),
      markCompleted: markCompleted
    }
  }

  angular
  .module('blocitoff')
  .factory('Task', ['$firebaseArray', Task]);
})();
