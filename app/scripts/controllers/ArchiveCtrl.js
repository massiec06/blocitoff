(function() {
  function ArchiveCtrl(Task) {
    this.list = Task.list;
    this.filterDate = Task.filterDate;
    console.log(this.list)

    // this.show = function(list) {
    //  return list.created_at > () && list.completed == false
    // };

  }

  angular
    .module('blocitoff')
    .controller('ArchiveCtrl', ['Task', ArchiveCtrl]);
})();
