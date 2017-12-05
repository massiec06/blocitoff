(function() {
  function HomeCtrl(Task) {
    this.list = Task.currentList;

    this.addItem = function(messageDescription, taskPriority) {
      if (messageDescription) {
        var newItem = {
          description: messageDescription,
          priority: taskPriority,
          completed: false
        };
        Task.addItem(newItem);
      }
    }

    this.markCompleted = function(task) {
      Task.markCompleted(task.$id);
    }

    // $scope.clearfunction = function(event){
    //   event.messageDescription = null;
    //   event.taskPriority = "High";
    // }
  }

  angular
  .module('blocitoff')
  .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
