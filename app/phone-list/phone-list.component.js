'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController($http) {
      var self = this;
      self.orderProp = 'age';

      $http.get('phones/phones.json').then(function(response) {
        self.phones = response.data;
      });
    }
  });


/*angular.
  module('phoneList').
  component('phoneList',{
    templateUrl:'phone-list/phone-list.template.html',
    controller:function PhoneListController($http){
      var self=this;
      self.orderProp='age';

      $http.get('phones/phones.json').then(function(response){
        self.phones=response.data;
      });
    }
  });*/

/*$http发起GET请求，服务器响应请求，返回json文件中的手机数据
$http服务返回一个promise对象，该对象有then()函数，我们在then()函数中将服务器返回的数据放入控制器。
注意：Angular会自动检测和解析json数据。
由于回调函数中的this不会指向控制器，需要引用变量self来指向控制器实例。*/